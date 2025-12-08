import { Truck, Package, Home, Building2, Clock, Shield } from "lucide-react"

const services = [
  {
    icon: Truck,
    title: "Residential Moving",
    description:
      "Complete moving solutions for homes, apartments, and condos with professional packing and transportation.",
  },
  {
    icon: Building2,
    title: "Commercial Moving",
    description: "Office relocation services with minimal downtime and specialized handling of equipment.",
  },
  {
    icon: Package,
    title: "Packing Services",
    description: "Professional packing using quality materials to ensure your items arrive safely.",
  },
  {
    icon: Home,
    title: "Storage Solutions",
    description: "Secure, climate-controlled storage facilities for short-term and long-term needs.",
  },
  {
    icon: Clock,
    title: "Same-Day Service",
    description: "Emergency moving services available for urgent relocation needs.",
  },
  {
    icon: Shield,
    title: "Insurance Coverage",
    description: "Full insurance coverage for all your belongings during transit.",
  },
]

export default function Services() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Our Services</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive moving and packing solutions tailored to your needs with professional expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div key={index} className="group bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-xl hover:border-blue-200 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="text-blue-600" size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
