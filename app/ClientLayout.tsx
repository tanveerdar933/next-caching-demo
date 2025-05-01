"use client"

import type React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <header className="bg-white border-b">
          <nav className="container mx-auto flex space-x-6 py-4">
            <NavLinks />
          </nav>
        </header>
        <main className="flex-grow container mx-auto p-6">{children}</main>
        <footer className="bg-white border-t text-center py-4 text-sm text-gray-500">
          © 2025 Demo Corp. All rights reserved.
        </footer>
      </body>
    </html>
  )
}

// Client component for navigation with active state
function NavLinks() {
  const path = usePathname()
  const nav = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/blog", label: "Blog" },
    { href: "/pokemon", label: "Pokédex" },
  ]

  return (
    <>
      {nav.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={`${path === item.href ? "text-primary font-bold" : "text-gray-600"} hover:text-primary`}
        >
          {item.label}
        </Link>
      ))}
    </>
  )
}
