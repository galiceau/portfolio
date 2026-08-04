import type { Localized } from "@/lib/i18n/config";

export const siteUrl = "https://joce.cloud";

export const profile = {
  name: "Jocelyn Fontaine",
  brand: "Galiceau",
  role: {
    fr: "Cloud & AI Architect",
    en: "Cloud & AI Architect",
  } satisfies Localized,
  tagline: {
    fr: "Je transforme des architectures complexes en systèmes sécurisés, scalables et prêts pour la production.",
    en: "I turn complex architectures into secure, scalable, production-ready systems.",
  } satisfies Localized,
  badge: {
    fr: "AWS Community Builder",
    en: "AWS Community Builder",
  } satisfies Localized,
  motto: {
    fr: "A Curious Mind is A Healthy Mind",
    en: "A Curious Mind is A Healthy Mind",
  } satisfies Localized,
  intro: {
    fr: "Cloud & AI Architect avec 16 ans d'expérience en conception d'architectures AWS critiques, intégration d'IA sécurisée et modernisation des SI. Spécialisé en Landing Zones AWS, security architecture, FinOps et infrastructure-as-code. J'interviens sur des systèmes d'IA autonomes (RAG sécurisés, agents multi-plateformes), des migrations cloud nationales et des solutions résilientes pour secteurs régulés — gouvernement, aéronautique, pharma.",
    en: "Cloud & AI Architect with 16 years of experience designing critical AWS architectures, secure AI integration and IT modernization. Specialized in AWS Landing Zones, security architecture, FinOps and infrastructure-as-code. I deliver autonomous AI systems (secure RAG, multi-platform agents), national cloud migrations and resilient solutions for regulated sectors — government, aerospace, pharma.",
  } satisfies Localized,
  location: {
    fr: "Gaillac-Toulza (31550), France",
    en: "Gaillac-Toulza (31550), France",
  } satisfies Localized,
  email: "jocelyn.fontaine@galiceau.fr",
  avatar: "/jocelyn-fontaine.png",
  githubUser: "galiceau",
  mediumFeed: "https://medium.joce.cloud/feed",
  yearsOfExperience: 16,
  bookingUrl: "https://calendar.app.google/Q2Apijp1DVEyr4QY6",
} as const;

export const cvFiles: Localized = {
  fr: "/documents/CV-Jocelyn-FONTAINE-FR.pdf",
  en: "/documents/CV-Jocelyn-FONTAINE-EN.pdf",
};

export type SocialId = "linkedin" | "github" | "medium" | "malt" | "collective";

export type SocialLink = {
  id: SocialId;
  label: string;
  href: string;
  primary?: boolean;
  logo?: string;
};

export const socialLinks: SocialLink[] = [
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/jocelynfontaine-cloud-aws-architect-security",
    primary: true,
    logo: "/logos/linkedin.png",
  },
  {
    id: "github",
    label: "GitHub",
    href: "https://github.com/galiceau",
    primary: true,
    logo: "/logos/github.png",
  },
  {
    id: "medium",
    label: "Medium",
    href: "https://medium.joce.cloud/",
    primary: true,
    logo: "/logos/medium.png",
  },
  {
    id: "malt",
    label: "Malt",
    href: "https://www.malt.fr/profile/jocelynfontaine",
    primary: true,
    logo: "/logos/malt.png",
  },
  {
    id: "collective",
    label: "Collective",
    href: "https://www.collective.work/profile/jocelyn-fontaine",
    logo: "/logos/collective.png",
  },
];

export type Reference = {
  name: string;
  logo?: string;
};

export const references: Reference[] = [
  { name: "Solvay" },
  { name: "Cegid" },
  { name: "Airbus" },
  { name: "Monaco Government" },
  { name: "Air France-KLM" },
  { name: "Roche Diagnostics" },
  { name: "AXA" },
  { name: "Safran" },
  { name: "BPiFrance" },
  { name: "Vallourec" },
  { name: "Smeg" },
  { name: "Orange" },
];

export const certifications: Localized<string>[] = [
  { fr: "AWS Certified Solutions Architect", en: "AWS Certified Solutions Architect" },
  { fr: "TOGAF Foundation + Certified 9.1", en: "TOGAF Foundation + Certified 9.1" },
];

export const languages: { name: Localized; level: Localized }[] = [
  {
    name: { fr: "Français", en: "French" },
    level: { fr: "Langue maternelle", en: "Native" },
  },
  {
    name: { fr: "Anglais", en: "English" },
    level: { fr: "Professionnel", en: "Professional" },
  },
];
