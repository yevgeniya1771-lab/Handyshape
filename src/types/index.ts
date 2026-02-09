import type { LucideIcon } from "lucide-react"
import type { ReactNode } from "react"

export type ProductColor = {
  name: string
  class: string
  img: string
}

export type Product = {
  id: number
  name: string
  price: string
  colors: ProductColor[]
}

export type StorageOption = {
  label: string
  value: string
  price: string
}

export type PDPProduct = Product & {
  description: string
  storage: StorageOption[]
}

export type AirpodsColor = {
  name: string
  img: string
  bg: string
  dot: string
}

export type PromoBanner = {
  title: ReactNode
  text: string
  bg: string
  img: string
  alt: string
}

export type HeroBanner = {
  badge?: ReactNode
  heading: ReactNode
  description: string
  cta: string
  img: string
  alt: string
  imgWidth?: string
  imgBottom?: string
}

export type FeatureItem = {
  icon: LucideIcon
  title: string
  desc: string
}

export type Review = {
  name: string
  text: string
}

export type ShippingItem = {
  icon: LucideIcon
  title: string
  text: string
}

export type BlogPost = {
  title: string
  category: string
  bg: string
  img?: string
}

export type NavLink = {
  label: string
  href: string
}

export type FooterSection = {
  title: string
  links: NavLink[]
}
