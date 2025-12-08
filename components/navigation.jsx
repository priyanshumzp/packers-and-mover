"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl">JBT</span>
            </div>
            <span className="font-bold text-xl text-foreground hidden sm:inline">JBT Packers and Movers</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-foreground hover:text-primary transition-colors font-medium">
              Home
            </Link>
            <Link href="/services" className="text-foreground hover:text-primary transition-colors font-medium">
              Services
            </Link>
            <Link href="/contact" className="text-foreground hover:text-primary transition-colors font-medium">
              Contact
            </Link>
            <Link
              href="/contact"
              className="bg-gradient-to-r from-primary to-accent text-white px-6 py-3 rounded-xl hover:shadow-lg transition-all duration-300 font-semibold"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 animate-in slide-in-from-top-2">
            <Link href="/" className="block px-4 py-3 text-foreground hover:bg-secondary rounded-lg transition-colors">
              Home
            </Link>
            <Link href="/services" className="block px-4 py-3 text-foreground hover:bg-secondary rounded-lg transition-colors">
              Services
            </Link>
            <Link href="/contact" className="block px-4 py-3 text-foreground hover:bg-secondary rounded-lg transition-colors">
              Contact
            </Link>
            <Link
              href="/contact"
              className="block px-4 py-3 bg-gradient-to-r from-primary to-accent text-white rounded-lg font-semibold"
            >
              Get Quote
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
