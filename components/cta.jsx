import Link from "next/link"

export default function CTA() {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/5 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/10 rounded-full animate-pulse delay-500"></div>
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Move?</h2>
        <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto leading-relaxed">
          Get a free quote today and experience the JBT Packers and Movers difference with our professional team
        </p>
        <Link
          href="/contact"
          className="inline-block bg-white text-blue-600 px-10 py-4 rounded-2xl hover:shadow-xl hover:scale-105 transition-all duration-300 font-bold text-lg"
        >
          Request Your Free Quote
        </Link>
      </div>
    </section>
  )
}
