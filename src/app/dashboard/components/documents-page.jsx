"use client"

import { Trash2, Share2, Eye, Search, ArrowLeft } from "lucide-react"
import { useState, useRef } from "react"

export default function DocumentsPage({ documents, setDocuments, handleDeleteDocument, setCurrentPage }) {
  const [searchQuery, setSearchQuery] = useState("")
  const [filterType, setFilterType] = useState("all")
  const fileInputRef = useRef(null)
  const [shareMessage, setShareMessage] = useState("")

  const filteredDocs = documents.filter((doc) => {
    const matchesSearch = doc.name.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesType = filterType === "all" || doc.type.toLowerCase() === filterType.toLowerCase()
    return matchesSearch && matchesType
  })

  const handleDelete = (id) => {
    const docToDelete = documents.find((d) => d.id === id)
    if (docToDelete) {
      // revoke any object URL created when the file was uploaded
      if (docToDelete.url) {
        try {
          URL.revokeObjectURL(docToDelete.url)
        } catch (e) {
          /* ignore */
        }
      }
    }
    handleDeleteDocument(id)
  }

  const handleView = (doc) => {
    // Prefer an existing object URL (created at upload time).
    if (doc.url) {
      window.open(doc.url, "_blank")
      return
    }

    // If the raw File object was stored, create an object URL from it.
    if (doc.file instanceof Blob) {
      const fileUrl = URL.createObjectURL(doc.file)
      window.open(fileUrl, "_blank")
      return
    }

    // Fallback: open a text blob containing the filename
    const fileUrl = URL.createObjectURL(new Blob([doc.name], { type: "text/plain" }))
    window.open(fileUrl, "_blank")
  }

  const handleShare = (doc) => {
    const shareUrl = `${window.location.origin}?doc=${doc.id}`
    navigator.clipboard.writeText(shareUrl)
    setShareMessage(`Link to "${doc.name}" copied to clipboard!`)
    setTimeout(() => setShareMessage(""), 3000)
  }

  return (
    <div className="p-4 sm:p-8 pb-12">
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
            My Documents
          </h1>
          <p className="text-gray-600 text-sm sm:text-base font-medium">Manage and organize all your documents</p>
        </div>
      </div>

      {/* Share Message */}
      {shareMessage && (
        <div className="mb-6 p-4 rounded-lg bg-green-50 border-2 border-green-200 animate-in fade-in duration-300">
          <p className="text-green-700 font-bold text-sm">{shareMessage}</p>
        </div>
      )}

      {/* Search and Filter */}
      <div className="mb-8 flex flex-col sm:flex-row gap-4 animate-in fade-in duration-500">
        <div className="flex-1 relative">
          <input
            type="text"
            placeholder="Search documents..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-5 py-3 rounded-lg border-2 border-blue-300 bg-white/70 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 text-gray-900 placeholder-gray-500 hover:border-blue-400 text-sm font-medium"
          />
          <Search size={18} className="absolute right-4 top-1/2 transform -translate-y-1/2 text-blue-500" />
        </div>
        <select
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
          className="px-5 py-3 rounded-lg border-2 border-orange-300 bg-white/70 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all duration-300 text-gray-900 hover:border-orange-400 text-sm font-medium"
        >
          <option value="all">All Types</option>
          <option value="pdf">PDF</option>
          <option value="excel">Excel</option>
          <option value="word">Word</option>
          <option value="powerpoint">PowerPoint</option>
        </select>
      </div>

      {/* Documents Grid - 3x3 Layout */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {filteredDocs.length > 0 ? (
          filteredDocs.map((doc, idx) => (
            <div
              key={doc.id}
              className="p-8 rounded-2xl backdrop-blur-xl border-2 hover:border-blue-400 transition-all duration-500 group hover:shadow-2xl transform hover:scale-105 hover:-translate-y-2 animate-in fade-in slide-in-from-bottom"
              style={{
                background: "linear-gradient(135deg, rgba(255, 255, 255, 0.8) 0%, rgba(240, 249, 255, 0.6) 100%)",
                border: "2px solid rgba(200, 200, 255, 0.3)",
                animationDelay: `${idx * 50}ms`,
              }}
            >
              {/* Document Preview */}
              <div className="w-full h-40 sm:h-48 rounded-xl bg-gradient-to-br from-blue-200 to-cyan-200 flex items-center justify-center mb-6 text-5xl transition-all duration-300 group-hover:scale-110 shadow-lg">
                {doc.preview}
              </div>

              {/* Document Info */}
              <div className="mb-6">
                <h3 className="font-bold text-gray-900 text-base sm:text-lg truncate">{doc.name}</h3>
                <p className="text-xs sm:text-sm text-gray-600 mt-3 font-semibold">
                  {doc.date} • {doc.size}
                </p>
              </div>

              {/* Action buttons */}
              <div className="flex gap-3 w-full">
                <button
                  onClick={() => handleView(doc)}
                  className="flex-1 flex items-center justify-center gap-2 px-3 py-3 rounded-lg text-white font-bold transition-all duration-300 hover:shadow-lg transform hover:scale-110 text-xs sm:text-sm"
                  style={{ background: "linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%)" }}
                >
                  <Eye size={18} />
                  <span className="hidden sm:inline">View</span>
                </button>
                <button
                  onClick={() => handleShare(doc)}
                  className="flex-1 flex items-center justify-center gap-2 px-3 py-3 rounded-lg text-white font-bold transition-all duration-300 hover:shadow-lg transform hover:scale-110 text-xs sm:text-sm"
                  style={{ background: "linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)" }}
                >
                  <Share2 size={18} />
                  <span className="hidden sm:inline">Share</span>
                </button>
                <button
                  onClick={() => handleDelete(doc.id)}
                  className="flex-1 flex items-center justify-center gap-2 px-3 py-3 rounded-lg text-white font-bold transition-all duration-300 hover:shadow-lg transform hover:scale-110 text-xs sm:text-sm"
                  style={{ background: "linear-gradient(135deg, #ef4444 0%, #f87171 100%)" }}
                >
                  <Trash2 size={18} />
                  <span className="hidden sm:inline">Delete</span>
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-20 text-gray-500 animate-in fade-in duration-300">
            <p className="text-xl font-semibold">No documents found</p>
            <p className="text-sm mt-2">Upload your first document to get started</p>
          </div>
        )}
      </div>
    </div>
  )
}
