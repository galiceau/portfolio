import type { Localized } from "@/lib/i18n/config";

export type ExpertiseArea = {
  id: string;
  icon: string;
  title: Localized;
  summary: Localized;
  points: Localized<string[]>;
  stack: string[];
};

export const expertiseAreas: ExpertiseArea[] = [
  {
    id: "aws-security",
    icon: "M12 2 4 5.5v6c0 4.7 3.4 9.1 8 10.5 4.6-1.4 8-5.8 8-10.5v-6L12 2Zm0 6.5v7",
    title: {
      fr: "Architecture AWS & Cloud Security",
      en: "AWS Architecture & Cloud Security",
    },
    summary: {
      fr: "Conception d'architectures AWS critiques : Landing Zones, identity management, transit gateway et sécurité multi-couches pour gouvernements et grands groupes industriels.",
      en: "Design of critical AWS architectures: Landing Zones, identity management, transit gateway and multi-layer security for governments and major industrial groups.",
    },
    points: {
      fr: [
        "Landing Zones multi-comptes : identity baseline, Transit Gateway, Site-to-Site & Client VPN",
        "Sécurité cloud de bout en bout : IAM least privilege, KMS BYOK, WAF, CloudFront, Private CA",
        "SSO d'entreprise : Keycloak, SAML/OIDC, fédération d'identités",
        "Audit et remédiation de risques sur plateformes complexes, alignement compliance",
        "Haute disponibilité et disaster recovery pour secteurs régulés",
      ],
      en: [
        "Multi-account Landing Zones: identity baseline, Transit Gateway, Site-to-Site & Client VPN",
        "End-to-end cloud security: IAM least privilege, KMS BYOK, WAF, CloudFront, Private CA",
        "Enterprise SSO: Keycloak, SAML/OIDC, identity federation",
        "Risk assessment and remediation on complex platforms, compliance alignment",
        "High availability and disaster recovery for regulated sectors",
      ],
    },
    stack: ["IAM", "KMS BYOK", "Transit Gateway", "WAF", "CloudFront", "Private CA", "Keycloak"],
  },
  {
    id: "ai-rag",
    icon: "M12 3a4 4 0 0 0-4 4 4 4 0 0 0 0 8 4 4 0 0 0 8 0 4 4 0 0 0 0-8 4 4 0 0 0-4-4Zm0 0v18",
    title: {
      fr: "Systèmes d'IA autonomes & RAG sécurisé",
      en: "Autonomous AI Systems & Secure RAG",
    },
    summary: {
      fr: "Architectures RAG production-grade et agents autonomes : ingestion, retrieval avec contrôle d'accès documentaire, génération LLM auditée et boucles de décision hybrides.",
      en: "Production-grade RAG architectures and autonomous agents: ingestion, retrieval with document-level access control, audited LLM generation and hybrid decision loops.",
    },
    points: {
      fr: [
        "Architecture RAG end-to-end : ingestion, retrieval, génération, authentification, audit",
        "Vector search avec permissions au niveau document",
        "Pipelines LLM avec token control, retry strategies et gestion de la concurrence",
        "Agents autonomes : decision-making hybride (veto déterministe + LLM scoring)",
        "Human-in-the-loop via Telegram, audit trails complets et traçabilité",
        "Property-based testing pour validation des invariants système",
      ],
      en: [
        "End-to-end RAG architecture: ingestion, retrieval, generation, authentication, audit",
        "Vector search with document-level permissions",
        "LLM pipelines with token control, retry strategies and concurrency management",
        "Autonomous agents: hybrid decision-making (deterministic veto + LLM scoring)",
        "Human-in-the-loop via Telegram, complete audit trails and traceability",
        "Property-based testing for system invariant validation",
      ],
    },
    stack: [
      "Amazon Bedrock",
      "Python FastAPI",
      "PostgreSQL pgvector",
      "ECS Fargate",
      "Hypothesis",
      "Terraform",
    ],
  },
  {
    id: "finops-iac",
    icon: "M4 19V5m0 14h16M8 15V9m4 6V6m4 9v-4",
    title: {
      fr: "FinOps & Infrastructure-as-Code",
      en: "FinOps & Infrastructure-as-Code",
    },
    summary: {
      fr: "Optimisation des coûts AWS et industrialisation du déploiement : Terraform Enterprise, Vault Enterprise, CI/CD natives et observabilité sur plateformes multi-sites.",
      en: "AWS cost optimization and deployment industrialization: Terraform Enterprise, Vault Enterprise, native CI/CD and observability across multi-site platforms.",
    },
    points: {
      fr: [
        "Optimisation des coûts : Saving Plans, BYOL, data consumption, architecture FinOps",
        "Infrastructure-as-code avec Terraform Enterprise et Vault Enterprise",
        "Orchestration et déploiement automatisé sur multi-sites nationaux et européens",
        "CI/CD AWS natives : CodeBuild, CodePipeline, EventBridge",
        "Observabilité : CloudWatch, Grafana, Prometheus, Splunk, Dynatrace",
        "Migrations applicatives complexes (lift-and-shift, refactoring) et run 24×7",
      ],
      en: [
        "Cost optimization: Saving Plans, BYOL, data consumption, FinOps architecture",
        "Infrastructure-as-code with Terraform Enterprise and Vault Enterprise",
        "Automated orchestration and deployment across national and European sites",
        "Native AWS CI/CD: CodeBuild, CodePipeline, EventBridge",
        "Observability: CloudWatch, Grafana, Prometheus, Splunk, Dynatrace",
        "Complex application migrations (lift-and-shift, refactoring) and 24×7 run",
      ],
    },
    stack: [
      "Terraform Enterprise",
      "Vault Enterprise",
      "CodePipeline",
      "Grafana",
      "Prometheus",
      "GitLab",
    ],
  },
];
