import { FEATURES } from "@/data/content"

export function FeaturesBar() {
  return (
    <section className="py-12 bg-muted/30 border-y border-border/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {FEATURES.map((item) => (
            <div key={item.title} className="flex items-center gap-4 group">
              <div className="p-3 bg-background rounded-2xl shadow-sm border border-border/50 transition-colors group-hover:border-primary/30">
                <item.icon className="h-6 w-6 text-primary" strokeWidth={1.5} />
              </div>
              <div className="flex flex-col">
                <h4 className="font-bold text-sm uppercase tracking-tight text-foreground">
                  {item.title}
                </h4>
                <p className="text-xs text-muted-foreground font-medium">
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
