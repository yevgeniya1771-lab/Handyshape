import type { Product, PDPProduct, AirpodsColor } from "@/types"

export const BESTSELLER_PRODUCTS: Product[] = [
  {
    id: 1,
    name: "iPhone 17 Pro",
    price: "\u20AC999",
    colors: [
      { name: "Deep Blue", class: "bg-[#2E445E]", img: "/phones/iphone17-deepblue.png" },
      { name: "Cosmic Orange", class: "bg-[#E88E5B]", img: "/phones/iphone17-orange.png" },
      { name: "Silver", class: "bg-[#E3E5E6]", img: "/phones/iphone17-silver.png" },
    ],
  },
  {
    id: 2,
    name: "iPhone 16",
    price: "\u20AC899",
    colors: [
      { name: "Teal", class: "bg-[#5B9E9E]", img: "/phones/iphone16-teal.png" },
      { name: "Pink", class: "bg-[#F2A9B3]", img: "/phones/iphone16-pink.png" },
      { name: "Ultramarine", class: "bg-[#3F51B5]", img: "/phones/iphone16-ultramarine.png" },
    ],
  },
  {
    id: 3,
    name: "iPhone 15",
    price: "\u20AC799",
    colors: [
      { name: "Pink", class: "bg-[#F9D7DA]", img: "/phones/iphone15-pink.png" },
      { name: "Yellow", class: "bg-[#F5F1D3]", img: "/phones/iphone15-yellow.png" },
      { name: "Black", class: "bg-[#35393B]", img: "/phones/iphone15-black.png" },
    ],
  },
]

export const IPHONE_17_PRO_PDP: PDPProduct = {
  id: 1,
  name: "iPhone 17 Pro",
  price: "\u20AC999",
  description:
    "The most advanced iPhone ever. Featuring the A21 Pro chip, a stunning 48MP camera system, and an aerospace-grade titanium design.",
  colors: [
    { name: "Deep Blue", class: "bg-[#2E445E]", img: "/phones/iphone17-deepblue.png" },
    { name: "Cosmic Orange", class: "bg-[#E88E5B]", img: "/phones/iphone17-orange.png" },
    { name: "Silver", class: "bg-[#E3E5E6]", img: "/phones/iphone17-silver.png" },
  ],
  storage: [
    { label: "128 GB", value: "128", price: "\u20AC999" },
    { label: "256 GB", value: "256", price: "\u20AC1099" },
    { label: "512 GB", value: "512", price: "\u20AC1299" },
    { label: "1 TB", value: "1024", price: "\u20AC1499" },
  ],
}

export const AIRPODS_COLORS: AirpodsColor[] = [
  { name: "Silver", img: "/Airpods%20Max%20Silver.png", bg: "bg-[#E8E8EA]", dot: "bg-[#C0C0C0]" },
  { name: "Blue", img: "/Airpods%20Max%20blue.png", bg: "bg-[#D3DEE8]", dot: "bg-[#5B7FA6]" },
  { name: "Green", img: "/Airpods%20Max%20green.png", bg: "bg-[#D3E8D9]", dot: "bg-[#6B9E7A]" },
  { name: "Red", img: "/Airpods%20Max%20red.png", bg: "bg-[#E8D3D3]", dot: "bg-[#C75050]" },
]
