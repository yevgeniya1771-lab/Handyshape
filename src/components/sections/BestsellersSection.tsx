'use client'

import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ProductCard } from "@/components/ProductCard"
import { BESTSELLER_PRODUCTS } from "@/data/products"

export function BestsellersSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <div className="mb-8 sm:mb-12 flex items-center justify-between">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Bestsellers
          </h2>
          <p className="mt-2 text-sm sm:text-base text-muted-foreground">Our most loved devices</p>
        </div>
        <Button variant="secondary" className="group/btn gap-1.5">
          View all
          <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5" strokeWidth={1.5} />
        </Button>
      </div>
      <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {BESTSELLER_PRODUCTS.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}
