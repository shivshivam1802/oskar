"use client"

import { useEffect, useState, useRef } from "react"

interface StatProps {
  end: number
  label: string
  suffix?: string
}

function AnimatedStat({ end, label, suffix = "" }: StatProps) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [isVisible])

  useEffect(() => {
    if (!isVisible) return

    const duration = 2000
    const increment = end / (duration / 16)
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, 16)

    return () => clearInterval(timer)
  }, [isVisible, end])

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-foreground mb-2">
        {count}
        {suffix}
      </div>
      <div className="text-lg text-muted-foreground">{label}</div>
    </div>
  )
}

export function StatsSection() {
  return (
    <section className="py-20 md:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          <AnimatedStat end={100} label="Happy Clients" suffix="+" />
          <AnimatedStat end={500} label="Projects Completed" suffix="+" />
          <AnimatedStat end={5} label="Years of Experience" suffix="+" />
        </div>
      </div>
    </section>
  )
}
