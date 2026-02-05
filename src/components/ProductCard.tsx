'use client'

import Link from "next/link"
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useCarousel } from "@/hooks/useCarousel"
import type { Product } from "@/types"

export function ProductCard({ product }: { product: Product }) {
  const { activeIndex, active, prev, next, goTo } = useCarousel(product.colors)

  return (
    <Card className="overflow-hidden border-border/50 hover:border-primary/30 transition-all hover:shadow-xl">
      <div className="flex flex-col p-4">
        <h3 className="font-semibold text-lg text-foreground text-left mb-1">
          {product.name} {active.name}
        </h3>
        <div className="group/img aspect-square relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.img
              key={active.img}
              src={active.img}
              alt={`${product.name} ${active.name}`}
              className="w-full h-full object-contain absolute inset-0"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
            />
          </AnimatePresence>
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-white/70 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity hover:bg-white"
          >
            <ChevronLeft className="h-4 w-4 text-foreground" strokeWidth={1.5} />
          </button>
          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-white/70 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity hover:bg-white"
          >
            <ChevronRight className="h-4 w-4 text-foreground" strokeWidth={1.5} />
          </button>
        </div>
        <div className="flex justify-center gap-1.5 mt-3">
          {product.colors.map((c, i) => (
            <button
              key={c.name}
              onClick={() => goTo(i)}
              className={`w-3.5 h-3.5 rounded-full border-[1.5px] transition-all ${
                activeIndex === i ? 'border-primary scale-125' : 'border-gray-300'
              }`}
              title={c.name}
            >
              <span className={`block w-full h-full rounded-full ${c.class}`} />
            </button>
          ))}
        </div>
        <div className="flex justify-between items-center mt-3">
          <span className="text-xl font-bold text-foreground">{product.price}</span>
          <Link href="/product">
            <Button variant="secondary" className="group/btn gap-1.5">
              Buy Now
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" strokeWidth={1.5} />
            </Button>
          </Link>
        </div>
      </div>
    </Card>
  )
}
