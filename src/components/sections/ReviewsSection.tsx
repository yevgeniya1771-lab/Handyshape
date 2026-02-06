import { Star, CheckCircle, ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { REVIEWS } from "@/data/content"

export function ReviewsSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-8 xs:py-10 md:py-14 lg:py-20">
      <div className="mb-4 xs:mb-6 md:mb-10 lg:mb-12 text-center">
        <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-foreground">
          Loved by Customers
        </h2>
        <p className="mt-1 xs:mt-2 md:mt-3 text-xs xs:text-sm md:text-base lg:text-lg text-muted-foreground">Real reviews from Trustpilot</p>
      </div>

      <div className="flex gap-3 xs:gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4">
        {REVIEWS.map((review) => (
          <Card
            key={review.name}
            className="min-w-[200px] xs:min-w-[240px] sm:min-w-[280px] md:min-w-[300px] snap-start border-gray/50/50 hover:shadow-lg transition-shadow bg-gradient-to-br from-background to-muted/20 shrink-0"
          >
            <CardContent className="p-3 xs:p-4 md:p-6">
              <div className="flex items-center gap-0.5 xs:gap-1 mb-2 xs:mb-3">
                {Array.from({ length: 5 }).map((_, star) => (
                  <Star key={star} className="h-3 w-3 xs:h-3.5 xs:w-3.5 fill-green-500 text-green-500" />
                ))}
              </div>
              <h4 className="font-semibold text-foreground mb-1.5 xs:mb-2 text-xs xs:text-sm">{review.name}</h4>
              <p className="text-[10px] xs:text-xs leading-relaxed text-muted-foreground mb-3 xs:mb-4">
                {review.text}
              </p>
              <div className="flex items-center gap-1.5 xs:gap-2 text-[10px] xs:text-xs text-muted-foreground">
                <CheckCircle className="h-2.5 w-2.5 xs:h-3 xs:w-3 text-green-500" />
                <span>Verified Purchase</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-4 xs:mt-6 md:mt-8 text-center text-[10px] xs:text-xs md:text-sm text-muted-foreground">
        Showing {REVIEWS.length} of 3,847 5-star reviews on <span className="font-semibold text-foreground">Trustpilot</span>
      </div>
      <div className="mt-4 xs:mt-6 flex justify-center">
        <Button variant="secondary" className="group/btn gap-1 xs:gap-1.5 text-xs xs:text-sm">
          View all reviews
          <ArrowRight className="h-3.5 w-3.5 xs:h-4 xs:w-4 transition-transform group-hover/btn:translate-x-0.5" strokeWidth={1.5} />
        </Button>
      </div>
    </section>
  )
}
