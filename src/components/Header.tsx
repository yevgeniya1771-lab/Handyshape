'use client'

import { useState } from "react"
import Link from "next/link"
import { Search, User, ShoppingCart, Menu, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { NAV_LINKS } from "@/data/navigation"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="sticky top-0 z-50 bg-gradient-to-br from-primary/10 via-primary/5 to-background">
      <div className="bg-primary/5 backdrop-blur-md py-2 xs:py-2.5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs sm:text-sm font-medium text-amber-600">
            Free shipping on orders over &euro;50 | 30-day returns
          </p>
        </div>
      </div>

      <nav className="backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-14 items-center justify-between">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden h-10 w-10 inline-flex items-center justify-center rounded-full text-foreground hover:text-primary transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>

            <Link href="/" className="flex items-center shrink-0">
              <img src="/handyswap-logo.svg" alt="Handyswap" className="h-8 w-auto" />
            </Link>

            <NavigationMenu className="hidden md:flex">
              <NavigationMenuList className="gap-1">
                {NAV_LINKS.map((link) => (
                  <NavigationMenuItem key={link.href}>
                    <Link href={link.href}>
                      <NavigationMenuLink className="px-4 py-1.5 text-sm font-medium transition-colors hover:bg-primary/10 hover:text-primary rounded-lg">
                        {link.label}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            <div className="flex items-center gap-2 shrink-0">
              <div className="group relative hidden sm:flex items-center">
                <div className="flex items-center overflow-hidden rounded-[99px] transition-all duration-300 ease-in-out w-10 group-hover:w-[280px] group-focus-within:w-[280px] h-10">
                  <div className="absolute left-0 w-10 h-10 flex items-center justify-center z-10 cursor-pointer">
                    <Search className="h-5 w-5 hover:text-primary transition-colors" />
                  </div>
                  <Input
                    placeholder="Search..."
                    className="pl-10 h-10 rounded-[99px] bg-white/50 border-white/50 focus:border-primary/50 focus:ring-primary/20 w-full backdrop-blur-sm opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-300"
                  />
                </div>
              </div>
              <button className="hidden sm:inline-flex h-10 w-10 items-center justify-center rounded-full text-foreground hover:text-primary transition-colors">
                <User className="h-5 w-5" />
              </button>
              <button className="h-10 w-10 inline-flex items-center justify-center rounded-full text-foreground hover:text-primary transition-colors">
                <ShoppingCart className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="md:hidden px-3 xs:px-4 py-1.5 xs:py-2 bg-background/80 backdrop-blur-xl">
          <div className="relative">
            <Search className="absolute left-2.5 xs:left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 xs:h-4 xs:w-4 text-muted-foreground" />
            <Input
              placeholder="Search products..."
              className="pl-8 xs:pl-10 h-9 xs:h-10 rounded-full bg-muted/50 border-border/50 text-xs xs:text-sm"
            />
          </div>
        </div>

        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            mobileMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-4 py-3 space-y-1 bg-background/95 backdrop-blur-xl border-t border-border/40">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center px-4 py-3 text-base font-medium text-foreground hover:bg-primary/10 hover:text-primary rounded-xl transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/account"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 px-4 py-3 text-base font-medium text-foreground hover:bg-primary/10 hover:text-primary rounded-xl transition-colors"
            >
              <User className="h-5 w-5" />
              Account
            </Link>
          </div>
        </div>
      </nav>
    </div>
  )
}
