"use client"

import { useState, useCallback, memo } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import dynamic from 'next/dynamic'
import { Menu } from "lucide-react"
import { cn } from "@/lib/utils"

// Lazy load components that aren't immediately needed
const ThemeToggle = dynamic(
  () => import('@/components/theme-toggle').then((mod) => mod.ThemeToggle),
  { ssr: false }
)

const Sheet = dynamic(
  () => import('@/components/ui/sheet').then((mod) => mod.Sheet),
  { ssr: false }
)
const SheetContent = dynamic(
  () => import('@/components/ui/sheet').then((mod) => mod.SheetContent),
  { ssr: false }
)
const SheetTrigger = dynamic(
  () => import('@/components/ui/sheet').then((mod) => mod.SheetTrigger),
  { ssr: false }
)
const Button = dynamic(
  () => import('@/components/ui/button').then((mod) => mod.Button),
  { ssr: false }
)

const NAV_ITEMS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
] as const

const NavLink = memo(({ href, name, pathname, onClick }: { href: string, name: string, pathname: string, onClick?: () => void }) => (
  <Link
    href={href}
    onClick={onClick}
    className={cn(
      "relative px-3 py-2 text-sm font-medium transition-colors hover:text-primary",
      pathname === href ? "text-primary" : "text-muted-foreground hover:text-foreground"
    )}
  >
    {name}
    {pathname === href && (
      <motion.span
        className="absolute bottom-0 left-0 h-0.5 bg-primary w-full"
        layoutId="activeNav"
        transition={{
          type: "spring",
          stiffness: 380,
          damping: 30,
        }}
      />
    )}
  </Link>
))

NavLink.displayName = 'NavLink'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  
  const closeMenu = useCallback(() => {
    setIsOpen(false)
  }, [])

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, y: -20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.6,
              delay: 0.2,
              type: "spring",
              stiffness: 80,
              damping: 10
            }}
          >
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Sayan Sasmal
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <NavLink 
                key={item.href}
                href={item.href}
                name={item.name}
                pathname={pathname}
              />
            ))}
            <ThemeToggle />
          </nav>

          <div className="flex items-center space-x-4">
            {/* Mobile Navigation */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-4 mt-8">
                  {NAV_ITEMS.map((item) => (
                    <NavLink
                      key={item.href}
                      href={item.href}
                      name={item.name}
                      pathname={pathname}
                      onClick={closeMenu}
                    />
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
