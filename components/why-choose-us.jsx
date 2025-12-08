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
    <section className="py-24 md:py-32 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Why Choose JBT Packers and Movers?</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Experience the difference of working with true moving professionals who care about your belongings
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div key={index} className="flex flex-col items-center text-center group">
                <div className="mb-8 p-8 rounded-3xl bg-gradient-to-br from-blue-500 via-blue-600 to-cyan-600 shadow-xl group-hover:shadow-2xl group-hover:scale-105 transition-all duration-300">
                  <Icon className="text-white" size={40} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 text-lg leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
