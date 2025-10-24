import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary-foreground rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold">SM</span>
              </div>
              <span className="font-bold text-lg">Swift Movers</span>
            </div>
            <p className="opacity-90">Professional moving and packing services you can trust.</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 opacity-90">
              <li>
                <Link href="/" className="hover:opacity-100 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:opacity-100 transition">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:opacity-100 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 opacity-90">
              <li>
                <a href="#" className="hover:opacity-100 transition">
                  Residential Moving
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition">
                  Commercial Moving
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition">
                  Storage Solutions
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="hover:opacity-75 transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:opacity-75 transition">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:opacity-75 transition">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:opacity-75 transition">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center opacity-90">
          <p>&copy; 2025 Swift Movers. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
