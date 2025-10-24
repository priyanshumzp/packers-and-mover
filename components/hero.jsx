import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-primary/10 to-accent/10 py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
              Your Trusted Partner for <span className="text-primary">Seamless Moving</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Professional packing and moving services that make your relocation stress-free. We handle your belongings
              with care and expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:opacity-90 transition flex items-center justify-center gap-2 font-semibold"
              >
                Get Free Quote <ArrowRight size={20} />
              </Link>
              <Link
                href="/services"
                className="border-2 border-primary text-primary px-8 py-3 rounded-lg hover:bg-primary/5 transition font-semibold"
              >
                Explore Services
              </Link>
            </div>
          </div>
          <div className="relative h-96 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl overflow-hidden">
            <img
              src="/movers-packing-boxes.png"
              alt="Professional moving service"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
