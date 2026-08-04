import { DownloadIcon } from "@/components/social-icon";
import { cvFiles, profile } from "@/content/profile";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries";

export function CvDownload({
  locale,
  dict,
  variant = "outline",
  className = "",
}: {
  locale: Locale;
  dict: Dictionary;
  variant?: "outline" | "solid";
  className?: string;
}) {
  const style =
    variant === "solid"
      ? "btn-primary"
      : "border border-border-strong text-fg hover:border-accent hover:text-accent";

  return (
    <a
      href={cvFiles[locale]}
      download={`${profile.name.replace(/\s+/g, "-")}-CV-${locale.toUpperCase()}.pdf`}
      aria-label={dict.cv.downloadAria}
      className={`inline-flex items-center gap-2 rounded-btn px-5 py-2.5 text-sm font-semibold transition ${style} ${className}`}
    >
      <DownloadIcon />
      {dict.cv.download}
      <span className="font-mono text-[11px] font-medium opacity-70">
        {locale.toUpperCase()}
      </span>
    </a>
  );
}
