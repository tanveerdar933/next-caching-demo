"use client"

import { useRouter } from "next/navigation"

export function RefreshButton() {
  const router = useRouter()

  return (
    <button
      className="px-3 py-1.5 md:px-4 md:py-2 bg-teal-500 text-white text-sm md:text-base rounded hover:bg-teal-500/90 transition-colors"
      onClick={() => router.refresh()}
    >
      Refresh Data
    </button>
  )
}
