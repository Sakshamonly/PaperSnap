"use client"

import { Upload, Zap, FolderOpen, X, Check } from "lucide-react"
import { useState, useRef } from "react"

export default function DashboardHome({
  setCurrentPage,
  documents,
  totalDocuments,
  lastUpload,
  storageUsed,
  handleAddDocument,
}) {
  const [showUploadModal, setShowUploadModal] = useState(false)
  const [uploadMessage, setUploadMessage] = useState("")
  const fileInputRef = useRef(null)

  const handleUploadClick = () => {
    setShowUploadModal(true)
  }

  const handleFileSelect = (e) => {
    const file = e.target.files?.[0]
    if (file) {
      const url = URL.createObjectURL(file)
      const newDoc = {
        id: documents.length + 1,
        name: file.name,
        date: new Date().toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" }),
        type: file.name.split(".").pop().toUpperCase(),
        size: (file.size / 1024 / 1024).toFixed(2) + " MB",
        url,
        // keep raw file if you need to read contents later
        file,
        preview: "📄",
      }
      handleAddDocument(newDoc)
      setUploadMessage("File uploaded successfully!")
      setTimeout(() => {
        setShowUploadModal(false)
        setUploadMessage("")
      }, 2000)
    }
  }

  const quickActions = [
    { id: 1, title: "Upload Document", icon: Upload, color: "from-blue-400 to-cyan-400", action: handleUploadClick },
    { id: 2, title: "Ask AI", icon: Zap, color: "from-yellow-400 to-orange-400", action: () => setCurrentPage("chat") },
    {
      id: 3,
      title: "Manage Files",
      icon: FolderOpen,
      color: "from-purple-400 to-pink-400",
      action: () => setCurrentPage("documents"),
    },
  ]

  const stats = [
    {
      title: "Total Documents",
      value: totalDocuments,
      change: "files stored",
      icon: "📁",
      gradientFrom: "from-blue-50",
      gradientTo: "to-blue-100",
    },
    {
      title: "Last Upload",
      value: lastUpload,
      change: "most recent",
      icon: "📅",
      gradientFrom: "from-orange-50",
      gradientTo: "to-orange-100",
    },
    {
      title: "Storage Used",
      value: storageUsed.toFixed(2) + " GB",
      change: "of 5 GB",
      icon: "💾",
      gradientFrom: "from-green-50",
      gradientTo: "to-green-100",
    },
  ]

  const recentActivity = documents.slice(0, 3).map((doc, idx) => ({
    id: doc.id,
    action: idx === 0 ? "Uploaded" : idx === 1 ? "Modified" : "Added",
    file: doc.name,
    time: doc.date,
  }))

  return (
    <div className="p-4 sm:p-8 space-y-6 sm:space-y-8 pb-12">
      <div
        className="rounded-3xl p-8 sm:p-10 backdrop-blur-xl transition-all duration-500 hover:shadow-2xl transform hover:scale-102 border-2"
        style={{
          background: "linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(34, 211, 238, 0.15) 100%)",
          border: "2px solid rgba(59, 130, 246, 0.3)",
        }}
      >
        <h1 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-3">Welcome back, Saksham</h1>
        <p className="text-gray-700 text-sm sm:text-base font-medium">
          You have <span className="font-bold text-blue-600">{documents.length}</span> documents stored. Keep your files
          organized and secure.
        </p>
      </div>

      <div>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Quick Actions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {quickActions.map((action) => {
            const Icon = action.icon
            return (
              <button
                key={action.id}
                onClick={action.action}
                className="group rounded-2xl p-8 backdrop-blur-xl cursor-pointer transition-all duration-500 hover:shadow-2xl hover:scale-105 transform text-left border-2"
                style={{
                  background: "linear-gradient(135deg, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0.5) 100%)",
                  border: "2px solid rgba(200, 200, 255, 0.3)",
                }}
              >
                <div
                  className={`w-16 h-16 rounded-xl mb-6 flex items-center justify-center text-white bg-gradient-to-r ${action.color} transition-all duration-300 group-hover:scale-125 group-hover:shadow-lg shadow-md`}
                >
                  <Icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{action.title}</h3>
                <p className="text-sm text-gray-600 font-medium">Click to {action.title.toLowerCase()}</p>
              </button>
            )
          })}
        </div>
      </div>

      <div>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Account Stats</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className={`rounded-2xl p-8 backdrop-blur-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-102 border-2 bg-gradient-to-br ${stat.gradientFrom} ${stat.gradientTo}`}
              style={{ border: "2px solid rgba(200, 200, 255, 0.3)" }}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-gray-700 text-sm font-bold uppercase tracking-wide">{stat.title}</p>
                  <p className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 mt-3">
                    {stat.value}
                  </p>
                  <p className="text-xs text-gray-600 mt-3 font-semibold">{stat.change}</p>
                </div>
                <div className="text-5xl transition-transform duration-300 hover:scale-150 hover:rotate-12">
                  {stat.icon}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Recent Activity</h2>
        <div
          className="rounded-2xl backdrop-blur-xl overflow-hidden transition-all duration-300 border-2"
          style={{
            background: "linear-gradient(135deg, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0.5) 100%)",
            border: "2px solid rgba(200, 200, 255, 0.3)",
          }}
        >
          {recentActivity.length > 0 ? (
            recentActivity.map((activity, idx) => (
              <div
                key={activity.id}
                className={`p-6 sm:p-8 flex items-center justify-between hover:bg-white/60 transition-all duration-300 cursor-pointer group ${
                  idx !== recentActivity.length - 1 ? "border-b-2 border-gray-100" : ""
                }`}
              >
                <div className="flex items-center gap-4 sm:gap-6 flex-1 min-w-0">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-400 to-cyan-400 flex items-center justify-center text-xl flex-shrink-0 transition-all duration-300 group-hover:scale-125 shadow-lg">
                    📄
                  </div>
                  <div className="min-w-0">
                    <p className="font-bold text-gray-900 text-base">{activity.action}</p>
                    <p className="text-sm text-gray-600 truncate">{activity.file}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-500 flex-shrink-0 ml-4 font-semibold">{activity.time}</p>
              </div>
            ))
          ) : (
            <div className="p-12 text-center text-gray-500 text-sm">
              <p className="text-lg">No documents yet. Upload your first document to get started.</p>
            </div>
          )}
        </div>
      </div>

      {showUploadModal && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-300">
          <div
            className="rounded-2xl p-6 sm:p-8 w-full max-w-md shadow-2xl animate-in zoom-in-95 duration-300 border-2"
            style={{ background: "rgba(255, 255, 255, 0.98)", border: "2px solid rgba(200, 200, 255, 0.3)" }}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Upload Document</h2>
              <button
                onClick={() => setShowUploadModal(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-all duration-200 hover:scale-110"
              >
                <X size={24} className="text-gray-600" />
              </button>
            </div>

            {uploadMessage ? (
              <div className="text-center py-8 animate-in fade-in duration-300">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4 animate-in zoom-in shadow-lg">
                  <Check size={32} className="text-green-600" />
                </div>
                <p className="text-lg font-bold text-green-600 mb-4">{uploadMessage}</p>
                <button
                  onClick={() => setCurrentPage("documents")}
                  className="w-full px-6 py-3 rounded-lg text-white font-bold transition-all duration-300 hover:shadow-lg hover:scale-105"
                  style={{ background: "linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%)" }}
                >
                  View All Documents
                </button>
              </div>
            ) : (
              <div>
                <div
                  className="border-2 border-dashed border-blue-400 rounded-xl p-8 text-center cursor-pointer hover:border-blue-600 transition-all duration-300 group hover:bg-blue-50"
                  onClick={() => fileInputRef.current?.click()}
                >
                  <Upload
                    size={48}
                    className="text-blue-500 mx-auto mb-4 group-hover:scale-125 transition-transform duration-300"
                  />
                  <p className="font-bold text-gray-900 mb-2 text-lg">Click to upload or drag and drop</p>
                  <p className="text-sm text-gray-600">PDF, DOC, DOCX, XLS, XLSX, PPT or image files</p>
                </div>

                <input
                  ref={fileInputRef}
                  type="file"
                  onChange={handleFileSelect}
                  className="hidden"
                  accept=".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.jpg,.jpeg,.png"
                />

                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="w-full mt-6 px-6 py-3 rounded-lg text-white font-bold transition-all duration-300 hover:shadow-lg hover:scale-105"
                  style={{ background: "linear-gradient(135deg, #ff6b6b 0%, #ffa500 100%)" }}
                >
                  Select File
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
