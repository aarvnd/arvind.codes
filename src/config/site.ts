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

export const LICENSE = {
  name: "MIT License",
  url: "https://github.com/ncdai/chanhdai.com/blob/main/LICENSE",
}

export const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "#09090b",
}

export const MAIN_NAV: NavItem<Route>[] = [
  {
    title: "Components",
    href: "/components",
  },
  {
    title: "Blocks",
    href: "/blocks",
  },
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

/** The open-source template this site is built on (MIT, credited in the footer). */
export const TEMPLATE_GITHUB_REPO = "ncdai/chanhdai.com"
export const TEMPLATE_GITHUB_URL = "https://github.com/ncdai/chanhdai.com"

export const SOURCE_CODE_GITHUB_REPO = "aarvnd/portfolio"
export const SOURCE_CODE_GITHUB_URL = "https://github.com/aarvnd/portfolio"

export const UTM_PARAMS = {
  utm_source: "arvind.codes",
}
