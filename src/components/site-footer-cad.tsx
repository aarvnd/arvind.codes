import { LICENSE, TEMPLATE_GITHUB_URL } from "@/config/site"
import type { BuildInfo } from "@/lib/build-info"
import { getBuildInfo, getStack } from "@/lib/build-info"
import { cn } from "@/lib/utils"
import { Separator } from "@/components/base/ui/separator"
import { GitHubIcon } from "@/components/icons"
import { SiteFooterInteractiveLogotype } from "@/components/site-footer-brand"
import { SOCIAL_ICONS } from "@/features/portfolio/components/social-link-icons"
import { SOCIAL_LINKS } from "@/features/portfolio/data/social-links"

// Imported here rather than through `@/config/site`, which client components
// pull in, to keep the manifest out of client bundles.
import packageJson from "../../package.json"
// Precomputed by `pnpm registry:build`, so the count costs no registry import.
import registryStats from "../../registry-stats.json"

const INSPIRED_BY = [
  "chanhdai.com",
  "Tailwind CSS",
  "shadcn/ui",
  "Vercel",
  "Codolio",
  "amberbisht.me",
  "Making Software",
]

// Not derived from `SITE_INFO.url`: that follows `NEXT_PUBLIC_APP_URL` and
// would read a dev origin locally.
const SITE_TITLE = "arvind.codes"

const SITE_SUBTITLE = packageJson.description

const COPYRIGHT_HOLDER = "Arvind Kumar"

/** Footer laid out as the title block of a technical drawing. */
export function SiteFooterCad() {
  const githubLink = SOCIAL_LINKS.find((link) => link.name === "github")

  const build = getBuildInfo()
  const stack = getStack()

  return (
    <footer className="max-w-screen overflow-x-clip px-2">
      <div className="mx-auto border-x border-line group-has-data-[slot=layout-wide]/layout:container md:max-w-3xl">
        <div className="screen-line-top screen-line-bottom after:z-1 after:bg-border">
          <div className="stripe-divider h-12" />
        </div>

        <div className="relative">
          <div className="screen-line-bottom flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 px-4 py-3 font-mono text-sm">
            <span className="font-medium">{SITE_TITLE}</span>
            <span className="font-sans text-muted-foreground">
              {SITE_SUBTITLE}
            </span>
          </div>

          <dl className="grid grid-cols-2 gap-px bg-line font-mono md:grid-cols-4">
            <Field label="Crafted by">
              {githubLink ? (
                <a
                  className="link-underline"
                  href={githubLink.href}
                  target="_blank"
                  rel="noopener"
                >
                  @{githubLink.handle}
                </a>
              ) : (
                COPYRIGHT_HOLDER
              )}
            </Field>

            <Field label="Build">
              <BuildValue build={build} />
            </Field>

            <Field label="Date">
              <time dateTime={build.date}>{build.date}</time>
            </Field>

            <Field label="Registry">{registryStats.total} items</Field>

            <Field label="Deployed on">Hostinger</Field>

            <Field label="Template">
              <a
                className="link-underline"
                href={TEMPLATE_GITHUB_URL}
                target="_blank"
                rel="noopener"
              >
                ncdai/chanhdai.com
              </a>
            </Field>

            <Field label="License">
              <a
                className="link-underline"
                href={LICENSE.url}
                target="_blank"
                rel="noopener"
              >
                {LICENSE.name}
              </a>
            </Field>

            <Field label="Typeface">Geist</Field>

            <Field className="col-span-2 md:col-span-4" label="Stack">
              <ul className="flex flex-col gap-0.5">
                {stack.map((entry) => (
                  <li key={entry}>{entry}</li>
                ))}
              </ul>
            </Field>

            <Field className="col-span-2 md:col-span-4" label="Inspired by">
              {/*
                Cancelling the cell padding and repeating the parent's column
                count and gap lands these columns on the same grid lines as the
                cells above, rather than dividing the padded width.
              */}
              <ol className="-mx-4 grid grid-cols-2 gap-x-px gap-y-0.5 font-sans md:grid-cols-4">
                {INSPIRED_BY.map((name, index) => (
                  <li className="flex gap-2 px-4" key={name}>
                    {/* Hidden: the list element already conveys the position. */}
                    <span
                      className="font-mono text-muted-foreground/80"
                      aria-hidden
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {name}
                  </li>
                ))}
              </ol>
            </Field>
          </dl>
        </div>

        <div className="screen-line-top h-4" />

        <div className="screen-line-top screen-line-bottom flex flex-col items-center justify-center gap-x-4 gap-y-3 px-4 py-3 text-sm text-muted-foreground sm:flex-row sm:justify-between">
          <div className="flex flex-col flex-wrap items-center gap-x-3 gap-y-1 sm:flex-row">
            <span>
              © {build.date.slice(0, 4)} {COPYRIGHT_HOLDER}.
            </span>

            <span>
              Built on{" "}
              <a
                className="link-underline"
                href={TEMPLATE_GITHUB_URL}
                target="_blank"
                rel="noopener"
              >
                chanhdai.com
              </a>{" "}
              (MIT).
            </span>
          </div>

          <div className="flex items-center gap-3">
            {SOCIAL_LINKS.map((link, index) => (
              <div className="contents" key={link.name}>
                {index > 0 && (
                  <Separator
                    orientation="vertical"
                    className="data-vertical:h-4 data-vertical:self-center"
                  />
                )}
                <a
                  className="flex items-center transition-[color] hover:text-foreground [&_svg]:size-4"
                  href={link.href}
                  target="_blank"
                  rel="noopener"
                  aria-label={`${link.title} Profile`}
                >
                  {link.name === "github" ? (
                    <GitHubIcon className="size-4" />
                  ) : (
                    SOCIAL_ICONS[link.name]
                  )}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      <SiteFooterInteractiveLogotype />

      <div className="h-(--fade-bottom-height)" />
      <div className="pb-[env(safe-area-inset-bottom,0)]" />
    </footer>
  )
}

function BuildValue({ build }: { build: BuildInfo }) {
  if (!build.commitShortSha) {
    return <span className="text-muted-foreground">unavailable</span>
  }

  return (
    <>
      {build.commitUrl ? (
        <a
          className="link-underline"
          href={build.commitUrl}
          target="_blank"
          rel="noopener"
        >
          {build.commitShortSha}
        </a>
      ) : (
        build.commitShortSha
      )}

      {build.environment !== "production" && (
        <span className="text-muted-foreground">
          {" "}
          ({build.environment === "development" ? "local" : build.environment})
        </span>
      )}
    </>
  )
}

function Field({
  className,
  label,
  children,
}: {
  className?: string
  label: string
  children: React.ReactNode
}) {
  return (
    <div
      className={cn(
        "flex min-w-0 flex-col gap-1 bg-background px-4 py-3",
        className
      )}
    >
      <dt className="text-[0.625rem]/4 font-medium tracking-wider text-muted-foreground uppercase">
        {label}
      </dt>
      <dd className="text-sm">{children}</dd>
    </div>
  )
}
