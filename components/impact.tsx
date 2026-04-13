"use client"

import { useEffect, useState, useRef } from "react"

const stats = [
  { value: 200, suffix: "+", label: "Brands Supported" },
  { value: 500, suffix: "+", label: "Campaigns Executed" },
  { value: 15, suffix: "+", label: "Industries Served" },
  { value: 50, suffix: "M+", label: "Audience Reach" },
]

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          let start = 0
          const end = value
          const duration = 2000
          const increment = end / (duration / 16)
          
          const timer = setInterval(() => {
            start += increment
            if (start >= end) {
              setCount(end)
              clearInterval(timer)
            } else {
              setCount(Math.floor(start))
            }
          }, 16)
          
          return () => clearInterval(timer)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [value, hasAnimated])

  return (
    <div ref={ref} className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary">
      {count}{suffix}
    </div>
  )
}

export function Impact() {
  return (
    <section className="py-20 lg:py-32 bg-accent">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary-foreground/80 text-sm font-medium mb-4">
            Our Impact
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-accent-foreground text-balance">
            Numbers That Tell Our Story
          </h2>
          <p className="mt-4 text-lg text-accent-foreground/70 text-pretty">
            Our track record speaks volumes about our commitment to delivering exceptional results.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-8 rounded-2xl bg-background/10 backdrop-blur-sm border border-accent-foreground/10 hover:bg-background/15 hover:border-primary/30 transition-all duration-300">
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              <div className="mt-2 text-accent-foreground/70 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
