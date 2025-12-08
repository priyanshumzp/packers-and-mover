import Hero from "@/components/hero"
import Services from "@/components/services"
import WhyChooseUs from "@/components/why-choose-us"
import Reviews from "@/components/reviews"
import CTA from "@/components/cta"

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <WhyChooseUs />
      <Reviews />
      <CTA />
    </main>
  )
}
