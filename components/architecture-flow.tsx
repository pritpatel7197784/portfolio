"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCheck,
  Database,
  FolderGit2,
  PlaySquare,
  ServerCog,
  Shield,
  UserRound
} from "lucide-react";

const steps = [
  {
    title: "User Request",
    subtitle: "Submit onboarding request",
    icon: UserRound,
    tone: "default"
  },
  {
    title: "Backend API",
    subtitle: "Process request + attach identity",
    icon: ServerCog,
    tone: "default"
  },
  {
    title: "State & Audit Layer",
    subtitle: "Store request, metadata, lifecycle state, audit trail, and trigger async workflow",
    icon: Database,
    tone: "default"
  },
  {
    title: "Approval Workflow",
    subtitle: "Approver review, admin final approval",
    icon: CheckCheck,
    tone: "highlight"
  },
  {
    title: "GitOps Layer",
    subtitle: "Create branch + config + open PR",
    icon: FolderGit2,
    tone: "default"
  },
  {
    title: "CI/CD Pipeline",
    subtitle: "Merge PR -> trigger pipeline",
    icon: PlaySquare,
    tone: "highlight"
  },
  {
    title: "Terraform Execution",
    subtitle: "Plan -> approval -> apply",
    icon: ServerCog,
    tone: "highlight"
  },
  {
    title: "Identity Provisioning",
    subtitle: "Update Auth0 tenant",
    icon: Shield,
    tone: "default"
  },
  {
    title: "Status & Audit Propagation",
    subtitle: "Update system state, persist audit logs, and reflect status in UI",
    icon: Database,
    tone: "default"
  }
];

export function ArchitectureFlow() {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.06] via-white/[0.02] to-transparent p-6">
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-3">
        {steps.map((step, index) => {
          const Icon = step.icon;
          const isHighlighted = step.tone === "highlight";

          return (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="flex flex-col items-center gap-3"
            >
              <article
                className={`flex min-h-[156px] w-full max-w-3xl flex-col justify-between rounded-[1.75rem] border p-5 sm:p-6 ${
                  isHighlighted
                    ? "border-cyan-400/30 bg-cyan-400/8 shadow-[0_0_0_1px_rgba(34,211,238,0.08)]"
                    : "border-white/10 bg-white/[0.04]"
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className="rounded-2xl bg-cyan-400/12 p-2.5 text-cyan-300">
                    <Icon className="h-4 w-4" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-cyan-300/90">
                      Step {index + 1}
                    </p>
                    <h3 className="mt-2 text-sm font-semibold text-foreground">
                      {step.title}
                    </h3>
                  </div>
                </div>
                <p className="text-xs leading-5 text-foreground/68">{step.subtitle}</p>
              </article>

              {index < steps.length - 1 ? (
                <div className="flex items-center justify-center py-1">
                  <div className="rounded-full border border-white/10 bg-white/[0.04] p-2 text-cyan-300">
                    <ArrowRight className="h-4 w-4 rotate-90" />
                  </div>
                </div>
              ) : null}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
