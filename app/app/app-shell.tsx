"use client"

import { useEffect, useMemo, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, Moon, Sun, X, Heart, Info, Settings } from "lucide-react"

import { cn } from "@/lib/utils"

type NavItem = {
  label: string
  href: string
}

export default function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [isDark, setIsDark] = useState(true)

  const navItems = useMemo<NavItem[]>(
    () => [
      { label: "Songs", href: "/app/songs" },
      { label: "Favorites", href: "/app/favorites" },
      { label: "About", href: "/app/about" },
      { label: "Settings", href: "/app/settings" },
    ],
    [],
  )

  const getIcon = (label: string) => {
    switch (label) {
      case "Favorites":
        return <Heart className="h-4 w-4 mr-2" />
      case "About":
        return <Info className="h-4 w-4 mr-2" />
      case "Settings":
        return <Settings className="h-4 w-4 mr-2" />
      default:
        return null
    }
  }

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"))
  }, [])

  function toggleDarkMode() {
    const nextIsDark = !isDark
    setIsDark(nextIsDark)
    document.documentElement.classList.toggle("dark", nextIsDark)
  }

  function Nav({ onNavigate }: { onNavigate?: () => void }) {
    return (
      <nav className="grid gap-1 px-3 py-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={onNavigate}
              aria-current={isActive ? "page" : undefined}
              className={cn(
                "relative rounded-md px-3 py-2 text-sm font-medium transition-colors flex items-center",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                isActive && "bg-sidebar-accent text-sidebar-accent-foreground",
              )}
            >
              {getIcon(item.label)}
              {item.label}
            </Link>
          )
        })}
      </nav>
    )
  }

  return (
    <div className="min-h-dvh bg-background text-foreground">
      {/* Desktop sidebar */}
      <aside className="hidden md:fixed md:inset-y-0 md:z-30 md:flex md:w-64 md:flex-col md:border-r md:border-sidebar-border md:bg-sidebar md:text-sidebar-foreground">
        <div className="flex h-14 items-center border-b border-sidebar-border px-4">
          <div className="leading-tight">
            <div className="font-semibold tracking-tight">Calvary Songs</div>
            <div className="text-xs text-muted-foreground">Library</div>
          </div>
        </div>
        <div className="px-4 pt-4 pb-2 text-xs font-medium text-muted-foreground">Menu</div>
        <Nav />
      </aside>

      {/* Main area */}
      <div className="md:pl-64">
        {/* Topbar */}
        <header className="sticky top-0 z-20 flex h-14 items-center gap-3 border-b bg-background/90 px-4 backdrop-blur supports-backdrop-filter:bg-background/70">
          <button
            type="button"
            className={cn(
              "inline-flex h-9 w-9 items-center justify-center rounded-md border bg-background md:hidden",
              "hover:bg-accent hover:text-accent-foreground",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
            )}
            aria-label="Open menu"
            onClick={() => setDrawerOpen(true)}
          >
            <Menu className="h-5 w-5" />
          </button>
          <div className="font-semibold tracking-tight">Application</div>
          <div className="ml-auto" />
          <button
            type="button"
            className={cn(
              "inline-flex h-9 w-9 items-center justify-center rounded-md border bg-background",
              "hover:bg-accent hover:text-accent-foreground",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
            )}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            onClick={toggleDarkMode}
          >
            {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
        </header>

        <main className="p-4 md:p-6">
          <div className="mx-auto w-full max-w-6xl">
            <div className="rounded-xl border bg-card p-4 text-card-foreground md:p-6">
              {children}
            </div>
          </div>
        </main>
      </div>

      {/* Mobile drawer */}
      {drawerOpen ? (
        <div className="fixed inset-0 z-40 md:hidden" role="dialog" aria-modal="true">
          <button
            type="button"
            className="absolute inset-0 bg-background/70 backdrop-blur-sm"
            aria-label="Close menu"
            onClick={() => setDrawerOpen(false)}
          />
          <div className="absolute inset-y-0 left-0 w-72 border-r border-sidebar-border bg-sidebar text-sidebar-foreground shadow-lg">
            <div className="flex h-14 items-center justify-between border-b border-sidebar-border px-4">
              <div className="leading-tight">
                <div className="font-semibold tracking-tight">Calvary Songs</div>
                <div className="text-xs text-muted-foreground">Library</div>
              </div>
              <button
                type="button"
                className={cn(
                  "inline-flex h-9 w-9 items-center justify-center rounded-md border bg-background",
                  "hover:bg-accent hover:text-accent-foreground",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                )}
                aria-label="Close menu"
                onClick={() => setDrawerOpen(false)}
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="px-4 pt-4 pb-2 text-xs font-medium text-muted-foreground">Menu</div>
            <Nav onNavigate={() => setDrawerOpen(false)} />
          </div>
        </div>
      ) : null}
    </div>
  )
}
