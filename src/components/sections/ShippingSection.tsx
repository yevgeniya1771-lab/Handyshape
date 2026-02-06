import { Card, CardContent } from "@/components/ui/card"
import { SHIPPING_ITEMS } from "@/data/content"

export function ShippingSection() {
  return (
    <section className="relative bg-gradient-to-br from-primary/5 via-primary/3 to-background border-y border-gray/50/50">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-8 xs:py-10 md:py-14 lg:py-20">
        <div className="mb-4 xs:mb-6 md:mb-10 lg:mb-12 text-center">
          <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-foreground">
            Shipping & Delivery
          </h2>
          <p className="mt-1 xs:mt-2 md:mt-3 text-xs xs:text-sm md:text-base lg:text-lg text-muted-foreground">Fast, secure, and reliable</p>
        </div>

        <div className="grid gap-2.5 xs:gap-4 md:gap-6 grid-cols-2 md:grid-cols-4">
          {SHIPPING_ITEMS.map((item) => (
            <Card key={item.title} className="border-gray/50/50 bg-background/80 backdrop-blur-sm hover:shadow-lg transition-all overflow-visible">
              <CardContent className="p-3 pt-3 xs:p-4 xs:pt-4 md:p-6 md:pt-6 lg:p-8 lg:pt-8 text-center">
                <div className="mx-auto h-10 w-10 xs:h-12 xs:w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 rounded-lg xs:rounded-xl md:rounded-2xl bg-accent/15 flex items-center justify-center mb-2 xs:mb-3 md:mb-4 lg:mb-6">
                  <item.icon className="h-5 w-5 xs:h-6 xs:w-6 md:h-7 md:w-7 lg:h-8 lg:w-8 text-accent" />
                </div>
                <h3 className="text-xs xs:text-sm md:text-base lg:text-lg font-semibold text-foreground mb-1 xs:mb-1.5 md:mb-2 lg:mb-3">{item.title}</h3>
                <p className="text-[9px] xs:text-[10px] md:text-xs lg:text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
