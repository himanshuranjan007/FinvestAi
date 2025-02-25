import type React from "react"
import { Inter } from "next/font/google"
import { DashboardHeader } from "@/components/dashboard-header"

const inter = Inter({ subsets: ["latin"] })

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={`min-h-screen bg-[#0B0F1C] text-white ${inter.className}`}>
      <DashboardHeader />
      <main className="container mx-auto px-6 py-8">{children}</main>
    </div>
  )
}

