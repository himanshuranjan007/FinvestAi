import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, Shield, BarChart3 } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#0B0F1C]">
      {/* Hero Section */}
      <div className="container mx-auto px-6 pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-6xl font-bold">
            <span className="text-[#7CFFE0]">AI-Powered</span> Web3 Investment Agent
          </h1>
          <p className="text-xl text-gray-400">
            Optimize your Solana portfolio with cutting-edge AI technology. Automated trading, risk management, and
            portfolio optimization.
          </p>
          <div className="flex justify-center space-x-4">
            <Button size="lg" className="bg-[#7CFFE0] text-gray-900 hover:bg-[#7CFFE0]/90">
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-[#7CFFE0] text-[#7CFFE0] hover:bg-[#7CFFE0]/10">
              View Demo
            </Button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-800/30 backdrop-blur-lg rounded-xl p-8 border border-gray-800">
            <div className="w-12 h-12 bg-[#7CFFE0]/10 rounded-lg flex items-center justify-center mb-6">
              <Zap className="h-6 w-6 text-[#7CFFE0]" />
            </div>
            <h3 className="text-xl font-semibold mb-4">AI-Driven Trading</h3>
            <p className="text-gray-400">
              Advanced algorithms analyze market trends and execute trades automatically for optimal returns.
            </p>
          </div>
          <div className="bg-gray-800/30 backdrop-blur-lg rounded-xl p-8 border border-gray-800">
            <div className="w-12 h-12 bg-[#7CFFE0]/10 rounded-lg flex items-center justify-center mb-6">
              <Shield className="h-6 w-6 text-[#7CFFE0]" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Risk Management</h3>
            <p className="text-gray-400">
              Sophisticated risk management systems protect your portfolio in volatile markets.
            </p>
          </div>
          <div className="bg-gray-800/30 backdrop-blur-lg rounded-xl p-8 border border-gray-800">
            <div className="w-12 h-12 bg-[#7CFFE0]/10 rounded-lg flex items-center justify-center mb-6">
              <BarChart3 className="h-6 w-6 text-[#7CFFE0]" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Portfolio Analytics</h3>
            <p className="text-gray-400">Real-time analytics and insights to track your portfolio's performance.</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-6 py-20">
        <div className="bg-gradient-to-r from-[#7CFFE0]/10 to-transparent rounded-xl p-12 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Join thousands of investors using FinvestAI to optimize their Web3 portfolios.
          </p>
          <Button size="lg" className="bg-[#7CFFE0] text-gray-900 hover:bg-[#7CFFE0]/90">
            Launch App <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  )
}

