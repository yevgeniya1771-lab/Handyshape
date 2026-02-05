"use client"

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ShoppingCart, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import type { ProductColor } from "@/types"

type SmartphoneProduct = {
  id: string
  name: string
  price: string
  colors: (ProductColor & { hex: string })[]
}

const SMARTPHONES: SmartphoneProduct[] = [
  {
    id: 'iphone-15',
    name: 'iPhone 15',
    price: 'from \u20AC699',
    colors: [
      { name: 'Black', hex: '#35393B', class: '', img: '/phones/iPhone 15 - Black.jpg' },
      { name: 'Blue', hex: '#D2E0EB', class: '', img: '/phones/iPhone 15 - Blue.jpg' },
      { name: 'Green', hex: '#D5E0D1', class: '', img: '/phones/iPhone 15 - Green.jpg' },
      { name: 'Pink', hex: '#EBD5D5', class: '', img: '/phones/iPhone 15  - Pink.jpg' },
      { name: 'Yellow', hex: '#F0EBD3', class: '', img: '/phones/iPhone 15  - Yellow.jpg' },
    ]
  },
  {
    id: 'iphone-17-pro',
    name: 'iPhone 17 Pro',
    price: 'from \u20AC999',
    colors: [
      { name: 'Cosmic Orange', hex: '#CF8E5F', class: '', img: '/phones/iPhone 17 Pro - Cosmic Orange.jpg' },
      { name: 'Deep Blue', hex: '#2E3641', class: '', img: '/phones/iPhone 17 Pro - Deep Blue.jpg' },
      { name: 'Silver', hex: '#D1D5DB', class: '', img: '/phones/iPhone 17 Pro - Silver.jpg' },
    ]
  }
]

function SmartphoneCard({ phone }: { phone: SmartphoneProduct }) {
  const [activeColor, setActiveColor] = useState(phone.colors[0])

  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col h-full">
      <div className="relative h-72 mb-6 rounded-2xl bg-slate-50 overflow-hidden group">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeColor.img}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="relative w-full h-full"
          >
            <Image
              src={activeColor.img}
              alt={`${phone.name} ${activeColor.name}`}
              fill
              className="object-contain p-4"
              priority
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex-grow">
        <h3 className="text-xl font-semibold text-slate-900 mb-1">{phone.name}</h3>
        <p className="text-primary font-bold text-lg mb-4">{phone.price}</p>

        <div className="flex gap-3 mb-6">
          {phone.colors.map((color) => (
            <button
              key={color.name}
              onClick={() => setActiveColor(color)}
              className={`w-8 h-8 rounded-full border-2 transition-all ${
                activeColor.name === color.name ? 'border-primary scale-110' : 'border-transparent'
              }`}
              style={{ backgroundColor: color.hex }}
            />
          ))}
        </div>
      </div>

      <Button className="w-full bg-primary hover:bg-primary/85 text-white rounded-xl py-6 h-auto text-base font-medium transition-colors">
        <ShoppingCart className="mr-2 w-5 h-5" /> Add to Cart
      </Button>
    </div>
  )
}

export default function ProductSection() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl font-bold text-foreground tracking-tight">New Smartphones</h2>
            <p className="text-muted-foreground mt-2">Choose your perfect color</p>
          </div>
          <Button variant="ghost" className="text-primary hover:text-primary/80">
            View all <ChevronRight className="ml-1 w-4 h-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SMARTPHONES.map((phone) => (
            <SmartphoneCard key={phone.id} phone={phone} />
          ))}
        </div>
      </div>
    </section>
  )
}
