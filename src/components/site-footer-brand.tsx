"use client"

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "motion/react"

const VIEWBOX_WIDTH = 2240

export function SiteFooterInteractiveLogotype() {
  const shouldReduceMotion = useReducedMotion()

  const gradientX1Raw = useMotionValue(0.5)
  const gradientX1 = useSpring(
    useTransform(gradientX1Raw, [0, 1], [0, VIEWBOX_WIDTH]),
    {
      stiffness: 150,
      damping: 25,
    }
  )

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion) return

    const containerRect = event.currentTarget.getBoundingClientRect()
    gradientX1Raw.set(
      (event.clientX - containerRect.left) / containerRect.width
    )
  }

  const handleMouseLeave = () => {
    if (shouldReduceMotion) return
    gradientX1Raw.set(0.5)
  }

  return (
    <div className="screen-line-bottom after:z-1 after:bg-foreground/15">
      <div
        className="overflow-hidden"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex w-full translate-y-[37.5%] items-center justify-center">
          <svg
            className="container size-full"
            viewBox="0 0 2240 320"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M64 0h192v64H64zM0 64h64v64H0zM256 64h64v64H256zM0 128h320v64H0zM0 192h64v64H0zM256 192h64v64H256zM0 256h64v64H0zM256 256h64v64H256zM384 0h256v64H384zM384 64h64v64H384zM640 64h64v64H640zM384 128h256v64H384zM384 192h64v64H384zM576 192h64v64H576zM384 256h64v64H384zM640 256h64v64H640zM768 0h64v64H768zM1024 0h64v64H1024zM768 64h64v64H768zM1024 64h64v64H1024zM768 128h64v64H768zM1024 128h64v64H1024zM832 192h64v64H832zM960 192h64v64H960zM896 256h64v64H896zM1152 0h320v64H1152zM1280 64h64v64H1280zM1280 128h64v64H1280zM1280 192h64v64H1280zM1152 256h320v64H1152zM1536 0h64v64H1536zM1792 0h64v64H1792zM1536 64h128v64H1536zM1792 64h64v64H1792zM1536 128h64v64H1536zM1664 128h64v64H1664zM1792 128h64v64H1792zM1536 192h64v64H1536zM1728 192h128v64H1728zM1536 256h64v64H1536zM1792 256h64v64H1792zM1920 0h256v64H1920zM1920 64h64v64H1920zM2176 64h64v64H2176zM1920 128h64v64H1920zM2176 128h64v64H2176zM1920 192h64v64H1920zM2176 192h64v64H2176zM1920 256h256v64H1920z" fill="url(#paint0_linear_1145_73)" />
            <path
              className="stroke-foreground/10"
              d="M64 0h192v64H64zM0 64h64v64H0zM256 64h64v64H256zM0 128h320v64H0zM0 192h64v64H0zM256 192h64v64H256zM0 256h64v64H0zM256 256h64v64H256zM384 0h256v64H384zM384 64h64v64H384zM640 64h64v64H640zM384 128h256v64H384zM384 192h64v64H384zM576 192h64v64H576zM384 256h64v64H384zM640 256h64v64H640zM768 0h64v64H768zM1024 0h64v64H1024zM768 64h64v64H768zM1024 64h64v64H1024zM768 128h64v64H768zM1024 128h64v64H1024zM832 192h64v64H832zM960 192h64v64H960zM896 256h64v64H896zM1152 0h320v64H1152zM1280 64h64v64H1280zM1280 128h64v64H1280zM1280 192h64v64H1280zM1152 256h320v64H1152zM1536 0h64v64H1536zM1792 0h64v64H1792zM1536 64h128v64H1536zM1792 64h64v64H1792zM1536 128h64v64H1536zM1664 128h64v64H1664zM1792 128h64v64H1792zM1536 192h64v64H1536zM1728 192h128v64H1728zM1536 256h64v64H1536zM1792 256h64v64H1792zM1920 0h256v64H1920zM1920 64h64v64H1920zM2176 64h64v64H2176zM1920 128h64v64H1920zM2176 128h64v64H2176zM1920 192h64v64H1920zM2176 192h64v64H2176zM1920 256h256v64H1920z"
              strokeWidth="2"
            />
            <defs>
              <motion.linearGradient
                id="paint0_linear_1145_73"
                x1={gradientX1}
                y1="0"
                x2="1120"
                y2="320"
                gradientUnits="userSpaceOnUse"
              >
                <stop
                  offset="0.625"
                  stopColor="var(--foreground)"
                  stopOpacity="0"
                />
                <stop offset="1" stopColor="var(--foreground)" />
              </motion.linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      <div
        className="pointer-events-none absolute bottom-0 left-1/2 hidden h-px w-[50%] max-w-full -translate-x-1/2 dark:block"
        style={{
          background:
            "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(255, 255, 255, 0) 0%, rgba(228, 228, 231, 0.3) 50%, rgba(0, 0, 0, 0) 100%)",
        }}
        aria-hidden
      />
    </div>
  )
}
