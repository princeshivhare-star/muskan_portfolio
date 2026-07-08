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
  { label: 'Product Design', top: '6%', left: '47%', rotate: -8, fx: -10, fy: 170, delay: 60 },
  { label: 'User Experience Design', top: '16%', left: '72%', rotate: -7, fx: -150, fy: 150, delay: 160 },
  { label: 'Design Systems', top: '20%', left: '20%', rotate: 7, fx: 150, fy: 140, delay: 20 },
  { label: 'User Interface Design', top: '42%', left: '83%', rotate: 6, fx: -180, fy: 40, delay: 220 },
  { label: 'User Research', top: '45%', left: '11%', rotate: -6, fx: 180, fy: 40, delay: 100 },
  { label: 'Branding', top: '65%', left: '79%', rotate: 8, fx: -160, fy: -80, delay: 260 },
  { label: 'Pitch Deck Design', top: '69%', left: '14%', rotate: 4, fx: 160, fy: -70, delay: 200 },
  { label: 'Visual Design', top: '84%', left: '66%', rotate: -14, fx: -80, fy: -150, delay: 320 },
  { label: 'Framer Development', top: '86%', left: '38%', rotate: -4, fx: 60, fy: -160, delay: 340 },
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
      { threshold: 0.3 }
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
      {/* Desktop / Tablet */}
      <div className="relative hidden min-h-[620px] md:block">
        {badges.map((badge) => (
          <span
            key={badge.label}
            className="absolute rounded-full bg-blue-brand/20 px-6 py-3 text-base font-semibold whitespace-nowrap text-blue-brand transition-[transform,opacity] duration-700 ease-out will-change-transform"
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
            className="mb-5 w-16 h-auto lg:w-20"
          />

          <h2 className="text-center font-script text-[4.2rem] font-normal leading-[0.95] text-blue-brand md:text-[5rem] lg:text-[5.8rem]">
            What I bring
            <br />
            to the table
          </h2>

          <p className="mt-8 max-w-xl text-center text-lg leading-snug text-muted-foreground md:text-xl">
            Digital experiences that engage users and help your
            <br />
            startup stand out from day one
          </p>
        </div>
      </div>

      {/* Mobile */}
      <div className="flex flex-col items-center text-center md:hidden">
        <img
          src="/logo.png"
          alt="Logo"
          className="mb-5 w-14 h-auto transition-all duration-700"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'scale(1)' : 'scale(0.8)',
          }}
        />

        <h2 className="text-center font-script text-[4.2rem] font-normal leading-[0.95] text-[#0F1E73] md:text-[5rem] lg:text-[5.8rem]">
          What I bring
          <br />
          to the table
        </h2>

        <p className="mt-6 max-w-sm text-base leading-snug text-muted-foreground">
          Digital experiences that engage users and help your startup stand out
          from day one
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {badges.map((badge, i) => (
            <span
              key={badge.label}
              className="rounded-full bg-blue-brand/20 px-4 py-2 text-sm font-semibold text-blue-brand transition-all duration-500 ease-out"
              style={{
                transitionDelay: `${i * 60}ms`,
                opacity: visible ? 1 : 0,
                transform: visible
                  ? 'scale(1) translateY(0)'
                  : 'scale(0.6) translateY(12px)',
              }}
            >
              {badge.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
