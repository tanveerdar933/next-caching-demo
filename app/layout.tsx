import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Next.js v15 Cache Demo",
  description: "Demonstrates Request Memoization, Data Cache, Full Route Cache, and Router Cache",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-gray-50">
        <Header />
        <main className="flex-grow container mx-auto p-4 md:p-6">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
