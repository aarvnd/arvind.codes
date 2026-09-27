"use client"

import { useEffect, useId, useRef } from "react"
import type { Transition } from "motion/react"
import {
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "motion/react"

import { metalClickSound } from "@/lib/soundcn/metal-click"
import { useSound } from "@/hooks/soundcn/use-sound"

const transition: Transition = {
  type: "spring",
  mass: 0.5,
  damping: 18,
  stiffness: 200,
}

const TOP_FACES = ["M326.5 46L374.99 74L326.5 102L278 74Z","M229.5 46L278 74L229.5 102L181.01 74Z","M374.99 74L423.49 102L374.99 130L326.5 102Z","M181.01 74L229.5 102L181.01 130L132.51 102Z","M423.49 102L471.99 130L423.49 158L374.99 130Z","M229.5 102L278 130L229.5 158L181.01 130Z","M132.51 102L181.01 130L132.51 158L84.01 130Z","M278 130L326.5 158L278 186L229.5 158Z","M84.01 130L132.51 158L84.01 186L35.51 158Z","M423.49 158L471.99 186L423.49 214L374.99 186Z","M326.5 158L374.99 186L326.5 214L278 186Z","M374.99 186L423.49 214L374.99 242L326.5 214Z","M326.5 214L374.99 242L326.5 270L278 242Z","M278 242L326.5 270L278 298L229.5 270Z"]
const LEFT_FACES = ["M278 74L326.5 102L326.5 146L278 118Z","M181.01 74L229.5 102L229.5 146L181.01 118Z","M326.5 102L374.99 130L374.99 174L326.5 146Z","M132.51 102L181.01 130L181.01 174L132.51 146Z","M374.99 130L423.49 158L423.49 202L374.99 174Z","M181.01 130L229.5 158L229.5 202L181.01 174Z","M84.01 130L132.51 158L132.51 202L84.01 174Z","M229.5 158L278 186L278 230L229.5 202Z","M35.51 158L84.01 186L84.01 230L35.51 202Z","M374.99 186L423.49 214L423.49 258L374.99 230Z","M278 186L326.5 214L326.5 258L278 230Z","M326.5 214L374.99 242L374.99 286L326.5 258Z","M278 242L326.5 270L326.5 314L278 286Z","M229.5 270L278 298L278 342L229.5 314Z"]
const RIGHT_FACES = ["M374.99 74L326.5 102L326.5 146L374.99 118Z","M278 74L229.5 102L229.5 146L278 118Z","M423.49 102L374.99 130L374.99 174L423.49 146Z","M229.5 102L181.01 130L181.01 174L229.5 146Z","M471.99 130L423.49 158L423.49 202L471.99 174Z","M278 130L229.5 158L229.5 202L278 174Z","M181.01 130L132.51 158L132.51 202L181.01 174Z","M326.5 158L278 186L278 230L326.5 202Z","M132.51 158L84.01 186L84.01 230L132.51 202Z","M471.99 186L423.49 214L423.49 258L471.99 230Z","M374.99 186L326.5 214L326.5 258L374.99 230Z","M423.49 214L374.99 242L374.99 286L423.49 258Z","M374.99 242L326.5 270L326.5 314L374.99 286Z","M326.5 270L278 298L278 342L326.5 314Z"]
const EDGES = "M326.5 46L374.99 74L326.5 102L278 74ZM278 74L326.5 102L326.5 146L278 118ZM374.99 74L326.5 102L326.5 146L374.99 118ZM229.5 46L278 74L229.5 102L181.01 74ZM181.01 74L229.5 102L229.5 146L181.01 118ZM278 74L229.5 102L229.5 146L278 118ZM374.99 74L423.49 102L374.99 130L326.5 102ZM326.5 102L374.99 130L374.99 174L326.5 146ZM423.49 102L374.99 130L374.99 174L423.49 146ZM181.01 74L229.5 102L181.01 130L132.51 102ZM132.51 102L181.01 130L181.01 174L132.51 146ZM229.5 102L181.01 130L181.01 174L229.5 146ZM423.49 102L471.99 130L423.49 158L374.99 130ZM374.99 130L423.49 158L423.49 202L374.99 174ZM471.99 130L423.49 158L423.49 202L471.99 174ZM229.5 102L278 130L229.5 158L181.01 130ZM181.01 130L229.5 158L229.5 202L181.01 174ZM278 130L229.5 158L229.5 202L278 174ZM132.51 102L181.01 130L132.51 158L84.01 130ZM84.01 130L132.51 158L132.51 202L84.01 174ZM181.01 130L132.51 158L132.51 202L181.01 174ZM278 130L326.5 158L278 186L229.5 158ZM229.5 158L278 186L278 230L229.5 202ZM326.5 158L278 186L278 230L326.5 202ZM84.01 130L132.51 158L84.01 186L35.51 158ZM35.51 158L84.01 186L84.01 230L35.51 202ZM132.51 158L84.01 186L84.01 230L132.51 202ZM423.49 158L471.99 186L423.49 214L374.99 186ZM374.99 186L423.49 214L423.49 258L374.99 230ZM471.99 186L423.49 214L423.49 258L471.99 230ZM326.5 158L374.99 186L326.5 214L278 186ZM278 186L326.5 214L326.5 258L278 230ZM374.99 186L326.5 214L326.5 258L374.99 230ZM374.99 186L423.49 214L374.99 242L326.5 214ZM326.5 214L374.99 242L374.99 286L326.5 258ZM423.49 214L374.99 242L374.99 286L423.49 258ZM326.5 214L374.99 242L326.5 270L278 242ZM278 242L326.5 270L326.5 314L278 286ZM374.99 242L326.5 270L326.5 314L374.99 286ZM278 242L326.5 270L278 298L229.5 270ZM229.5 270L278 298L278 342L229.5 314ZM326.5 270L278 298L278 342L326.5 314Z"

const PRESS_OFFSET = 15

/**
 * The "A" pixel mark extruded into isometric voxels. Generated from the same
 * 5x5 bitmap as the flat mark so the two always agree.
 */
export function ArvindMarkIsometric() {
  const id = useId()
  const ids = {
    facePattern: `arvind-face-pattern-${id}`,
    radialGradient: `arvind-radial-gradient-${id}`,
  }

  const ref = useRef<SVGSVGElement>(null)

  const [play] = useSound(metalClickSound)

  const shouldReduceMotion = useReducedMotion()
  const isInView = useInView(ref, { margin: "80px" })

  const mouseX = useMotionValue(0.5)
  const mouseY = useMotionValue(0.5)

  const cx = useSpring(useTransform(mouseX, [0, 1], [0, 556]), {
    stiffness: 300,
    damping: 30,
    mass: 0.1,
  })

  const cy = useSpring(useTransform(mouseY, [0, 1], [0, 354]), {
    stiffness: 300,
    damping: 30,
    mass: 0.1,
  })

  useEffect(() => {
    if (shouldReduceMotion || !isInView) {
      return
    }

    if (window.matchMedia("(hover: none)").matches) {
      return
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX / window.innerWidth)
      mouseY.set(e.clientY / window.innerHeight)
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [shouldReduceMotion, isInView, mouseX, mouseY])

  return (
    <motion.svg
      ref={ref}
      className="h-auto w-full touch-manipulation overflow-visible [--pattern:color-mix(in_oklab,var(--foreground)_12%,var(--background))] [--stroke:color-mix(in_oklab,var(--foreground)_16%,var(--background))] [--side-left:color-mix(in_oklab,var(--foreground)_9%,var(--background))] [--side-right:color-mix(in_oklab,var(--foreground)_4%,var(--background))]"
      viewBox="0 0 556 354"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      initial="normal"
      whileTap="pressed"
      onTap={() => play()}
    >
      <defs>
        <pattern
          id={ids.facePattern}
          x="0"
          y="0"
          width="10"
          height="10"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M-1 1l2 -2M0 10l10 -10M9 11l2 -2"
            stroke="var(--pattern)"
            strokeWidth="1"
          />
        </pattern>

        <motion.radialGradient
          id={ids.radialGradient}
          cx={cx}
          cy={cy}
          r="200"
          gradientUnits="userSpaceOnUse"
        >
          <stop
            className="dark:[stop-color:#fff]"
            stopColor="var(--color-zinc-700)"
          />
          <stop
            className="dark:[stop-color:var(--color-zinc-600)]"
            offset="1"
            stopColor="var(--color-zinc-400)"
            stopOpacity="0"
          />
        </motion.radialGradient>
      </defs>

      <g className="stroke-line" strokeWidth="1" strokeDasharray="4 2">
        <path d="M-477.55 756.57L1254.51 -243.41" />
      </g>

      <g stroke="var(--stroke)" strokeWidth="1" strokeLinejoin="round">
        {LEFT_FACES.map((d, i) => (
          <path key={`l-${i}`} d={d} fill="var(--side-left)" />
        ))}
        {RIGHT_FACES.map((d, i) => (
          <path key={`r-${i}`} d={d} fill="var(--side-right)" />
        ))}
      </g>

      <motion.g
        variants={{
          normal: { transform: "translate(0px, 0px)" },
          pressed: { transform: `translate(0px, ${PRESS_OFFSET}px)` },
        }}
        transition={transition}
        stroke="var(--stroke)"
        strokeWidth="1"
        strokeLinejoin="round"
      >
        {TOP_FACES.map((d, i) => (
          <g key={`t-${i}`}>
            <path d={d} className="fill-background" />
            <path d={d} fill={`url(#${ids.facePattern})`} />
          </g>
        ))}
      </motion.g>

      <path
        d={EDGES}
        stroke={`url(#${ids.radialGradient})`}
        strokeWidth="1"
        strokeLinejoin="round"
        fill="none"
        className="pointer-events-none"
      />
    </motion.svg>
  )
}
