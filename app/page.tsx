import type { ReactNode } from "react";
import Image from "next/image";
import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  Download,
  Mail,
  Phone,
  ShieldCheck
} from "lucide-react";

import { ArchitectureFlow } from "@/components/architecture-flow";
import { AnimatedCounter } from "@/components/animated-counter";
import { ExperienceTimeline } from "@/components/experience-timeline";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { ThemeToggle } from "@/components/theme-toggle";

type Metric = {
  value: number;
  suffix: string;
  label: string;
};

type Project = {
  title: string;
  problem: ReactNode;
  solution: ReactNode;
  impact: ReactNode;
};

const metrics: Metric[] = [
  { value: 90, suffix: "%", label: "Faster onboarding through enterprise workflow automation" },
  { value: 100, suffix: "+", label: "Applications onboarded with RBAC, MFA, SSO, and 15+ post-login actions" },
  { value: 100, suffix: "+", label: "Business-critical analytics dashboards delivered on AWS data platforms" },
  { value: 6, suffix: "+", label: "Years building distributed systems and high-availability backend platforms" }
];

const impactCards = [
  {
    title: "Platform Ownership at Enterprise Scale",
    description:
      "Architected an enterprise IAM onboarding platform connecting ServiceNow, Terraform, Auth0, Vault, and internal APIs to drive a 90% reduction in onboarding time."
  },
  {
    title: "Secure-by-Design Identity Delivery",
    description:
      "Designed secure provisioning patterns spanning authentication, secrets, and policy enforcement with scalability, compliance, and auditability built into the operating model."
  },
  {
    title: "Cross-Team Leadership",
    description:
      "Led delivery across distributed engineering teams and stakeholders, aligning platform architecture, execution sequencing, and production readiness around shared business goals."
  },
  {
    title: "Lifecycle Accountability",
    description:
      "Owned the full lifecycle from architecture through deployment and production support, using observability and resilient async workflows to strengthen reliability at scale."
  }
];

const skillGroups = [
  {
    title: "Identity & Security",
    items: ["OAuth2", "OIDC", "SAML", "Auth0", "Okta", "MFA", "RBAC", "JWT", "Token Management", "SSL/TLS"]
  },
  {
    title: "Backend & Systems",
    items: ["Java", "Spring Boot", "Microservices", "REST APIs", "Distributed Systems", "Concurrency", "High Availability", "Async Processing", "Kafka", "Event Streaming", "Cassandra", "Distributed Data Modeling"]
  },
  {
    title: "Frontend & Experience",
    items: ["Angular", "TypeScript", "HTML", "CSS", "Authentication UX (Login, MFA, Session Flows)"]
  },
  {
    title: "Cloud & DevOps",
    items: ["AWS", "Terraform", "CI/CD", "Kafka", "Observability", "CloudWatch", "Vault", "ServiceNow", "Serverless", "Logging Pipelines"]
  }
];

const projects: Project[] = [
  {
    title: "Enterprise IAM Onboarding Platform",
    problem: (
      <>
        <strong>Manual onboarding</strong> slowed delivery across identity, infrastructure, and security teams.
        <br />
        Controls were inconsistent and difficult to scale.
      </>
    ),
    solution: (
      <>
        <strong>Architected</strong> an end-to-end platform integrating ServiceNow, Terraform, Auth0, and Vault.
        <br />
        Integrated <strong>RBAC</strong>, <strong>MFA</strong>, <strong>SSO</strong>, and 15+ post-login automation workflows into a unified onboarding system.
      </>
    ),
    impact: (
      <>
        Delivered a <strong>90% reduction</strong> in onboarding time.
        <br />
        Improved <strong>scalability</strong>, <strong>compliance</strong>, and platform consistency.
      </>
    )
  },
  {
    title: "Global Universal Login Rollout",
    problem: (
      <>
        <strong>Global login</strong> needed to scale without weakening controls.
        <br />
        Regional experiences risked becoming fragmented.
      </>
    ),
    solution: (
      <>
        <strong>Designed</strong> configuration services, <strong>Auth0 Actions</strong>, and adaptive authentication.
        <br />
        Enabled secure extensibility across a 40+ locale environment.
      </>
    ),
    impact: (
      <>
        Enabled <strong>40+ locales</strong> with stronger security controls.
        <br />
        Delivered a more consistent enterprise authentication experience.
      </>
    )
  },
  {
    title: "Analytics Platform Modernization",
    problem: (
      <>
        <strong>Business teams</strong> needed reliable analytics on high-volume data.
        <br />
        Slow reporting cycles limited decision speed.
      </>
    ),
    solution: (
      <>
        <strong>Designed</strong> <strong>Microservices</strong> and AWS workflows using S3, Athena, QuickSight, and CloudWatch.
        <br />
        Supported large-scale migration and reporting delivery.
      </>
    ),
    impact: (
      <>
        Delivered <strong>100+ dashboards</strong> for business-critical reporting.
        <br />
        Increased reliability and decision speed with production-grade data services.
      </>
    )
  }
];

const experiences = [
  {
    company: "UPS",
    role: "Full-Stack / Backend Engineer via TCS",
    period: "Nov 2023 - Present",
    summary:
      "Owned the architecture and delivery of an enterprise IAM onboarding platform spanning ServiceNow, Terraform, Auth0, and Vault, enabling secure automated provisioning and reducing onboarding time by 90%."
  },
  {
    company: "Avis Budget Group",
    role: "Software Engineer",
    period: "Dec 2022 - Nov 2023",
    summary:
      "Designed and delivered backend services for enterprise integrations and secure federation patterns, strengthening interoperability, authentication reliability, and service resilience across distributed systems."
  },
  {
    company: "Amazon",
    role: "Software Engineer, Contract",
    period: "Oct 2020 - Dec 2022",
    summary:
      "Designed microservices and AWS-based data platforms for large-scale migration and reporting, delivering 100+ business-critical analytics dashboards and enabling reliable, data-driven operating decisions."
  }
];

const leadershipItems = [
  "Led architecture decisions across identity, infrastructure, and application domains with a clear focus on business leverage and operational control.",
  "Directed cross-team delivery by translating stakeholder priorities into secure platform capabilities and executable engineering roadmaps.",
  "Engineered identity customization layer using Auth0 Management APIs, enabling dynamic translations, partial UI templates, and scalable multi-language login experiences.",
  "Owned outcomes across design, implementation, deployment, and production support with accountability for reliability and adoption."
];

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col gap-10 px-4 py-6 sm:px-6 lg:px-8">
        <header className="surface sticky top-4 z-40 flex items-center justify-between px-5 py-4">
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-cyan-400">Pritesh Patel</p>
            <p className="text-sm text-foreground/70">Senior Backend / IAM Engineer</p>
          </div>
          <nav className="hidden items-center gap-5 text-sm text-foreground/70 md:flex">
            <a href="#impact" className="transition hover:text-foreground">Impact</a>
            <a href="#architecture" className="transition hover:text-foreground">Architecture</a>
            <a href="#projects" className="transition hover:text-foreground">Projects</a>
            <a href="#experience" className="transition hover:text-foreground">Experience</a>
            <a href="#contact" className="transition hover:text-foreground">Contact</a>
          </nav>
          <ThemeToggle />
        </header>

        <section className="section-shell pt-10 sm:pt-14">
          <div className="absolute inset-0 bg-grid bg-[size:64px_64px] opacity-[0.08]" />
          <div className="relative grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-8">
              <div className="flex flex-col gap-6 sm:gap-7 lg:flex-row lg:items-start lg:justify-between">
                <div className="space-y-5">
                  <p className="eyebrow">Distributed Systems & Platform Engineering</p>
                  <h1 className="max-w-5xl text-4xl font-semibold leading-[1.05] text-balance sm:text-5xl lg:text-[3.35rem]">
                    Senior Backend &amp; Platform Engineer building identity-driven systems and enterprise automation at scale
                  </h1>
                  <p className="max-w-3xl text-lg leading-8 text-foreground/74 sm:text-xl">
                    Specializing in distributed systems, IAM (Auth0, OAuth2, SAML), and event-driven architecture. Delivered 90% faster onboarding by designing secure, scalable enterprise platforms used across global environments.
                  </p>
                </div>

                <div className="flex justify-center lg:justify-end lg:pt-1">
                  <div className="relative h-[100px] w-[100px] overflow-hidden rounded-full border border-cyan-400/30 shadow-[0_0_0_1px_rgba(34,211,238,0.08),0_18px_45px_rgba(15,23,42,0.28)] sm:h-[120px] sm:w-[120px] lg:h-[140px] lg:w-[140px]">
                    <Image
                      src="/pritesh-profile.png"
                      alt="Pritesh Patel - Senior Backend and IAM Engineer"
                      fill
                      priority
                      sizes="(max-width: 639px) 100px, (max-width: 1023px) 120px, 140px"
                      className="object-cover object-[center_18%]"
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#architecture"
                  className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:translate-y-[-2px] hover:bg-cyan-300"
                >
                  View Architecture <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-semibold transition hover:border-cyan-400/60 hover:text-cyan-300"
                >
                  Explore Projects <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="/Pritesh-Patel-Resume.pdf"
                  download
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold transition hover:bg-white/10"
                >
                  Download Resume (ATS Optimized) <Download className="h-4 w-4" />
                </a>
              </div>

              <p className="text-sm text-foreground/45">
                Worked on platforms at: UPS • Amazon • Avis Budget Group
              </p>

              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="flex min-h-[11rem] flex-col rounded-2xl border border-white/10 bg-background/40 p-5 transition duration-300 hover:border-cyan-400/40 hover:bg-background/60"
                  >
                    <p className="text-3xl font-semibold text-foreground">
                      <AnimatedCounter value={metric.value} suffix={metric.suffix} />
                    </p>
                    <p className="mt-3 text-sm leading-6 text-foreground/70">{metric.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="surface relative overflow-hidden p-6">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />
              <div className="flex items-center justify-between">
                <div>
                  <p className="eyebrow">Featured Capability</p>
                  <h2 className="mt-2 text-2xl font-semibold">Enterprise Automation Platform</h2>
                </div>
                <ShieldCheck className="h-8 w-8 text-cyan-400" />
              </div>

              <div className="mt-8 grid gap-4">
                {[
                  "Platform orchestration for onboarding, provisioning, and workflow automation",
                  "Scalable operating model across backend, infrastructure, and security services",
                  "Measured gains in delivery speed, control, and business efficiency"
                ].map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-sm leading-6 text-foreground/78">{item}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/12 via-transparent to-blue-500/12 p-5">
                <p className="text-xs uppercase tracking-[0.32em] text-cyan-300">Executive Snapshot</p>
                <p className="mt-4 text-sm leading-7 text-foreground/78">
                  A systems-minded engineering profile built around platform design, scalable architectures, secure delivery, and measurable operational impact.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="impact" className="section-shell">
          <SectionHeading
            eyebrow="Impact"
            title="Business outcomes backed by platform thinking"
            description="Framed to emphasize ownership, risk reduction, operating leverage, and system-level execution."
          />
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {impactCards.map((card) => (
              <article
                key={card.title}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.05]"
              >
                <p className="text-sm uppercase tracking-[0.28em] text-cyan-400">Outcome</p>
                <h3 className="mt-4 text-2xl font-semibold">{card.title}</h3>
                <p className="mt-4 text-sm leading-7 text-foreground/72">{card.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="architecture" className="section-shell">
          <SectionHeading
            eyebrow="Architecture"
            title="A platform blueprint for secure IAM onboarding"
            description="A flagship architecture narrative highlighting async orchestration, scalable onboarding, security controls, and full-lifecycle platform ownership."
          />
          <div className="mt-8 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <ArchitectureFlow />
            <div className="grid gap-4">
              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                <p className="text-sm leading-7 text-foreground/72">
                  Built on event streaming (Kafka), async orchestration, and resilient retry patterns for enterprise-scale onboarding.
                </p>
              </div>
              <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-6">
                <p className="text-sm leading-7 text-foreground/78">
                  Event-driven architecture enabling async orchestration and scalable onboarding.
                </p>
              </div>
              {[
                {
                  title: "Event-Driven Design",
                  text: "Asynchronous workflow stages reduce coupling, simplify recovery, and allow onboarding capacity to scale without multiplying operational overhead."
                },
                {
                  title: "Security Layers",
                  text: "OAuth2, JWT, MFA, risk-based authentication, SSO, and policy enforcement create layered security without slowing enterprise onboarding."
                },
                {
                  title: "Scalability & Fault Tolerance",
                  text: "High-availability services, observability, and diagnostics-first design make the platform supportable, compliant, and resilient in production."
                }
              ].map((item) => (
                <div key={item.title} className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-foreground/72">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-shell">
          <SectionHeading
            eyebrow="Technical Skills"
            title="Grouped around enterprise delivery"
            description="Organized to show depth in identity, backend systems, and cloud operations through the lens of enterprise platform delivery."
          />
          <div className="mt-8 grid gap-5 lg:grid-cols-2 xl:grid-cols-4">
            {skillGroups.map((group) => (
              <article key={group.title} className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                <h3 className="text-xl font-semibold">{group.title}</h3>
                <div className="mt-5 flex flex-wrap gap-3">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-background/40 px-3 py-2 text-sm text-foreground/78"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="section-shell">
          <SectionHeading
            eyebrow="Projects"
            title="Enterprise-style initiatives with clear problem, solution, and impact"
            description="Structured as strategic initiatives with concise business context, architectural response, and measurable outcomes."
          />
          <div className="mt-8 grid gap-5 xl:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </section>

        <section id="experience" className="section-shell">
          <SectionHeading
            eyebrow="Experience"
            title="Career progression through scale, architecture, and ownership"
            description="A focused progression showing increasing accountability for platform architecture, reliability, and multi-team delivery."
          />
          <ExperienceTimeline items={experiences} />
        </section>

        <section className="section-shell">
          <SectionHeading
            eyebrow="Leadership"
            title="Ownership that reads beyond individual contribution"
            description="Emphasizes architecture stewardship, execution leadership, and accountability for outcomes across teams and systems."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {leadershipItems.map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-transparent p-6 transition duration-300 hover:border-cyan-400/30"
              >
                <div className="flex items-start gap-4">
                  <div className="rounded-2xl bg-cyan-400/10 p-3 text-cyan-300">
                    <BriefcaseBusiness className="h-5 w-5" />
                  </div>
                  <p className="text-sm leading-7 text-foreground/75">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="section-shell mb-8">
          <SectionHeading
            eyebrow="Contact"
            title="Open to Senior / Staff Backend, Platform, and Identity Engineering roles"
            description="Focused on distributed systems, IAM platforms, and enterprise-scale backend architecture. Available for immediate conversations with hiring managers and technical teams."
          />
          <div className="mt-8 grid gap-5 lg:grid-cols-[1fr_0.8fr]">
            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-400/12 to-transparent p-6">
              <h3 className="text-2xl font-semibold">Let's talk about platform engineering at scale.</h3>
              <p className="mt-4 max-w-xl text-sm leading-7 text-foreground/74">
                Focused on distributed systems, IAM platforms, and enterprise-scale backend architecture. Available for immediate conversations with hiring managers and technical teams.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="mailto:Pritpatel719@gmail.com"
                  className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
                >
                  Email Me <Mail className="h-4 w-4" />
                </a>
                <a
                  href="/Pritesh-Patel-Resume.pdf"
                  download
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm font-semibold transition hover:border-cyan-400/40 hover:text-cyan-300"
                >
                  Resume <Download className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="grid gap-4">
              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-cyan-400" />
                  <p className="font-medium">Email</p>
                </div>
                <a href="mailto:Pritpatel719@gmail.com" className="mt-3 block text-sm text-foreground/72 transition hover:text-cyan-300">
                  Pritpatel719@gmail.com
                </a>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-cyan-400" />
                  <p className="font-medium">Phone</p>
                </div>
                <a href="tel:7323970753" className="mt-3 block text-sm text-foreground/72 transition hover:text-cyan-300">
                  732-397-0753
                </a>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
                <div className="flex items-center gap-3">
                  <Building2 className="h-5 w-5 text-cyan-400" />
                  <p className="font-medium">Professional Network</p>
                </div>
                <a
                  href="https://www.linkedin.com/in/prit-patel-8aa4b115b/"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 block text-sm text-foreground/72 transition hover:text-cyan-300"
                >
                  linkedin.com/in/prit-patel-8aa4b115b
                </a>
              </div>
            </div>
          </div>
        </section>

        <footer className="pb-8 text-center text-sm text-foreground/50">
          Designed to communicate executive-level engineering impact in under 15 seconds.
        </footer>
      </div>
    </main>
  );
}
