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
    <section className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive moving and packing solutions tailored to your needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div key={index} className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
