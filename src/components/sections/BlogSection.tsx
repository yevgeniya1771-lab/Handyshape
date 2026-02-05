import { Smartphone, ArrowRight } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BLOG_POSTS } from "@/data/content"

export function BlogSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <div className="mb-8 sm:mb-12 flex items-center justify-between">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Latest stories & tips
          </h2>
          <p className="mt-2 text-sm sm:text-base text-muted-foreground">The Blog</p>
        </div>
        <Button variant="secondary" className="group/btn gap-1.5">
          View all
          <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5" strokeWidth={1.5} />
        </Button>
      </div>

      <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
        {BLOG_POSTS.map((post) => (
          <Card
            key={post.title}
            className="group overflow-hidden border-gray/50/50 hover:border-primary/30 transition-all hover:shadow-xl cursor-pointer"
          >
            <div className="flex flex-col p-4">
              <div className={`aspect-[16/10] rounded-xl bg-gradient-to-br ${post.bg} flex items-center justify-center mb-1`}>
                <Smartphone className="h-24 w-24 sm:h-32 sm:w-32 text-muted-foreground/20 group-hover:scale-110 transition-transform" />
              </div>
              <p className="text-xs text-muted-foreground mt-3 mb-1">{post.category}</p>
              <h3 className="text-sm sm:text-base font-semibold text-foreground leading-snug mb-3">
                {post.title}
              </h3>
              <span className="group/link inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-primary cursor-pointer">
                Read article
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-0.5" strokeWidth={1.5} />
              </span>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}
