import Link from "next/link"
import { ArrowLeft } from "lucide-react"

const serviceDetails = [
  {
    title: "Residential Moving",
    description:
      "Whether you're moving to a new house, apartment, or condo, our residential moving services are designed to make your transition smooth and hassle-free.",
    features: [
      "Full-service packing and unpacking",
      "Furniture disassembly and reassembly",
      "Careful handling of fragile items",
      "Flexible scheduling options",
      "Professional and courteous staff",
    ],
  },
  {
    title: "Commercial Moving",
    description: "We specialize in office relocations with minimal disruption to your business operations.",
    features: [
      "After-hours moving available",
      "IT equipment handling",
      "Furniture and fixture relocation",
      "Project management services",
      "Customized moving plans",
    ],
  },
  {
    title: "Packing Services",
    description:
      "Our expert packing team uses high-quality materials and proven techniques to protect your belongings.",
    features: [
      "Professional packing materials",
      "Specialized handling for valuables",
      "Fragile item expertise",
      "Eco-friendly options available",
      "Unpacking services included",
    ],
  },
  {
    title: "Storage Solutions",
    description: "Secure, climate-controlled storage facilities for all your storage needs.",
    features: [
      "Climate-controlled units",
      "24/7 security surveillance",
      "Flexible rental periods",
      "Easy access to your items",
      "Competitive pricing",
    ],
  },
]

export default function ServiceDetail() {
  return (
    <div className="py-12 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 text-primary hover:text-primary/80 transition mb-8">
          <ArrowLeft size={20} />
          Back to Home
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-12">Our Services</h1>

        <div className="space-y-16">
          {serviceDetails.map((service, index) => (
            <div key={index} className="bg-card border border-border rounded-xl p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">{service.title}</h2>
              <p className="text-lg text-muted-foreground mb-8">{service.description}</p>

              <div className="grid md:grid-cols-2 gap-4">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-foreground">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-primary/10 border border-primary/20 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">Need More Information?</h3>
          <p className="text-muted-foreground mb-6">
            Contact us for a detailed consultation about your specific moving needs.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:opacity-90 transition font-semibold"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  )
}
