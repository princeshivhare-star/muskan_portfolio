'use client'

import { useEffect, useRef, useState, type CSSProperties } from 'react'

interface AnimatedHeadingProps {
  text: string
  as?: 'h1' | 'h2' | 'h3'
  className?: string
  charDelay?: number
  style?: CSSProperties
}

export function AnimatedHeading({
  text,
  as: Tag = 'h2',
  className = '',
  charDelay = 25,
  style,
}: AnimatedHeadingProps) {
  const ref = useRef<HTMLHeadingElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag ref={ref} className={className} style={style}>
      {text.split('').map((char, i) => (
        <span
          key={i}
          className="inline-block transition-all duration-500 ease-out"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(0.35em)',
            transitionDelay: `${i * charDelay}ms`,
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </Tag>
  )
}
