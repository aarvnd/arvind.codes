import type { Route } from "next"

import type { NavItem } from "@/types/nav"
import { SOCIAL } from "@/features/portfolio/data/social-links"
import { USER } from "@/features/portfolio/data/user"

export const SITE_INFO = {
  name: USER.displayName,
  url: process.env.NEXT_PUBLIC_APP_URL || "https://arvind.codes",
  ogImage: USER.ogImage,
  description: USER.bio,
  keywords: USER.keywords,
}

export const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "#09090b",
}

export const MAIN_NAV: NavItem<Route>[] = [
  {
    title: "Blog",
    href: "/blog",
  },
]

export const MOBILE_NAV: NavItem<Route>[] = [
  {
    title: "Home",
    href: "/",
  },
  ...MAIN_NAV,
]

/** No X account yet; keeps twitter card metadata optional. */
export const X_HANDLE: string | undefined = undefined
export const GITHUB_USERNAME = SOCIAL.github.handle

export const SOURCE_CODE_GITHUB_REPO = "aarvnd/arvind.codes"
export const SOURCE_CODE_GITHUB_URL = "https://github.com/aarvnd/arvind.codes"

export const UTM_PARAMS = {
  utm_source: "arvind.codes",
}
