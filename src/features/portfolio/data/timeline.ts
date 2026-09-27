import type { TimelineMilestone } from "../types/timeline"

/** First year on the timeline; the counter shows years since then. */
export const TIMELINE_BIRTH_YEAR = 2023

export const TIMELINE_MILESTONES: TimelineMilestone[] = [
  {
    year: 2023,
    content: "Started B.Tech in Computer Science. First lines of Java and C.",
  },
  {
    year: 2024,
    content: `Built Bank-V3, a Java banking management system, as a team project.

Started grinding DSA seriously across LeetCode and GeeksforGeeks.`,
  },
  {
    year: 2025,
    content: `Went independent as a full-stack developer and automation engineer.

- Ticket management system in Node.js
- First production WhatsApp support bot for a client
- Moved everything to self-managed Linux VPS infrastructure`,
  },
  {
    year: 2026,
    content: `Shipped the systems that run today:

- WhatsApp + Telegram support and admin automation for client businesses
- E-commerce storefront with multi-gateway payments and 8-locale SEO
- Self-hosted UPI payment gateway
- LeetCode auto-grind bot pushing two solutions a day to GitHub
- Bought arvind.codes and launched this site`,
  },
]
