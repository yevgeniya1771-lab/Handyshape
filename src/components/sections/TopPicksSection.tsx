import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const TOP_PICKS = [
  {
    name: "iPad 11",
    badge: { label: "Limited Stock", className: "bg-primary text-primary-foreground" },
    description: "The iPad for everyday use. Powerful and versatile for work and play.",
    cta: "Shop iPad 11",
    img: "/Ipad%2011.png",
    cardClass: "bg-gradient-to-br from-blue-50/50 to-background border-gray/50/50",
    imgBg: "bg-gradient-to-br from-blue-100/50 to-blue-50/30",
    imgScale: "scale-[1.2] group-hover:scale-[1.25]",
  },
  {
    name: "AirPods Pro 3",
    badge: { label: "Hot Deal", className: "bg-accent text-accent-foreground font-semibold" },
    description: "Immersive sound. Active noise cancellation. Premium audio.",
    cta: "Shop Now",
    img: "/airpods%20pro%203.png",
    cardClass: "bg-background border-2 !border-accent hover:!border-accent/80",
    imgBg: "bg-white",
    imgScale: "group-hover:scale-110",
  },
  {
    name: "Samsung Galaxy S24",
    badge: { label: "Hot Deal", className: "bg-primary text-primary-foreground" },
    description: "Powerful performance. Stunning display. AI-powered features.",
    cta: "Shop Galaxy S24",
    img: "/galaxy%20s%2024.png",
    cardClass: "bg-gradient-to-br from-primary/5 to-background border-gray/50/50",
    imgBg: "bg-white",
    imgScale: "group-hover:scale-110",
  },
] as const

export function TopPicksSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <div className="mb-8 sm:mb-12 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
          Top Picks for Mobile, Tablet & Audio
        </h2>
        <p className="mt-3 text-sm sm:text-base lg:text-lg text-muted-foreground">Expand your tech ecosystem</p>
      </div>

      <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
        {TOP_PICKS.map((item) => (
          <Card
            key={item.name}
            className={`group relative overflow-hidden hover:border-primary/30 transition-all hover:shadow-xl ${item.cardClass}`}
          >
            <CardContent className="p-6 sm:p-8">
              <div className={`aspect-[4/3] rounded-2xl ${item.imgBg} flex items-center justify-center mb-4 sm:mb-6 p-4 sm:p-6 relative`}>
                <img
                  src={item.img}
                  alt={item.name}
                  className={`w-full h-full object-contain transition-transform duration-500 ${item.imgScale}`}
                />
              </div>
              <Badge className={`mb-3 sm:mb-4 rounded-full text-xs ${item.badge.className}`}>
                {item.badge.label}
              </Badge>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">{item.name}</h3>
              <p className="text-muted-foreground mb-4 sm:mb-6 leading-relaxed text-xs sm:text-sm">
                {item.description}
              </p>
              <Button variant="secondary" className="w-full" size="lg">
                {item.cta}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
