import type { NavLink, FooterSection } from "@/types"

export const NAV_LINKS: NavLink[] = [
  { label: "iPhones", href: "/iphone" },
  { label: "Samsung", href: "/samsung" },
  { label: "Tablets", href: "/tablets" },
  { label: "Earbuds", href: "/earbuds" },
  { label: "Support", href: "/support" },
]

export const FOOTER_SECTIONS: FooterSection[] = [
  {
    title: "Shop",
    links: [
      { label: "Buy iPhone", href: "/iphone" },
      { label: "Buy Samsung", href: "/samsung" },
      { label: "Buy iPad", href: "/tablets" },
      { label: "Buy AirPods", href: "/earbuds" },
      { label: "Trade In", href: "/trade-in" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Press", href: "/press" },
      { label: "Sustainability", href: "/sustainability" },
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help Center", href: "/help" },
      { label: "Contact Us", href: "/contact" },
      { label: "Warranty Info", href: "/warranty" },
      { label: "Returns", href: "/returns" },
      { label: "Shipping Info", href: "/shipping" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Cookie Policy", href: "/cookies" },
      { label: "Imprint", href: "/imprint" },
    ],
  },
]

export const PAYMENT_METHODS = ["Apple Pay", "Visa", "Mastercard", "PayPal"] as const
