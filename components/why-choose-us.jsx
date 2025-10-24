import { CheckCircle2 } from "lucide-react"

const reasons = [
  "Licensed and insured professionals",
  "Over 15 years of industry experience",
  "Transparent pricing with no hidden fees",
  "Available 24/7 customer support",
  "Eco-friendly packing materials",
  "Real-time tracking of your shipment",
]

export default function WhyChooseUs() {
  return (
    <section className="py-20 md:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">Why Choose Swift Movers?</h2>
            <div className="space-y-4">
              {reasons.map((reason, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={24} />
                  <p className="text-lg text-foreground">{reason}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-96 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl overflow-hidden">
            <img
              src="/happy-customers-moving-day.jpg"
              alt="Customer satisfaction"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
