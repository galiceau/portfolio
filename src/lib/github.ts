import { profile } from "@/content/profile";

export type Repository = {
  id: number;
  name: string;
  description: string | null;
  htmlUrl: string;
  homepage: string | null;
  language: string | null;
  stars: number;
  topics: string[];
  updatedAt: string;
};

type GitHubRepo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  topics?: string[];
  updated_at: string;
  fork: boolean;
  archived: boolean;
};

const HIDDEN_REPOS = new Set(["galiceau.github.io", "galiceau", "joce-cloud-next"]);

export async function getRepositories(limit = 6): Promise<Repository[]> {
  const token = process.env.GITHUB_TOKEN;
  try {
    const response = await fetch(
      `https://api.github.com/users/${profile.githubUser}/repos?per_page=100&sort=updated`,
      {
        headers: {
          Accept: "application/vnd.github+json",
          "X-GitHub-Api-Version": "2022-11-28",
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        next: { revalidate: 3600 },
      },
    );
    if (!response.ok) {
      console.error(`GitHub API responded with ${response.status}`);
      return [];
    }
    const repos = (await response.json()) as GitHubRepo[];
    return repos
      .filter((repo) => !repo.fork && !repo.archived && !HIDDEN_REPOS.has(repo.name))
      .sort(
        (a, b) =>
          b.stargazers_count - a.stargazers_count ||
          Date.parse(b.updated_at) - Date.parse(a.updated_at),
      )
      .slice(0, limit)
      .map((repo) => ({
        id: repo.id,
        name: repo.name,
        description: repo.description,
        htmlUrl: repo.html_url,
        homepage: repo.homepage,
        language: repo.language,
        stars: repo.stargazers_count,
        topics: repo.topics ?? [],
        updatedAt: repo.updated_at,
      }));
  } catch (error) {
    console.error("Unable to reach the GitHub API", error);
    return [];
  }
}
