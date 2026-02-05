'use client'

import { useState } from "react"
import { ShoppingBag, ChevronUp, ChevronDown, Check } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/Header"
import { IPHONE_17_PRO_PDP } from "@/data/products"

export default function ProductPage() {
  const [activeColorIndex, setActiveColorIndex] = useState(0)
  const [activeStorageIndex, setActiveStorageIndex] = useState(0)

  const product = IPHONE_17_PRO_PDP
  const activeColor = product.colors[activeColorIndex]
  const activeStorage = product.storage[activeStorageIndex]

  const prevColor = () =>
    setActiveColorIndex((i) => (i - 1 + product.colors.length) % product.colors.length)
  const nextColor = () =>
    setActiveColorIndex((i) => (i + 1) % product.colors.length)

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="flex gap-4">
            <div className="hidden sm:flex flex-col items-center gap-2">
              <button
                onClick={prevColor}
                className="h-8 w-8 rounded-full border border-border/50 bg-white/60 backdrop-blur-sm flex items-center justify-center hover:bg-white/80 transition-colors"
              >
                <ChevronUp className="h-4 w-4 text-foreground" strokeWidth={1.5} />
              </button>

              <div className="flex flex-col gap-2">
                {product.colors.map((color, i) => (
                  <button
                    key={color.name}
                    onClick={() => setActiveColorIndex(i)}
                    className={`w-20 h-20 rounded-xl border-2 overflow-hidden transition-all p-1.5 bg-white ${
                      activeColorIndex === i
                        ? 'border-primary shadow-md'
                        : 'border-border/50 hover:border-primary/30'
                    }`}
                  >
                    <img src={color.img} alt={color.name} className="w-full h-full object-contain" />
                  </button>
                ))}
              </div>

              <button
                onClick={nextColor}
                className="h-8 w-8 rounded-full border border-border/50 bg-white/60 backdrop-blur-sm flex items-center justify-center hover:bg-white/80 transition-colors"
              >
                <ChevronDown className="h-4 w-4 text-foreground" strokeWidth={1.5} />
              </button>
            </div>

            <div className="flex-1 flex flex-col">
              <div className="aspect-square rounded-2xl bg-white border border-border/50 overflow-hidden relative flex items-center justify-center p-6 sm:p-8">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeColor.img}
                    src={activeColor.img}
                    alt={`${product.name} ${activeColor.name}`}
                    className="w-full h-full object-contain absolute inset-0 p-6 sm:p-8"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.25 }}
                  />
                </AnimatePresence>
              </div>

              <div className="flex sm:hidden gap-2 mt-4 justify-center">
                {product.colors.map((color, i) => (
                  <button
                    key={color.name}
                    onClick={() => setActiveColorIndex(i)}
                    className={`w-16 h-16 rounded-lg border-2 overflow-hidden p-1 bg-white transition-all ${
                      activeColorIndex === i ? 'border-primary' : 'border-border/50'
                    }`}
                  >
                    <img src={color.img} alt={color.name} className="w-full h-full object-contain" />
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:sticky lg:top-32 lg:self-start">
            <div className="flex items-center justify-between mb-4">
              <Badge className="rounded-full bg-green-100 text-green-700 border-green-200">
                In Stock
              </Badge>
              <span className="text-sm text-muted-foreground">
                Delivery: 1-3 working days
              </span>
            </div>

            <div className="mb-6">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3">
                {product.name} — {activeColor.name}
              </h1>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                {product.description}
              </p>
            </div>

            <div className="mb-6">
              <p className="text-sm font-semibold text-foreground mb-3">
                Color: <span className="font-normal text-muted-foreground">{activeColor.name}</span>
              </p>
              <div className="flex gap-3">
                {product.colors.map((color, i) => (
                  <button
                    key={color.name}
                    onClick={() => setActiveColorIndex(i)}
                    className={`relative w-10 h-10 rounded-full transition-all ${
                      activeColorIndex === i
                        ? 'ring-2 ring-primary ring-offset-2'
                        : 'hover:ring-2 hover:ring-primary/30 hover:ring-offset-1'
                    }`}
                    title={color.name}
                  >
                    <span className={`block w-full h-full rounded-full ${color.class}`} />
                    {activeColorIndex === i && (
                      <Check className="absolute inset-0 m-auto h-4 w-4 text-white drop-shadow-md" strokeWidth={2.5} />
                    )}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <p className="text-sm font-semibold text-foreground mb-1">
                Storage: <span className="font-normal text-muted-foreground">{activeStorage.label}</span>
              </p>
              <p className="text-xs text-muted-foreground mb-3">How much space do you need?</p>
              <div className="grid grid-cols-4 gap-2">
                {product.storage.map((option, i) => (
                  <button
                    key={option.value}
                    onClick={() => setActiveStorageIndex(i)}
                    className={`relative h-12 rounded-xl border-2 text-sm font-semibold transition-all ${
                      activeStorageIndex === i
                        ? 'border-primary bg-primary/5 text-primary'
                        : 'border-border/50 text-foreground hover:border-primary/30'
                    }`}
                  >
                    {option.label}
                    {activeStorageIndex === i && (
                      <Check className="absolute top-1 right-1 h-3.5 w-3.5 text-primary" strokeWidth={2.5} />
                    )}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between pt-6 border-t border-border/50">
              <span className="text-3xl font-bold text-foreground">
                {activeStorage.price}
              </span>
              <Button size="lg" className="gap-2">
                <ShoppingBag className="h-5 w-5" strokeWidth={1.5} />
                Add to Cart
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
