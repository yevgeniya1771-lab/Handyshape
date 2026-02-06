'use client'

import React, { useState, useEffect, useRef } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

type HeroSlide = {
  badge?: React.ReactNode
  heading: React.ReactNode
  description: string
  cta: string
  img: string
  alt: string
  imgWidth: string
  imgBottom?: string
}

const HERO_SLIDES: HeroSlide[] = [
  {
    badge: <Badge className="mb-4 rounded-full bg-accent text-accent-foreground">New Arrival</Badge>,
    heading: (
      <>
        iPhone 17 Pro
        <br />
        Is Here
      </>
    ),
    description: "Experience the ultimate in smartphone innovation. The most powerful iPhone ever created.",
    cta: "Shop Now",
    img: "/hero_large%201.png",
    alt: "iPhone",
    imgWidth: "w-[67%]",
  },
  {
    badge: <Badge className="mb-4 rounded-full bg-primary text-primary-foreground">Best Seller</Badge>,
    heading: (
      <>
        Samsung
        <br />
        Galaxy S24
      </>
    ),
    description: "Powerful AI features meet stunning design. The ultimate Android flagship experience.",
    cta: "Explore Galaxy",
    img: "/Samsung.png",
    alt: "Samsung Galaxy S24",
    imgWidth: "w-[80%]",
  },
  {
    heading: (
      <>
        Smartphone
        <br />
        Trade In
      </>
    ),
    description: "Turn your old device into credit. Fast processing and great prices - experience the easiest way to upgrade.",
    cta: "Trade In Now",
    img: "/Hand.png",
    alt: "Trade In",
    imgWidth: "w-[67%]",
    imgBottom: "bottom-[70px]",
  },
]

export function HeroCarousel() {
  const [activeSlide, setActiveSlide] = useState(0)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = scrollRef.current
    if (!container) return

    const handleScroll = () => {
      const slideWidth = container.offsetWidth
      setActiveSlide(Math.round(container.scrollLeft / slideWidth))
    }

    container.addEventListener('scroll', handleScroll)
    return () => container.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSlide = (index: number) => {
    const container = scrollRef.current
    if (container) {
      container.scrollTo({ left: container.offsetWidth * index, behavior: 'smooth' })
    }
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-primary/5 to-background pb-0 -mt-[1px]">
      <div ref={scrollRef} className="flex gap-0 overflow-x-auto snap-x snap-mandatory scrollbar-hide pt-4 sm:pt-16 lg:pt-20 pb-0">
        {HERO_SLIDES.map((slide, index) => (
          <div key={index} className="min-w-full snap-center pb-0 relative">
            <div className={`absolute ${slide.imgBottom ?? 'bottom-0'} right-0 ${slide.imgWidth} max-w-2xl z-0`}>
              <img src={slide.img} alt={slide.alt} className="w-full h-auto object-contain" />
            </div>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 min-h-[260px] xs:min-h-[280px] sm:min-h-[400px] md:min-h-[450px] lg:min-h-[500px] relative">
              <div className="text-left mb-4 lg:mb-0 relative z-10 pt-4 sm:pt-8 md:pt-12 max-w-[55%] xs:max-w-[60%] sm:max-w-[50%] md:max-w-[45%] lg:max-w-none">
                {'badge' in slide && slide.badge}
                <h1 className="text-balance text-xl xs:text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
                  {slide.heading}
                </h1>
                <p className="mt-2 sm:mt-4 md:mt-6 text-pretty text-[11px] xs:text-xs sm:text-base md:text-lg leading-relaxed text-muted-foreground max-w-xl line-clamp-2 sm:line-clamp-3 md:line-clamp-none">
                  {slide.description}
                </p>
                <div className="mt-3 xs:mt-4 sm:mt-6 md:mt-10">
                  <Button size="default" className="text-xs xs:text-sm sm:h-11 sm:px-8">{slide.cta}</Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-4 sm:bottom-6 left-0 right-0 flex justify-center gap-2 z-10">
        {HERO_SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToSlide(index)}
            className={`h-2 w-2 rounded-full transition-all ${
              activeSlide === index ? 'bg-primary w-8' : 'bg-primary/30'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
