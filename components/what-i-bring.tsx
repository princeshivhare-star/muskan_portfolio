'use client'

import { useEffect, useRef, useState } from 'react'

type Badge = {
  label: string
  top: string
  left: string
  rotate: number
  fx: number
  fy: number
  delay: number
}

const badges: Badge[] = [
  { label: 'Brand Identity', top: '6%', left: '47%', rotate: -8, fx: -10, fy: 170, delay: 60 },
  { label: 'Logo Design', top: '16%', left: '72%', rotate: -7, fx: -150, fy: 150, delay: 160 },
  { label: 'Packaging Design', top: '20%', left: '20%', rotate: 7, fx: 150, fy: 140, delay: 20 },
  { label: 'Label Design', top: '42%', left: '83%', rotate: 6, fx: -180, fy: 40, delay: 220 },
  { label: 'Business Cards', top: '45%', left: '11%', rotate: -6, fx: 180, fy: 40, delay: 100 },
  { label: 'Branding', top: '65%', left: '79%', rotate: 8, fx: -160, fy: -80, delay: 260 },
  { label: 'Pitch Deck Design', top: '69%', left: '14%', rotate: 4, fx: 160, fy: -70, delay: 200 },
  { label: 'Visual Design', top: '86%', left: '66%', rotate: -14, fx: -80, fy: -150, delay: 320 },
  { label: 'Brochure Design', top: '88%', left: '38%', rotate: -4, fx: 60, fy: -160, delay: 340 },
]

export function WhatIBring() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = sectionRef.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.25 }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      aria-label="What I bring to the table"
      className="mx-auto max-w-6xl overflow-hidden px-5 py-16 md:px-8 md:py-24"
    >
      <div className="relative min-h-[620px] md:min-h-[620px]">
        {badges.map((badge) => (
          <span
            key={badge.label}
            className="absolute rounded-full bg-blue-brand/20 px-3 py-2 text-[10px] font-semibold whitespace-nowrap text-blue-brand transition-[transform,opacity] duration-700 ease-out will-change-transform sm:px-4 sm:text-xs md:px-6 md:py-3 md:text-base"
            style={{
              top: badge.top,
              left: badge.left,
              transitionDelay: `${badge.delay}ms`,
              opacity: visible ? 1 : 0,
              transform: visible
                ? `translate(-50%, -50%) rotate(${badge.rotate}deg) scale(1)`
                : `translate(calc(-50% + ${badge.fx}px), calc(-50% + ${badge.fy}px)) rotate(${badge.rotate}deg) scale(0.35)`,
            }}
          >
            {badge.label}
          </span>
        ))}

        {/* Center Content */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center transition-all duration-700 ease-out"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'scale(1)' : 'scale(0.8)',
          }}
        >
          <img
            src="/logo.png"
            alt="Logo"
            className="mb-4 h-auto w-20 md:mb-5 md:w-28 lg:w-35"
          />

          <h2 className="text-center font-script text-[3.2rem] font-normal leading-[0.95] text-[#0F1E73] md:text-[5rem] lg:text-[5.8rem]">
            What I bring
            <br />
            to the table
          </h2>

          <p className="mt-6 max-w-[280px] text-center text-sm leading-snug text-muted-foreground md:mt-8 md:max-w-xl md:text-xl">
            Creative visuals that elevate your brand and make a lasting impression.
          </p>
        </div>
      </div>
    </section>
  )
}
