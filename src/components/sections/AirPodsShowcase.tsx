'use client'

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useCarousel } from "@/hooks/useCarousel"
import { AIRPODS_COLORS } from "@/data/products"
import { DRAG_THRESHOLD_PX } from "@/data/content"

export function AirPodsShowcase() {
  const { activeIndex, active, prev, next, goTo } = useCarousel(AIRPODS_COLORS)
  const [dragDirection, setDragDirection] = useState(0)

  const handlePrev = () => { setDragDirection(-1); prev() }
  const handleNext = () => { setDragDirection(1); next() }

  const handleDragEnd = (_: unknown, info: { offset: { x: number } }) => {
    if (info.offset.x < -DRAG_THRESHOLD_PX) handleNext()
    else if (info.offset.x > DRAG_THRESHOLD_PX) handlePrev()
  }

  return (
    <section className={`${active.bg} transition-colors duration-500`}>
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-8 xs:py-10 md:py-14 lg:py-16">
        <div className="grid md:grid-cols-2 gap-4 xs:gap-6 md:gap-8 lg:gap-12 items-center">
          <div className="text-center md:text-left order-2 md:order-1">
            <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-1.5 xs:mb-2 md:mb-4">
              Experience the future.
            </h2>
            <p className="text-xs xs:text-sm md:text-base lg:text-lg text-muted-foreground mb-0.5 xs:mb-1 md:mb-2">
              The most advanced AirPods yet.
            </p>
            <p className="text-[10px] xs:text-xs md:text-sm text-muted-foreground mb-4 xs:mb-6 md:mb-8">
              AirPods Max — {active.name}
            </p>
            <Button size="default" className="text-xs xs:text-sm md:h-11 md:px-8">Learn More</Button>
          </div>

          <div className="flex flex-col items-center gap-2 xs:gap-3 md:gap-4 order-1 md:order-2">
            <div className="relative flex items-center justify-center w-full">
              <button
                onClick={handlePrev}
                className="absolute left-0 z-10 h-8 w-8 xs:h-9 xs:w-9 md:h-10 md:w-10 rounded-full border border-foreground/10 bg-white/60 backdrop-blur-sm flex items-center justify-center hover:bg-white/80 transition-colors"
              >
                <ChevronLeft className="h-3.5 w-3.5 xs:h-4 xs:w-4 md:h-5 md:w-5 text-foreground" strokeWidth={1.5} />
              </button>
              <div className="h-40 xs:h-48 sm:h-64 md:h-80 w-full relative overflow-hidden cursor-grab active:cursor-grabbing">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.img
                    key={active.img}
                    src={active.img}
                    alt={`AirPods Max ${active.name}`}
                    draggable="false"
                    className="h-full w-full object-contain absolute inset-0 scale-[1.2] select-none"
                    initial={{ opacity: 0, x: dragDirection >= 0 ? 30 : -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: dragDirection >= 0 ? -30 : 30 }}
                    transition={{ duration: 0.3 }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.4}
                    onDragEnd={handleDragEnd}
                    whileTap={{ scale: 1.15 }}
                  />
                </AnimatePresence>
              </div>
              <button
                onClick={handleNext}
                className="absolute right-0 z-10 h-8 w-8 xs:h-9 xs:w-9 md:h-10 md:w-10 rounded-full border border-foreground/10 bg-white/60 backdrop-blur-sm flex items-center justify-center hover:bg-white/80 transition-colors"
              >
                <ChevronRight className="h-3.5 w-3.5 xs:h-4 xs:w-4 md:h-5 md:w-5 text-foreground" strokeWidth={1.5} />
              </button>
            </div>

            <div className="flex gap-1.5 xs:gap-2">
              {AIRPODS_COLORS.map((c, i) => (
                <button
                  key={c.name}
                  onClick={() => goTo(i)}
                  className={`w-2.5 h-2.5 xs:w-3 xs:h-3 rounded-full transition-all ${activeIndex === i ? 'scale-125' : 'opacity-60'}`}
                  title={c.name}
                >
                  <span className={`block w-full h-full rounded-full ${c.dot}`} />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
