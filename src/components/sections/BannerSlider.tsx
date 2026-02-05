'use client'

import { AnimatePresence, motion } from "framer-motion"
import { useAutoRotate } from "@/hooks/useAutoRotate"
import { PROMO_BANNERS, BANNER_ROTATE_INTERVAL_MS } from "@/data/content"

export function BannerSlider() {
  const { activeIndex, goTo, pause, resume } = useAutoRotate(
    PROMO_BANNERS.length,
    BANNER_ROTATE_INTERVAL_MS
  )
  const active = PROMO_BANNERS[activeIndex]

  return (
    <section
      className="relative overflow-hidden"
      onMouseEnter={pause}
      onMouseLeave={resume}
    >
      {PROMO_BANNERS.map((b, i) => (
        <div
          key={i}
          className={`absolute inset-0 bg-gradient-to-br ${b.bg} transition-opacity duration-700 ${
            activeIndex === i ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}

      <div className="relative z-[1]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                className="text-center lg:text-left"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-tight">
                  {activeIndex === 0 ? (
                    <>{'Are you looking for a '}<span className="text-primary">{active.title}</span>{' option?'}</>
                  ) : (
                    <>{'Trade-in and '}<span className="text-primary">{active.title}</span></>
                  )}
                </h2>
                <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-relaxed text-muted-foreground">
                  {active.text}
                </p>
              </motion.div>
            </AnimatePresence>
            <div className="aspect-[4/3] rounded-3xl bg-white/80 flex items-center justify-center shadow-lg overflow-hidden p-6 sm:p-8 relative">
              <AnimatePresence mode="wait">
                <motion.img
                  key={active.img}
                  src={active.img}
                  alt={active.alt}
                  className="w-full h-full object-contain absolute inset-0 p-6 sm:p-8"
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.4 }}
                />
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-[2] pb-6 flex justify-center gap-2">
        {PROMO_BANNERS.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`h-2 rounded-full transition-all ${
              activeIndex === i ? 'bg-primary w-6' : 'bg-foreground/20 w-2'
            }`}
            aria-label={`Go to banner ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
