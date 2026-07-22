'use client'

import { Fragment, useEffect, useRef, useState, type CSSProperties } from 'react'

interface AnimatedHeadingProps {
  text?: string
  lines?: string[]
  as?: 'h1' | 'h2' | 'h3'
  className?: string
  charDelay?: number
  style?: CSSProperties
}

export function AnimatedHeading({
  text,
  lines,
  as: Tag = 'h2',
  className = '',
  charDelay = 55,
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

  const content = lines ?? [text ?? '']
  let globalIndex = 0

  return (
    <Tag ref={ref} className={className} style={style}>
      {content.map((line, li) => (
        <Fragment key={li}>
          {line.split('').map((char) => {
            const i = globalIndex++
            return (
              <span
                key={i}
                className="inline-block transition-all duration-[900ms] ease-out"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'translateY(0)' : 'translateY(0.35em)',
                  transitionDelay: `${i * charDelay}ms`,
                }}
              >
                {char === ' ' ? '\u00A0' : char}
              </span>
            )
          })}
          {li < content.length - 1 && <br />}
        </Fragment>
      ))}
    </Tag>
  )
}
