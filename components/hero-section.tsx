"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  const handleContactClick = () => {
    const element = document.querySelector("#contact")
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="home" className="pt-32 md:pt-40 pb-20 md:pb-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight text-balance">
            OSKAR ENTERPRISES – Reliable Digital & Business Solutions
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Delivering high-quality, scalable, and on-time solutions for growing businesses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-base" onClick={handleContactClick}>
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-base bg-transparent" onClick={handleContactClick}>
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
