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
    id: "arvind-codes",
    title: "arvind.codes — This Site",
    period: {
      start: "08.2026",
    },
    link: "https://github.com/aarvnd",
    skills: ["Next.js", "React 19", "Tailwind CSS v4", "shadcn/ui", "MDX", "Hostinger"],
    description: `Portfolio, blog and shadcn registry built on the open-source chanhdai.com template.
- Custom pixel mark, wordmark and an interactive isometric voxel logo generated from one bitmap.
- Markdown routes and llms.txt so AI agents can read the profile directly.
- Deployed as a Node.js app on Hostinger from a GitHub repository.`,
    icon: <GlobeIcon />,
  },
  {
    id: "leetcode-daily-bot",
    title: "LeetCode Auto-Grind Bot",
    period: {
      start: "07.2026",
    },
    link: "https://github.com/aarvnd/DSA-Leetcode",
    skills: ["Python", "LeetCode API", "Gemini", "GitHub API", "cron", "Java"],
    description: `Cron bot that solves, compiles, verifies and pushes two LeetCode problems a day to GitHub.
- Picks the Problem of the Day plus one alternating Easy/Medium problem.
- Generates a Java solution with an LLM, then gates it behind a local javac compile so broken code never ships.
- Submits, polls the verdict, pushes in LeetSync format and sends a WhatsApp summary.`,
    icon: <BotIcon />,
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
