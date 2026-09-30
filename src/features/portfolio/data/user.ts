import type { User } from "@/features/portfolio/types/user"

export const USER: User = {
  firstName: "Arvind",
  lastName: "Kumar",
  displayName: "Arvind",
  username: "aarvnd",
  gender: "male",
  pronouns: "he/him",
  bio: "I build platforms end-to-end and run them myself.",
  flipSentences: [
    "I build platforms end-to-end and run them myself.",
    "Full-Stack Developer.",
    "Automation & Bot Engineer.",
    "Grinding DSA daily.",
  ],
  address: "India",
  phoneNumberB64: "KzkxOTk5OTk0OTkwNA==", // E.164 format, base64 encoded
  emailB64: "aGVsbG9AYXJ2aW5kLmNvZGVz", // base64 encoded
  website: "https://arvind.codes",
  jobTitle: "Full-Stack Developer & Automation Engineer",
  jobs: [
    {
      title: "Full-Stack Developer & Automation Engineer",
      company: "Freelance",
      website: "https://arvind.codes",
      experienceId: "freelance",
    },
  ],
  about: `- I'm Arvind — a full-stack developer who likes owning the whole stack: the code, the server, the deploy, and the 3 AM incident.
- I build Next.js / React storefronts over Node.js and Java backends, plus Telegram / WhatsApp bots, payment integrations and schedulers that run 24/7.
- Everything I ship runs on Linux VPS infrastructure I manage myself (nginx, PM2, SSL, cron, monitoring): storefronts, bots, cron pipelines and this site.
- Off the clock I grind DSA on [LeetCode](https://leetcode.com/u/aarvnd/) and [GeeksforGeeks](https://www.geeksforgeeks.org/profile/aarvnd) — 1,000+ problems and counting, all tracked on [Codolio](https://codolio.com/profile/Arvnd).
- Open to full-stack / platform engineering work, automation projects and freelance builds — idea to deployed product.
`,
  avatar: "/images/avatar-2026-10.jpg",
  avatarVariants: {
    lightOff: "/images/avatar-2026-10-off-light.jpg",
    lightOn: "/images/avatar-2026-10.jpg",
    darkOff: "/images/avatar-2026-10-off-dark.jpg",
    darkOn: "/images/avatar-2026-10.jpg",
  },
  ogImage: "https://arvind.codes/images/og.png",
  namePronunciationUrl: "",
  timeZone: "Asia/Kolkata",
  keywords: [
    "arvind",
    "arvind kumar",
    "aarvnd",
    "arvind.codes",
    "full-stack developer",
    "automation engineer",
    "telegram bot developer",
    "whatsapp bot developer",
    "next.js developer india",
  ],
  dateCreated: "2026-08-14", // YYYY-MM-DD
}
