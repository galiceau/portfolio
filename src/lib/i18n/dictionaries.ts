import type { Locale } from "./config";

const fr = {
  meta: {
    homeTitle: "Jocelyn Fontaine — Cloud & AI Architect",
    homeDescription:
      "Cloud & AI Architect, 16 ans d'expérience. Architectures AWS critiques, Landing Zones, sécurité cloud, RAG sécurisé et systèmes d'IA autonomes.",
    cvTitle: "Parcours — Jocelyn Fontaine",
    cvDescription:
      "Parcours complet de Jocelyn Fontaine : 16 ans d'architecture AWS, sécurité cloud, FinOps et systèmes d'IA autonomes. Solvay, Cegid, Airbus, Monaco Government, Air France-KLM.",
  },
  nav: {
    home: "Accueil",
    expertise: "Expertise",
    experience: "Parcours",
    skills: "Compétences",
    projects: "Projets",
    blog: "Blog",
    contact: "Contact",
    cv: "Parcours complet",
    menuOpen: "Ouvrir le menu de navigation",
    menuClose: "Fermer le menu de navigation",
    skipToContent: "Aller au contenu principal",
    backHome: "Retour à l'accueil",
  },
  theme: {
    toggle: "Changer de thème",
    light: "Thème clair",
    dark: "Thème sombre",
    system: "Thème système",
  },
  locale: {
    switch: "Changer de langue",
  },
  hero: {
    available: "Disponible pour missions freelance",
    ctaContact: "Me contacter",
    ctaCv: "Voir le parcours",
    scroll: "Découvrir",
    pillars: ["Cloud Enterprise", "Intelligence Artificielle", "Architecture", "Gouvernance"],
    yearsShort: "ans",
    yearsLabel: "à concevoir des systèmes critiques",
    stats: {
      missions: "missions réalisées",
      clients: "clients accompagnés",
      certifications: "certifications",
    },
  },
  references: {
    title: "Ils m'ont fait confiance",
  },
  expertise: {
    title: "Domaines d'expertise",
    subtitle:
      "Trois terrains sur lesquels j'interviens de la conception à la mise en production.",
  },
  experience: {
    title: "Missions phares",
    subtitle:
      "Une sélection de missions récentes et structurantes. Le parcours complet est disponible sur une page dédiée.",
    seeAll: "Voir les 29 missions",
    current: "En cours",
    freelance: "Freelance",
    timelineTitle: "Parcours complet",
    timelineSubtitle: "Toutes les missions, de 2004 à aujourd'hui.",
  },
  skills: {
    title: "Compétences techniques",
    subtitle: "Les technologies avec lesquelles je conçois, sécurise et opère au quotidien.",
  },
  projects: {
    title: "Projets",
    subtitle: "Dépôts publics GitHub, triés par étoiles.",
    empty: "Aucun projet public pour le moment.",
    error: "Impossible de charger les projets depuis GitHub pour l'instant.",
    view: "Voir sur GitHub",
    seeProfile: "Voir tout le profil GitHub",
    noDescription: "Pas de description",
  },
  blog: {
    title: "Blog",
    subtitle: "Articles techniques publiés sur Medium.",
    empty: "Aucun article pour le moment.",
    error: "Impossible de charger les articles. Retrouvez-les directement sur",
    read: "Lire l'article",
    seeAll: "Tous les articles",
  },
  education: {
    title: "Formation & certifications",
    certification: "Certification",
  },
  languages: {
    title: "Langues",
  },
  cv: {
    download: "Télécharger le CV",
    downloadAria: "Télécharger le CV en français au format PDF",
  },
  contact: {
    title: "Contact",
    subtitle:
      "Une architecture à concevoir, un audit de sécurité, une plateforme IA à mettre en production ? Écrivez-moi.",
    emailLabel: "Email",
    locationLabel: "Localisation",
    elsewhere: "Ailleurs",
    book: "Prendre rendez-vous",
    bookHint: "Choisissez directement un créneau dans mon agenda.",
    orEmail: "ou par email",
  },
  footer: {
    rights: "Tous droits réservés.",
    builtWith: "Construit avec Next.js et Tailwind CSS.",
  },
  notFound: {
    title: "Page introuvable",
    description: "La page que vous cherchez n'existe pas ou a été déplacée.",
  },
};
const en: typeof fr = {
  meta: {
    homeTitle: "Jocelyn Fontaine — Cloud & AI Architect",
    homeDescription:
      "Cloud & AI Architect with 16 years of experience. Critical AWS architectures, Landing Zones, cloud security, secure RAG and autonomous AI systems.",
    cvTitle: "Experience — Jocelyn Fontaine",
    cvDescription:
      "Full track record of Jocelyn Fontaine: 16 years of AWS architecture, cloud security, FinOps and autonomous AI systems. Solvay, Cegid, Airbus, Monaco Government, Air France-KLM.",
  },
  nav: {
    home: "Home",
    expertise: "Expertise",
    experience: "Experience",
    skills: "Skills",
    projects: "Projects",
    blog: "Blog",
    contact: "Contact",
    cv: "Full track record",
    menuOpen: "Open navigation menu",
    menuClose: "Close navigation menu",
    skipToContent: "Skip to main content",
    backHome: "Back to home",
  },
  theme: {
    toggle: "Toggle theme",
    light: "Light theme",
    dark: "Dark theme",
    system: "System theme",
  },
  locale: {
    switch: "Change language",
  },
  hero: {
    available: "Available for freelance engagements",
    ctaContact: "Get in touch",
    ctaCv: "View track record",
    scroll: "Explore",
    pillars: ["Cloud Enterprise", "Artificial Intelligence", "Architecture", "Governance"],
    yearsShort: "years",
    yearsLabel: "designing mission-critical systems",
    stats: {
      missions: "engagements delivered",
      clients: "clients served",
      certifications: "certifications",
    },
  },
  references: {
    title: "Trusted by",
  },
  expertise: {
    title: "Areas of expertise",
    subtitle: "Three domains I own end to end, from design through to production.",
  },
  experience: {
    title: "Selected engagements",
    subtitle:
      "A selection of recent, structuring engagements. The full track record lives on its own page.",
    seeAll: "See all 29 engagements",
    current: "Current",
    freelance: "Freelance",
    timelineTitle: "Full track record",
    timelineSubtitle: "Every engagement, from 2004 to today.",
  },
  skills: {
    title: "Technical skills",
    subtitle: "The technologies I design, secure and operate with every day.",
  },
  projects: {
    title: "Projects",
    subtitle: "Public GitHub repositories, sorted by stars.",
    empty: "No public projects yet.",
    error: "Unable to load projects from GitHub right now.",
    view: "View on GitHub",
    seeProfile: "See the full GitHub profile",
    noDescription: "No description",
  },
  blog: {
    title: "Blog",
    subtitle: "Technical articles published on Medium.",
    empty: "No articles yet.",
    error: "Unable to load articles. Find them directly on",
    read: "Read article",
    seeAll: "All articles",
  },
  education: {
    title: "Education & certifications",
    certification: "Certification",
  },
  languages: {
    title: "Languages",
  },
  cv: {
    download: "Download CV",
    downloadAria: "Download the English CV as a PDF",
  },
  contact: {
    title: "Contact",
    subtitle:
      "An architecture to design, a security audit, an AI platform to ship to production? Drop me a line.",
    emailLabel: "Email",
    locationLabel: "Location",
    elsewhere: "Elsewhere",
    book: "Book a call",
    bookHint: "Pick a slot straight from my calendar.",
    orEmail: "or by email",
  },
  footer: {
    rights: "All rights reserved.",
    builtWith: "Built with Next.js and Tailwind CSS.",
  },
  notFound: {
    title: "Page not found",
    description: "The page you are looking for does not exist or has been moved.",
  },
};
export type Dictionary = typeof fr;
const dictionaries: Record<Locale, Dictionary> = { fr, en };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
