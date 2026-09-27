import { addQueryParams } from "@/utils/url"

import { UTM_PARAMS } from "@/config/site"
import { Button } from "@/components/base/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/base/ui/tooltip"
import { GitHubIcon } from "@/components/icons"
import { SOCIAL } from "@/features/portfolio/data/social-links"

/** Header link to the GitHub profile (the site source is not public). */
export function NavItemGitHub() {
  const github = SOCIAL.github

  return (
    <Tooltip>
      <TooltipTrigger
        render={
          <Button
            className="border-none px-1.5"
            variant="ghost"
            size="sm"
            nativeButton={false}
            render={
              <a
                href={addQueryParams(github.href, UTM_PARAMS)}
                target="_blank"
                rel="noopener"
              >
                <GitHubIcon />
                <span className="sr-only">GitHub profile</span>
              </a>
            }
          />
        }
      />
      <TooltipContent>@{github.handle} on GitHub</TooltipContent>
    </Tooltip>
  )
}
