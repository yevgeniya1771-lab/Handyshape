'use client'

import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ProductCard } from "@/components/ProductCard"
import { BESTSELLER_PRODUCTS } from "@/data/products"

export function BestsellersSection() {
  return (
    <section className="py-8 xs:py-10 md:py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 mb-4 xs:mb-6 md:mb-10 lg:mb-12 flex items-center justify-between">
        <div>
          <h2 className="text-xl xs:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-foreground">
            Bestsellers
          </h2>
          <p className="mt-1 md:mt-2 text-xs xs:text-sm md:text-base text-muted-foreground">Our most loved devices</p>
        </div>
        <Button variant="secondary" className="group/btn gap-1 xs:gap-1.5 text-xs xs:text-sm">
          View all
          <ArrowRight className="h-3.5 w-3.5 xs:h-4 xs:w-4 transition-transform group-hover/btn:translate-x-0.5" strokeWidth={1.5} />
        </Button>
      </div>
      <div className="flex gap-3 xs:gap-4 overflow-x-auto scrollbar-hide px-4 md:px-6 lg:px-0 md:grid md:gap-6 md:grid-cols-2 lg:grid-cols-3 md:overflow-visible md:mx-auto md:max-w-7xl lg:px-8">
        {BESTSELLER_PRODUCTS.map((product) => (
          <div key={product.id} className="min-w-[240px] xs:min-w-[280px] md:min-w-0">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </section>
  )
}
