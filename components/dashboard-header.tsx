import Link from "next/link"
import { Settings } from "lucide-react"
import { Button } from "@/components/ui/button"

export function DashboardHeader() {
  return (
    <header className="border-b border-gray-800">
      <nav className="container mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-12">
          <Link href="/" className="text-2xl font-bold text-[#7CFFE0]">
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 0L33.4903 9V27L18 36L2.50962 27V9L18 0Z" fill="#0B0F1C"/>
              <path d="M18 4L29.3923 10.5V23.5L18 30L6.60768 23.5V10.5L18 4Z" stroke="#7CFFE0" strokeWidth="2"/>
            </svg>
          </Link>
          <div className="flex items-center space-x-8">
            <Link href="/swap" className="text-gray-400 hover:text-white transition-colors">
              Swap
            </Link>
            <Link href="/liquidity" className="text-gray-400 hover:text-white transition-colors">
              Liquidity
            </Link>
            <Link href="/portfolio" className="text-white">
              Portfolio
            </Link>
            <Link href="/perpetuals" className="text-gray-400 hover:text-white transition-colors">
              Perpetuals
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
              More
            </Link>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 bg-gray-800/50 rounded-full px-4 py-1">
            <span className="text-sm text-gray-400">Priority:</span>
            <span className="text-[#7CFFE0]">Turbo</span>
          </div>
          <Button variant="ghost" size="icon" className="text-gray-400">
            <Settings className="h-5 w-5" />
          </Button>
          <Button className="bg-[#7CFFE0] text-gray-900 hover:bg-[#7CFFE0]/90">Connect Wallet</Button>
        </div>
      </nav>
    </header>
  )
} 