import { ImageResponse } from "next/og";

import { profile } from "@/content/profile";
import { isLocale, defaultLocale, locales } from "@/lib/i18n/config";

export const alt = `${profile.name} — Cloud & AI Architect`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function OpenGraphImage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  const locale = isLocale(raw) ? raw : defaultLocale;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "linear-gradient(115deg, #081B45 0%, #1447B8 35%, #2C5CFF 65%, #4E46FF 100%)",
          color: "#F8FBFF",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 999,
              background: "#67D0FF",
            }}
          />
          <div
            style={{
              fontSize: 24,
              letterSpacing: 6,
              textTransform: "uppercase",
              color: "#C8D7F6",
            }}
          >
            {profile.brand}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 82, fontWeight: 700, lineHeight: 1.05, letterSpacing: -2 }}>
            {profile.name}
          </div>
          <div style={{ marginTop: 18, fontSize: 40, fontWeight: 600, color: "#67D0FF" }}>
            {profile.role[locale]}
          </div>
          <div
            style={{
              marginTop: 22,
              fontSize: 28,
              lineHeight: 1.4,
              color: "#C8D7F6",
              maxWidth: 900,
            }}
          >
            {profile.tagline[locale]}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(255,255,255,0.14)",
            paddingTop: 28,
            fontSize: 24,
            color: "#C8D7F6",
          }}
        >
          <div style={{ display: "flex" }}>joce.cloud</div>
          <div style={{ display: "flex" }}>
            {profile.yearsOfExperience} {locale === "fr" ? "ans" : "years"} · AWS · Cloud Security ·
            Agentic AI
          </div>
        </div>
      </div>
    ),
    size,
  );
}
