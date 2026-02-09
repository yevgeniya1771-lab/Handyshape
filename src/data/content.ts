import { Truck, ShieldCheck, RotateCcw, Zap, Clock, Package, Globe } from "lucide-react"
import type { FeatureItem, Review, ShippingItem, BlogPost, PromoBanner } from "@/types"

export const FEATURES: FeatureItem[] = [
  { icon: Truck, title: "Free Express Shipping", desc: "Orders over \u20AC50" },
  { icon: ShieldCheck, title: "12-Month Warranty", desc: "Certified by experts" },
  { icon: RotateCcw, title: "30-Day Easy Returns", desc: "No questions asked" },
  { icon: Zap, title: "Eco-Friendly Tech", desc: "Carbon neutral choice" },
]

export const REVIEWS: Review[] = [
  { name: "Michael von Sonnenberg", text: "Great company. I was pretty happy with the entire service and was provided." },
  { name: "Tim Paulson", text: "Recently ordered a replacement laptop. Service was quick and the laptop arrived within." },
  { name: "Harry", text: "Great website with helpful site. Prices were fair and I found a laptop that match." },
  { name: "Super Hardy", text: "Really impressed with the service from BuyBack. I was able to get a replacement." },
  { name: "Anna Schmidt", text: "Excellent quality refurbished iPhone. Looks brand new and works perfectly. Would buy again!" },
  { name: "James Walker", text: "Fast shipping and great customer support. My iPad arrived in perfect condition." },
  { name: "Sophie Laurent", text: "Best prices I found online for certified devices. The warranty gives great peace of mind." },
  { name: "David Chen", text: "Traded in my old phone and got a fantastic deal on the iPhone 16. Seamless process." },
]

export const SHIPPING_ITEMS: ShippingItem[] = [
  { icon: Truck, title: "Free Shipping", text: "On all orders over \u20AC50. Fast delivery to your door." },
  { icon: Clock, title: "Express Delivery", text: "Need it fast? Get it within 24-48 hours." },
  { icon: Package, title: "Secure Packaging", text: "Premium packaging ensures safe arrival." },
  { icon: Globe, title: "Track Your Order", text: "Real-time updates from warehouse to doorstep." },
]

export const BLOG_POSTS: BlogPost[] = [
  { title: "The Ultimate Guide to Choosing Your Next iPhone Model", category: "Tips & Tricks", bg: "from-slate-100 to-slate-50", img: "/storycard1.jpeg" },
  { title: "Find the Perfect Color: A Buyer's Complete Handbook", category: "Buying Guide", bg: "from-blue-100 to-blue-50", img: "/storycard2.jpeg" },
  { title: "Top Power Tips to Get the Most From Your Device", category: "Tech News", bg: "from-purple-100 to-purple-50", img: "/storycard3.jpg" },
]

export const PROMO_BANNERS: PromoBanner[] = [
  {
    title: "budget-friendly",
    text: "Discover our selection of certified refurbished devices at incredible prices. Premium quality within your budget.",
    bg: "from-green-200/60 via-emerald-100/50 to-teal-100/40",
    img: "/banner%201.png",
    alt: "Budget-friendly devices",
  },
  {
    title: "save.",
    text: "Get credit towards your next iPhone when you trade in your current device.",
    bg: "from-orange-200/60 via-amber-100/50 to-yellow-100/40",
    img: "/banner%202.png",
    alt: "Trade-in program",
  },
]

export const BANNER_ROTATE_INTERVAL_MS = 5000
export const DRAG_THRESHOLD_PX = 50
