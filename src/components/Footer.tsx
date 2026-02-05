import Link from "next/link"
import { CheckCircle } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { FOOTER_SECTIONS, PAYMENT_METHODS } from "@/data/navigation"

export function Footer() {
  return (
    <footer className="border-t border-gray/50 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid gap-6 sm:gap-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mb-8 sm:mb-12">
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <Link href="/" className="flex items-center mb-4">
              <img src="/handyswap-logo.svg" alt="Handyswap" className="h-8 w-auto" />
            </Link>
            <p className="text-xs sm:text-sm leading-relaxed text-muted-foreground max-w-md mb-4 sm:mb-6">
              {'We are the best device solution. Approved for reselling devices to customers. We are trusted and 100% safe certified.'}
            </p>
            <div className="text-xs sm:text-sm text-muted-foreground">
              <p>Handyswap GmbH</p>
              <p>Musterstra&szlig;e 123</p>
              <p>10115 Berlin, Germany</p>
            </div>
          </div>

          {FOOTER_SECTIONS.map((section) => (
            <div key={section.title}>
              <h3 className="text-xs sm:text-sm font-semibold text-foreground mb-3 sm:mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2 sm:space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray/50 pt-6 sm:pt-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4 sm:gap-6 mb-4 sm:mb-6">
            <p className="text-xs sm:text-sm text-muted-foreground">
              &copy; 2026 Handyswap. All rights reserved.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3">
              <span className="text-xs text-muted-foreground">Secure Payment:</span>
              <div className="flex gap-1.5 sm:gap-2">
                {PAYMENT_METHODS.map((method) => (
                  <div
                    key={method}
                    className="h-6 sm:h-7 px-2 sm:px-2.5 rounded-md bg-white border border-gray/50 flex items-center justify-center shadow-sm"
                  >
                    <span className="text-[10px] sm:text-xs font-medium text-foreground">{method}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs text-muted-foreground">
            <Badge className="rounded-md gap-1.5">
              <CheckCircle className="h-3 w-3 text-green-500" />
              Trusted Shop
            </Badge>
            <span className="hidden sm:inline">&bull;</span>
            <span>SSL Secured</span>
            <span className="hidden sm:inline">&bull;</span>
            <span>30-Day Money Back</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
