import { profile } from "@/content/profile";

export type Article = {
  id: string;
  title: string;
  link: string;
  publishedAt: string | null;
  excerpt: string;
  thumbnail: string | null;
  categories: string[];
};

export async function getArticles(limit = 6): Promise<Article[]> {
  try {
    const response = await fetch(profile.mediumFeed, {
      headers: { Accept: "application/rss+xml, application/xml, text/xml" },
      next: { revalidate: 3600 },
    });
    if (!response.ok) {
      console.error(`Medium feed responded with ${response.status}`);
      return [];
    }
    return parseFeed(await response.text()).slice(0, limit);
  } catch (error) {
    console.error("Unable to reach the Medium feed", error);
    return [];
  }
}
function parseFeed(xml: string): Article[] {
  const items = xml.match(/<item\b[^>]*>[\s\S]*?<\/item>/g) ?? [];
  return items.map((item, index) => {
    const link = readTag(item, "link");
    const content = readTag(item, "content:encoded") || readTag(item, "description");
    const pubDate = readTag(item, "pubDate");
    const parsedDate = pubDate ? new Date(pubDate) : null;
    return {
      id: readTag(item, "guid") || link || `article-${index}`,
      title: readTag(item, "title") || "Untitled",
      link,
      publishedAt:
        parsedDate && !Number.isNaN(parsedDate.getTime()) ? parsedDate.toISOString() : null,
      excerpt: excerptFrom(content),
      thumbnail: firstImage(content),
      categories: readAllTags(item, "category").slice(0, 3),
    };
  });
}
function readTag(source: string, tag: string): string {
  const match = source.match(new RegExp(`<${tag}\\b[^>]*>([\\s\\S]*?)</${tag}>`));
  return match ? decode(stripCdata(match[1])).trim() : "";
}
function readAllTags(source: string, tag: string): string[] {
  const matches = source.matchAll(new RegExp(`<${tag}\\b[^>]*>([\\s\\S]*?)</${tag}>`, "g"));
  return [...matches].map((match) => decode(stripCdata(match[1])).trim()).filter(Boolean);
}
function stripCdata(value: string): string {
  return value.replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1");
}

function decode(value: string): string {
  return value
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#0?39;|&apos;/g, "'")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&");
}
function excerptFrom(html: string, maxLength = 180): string {
  const text = decode(stripCdata(html))
    .replace(/<figure[\s\S]*?<\/figure>/g, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  if (text.length <= maxLength) return text;
  const truncated = text.slice(0, maxLength);
  const lastSpace = truncated.lastIndexOf(" ");
  return `${truncated.slice(0, lastSpace > 0 ? lastSpace : maxLength)}…`;
}
function firstImage(html: string): string | null {
  const match = stripCdata(html).match(/<img[^>]+src=["']([^"']+)["']/i);
  return match ? match[1] : null;
}
