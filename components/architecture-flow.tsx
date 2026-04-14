"use client";

import { motion } from "framer-motion";
import { ArrowRight, LockKeyhole, ServerCog, Shield, Workflow } from "lucide-react";

const nodes = [
  {
    title: "ServiceNow",
    subtitle: "Request intake",
    icon: Workflow
  },
  {
    title: "Terraform",
    subtitle: "Provisioning automation",
    icon: ServerCog
  },
  {
    title: "Auth0",
    subtitle: "Identity orchestration",
    icon: Shield
  },
  {
    title: "Vault",
    subtitle: "Secrets & policy control",
    icon: LockKeyhole
  },
  {
    title: "Applications",
    subtitle: "Secure consumer systems",
    icon: ArrowRight
  }
];

export function ArchitectureFlow() {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.06] via-white/[0.02] to-transparent p-6">
      <div className="grid gap-4">
        {nodes.map((node, index) => {
          const Icon = node.icon;

          return (
            <motion.div
              key={node.title}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="relative"
            >
              <div className="flex items-center gap-4 rounded-3xl border border-white/10 bg-background/50 p-5">
                <div className="rounded-2xl bg-cyan-400/12 p-3 text-cyan-300">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{node.title}</h3>
                  <p className="text-sm text-foreground/68">{node.subtitle}</p>
                </div>
              </div>
              {index < nodes.length - 1 ? (
                <div className="flex justify-center py-2">
                  <div className="h-10 w-px bg-gradient-to-b from-cyan-400/70 to-transparent" />
                </div>
              ) : null}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
