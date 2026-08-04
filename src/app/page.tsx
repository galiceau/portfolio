import type { Metadata } from "next";

import { defaultLocale } from "@/lib/i18n/config";

export const metadata: Metadata = {
  other: {
    "refresh": `0;url=/${defaultLocale}`,
  },
};

export default function RootPage() {
  return (
    <meta httpEquiv="refresh" content={`0;url=/${defaultLocale}`} />
  );
}
