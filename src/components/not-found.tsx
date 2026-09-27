import Link from "next/link"
import { ArrowRightIcon } from "lucide-react"

import { Button } from "@/components/base/ui/button"

export function NotFound() {
  return (
    <div className="grid min-h-svh place-items-center py-6">
      <section className="flex flex-col items-center gap-6">
        <h1 className="font-mono text-8xl font-medium">404</h1>
        <p className="text-muted-foreground">This page does not exist.</p>
        <Button
          variant="outline"
          nativeButton={false}
          render={
            <Link href="/">
              Go to Home
              <ArrowRightIcon />
            </Link>
          }
        />
      </section>
    </div>
  )
}
