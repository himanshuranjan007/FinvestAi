import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function SupportPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-8 text-white">Support</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Contact Us</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <Input placeholder="Your Name" />
              <Input type="email" placeholder="Your Email" />
              <Textarea placeholder="Your Message" />
              <Button>Send Message</Button>
            </form>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>FAQs</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">How does FinvestAI work?</h3>
                <p>
                  FinvestAI uses advanced AI algorithms to analyze market trends and make investment decisions in the
                  Solana ecosystem.
                </p>
              </div>
              <div>
                <h3 className="font-semibold">Is my investment safe?</h3>
                <p>
                  We implement robust security measures and risk management strategies to protect your investments.
                  However, all investments carry inherent risks.
                </p>
              </div>
              <div>
                <h3 className="font-semibold">How can I withdraw my funds?</h3>
                <p>
                  You can withdraw your funds at any time through our user-friendly dashboard. Withdrawals are typically
                  processed within 24 hours.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

