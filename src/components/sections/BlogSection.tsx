import { Smartphone, ArrowRight } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BLOG_POSTS } from "@/data/content"

export function BlogSection() {
  return (
    <section className="py-8 xs:py-10 md:py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 mb-4 xs:mb-6 md:mb-10 lg:mb-12 flex flex-row items-start md:items-center justify-between gap-3 xs:gap-4">
        <div className="shrink-0">
          <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-foreground">
            Latest stories & tips
          </h2>
          <p className="mt-0.5 xs:mt-1 md:mt-2 text-xs xs:text-sm md:text-base text-muted-foreground">The Blog</p>
        </div>
        <Button variant="secondary" className="group/btn gap-1 xs:gap-1.5 shrink-0 text-xs xs:text-sm">
          View all
          <ArrowRight className="h-3.5 w-3.5 xs:h-4 xs:w-4 transition-transform group-hover/btn:translate-x-0.5" strokeWidth={1.5} />
        </Button>
      </div>

      <div className="flex gap-3 xs:gap-4 overflow-x-auto scrollbar-hide px-4 md:px-6 lg:px-0 md:grid md:gap-6 md:grid-cols-2 lg:grid-cols-3 md:overflow-visible md:mx-auto md:max-w-7xl lg:px-8">
        {BLOG_POSTS.map((post) => (
          <Card
            key={post.title}
            className="group overflow-hidden border-gray/50/50 hover:border-primary/30 transition-all hover:shadow-xl cursor-pointer shrink-0 w-[220px] xs:w-[260px] sm:w-[280px] md:w-auto"
          >
            <div className="flex flex-col p-3 xs:p-4">
              <div className={`aspect-[16/10] rounded-lg xs:rounded-xl bg-gradient-to-br ${post.bg} flex items-center justify-center mb-1`}>
                <Smartphone className="h-16 w-16 xs:h-20 xs:w-20 sm:h-24 sm:w-24 md:h-32 md:w-32 text-muted-foreground/20 group-hover:scale-110 transition-transform" />
              </div>
              <p className="text-[10px] xs:text-xs text-muted-foreground mt-2 xs:mt-3 mb-0.5 xs:mb-1">{post.category}</p>
              <h3 className="text-xs xs:text-sm md:text-base font-semibold text-foreground leading-snug mb-2 xs:mb-3">
                {post.title}
              </h3>
              <span className="group/link inline-flex items-center gap-1 xs:gap-1.5 text-[10px] xs:text-xs md:text-sm font-semibold text-primary cursor-pointer">
                Read article
                <ArrowRight className="h-3 w-3 xs:h-3.5 xs:w-3.5 transition-transform group-hover/link:translate-x-0.5" strokeWidth={1.5} />
              </span>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}
