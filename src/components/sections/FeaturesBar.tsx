import { FEATURES } from "@/data/content"

export function FeaturesBar() {
  return (
    <section className="py-4 xs:py-6 md:py-10 lg:py-12 bg-muted/30 border-y border-border/40">
      <div className="mx-auto max-w-7xl px-0 md:px-6 lg:px-8">
        <div className="flex gap-4 xs:gap-6 overflow-x-auto scrollbar-hide px-4 md:px-0 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-8 lg:gap-12 md:overflow-visible">
          {FEATURES.map((item) => (
            <div key={item.title} className="flex items-center gap-2.5 xs:gap-3 md:gap-4 group shrink-0 md:shrink">
              <div className="p-2 xs:p-2.5 md:p-3 bg-background rounded-lg xs:rounded-xl md:rounded-2xl shadow-sm border border-border/50 transition-colors group-hover:border-primary/30">
                <item.icon className="h-4 w-4 xs:h-5 xs:w-5 md:h-6 md:w-6 text-primary" strokeWidth={1.5} />
              </div>
              <div className="flex flex-col">
                <h4 className="font-bold text-[10px] xs:text-xs md:text-sm uppercase tracking-tight text-foreground whitespace-nowrap">
                  {item.title}
                </h4>
                <p className="text-[9px] xs:text-[10px] md:text-xs text-muted-foreground font-medium whitespace-nowrap">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
