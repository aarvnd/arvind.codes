import {
  BotIcon,
  CreditCardIcon,
  GlobeIcon,
  LandmarkIcon,
  ShoppingCartIcon,
  StoreIcon,
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
    id: "smm-panel-support-suite",
    title: "SMM Panel Support & Automation Suite",
    period: {
      start: "03.2026",
    },
    link: "https://themainsmm.com",
    skills: [
      "Node.js",
      "SQLite",
      "Telegram Bot API",
      "WhatsApp",
      "PM2",
      "REST APIs",
    ],
    description: `WhatsApp + Telegram automation around a panel with 300k+ users.
- WhatsApp support bot: order status lookups, templated replies, payment escalation with screenshots.
- Admin Telegram bot: orders, refills, user management and custom rates from chat.
- Provider reply relay that parses message edits, maps external to panel order IDs and notifies customers (partial completions handled).
- Include-style batcher turned 9 API calls into 1; a central sanitizer guarantees provider data never leaks.`,
    icon: <BotIcon />,
    isExpanded: true,
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
    icon: <GlobeIcon />,
  },
  {
    id: "celebboost",
    title: "Celebboost — Social Growth Storefront",
    period: {
      start: "04.2026",
    },
    link: "https://celebboost.com",
    skills: [
      "Next.js",
      "Express",
      "SQLite",
      "nginx",
      "i18n",
      "SEO",
      "Payment APIs",
    ],
    description: `Full e-commerce platform: catalog, multi-gateway payments, admin SPA and 8-locale SEO.
- Platform → service → tier → package catalog with per-node visibility and URL validation before order.
- Card, UPI and crypto gateways with webhook reconciliation, auto-refunds and loyalty credits.
- Vanilla-JS admin SPA with role-based staff permissions and per-method revenue reports.
- 200+ generated SEO pages, runtime OG images and hreflang across 8 locales. Lighthouse 100/100/100 on the ads landing page.`,
    icon: <StoreIcon />,
  },
  {
    id: "tm-cart",
    title: "TM Cart — Add-to-Cart for SMM Panels",
    period: {
      start: "08.2026",
    },
    link: "https://themainsmm.com",
    skills: ["JavaScript", "Twig", "localStorage", "UX"],
    description: `A cart layer retrofitted onto a closed panel platform using theme code only.
- Add-to-Cart on every service card backed by a localStorage cart and a floating My Cart overlay.
- Checkout auto-fills the panel's native mass-order form, so orders stay legitimate platform orders.
- Shipped through Twig parsing quirks and a CodeMirror-only deploy path.`,
    icon: <ShoppingCartIcon />,
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
