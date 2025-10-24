import { Shield, Clock, DollarSign, Users } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Fully Insured",
    description: "Complete coverage for peace of mind",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Always here when you need us",
  },
  {
    icon: DollarSign,
    title: "Transparent Pricing",
    description: "No hidden fees, ever",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "10+ years of experience",
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Why Choose Swift Movers?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the difference of working with true moving professionals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div key={index} className="flex flex-col items-center text-center">
                {/* Gradient icon background */}
                <div className="mb-6 p-6 rounded-2xl bg-gradient-to-br from-primary via-primary/80 to-accent shadow-lg">
                  <Icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
