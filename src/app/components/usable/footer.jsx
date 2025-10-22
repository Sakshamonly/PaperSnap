"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Moon, Sun, Globe } from "lucide-react"

export default function Footer() {
  const [isDark, setIsDark] = useState(false)
  const [language, setLanguage] = useState("English")

  const bgColor = isDark ? "bg-slate-950" : "bg-slate-50"
  const textColor = isDark ? "text-slate-100" : "text-slate-900"
  const headingColor = isDark ? "text-slate-100" : "text-slate-900"
  const linkColor = isDark ? "text-slate-400 hover:text-slate-200" : "text-slate-600 hover:text-slate-900"
  const dividerColor = isDark ? "border-slate-800" : "border-slate-200"

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.08,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  }

  const footerSections = [
    {
      title: "Product",
      links: ["Features", "Enterprise", "Bugbot", "CLI", "Pricing"],
    },
    {
      title: "Resources",
      links: ["Download", "Web Agents", "Changelog", "Docs", "Forum", "Status"],
    },
    {
      title: "Company",
      links: ["Careers", "Blog", "Community", "Students", "Brand"],
    },
    {
      title: "Legal",
      links: ["Terms of Service", "Privacy Policy", "Data Use", "Security"],
    },
    {
      title: "Connect",
      links: ["X", "LinkedIn", "YouTube"],
    },
  ]

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
      className={`relative w-full border-t transition-all duration-500 ${bgColor} ${dividerColor}`}
    >
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-5 md:gap-12 mb-12"
        >
          {footerSections.map((section) => (
            <div key={section.title} className="flex flex-col">
              <h3 className={`text-sm font-semibold ${headingColor} mb-4 transition-colors duration-500`}>
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link}>
                    <motion.a
                      whileHover={{ x: 4 }}
                      href="#"
                      className={`text-sm transition-all duration-300 ${linkColor}`}
                    >
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          className={`h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent dark:via-slate-700 mb-6`}
        />

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Left: Copyright and Certification */}
          <div className="flex flex-col sm:flex-row items-center gap-4 text-sm">
            <p className={`${textColor} opacity-70 transition-colors duration-500`}>© 2025 PaperSnapX, Inc.</p>
            <div
              className={`flex items-center gap-1 px-2 py-1 rounded border ${dividerColor} ${textColor} opacity-70 text-xs`}
            >
              <span>✓</span>
              <span>SOC 2 Certified</span>
            </div>
          </div>

          {/* Right: Theme Toggle, Language Selector */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsDark(!isDark)}
              className={`p-2 rounded-lg transition-all duration-300 hover:bg-slate-200 dark:hover:bg-slate-800`}
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={18} className={textColor} /> : <Moon size={18} className={textColor} />}
            </motion.button>

            {/* Language Selector */}
            <motion.div whileHover={{ scale: 1.05 }} className="relative">
              <button
                className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-300 hover:bg-slate-200 dark:hover:bg-slate-800 text-sm ${textColor}`}
              >
                <Globe size={16} />
                <span>{language}</span>
                <span className="text-xs">▼</span>
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <div className={`absolute inset-0 -z-10 transition-colors duration-500`} />
    </motion.footer>
  )
}
