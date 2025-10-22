"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { label: "Features", href: "#features" },
    { label: "Chat ", href: "#chat" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Guides", href: "/guide" },
  ]

  const handleNavClick = (href) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
      setIsOpen(false)
    } else {
      window.location.href = href
    }
  }

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 z-50 w-full"
    >
      <div className="absolute inset-0 bg-white/95 backdrop-blur-xl border-b border-black/10 shadow-lg" />

      <div className="absolute inset-0 bg-gradient-to-r from-black/5 via-transparent to-black/5 pointer-events-none" />

      {/* Content */}
      <div className="relative px-4 sm:px-6 lg:px-8 py-4 max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.05 }} className="flex-shrink-0">
            <a href="/" className="block">
              <img
                src="/logo.png"
                alt="PaperSnapX Logo"
                className="h-10 w-auto"
                style={{ objectFit: "contain" }}
              />
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <motion.button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-black font-black text-sm transition-colors duration-300 hover:text-gray-600 relative group uppercase tracking-wide"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300" />
              </motion.button>
            ))}
          </div>

          {/* Right side - Sign In button */}
          <div className="hidden md:flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2.5 font-bold text-white text-sm rounded-full bg-black hover:bg-gray-900 transition-all duration-300 shadow-md hover:shadow-lg"
              onClick={() => handleNavClick("/login")}
            >
              Sign In
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-200 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6 text-black" /> : <Menu className="w-6 h-6 text-black" />}
          </motion.button>
        </div>

        {/* Mobile Navigation Dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-4 overflow-hidden"
            >
              <div className="bg-white/95 backdrop-blur-xl rounded-lg border border-black/10 shadow-lg p-4 space-y-3">
                {navLinks.map((link) => (
                  <motion.button
                    key={link.label}
                    onClick={() => handleNavClick(link.href)}
                    whileHover={{ x: 4 }}
                    className="w-full text-left px-4 py-2 text-black font-bold rounded-lg hover:bg-gray-100 transition-colors duration-200 uppercase tracking-wide"
                  >
                    {link.label}
                  </motion.button>
                ))}

                {/* Mobile Sign In button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full mt-4 px-4 py-2.5 font-bold text-white text-sm rounded-full bg-black hover:bg-gray-900 transition-all duration-300"
                  onClick={() => handleNavClick("/login")}
                >
                  Sign In
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}
