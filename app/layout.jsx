import { Outfit } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

const outfit = Outfit({ subsets: ["latin"] })

export const metadata = {
  title: "JBT Packers and Movers - Professional Packing & Moving Services",
  description: "Reliable and professional packing and moving services for residential and commercial needs.",
  generator: "v0.app",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${outfit.className} antialiased`}>
        <Navigation />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
