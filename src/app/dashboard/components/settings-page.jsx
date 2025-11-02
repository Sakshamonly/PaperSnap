"use client"

import { User, Bell, Lock, HardDrive, LogOut, Save, ArrowLeft } from "lucide-react"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function SettingsPage({ setCurrentPage }) {
  const router = useRouter()
  const [settings, setSettings] = useState({
    fullName: "Sarah Anderson",
    email: "sarah@example.com",
    notifications: true,
    emailUpdates: false,
    twoFactor: false,
  })
  const [savedMessage, setSavedMessage] = useState("")

  const handleSaveSettings = () => {
    setSavedMessage("Settings saved successfully!")
    setTimeout(() => setSavedMessage(""), 3000)
  }

  const handleLogout = () => {
    router.push("/")
  }

  return (
    <div className="p-4 sm:p-8 max-w-3xl mx-auto pb-12">
      <div className="mb-8 flex items-center gap-4">
        <button
          onClick={() => setCurrentPage("dashboard")}
          className="p-3 rounded-lg hover:bg-white/60 transition-all duration-300 transform hover:scale-110"
          style={{ background: "rgba(255, 255, 255, 0.4)", border: "2px solid rgba(200, 200, 255, 0.3)" }}
        >
          <ArrowLeft size={24} className="text-blue-600" />
        </button>
        <div>
          <h1
            className="text-3xl sm:text-4xl font-bold"
            style={{
              background: "linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Settings
          </h1>
          <p className="text-gray-600 text-sm sm:text-base font-medium">Manage your account preferences</p>
        </div>
      </div>

      {/* Save Success Message */}
      {savedMessage && (
        <div className="mb-6 p-4 rounded-lg bg-green-50 border-2 border-green-200 animate-in fade-in duration-300">
          <p className="text-green-700 font-bold text-sm">{savedMessage}</p>
        </div>
      )}

      <div className="space-y-6">
        {/* Profile Section */}
        <div
          className="p-8 rounded-2xl backdrop-blur-xl border-2 hover:border-blue-400 transition-all duration-300"
          style={{
            background: "linear-gradient(135deg, rgba(255, 255, 255, 0.8) 0%, rgba(240, 249, 255, 0.6) 100%)",
            border: "2px solid rgba(200, 200, 255, 0.3)",
          }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-400 to-cyan-400 flex items-center justify-center text-white shadow-lg">
              <User size={24} />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Profile Information</h3>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
              <input
                type="text"
                value={settings.fullName}
                onChange={(e) => setSettings({ ...settings, fullName: e.target.value })}
                className="w-full px-5 py-3 rounded-lg border-2 border-blue-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 text-gray-900 hover:border-blue-400 text-sm font-medium"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Email Address (Read-only)</label>
              <input
                type="email"
                value={settings.email}
                disabled
                className="w-full px-5 py-3 rounded-lg border-2 border-gray-300 bg-gray-50 text-gray-600 text-sm font-medium cursor-not-allowed"
              />
            </div>
          </div>
        </div>

        {/* Notifications */}
        <div
          className="p-8 rounded-2xl backdrop-blur-xl border-2 transition-all duration-300"
          style={{
            background: "linear-gradient(135deg, rgba(255, 255, 255, 0.8) 0%, rgba(240, 249, 255, 0.6) 100%)",
            border: "2px solid rgba(200, 200, 255, 0.3)",
          }}
        >
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-yellow-400 to-orange-400 flex items-center justify-center text-white shadow-lg">
                  <Bell size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-base sm:text-lg">Push Notifications</h3>
                  <p className="text-xs sm:text-sm text-gray-600 font-medium">Get notified about document uploads</p>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.notifications}
                  onChange={(e) => setSettings({ ...settings, notifications: e.target.checked })}
                  className="sr-only peer"
                />
                <div className="w-12 h-7 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-5 peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-blue-600 shadow-md"></div>
              </label>
            </div>
            <div className="flex items-center justify-between pt-4 border-t-2 border-gray-100">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-center text-white shadow-lg">
                  <Bell size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-base sm:text-lg">Email Updates</h3>
                  <p className="text-xs sm:text-sm text-gray-600 font-medium">Receive email summaries</p>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.emailUpdates}
                  onChange={(e) => setSettings({ ...settings, emailUpdates: e.target.checked })}
                  className="sr-only peer"
                />
                <div className="w-12 h-7 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-5 peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-blue-600 shadow-md"></div>
              </label>
            </div>
          </div>
        </div>

        {/* Security */}
        <div
          className="p-8 rounded-2xl backdrop-blur-xl border-2 transition-all duration-300"
          style={{
            background: "linear-gradient(135deg, rgba(255, 255, 255, 0.8) 0%, rgba(240, 249, 255, 0.6) 100%)",
            border: "2px solid rgba(200, 200, 255, 0.3)",
          }}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-red-400 to-pink-400 flex items-center justify-center text-white shadow-lg">
                <Lock size={24} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-base sm:text-lg">Two-Factor Authentication</h3>
                <p className="text-xs sm:text-sm text-gray-600 font-medium">Enhance your account security</p>
              </div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={settings.twoFactor}
                onChange={(e) => setSettings({ ...settings, twoFactor: e.target.checked })}
                className="sr-only peer"
              />
              <div className="w-12 h-7 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-5 peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-blue-600 shadow-md"></div>
            </label>
          </div>
        </div>

        {/* Storage */}
        <div
          className="p-8 rounded-2xl backdrop-blur-xl border-2 transition-all duration-300"
          style={{
            background: "linear-gradient(135deg, rgba(255, 255, 255, 0.8) 0%, rgba(240, 249, 255, 0.6) 100%)",
            border: "2px solid rgba(200, 200, 255, 0.3)",
          }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-400 to-teal-400 flex items-center justify-center text-white shadow-lg">
              <HardDrive size={24} />
            </div>
            <h3 className="font-bold text-gray-900 text-base sm:text-lg">Storage Usage</h3>
          </div>
          <div className="space-y-3">
            <div className="w-full bg-gray-300 rounded-full h-4 overflow-hidden border-2 border-gray-400">
              <div
                className="bg-gradient-to-r from-blue-400 to-cyan-400 h-4 rounded-full transition-all duration-300 shadow-lg"
                style={{ width: "46%" }}
              />
            </div>
            <p className="text-sm text-gray-700 font-bold">2.3 GB of 5 GB used (46%)</p>
            <p className="text-xs text-gray-600 font-medium">Upgrade your plan for more storage</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 pt-6">
          <button
            onClick={handleSaveSettings}
            className="flex-1 px-6 py-4 rounded-lg text-white font-bold transition-all duration-300 hover:shadow-lg transform hover:scale-105 flex items-center justify-center gap-2 text-sm"
            style={{ background: "linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%)" }}
          >
            <Save size={20} />
            Save Changes
          </button>
          <button
            onClick={handleLogout}
            className="flex-1 px-6 py-4 rounded-lg text-white font-bold transition-all duration-300 hover:shadow-lg transform hover:scale-105 flex items-center justify-center gap-2 text-sm"
            style={{ background: "linear-gradient(135deg, #6b7280 0%, #9ca3af 100%)" }}
          >
            <LogOut size={20} />
            Logout
          </button>
        </div>
      </div>
    </div>
  )
}
