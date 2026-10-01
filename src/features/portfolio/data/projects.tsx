import {
  BotIcon,
  CreditCardIcon,
  GlobeIcon,
  LandmarkIcon,
  TicketIcon,
} from "lucide-react"

import type { Project } from "@/features/portfolio/types/projects"

export const PROJECTS: Project[] = [
  {
    id: "upi-payment-gateway",
    title: "Self-Hosted UPI Payment Gateway",
    period: {
      start: "07.2026",
    },
    link: "https://github.com/aarvnd",
    skills: [
      "Node.js",
      "Express",
      "SQLite",
      "Android",
      "nginx",
      "PM2",
      "Webhooks",
    ],
    description: `Own-account UPI collection gateway with automatic payment matching and no third-party fees.
- Unique-paise amount matching maps incoming payments to orders automatically.
- Android notification-reader companion app confirms payments in real time, no bank API or scraping.
- Merchant dashboard, API keys and webhook callbacks for instant confirmation.`,
    icon: <CreditCardIcon />,
    isExpanded: true,
  },
  {
    id: "arvind-dots",
    title: "Arvind Dots — Personal AI Agent Workspace",
    period: {
      start: "10.2026",
    },
    link: "https://dots.arvind.codes",
    skills: [
      "Next.js",
      "React 19",
      "FastAPI",
      "Python",
      "SQLite",
      "Docker",
      "Playwright",
      "nginx",
      "PM2",
    ],
    description: `Self-hosted AI agent workspace that asks before it acts, running at dots.arvind.codes.
- Streaming chat with assistants, image attachments and per-assistant model selection against any Responses-compatible API.
- Deny-by-default action gateway: workspace and computer actions pause for approval and land in an audit log.
- Optional Docker/Playwright computer runtime per assistant, Composio app connectors and /search web lookups.`,
    icon: <BotIcon />,
  },
  {
    id: "arvind-codes",
    title: "arvind.codes — This Site",
    period: {
      start: "08.2026",
    },
    link: "https://github.com/aarvnd",
    skills: ["Next.js", "React 19", "Tailwind CSS v4", "MDX", "Hostinger"],
    description: `My portfolio and blog, the site you are reading now.
- Custom pixel mark, wordmark and an interactive isometric voxel logo generated from one bitmap.
- Markdown routes and llms.txt so AI agents can read the profile directly.
- Webpack build with standalone output, deployed as a Node.js app on Hostinger.`,
    icon: <GlobeIcon />,
  },
  {
    id: "ticket-management-system",
    title: "Ticket Management System",
    period: {
      start: "01.2025",
      end: "03.2025",
    },
    link: "https://github.com/aarvnd/ticket-management-system",
    skills: ["JavaScript", "Node.js"],
    description: `Ticket-lifecycle system: create, assign, track and resolve support tickets through their full workflow. Every ticket carries state, ownership and history, the same pattern behind the production support bots.`,
    icon: <TicketIcon />,
  },
  {
    id: "bank-v3",
    title: "Bank-V3 — Banking Management System",
    period: {
      start: "09.2024",
      end: "12.2024",
    },
    link: "https://github.com/aarvnd/Bank-V3",
    skills: ["Java", "OOP", "Git"],
    description: `Java banking system covering account management, deposits, withdrawals and validated transaction handling. Team project built with [@Swapnil-Tripathi07](https://github.com/Swapnil-Tripathi07) on a shared Git workflow.`,
    icon: <LandmarkIcon />,
  },
]
