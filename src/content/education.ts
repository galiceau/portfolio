import type { Localized } from "@/lib/i18n/config";

export type EducationEntry = {
  id: string;
  school: string;
  title: Localized;
  date: Localized;
  certification?: boolean;
};

export const education: EducationEntry[] = [
  {
    id: "coursera-gcp",
    school: "Coursera",
    title: {
      fr: "Google Cloud Platform Fundamentals for AWS Professionals",
      en: "Google Cloud Platform Fundamentals for AWS Professionals",
    },
    date: { fr: "2020", en: "2020" },
  },
  {
    id: "gk-azure",
    school: "Global Knowledge",
    title: {
      fr: "Implementing Microsoft Azure Infrastructure Solutions",
      en: "Implementing Microsoft Azure Infrastructure Solutions",
    },
    date: { fr: "Décembre 2017", en: "December 2017" },
  },
  {
    id: "gk-secops",
    school: "Global Knowledge",
    title: { fr: "Security Operations on AWS", en: "Security Operations on AWS" },
    date: { fr: "Décembre 2017", en: "December 2017" },
  },
  {
    id: "abc-essentials",
    school: "ABC Systeme",
    title: { fr: "AWS Technical Essentials", en: "AWS Technical Essentials" },
    date: { fr: "Octobre 2016", en: "October 2016" },
  },
  {
    id: "abc-saa",
    school: "ABC Systeme",
    title: {
      fr: "AWS Solutions Architect — Associate",
      en: "AWS Solutions Architect — Associate",
    },
    date: { fr: "Octobre 2016", en: "October 2016" },
    certification: true,
  },
  {
    id: "togaf",
    school: "The Open Group",
    title: { fr: "TOGAF Foundation + Certified 9.1", en: "TOGAF Foundation + Certified 9.1" },
    date: { fr: "Avril 2015", en: "April 2015" },
    certification: true,
  },
  {
    id: "sqli",
    school: "SQLI Toulouse",
    title: {
      fr: "Panorama des architectures informatiques",
      en: "Overview of Computer Architectures",
    },
    date: { fr: "Juillet 2009", en: "July 2009" },
  },
  {
    id: "iup",
    school: "IUP Informatique Avignon",
    title: {
      fr: "Master Mathématiques et Informatique",
      en: "Master's Degree in Mathematics and Computer Sciences",
    },
    date: { fr: "2000 — 2003", en: "2000 — 2003" },
  },
];
