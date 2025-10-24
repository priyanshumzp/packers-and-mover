import Link from "next/link"

export default function CTA() {
  return (
    <section className="py-20 md:py-32 bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Move?</h2>
        <p className="text-lg mb-8 opacity-90">Get a free quote today and experience the Swift Movers difference</p>
        <Link
          href="/contact"
          className="inline-block bg-primary-foreground text-primary px-8 py-3 rounded-lg hover:opacity-90 transition font-semibold"
        >
          Request Your Free Quote
        </Link>
      </div>
    </section>
  )
}
