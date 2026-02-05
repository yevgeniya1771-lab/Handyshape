import { Card, CardContent } from "@/components/ui/card"
import { SHIPPING_ITEMS } from "@/data/content"

export function ShippingSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-primary/3 to-background border-y border-gray/50/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="mb-8 sm:mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Shipping & Delivery
          </h2>
          <p className="mt-3 text-sm sm:text-base lg:text-lg text-muted-foreground">Fast, secure, and reliable</p>
        </div>

        <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-4">
          {SHIPPING_ITEMS.map((item) => (
            <Card key={item.title} className="border-gray/50/50 bg-background/80 backdrop-blur-sm hover:shadow-lg transition-all">
              <CardContent className="p-6 sm:p-8 text-center">
                <div className="mx-auto h-14 w-14 sm:h-16 sm:w-16 rounded-2xl bg-accent/15 flex items-center justify-center mb-4 sm:mb-6">
                  <item.icon className="h-7 w-7 sm:h-8 sm:w-8 text-accent" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2 sm:mb-3">{item.title}</h3>
                <p className="text-xs sm:text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
