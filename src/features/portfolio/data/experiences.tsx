import { BotIcon, CodeXmlIcon, ServerIcon } from "lucide-react"

import type { Experience } from "@/features/portfolio/types/experiences"

export const EXPERIENCES: Experience[] = [
  {
    id: "freelance",
    companyName: "Freelance",
    companyIcon: <CodeXmlIcon />,
    companyWebsite: "https://arvind.codes",
    location: "India",
    locationType: "Remote",
    positions: [
      {
        id: "freelance-fullstack",
        title: "Full-Stack Developer & Automation Engineer",
        employmentPeriod: {
          start: "06.2025",
        },
        employmentType: "Self-employed",
        icon: <CodeXmlIcon />,
        description: `- Build and operate production systems end-to-end for clients: payment infrastructure, e-commerce storefronts, support automation and developer tooling.
- Own the full lifecycle: architecture, code, deploys and monitoring on self-managed VPS infrastructure (Linux, nginx, PM2, SSL, cron).
- Ship Next.js / React frontends over Node.js and Java backends with REST APIs and SQL databases.
- Integrate payment gateways (UPI, cards, crypto) with webhook signature verification, reconciliation and auto-refunds.`,
        skills: [
          "TypeScript",
          "Next.js",
          "Node.js",
          "Express",
          "SQLite",
          "nginx",
          "PM2",
          "Payment APIs",
        ],
        isExpanded: true,
      },
      {
        id: "freelance-automation",
        title: "Bot & Automation Developer",
        employmentPeriod: {
          start: "03.2026",
        },
        employmentType: "Self-employed",
        icon: <BotIcon />,
        description: `- WhatsApp support bots that read incoming chats, look up order status through a client's API and reply with templates.
- Telegram admin bots for day-to-day operations: orders, customers and pricing managed from chat.
- Event relays that parse upstream message updates and notify customers automatically, with a whitelist sanitizer so internal data never leaks.
- Built an include-style request batcher that turned 9 API calls into 1.`,
        skills: [
          "Node.js",
          "Telegram Bot API",
          "WhatsApp API",
          "SQLite",
          "REST APIs",
          "cron",
        ],
      },
      {
        id: "freelance-infra",
        title: "Self-Hosted Infrastructure",
        employmentPeriod: {
          start: "06.2025",
        },
        employmentType: "Self-employed",
        icon: <ServerIcon />,
        description: `- Run Linux VPS boxes hosting storefronts, bots, cron pipelines and this site behind nginx with Let's Encrypt SSL.
- PM2 process management, single-writer SQLite operations, WAL recovery runbooks and weekly security audits.
- Zero-downtime server migration with encrypted-settings re-keying and a rollback plan.`,
        skills: ["Linux", "nginx", "PM2", "Cloudflare", "SQLite", "Security"],
      },
    ],
    isCurrentEmployer: true,
  },
]
