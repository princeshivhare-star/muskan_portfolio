'use client'

import { useEffect, useMemo, useRef, useState } from 'react'

type Badge = {
  label: string
  top: string
  left: string
  rotate: number
  fx: number
  fy: number
  delay: number
}

const labels = [
  'Brand Identity',
  'Logo Design',
  'Packaging Design',
  'Label Design',
  'Branding',
  'Visual Design',
  'Brochure Design',
  'Social Media Design',
  'Pitch Deck Design',
  'Business Cards',
  'Brand Guidelines',
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

  const badges: Badge[] = useMemo(() => {
    const radiusX = 39
    const radiusY = 44

    return labels.map((label, i) => {
      const angle = (-90 + (360 / labels.length) * i) * (Math.PI / 180)

      let top = 50 + radiusY * Math.sin(angle)
      let left = 50 + radiusX * Math.cos(angle)

      if (label === 'Visual Design') {
        top -= 10
      }

      if (label === 'Brochure Design') {
        top -= 10
      }

      return {
        label,
        top: `${top}%`,
        left: `${left}%`,
        rotate: Math.sin(angle) * 10,
        fx: -Math.cos(angle) * 180,
        fy: -Math.sin(angle) * 180,
        delay: i * 50,
      }
    })
  }, [])

  return (
    <section
      ref={sectionRef}
      aria-label="What I bring to the table"
      className="mx-auto max-w-6xl overflow-hidden px-5 pt-6 pb-20 md:px-8 md:pt-10 md:pb-28"
    >
      <div className="relative min-h-[720px] md:min-h-[800px]">
        {badges.map((badge) => (
          <span
            key={badge.label}
            className="absolute rounded-full bg-blue-brand/20 px-3 py-2 text-[10px] font-semibold whitespace-nowrap text-blue-brand transition-all duration-700 ease-out will-change-transform sm:px-4 sm:text-xs md:px-6 md:py-3 md:text-base"
            style={{
              top: badge.top,
              left: badge.left,
              transitionDelay: `${badge.delay}ms`,
              opacity: visible ? 1 : 0,
              transform: visible
                ? `translate(-50%, -50%) rotate(${badge.rotate}deg)`
                : `translate(calc(-50% + ${badge.fx}px), calc(-50% + ${badge.fy}px)) rotate(${badge.rotate}deg) scale(.35)`,
            }}
          >
            {badge.label}
          </span>
        ))}

        <div
          className="absolute inset-0 flex flex-col items-center justify-center -translate-y-14 transition-all duration-700 ease-out"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible
              ? 'translateY(-56px) scale(1)'
              : 'translateY(-56px) scale(.8)',
          }}
        >
          <img
            src="/logo.png"
            alt="Logo"
            className="mb-5 h-auto w-28 md:w-36 lg:w-40"
          />

          <h2 className="text-center font-script text-[3.2rem] font-normal leading-[0.82] text-foreground md:text-[5rem] lg:text-[5.8rem]">
            What I bring
            <br />
            to the table
          </h2>
        </div>
      </div>
    </section>
  )
}
