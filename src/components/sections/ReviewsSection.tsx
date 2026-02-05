import { Star, CheckCircle, ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { REVIEWS } from "@/data/content"

export function ReviewsSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <div className="mb-8 sm:mb-12 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
          Loved by Customers
        </h2>
        <p className="mt-3 text-sm sm:text-base lg:text-lg text-muted-foreground">Real reviews from Trustpilot</p>
      </div>

      <div className="flex gap-4 sm:gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4">
        {REVIEWS.map((review) => (
          <Card
            key={review.name}
            className="min-w-[260px] sm:min-w-[300px] snap-start border-gray/50/50 hover:shadow-lg transition-shadow bg-gradient-to-br from-background to-muted/20 shrink-0"
          >
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: 5 }).map((_, star) => (
                  <Star key={star} className="h-3.5 w-3.5 fill-green-500 text-green-500" />
                ))}
              </div>
              <h4 className="font-semibold text-foreground mb-2 text-sm">{review.name}</h4>
              <p className="text-xs leading-relaxed text-muted-foreground mb-4">
                {review.text}
              </p>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <CheckCircle className="h-3 w-3 text-green-500" />
                <span>Verified Purchase</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-6 sm:mt-8 text-center text-xs sm:text-sm text-muted-foreground">
        Showing {REVIEWS.length} of 3,847 5-star reviews on <span className="font-semibold text-foreground">Trustpilot</span>
      </div>
      <div className="mt-6 flex justify-center">
        <Button variant="secondary" className="group/btn gap-1.5">
          View all reviews
          <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5" strokeWidth={1.5} />
        </Button>
      </div>
    </section>
  )
}
