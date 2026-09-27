import type { SocialProfile } from "@/features/portfolio/types/social-links"

/**
 * Keyed registry of social profiles — the single source of truth. Icons are
 * bound separately in `social-link-icons.tsx` (keyed by the same `SocialName`),
 * so adding a profile here forces the icon map to stay in sync at compile time.
 */
export const SOCIAL = {
  github: {
    title: "GitHub",
    handle: "aarvnd",
    href: "https://github.com/aarvnd",
    sameAs: true,
  },
  linkedin: {
    title: "LinkedIn",
    handle: "arvnd-k",
    href: "https://www.linkedin.com/in/arvnd-k/",
    sameAs: true,
  },
  leetcode: {
    title: "LeetCode",
    handle: "aarvnd",
    href: "https://leetcode.com/u/aarvnd/",
    sameAs: true,
  },
  geeksforgeeks: {
    title: "GeeksforGeeks",
    handle: "aarvnd",
    href: "https://www.geeksforgeeks.org/profile/aarvnd",
    sameAs: true,
  },
  codolio: {
    title: "Codolio",
    handle: "Arvnd",
    href: "https://codolio.com/profile/Arvnd",
    sameAs: true,
  },
} satisfies Record<string, SocialProfile>

export type SocialName = keyof typeof SOCIAL

export type SocialLink = SocialProfile & { name: SocialName }

export const SOCIAL_LINKS: SocialLink[] = (
  Object.entries(SOCIAL) as [SocialName, SocialProfile][]
).map(([name, profile]) => ({ name, ...profile }))
