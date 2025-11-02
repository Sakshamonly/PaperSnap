"use client"

import { Send, Paperclip, FileText, X, Plus, ArrowLeft } from "lucide-react"
import { useState, useRef, useEffect } from "react"

export default function AIChatPage({ documents, handleAddDocument, setCurrentPage }) {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: "ai",
      message: "Hello! I'm your PaperSnap AI Assistant. Upload a document and ask me anything about it.",
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [showFileModal, setShowFileModal] = useState(false)
  const [selectedDocs, setSelectedDocs] = useState([])
  const messagesEndRef = useRef(null)
  const fileInputRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const aiResponses = {
    analyze:
      "I've analyzed the document. Here are the key points: The document contains important information structured in multiple sections. Each section covers specific topics that are well-organized and easy to follow.",
    summary:
      "Summary: This document provides an overview of the main concepts. The content is divided into key areas that cover the essential information. Key takeaways include important findings and conclusions.",
    questions:
      "Great question! Based on the document, here are the answers: 1) The main objective is clearly stated in the introduction. 2) The supporting evidence is provided in the middle sections. 3) The conclusion ties everything together effectively.",
    extract:
      "I've extracted the important data from the document. The extracted information shows: Important figures and statistics are highlighted. Key metrics and measurements are clearly documented. All essential information has been compiled for your reference.",
  }

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      const newMessage = { id: messages.length + 1, type: "user", message: inputValue }
      setMessages([...messages, newMessage])

      const lowerInput = inputValue.toLowerCase()
      let aiResponse = ""

      if (lowerInput.includes("analyze")) {
        aiResponse = aiResponses.analyze
      } else if (lowerInput.includes("summary")) {
        aiResponse = aiResponses.summary
      } else if (lowerInput.includes("question")) {
        aiResponse = aiResponses.questions
      } else if (lowerInput.includes("extract")) {
        aiResponse = aiResponses.extract
      } else {
        aiResponse =
          "I've reviewed your document and extracted the key information. Please feel free to ask me more specific questions like 'analyze', 'summary', 'questions', or 'extract' for detailed insights."
      }

      setInputValue("")
      setIsTyping(true)

      setTimeout(() => {
        const response = {
          id: messages.length + 2,
          type: "ai",
          message: aiResponse,
        }
        setMessages((prev) => [...prev, response])
        setIsTyping(false)
      }, 1500)
    }
  }

  const handleFileUpload = (e) => {
    const file = e.target.files?.[0]
    if (file) {
      const newDoc = {
        id: documents.length + 1,
        name: file.name,
        date: new Date().toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" }),
        type: file.name.split(".").pop().toUpperCase(),
        size: (file.size / 1024 / 1024).toFixed(2) + " MB",
        preview: "📄",
      }
      handleAddDocument(newDoc)
      setSelectedDocs([...selectedDocs, newDoc])
      setShowFileModal(false)
    }
  }

  return (
    <div className="flex h-[calc(100vh-96px)] flex-col lg:flex-row bg-gradient-to-br from-blue-50 to-cyan-50">
      <div className="hidden lg:flex flex-col w-72 p-6 border-r-2 border-blue-200 bg-white/80 backdrop-blur-sm">
        <div className="flex items-center gap-2 mb-6">
          <button
            onClick={() => setCurrentPage("dashboard")}
            className="p-2 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-110"
          >
            <ArrowLeft size={20} className="text-blue-600" />
          </button>
          <h3 className="font-bold text-lg text-gray-900">Documents</h3>
        </div>
        <div className="space-y-3 flex-1 overflow-y-auto mb-4">
          {selectedDocs.length > 0 ? (
            selectedDocs.map((doc) => (
              <div
                key={doc.id}
                className="p-4 rounded-lg cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-lg border-2 animate-in fade-in"
                style={{ background: "rgba(59, 130, 246, 0.15)", border: "2px solid rgba(59, 130, 246, 0.3)" }}
              >
                <div className="flex items-center gap-2">
                  <FileText size={18} className="text-blue-600 flex-shrink-0 font-bold" />
                  <span className="text-sm text-gray-800 font-semibold truncate">{doc.name}</span>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-8 text-gray-500">
              <p className="text-xs font-semibold">No documents selected</p>
            </div>
          )}
        </div>
        <button
          onClick={() => setShowFileModal(true)}
          className="w-full px-4 py-3 rounded-lg text-white font-bold transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-2 text-sm hover:scale-105"
          style={{ background: "linear-gradient(135deg, #ff6b6b 0%, #ffa500 100%)" }}
        >
          <Plus size={20} />
          Add Document
        </button>
      </div>

      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="p-4 sm:p-6 border-b-2 border-blue-200 bg-white/80 backdrop-blur-sm transition-all duration-300 flex items-center justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">PaperSnap AI Assistant</h2>
            <p className="text-xs sm:text-sm text-gray-600 mt-1">Try: analyze, summary, questions, or extract</p>
          </div>
          <button
            onClick={() => setCurrentPage("dashboard")}
            className="lg:hidden p-3 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-110"
          >
            <ArrowLeft size={24} className="text-blue-600" />
          </button>
        </div>

        {/* Messages */}
        <div
          className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4"
          style={{ background: "linear-gradient(135deg, rgba(245, 247, 255, 0.5) 0%, rgba(240, 249, 255, 0.5) 100%)" }}
        >
          {messages.map((msg, idx) => (
            <div
              key={msg.id}
              className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"} animate-in fade-in slide-in-from-bottom duration-300`}
              style={{ animationDelay: `${idx * 50}ms` }}
            >
              <div
                className={`max-w-xs sm:max-w-sm lg:max-w-md px-6 py-4 rounded-2xl transition-all duration-300 transform hover:scale-102 text-sm font-medium ${
                  msg.type === "user"
                    ? "text-white shadow-lg shadow-blue-300"
                    : "bg-white border-2 border-blue-300 text-gray-900 shadow-lg shadow-blue-100"
                }`}
                style={msg.type === "user" ? { background: "linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%)" } : {}}
              >
                <p className="leading-relaxed">{msg.message}</p>
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex justify-start animate-in fade-in">
              <div className="px-6 py-4 rounded-2xl bg-white border-2 border-blue-300 shadow-lg">
                <div className="flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-blue-500 animate-bounce" style={{ animationDelay: "0s" }} />
                  <div className="w-2 h-2 rounded-full bg-blue-500 animate-bounce" style={{ animationDelay: "0.2s" }} />
                  <div className="w-2 h-2 rounded-full bg-blue-500 animate-bounce" style={{ animationDelay: "0.4s" }} />
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 sm:p-6 border-t-2 border-blue-200 bg-white/80 backdrop-blur-sm transition-all duration-300">
          <div className="flex gap-2 sm:gap-3">
            <button
              onClick={() => setShowFileModal(true)}
              className="p-3 rounded-lg transition-all duration-300 transform hover:scale-125 hover:shadow-md text-orange-600 hover:bg-orange-100 border-2 border-orange-300"
            >
              <Paperclip size={20} />
            </button>
            <input
              type="text"
              placeholder="Ask me something..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
              className="flex-1 px-4 sm:px-5 py-3 rounded-lg border-2 border-blue-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 text-gray-900 placeholder-gray-500 hover:border-blue-400 text-sm font-medium"
            />
            <button
              onClick={handleSendMessage}
              className="px-6 py-3 rounded-lg text-white font-bold transition-all duration-300 transform hover:scale-110 hover:shadow-lg flex items-center gap-2 text-sm"
              style={{ background: "linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%)" }}
            >
              <Send size={20} />
            </button>
          </div>
        </div>
      </div>

      {showFileModal && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-300">
          <div
            className="rounded-2xl p-6 sm:p-8 w-full max-w-md shadow-2xl animate-in zoom-in-95 duration-300 border-2"
            style={{ background: "rgba(255, 255, 255, 0.98)", border: "2px solid rgba(200, 200, 255, 0.3)" }}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Add Document</h2>
              <button
                onClick={() => setShowFileModal(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-all duration-200 hover:scale-110"
              >
                <X size={24} className="text-gray-600" />
              </button>
            </div>

            <div
              className="border-2 border-dashed border-blue-400 rounded-xl p-8 text-center cursor-pointer hover:border-blue-600 transition-all duration-300 group hover:bg-blue-50"
              onClick={() => fileInputRef.current?.click()}
            >
              <Paperclip
                size={48}
                className="text-blue-500 mx-auto mb-4 group-hover:scale-125 transition-transform duration-300"
              />
              <p className="font-bold text-gray-900 mb-2 text-lg">Click to upload</p>
              <p className="text-xs sm:text-sm text-gray-600">PDF, DOC, DOCX, XLS, XLSX, PPT or image files</p>
            </div>

            <input
              ref={fileInputRef}
              type="file"
              onChange={handleFileUpload}
              className="hidden"
              accept=".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.jpg,.jpeg,.png"
            />

            <button
              onClick={() => fileInputRef.current?.click()}
              className="w-full mt-6 px-6 py-3 rounded-lg text-white font-bold transition-all duration-300 hover:shadow-lg hover:scale-105 text-sm"
              style={{ background: "linear-gradient(135deg, #ff6b6b 0%, #ffa500 100%)" }}
            >
              Select File
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
