"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Settings } from "lucide-react"

export default function PortfolioPage() {
  const [positionType, setPositionType] = useState("concentrated")

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold">
          <span className="text-[#7CFFE0]">My</span> Portfolio
        </h1>
      </div>

      <div>
        <h2 className="text-xl mb-4">Overview</h2>
        <Tabs defaultValue="pool" className="w-full">
          <TabsList className="mb-6 bg-gray-800/50 p-1 rounded-md">
            <TabsTrigger 
              value="pool" 
              className="data-[state=active]:bg-[#7CFFE0] data-[state=active]:text-gray-900"
            >
              Assets by pool
            </TabsTrigger>
            <TabsTrigger 
              value="token" 
              className="data-[state=active]:bg-[#7CFFE0] data-[state=active]:text-gray-900"
            >
              Assets by token
            </TabsTrigger>
          </TabsList>
          <TabsContent value="pool">
            <Card className="bg-gray-800/50 border-gray-700 rounded-lg">
              <div className="p-8 text-center text-gray-400">Connect wallet to see your asset distribution.</div>
            </Card>
          </TabsContent>
          <TabsContent value="token">
            <Card className="bg-gray-800/50 border-gray-700 rounded-lg">
              <div className="p-8 text-center text-gray-400">Connect wallet to see your asset distribution.</div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-xl mb-4">Idle tokens</h2>
          <Card className="bg-gray-800/50 border-gray-700 rounded-lg">
            <div className="p-8 text-center text-gray-400">Connect wallet to see your deposited assets.</div>
          </Card>
        </div>
      </div>

      <div>
        <div className="flex items-center space-x-2 mb-4">
          <h2 className="text-xl">My positions</h2>
          <div className="w-4 h-4 rounded-full border-2 border-gray-600"></div>
        </div>
        <div className="flex space-x-2 mb-6">
          <Button
            variant="secondary"
            onClick={() => setPositionType("concentrated")}
            className={positionType === "concentrated" ? "bg-[#7CFFE0] text-gray-900" : "bg-gray-800/50"}
          >
            Concentrated
          </Button>
          <Button
            variant="secondary"
            onClick={() => setPositionType("standard")}
            className={positionType === "standard" ? "bg-[#7CFFE0] text-gray-900" : "bg-gray-800/50"}
          >
            Standard
          </Button>
          <Button
            variant="secondary"
            onClick={() => setPositionType("staked")}
            className={positionType === "staked" ? "bg-[#7CFFE0] text-gray-900" : "bg-gray-800/50"}
          >
            Staked RAY
          </Button>
        </div>
        <Card className="bg-gray-800/50 border-gray-700 rounded-lg">
          <div className="p-8 text-center text-gray-400">Connect wallet to see your positions.</div>
        </Card>
      </div>
    </div>
  )
}

