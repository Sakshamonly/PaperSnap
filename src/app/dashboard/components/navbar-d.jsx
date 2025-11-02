"use client"

import { useState, useRef, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Bell, Search, Settings, LogOut, Menu } from "lucide-react"
import { motion } from "framer-motion"

export default function Navbar({ setCurrentPage }) {
  const [showNotifications, setShowNotifications] = useState(false)
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const notificationRef = useRef(null)
  const router = useRouter()

  const notifications = [
    { id: 1, message: "Document uploaded successfully", time: "5 min ago" },
    { id: 2, message: "AI analysis completed", time: "2 hours ago" },
    { id: 3, message: "New document shared with you", time: "1 day ago" },
  ]

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (notificationRef.current && !notificationRef.current.contains(event.target)) {
        setShowNotifications(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleLogout = () => {
    router.push("/")
  }

  const handleSettings = () => {
    setCurrentPage("settings")
    setShowMobileMenu(false)
  }

  return (
    <nav
      className="fixed top-0 w-full z-50 backdrop-blur-xl transition-all duration-300"
      style={{ background: "rgba(255, 255, 255, 0.7)", boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)" }}
    >
      <div className="px-4 sm:px-6 py-4 flex items-center justify-between">
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
        {/* Center - Search Bar Desktop */}
        <div className="flex-1 max-w-md mx-2 sm:mx-4 hidden md:flex">
          <div className="w-full relative">
            <input
              type="text"
              placeholder="Search documents..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-blue-200 bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 text-gray-900 placeholder-gray-500 text-sm hover:border-blue-300"
            />
            <Search size={16} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-400" />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Search on Mobile */}
          <button className="md:hidden p-2 hover:bg-blue-100 rounded-lg transition-all duration-200 text-gray-700 hover:text-blue-600 hover:scale-110">
            <Search size={18} />
          </button>

          {/* Notifications */}
          <div className="relative" ref={notificationRef}>
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="p-2 hover:bg-yellow-100 rounded-lg transition-all duration-300 text-gray-700 hover:text-yellow-600 hover:scale-110 relative"
            >
              <Bell size={20} />
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            </button>

            {showNotifications && (
              <div
                className="absolute right-0 mt-2 w-80 rounded-xl backdrop-blur-xl z-50 shadow-xl animate-in fade-in slide-in-from-top-2 duration-300"
                style={{ background: "rgba(255, 255, 255, 0.95)" }}
              >
                <div className="p-4 border-b border-blue-100">
                  <h3 className="font-semibold text-gray-900 text-sm">Notifications</h3>
                </div>
                <div className="max-h-64 overflow-y-auto">
                  {notifications.map((notif) => (
                    <div
                      key={notif.id}
                      className="p-4 border-b border-blue-50 hover:bg-blue-50 transition-all duration-300 cursor-pointer text-sm"
                    >
                      <p className="text-gray-800">{notif.message}</p>
                      <p className="text-xs text-gray-500 mt-1">{notif.time}</p>
                    </div>
                  ))}
                </div>
                <div className="p-3 border-t border-blue-100">
                  <button
                    className="w-full px-4 py-2 rounded-lg font-medium transition-all duration-300 text-white text-sm hover:shadow-lg hover:scale-105"
                    style={{ background: "linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%)" }}
                  >
                    View All
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Settings */}
          <button
            onClick={handleSettings}
            className="p-2 hover:bg-blue-100 rounded-lg transition-all duration-300 text-gray-700 hover:text-blue-600 hover:scale-110"
          >
            <Settings size={20} />
          </button>

          {/* Logout Button Desktop */}
          <button
            onClick={handleLogout}
            className="px-3 sm:px-4 py-2 rounded-lg font-medium transition-all duration-300 text-white hover:shadow-lg hidden sm:flex items-center gap-2 text-sm hover:scale-105"
            style={{ background: "linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%)" }}
          >
            <LogOut size={16} />
            <span className="hidden sm:inline">Logout</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setShowMobileMenu(!showMobileMenu)}
            className="p-2 sm:hidden hover:bg-blue-100 rounded-lg transition-all duration-200 text-gray-700 hover:text-blue-600"
          >
            <Menu size={18} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {showMobileMenu && (
        <div className="md:hidden border-t border-blue-100 bg-white/80 backdrop-blur-sm animate-in fade-in slide-in-from-top-2 duration-300">
          <div className="px-4 py-3 space-y-2">
            <button
              onClick={handleSettings}
              className="w-full px-4 py-2 rounded-lg text-left text-gray-700 hover:bg-blue-100 transition-all duration-300"
            >
              Settings
            </button>
            <button
              onClick={handleLogout}
              className="w-full px-4 py-2 rounded-lg text-left text-white font-medium transition-all duration-300"
              style={{ background: "linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%)" }}
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}
