import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-8 text-white">About FinvestAI</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Our Mission</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              At FinvestAI, we're on a mission to democratize Web3 investing through the power of artificial
              intelligence. We believe that everyone should have access to sophisticated investment strategies,
              regardless of their experience or capital.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Our Technology</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              FinvestAI leverages cutting-edge AI and machine learning algorithms to analyze market trends, optimize
              portfolios, and execute trades in real-time. Our platform is built on the Solana blockchain, ensuring fast
              and cost-effective transactions.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Our Team</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Our team consists of experienced professionals from the fields of finance, artificial intelligence, and
              blockchain technology. We're passionate about creating innovative solutions that bridge the gap between
              traditional finance and the world of Web3.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Our Vision</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              We envision a future where AI-driven investment strategies are accessible to everyone, fostering financial
              inclusion and empowering individuals to take control of their financial future in the decentralized
              economy.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

