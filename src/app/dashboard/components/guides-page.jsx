"use client"

import { BookOpen, ArrowRight, FileText, Zap, Search, Shield } from "lucide-react"

export default function GuidesPage() {
  const guides = [
    {
      id: 1,
      title: "Getting Started",
      description: "Learn the basics of PaperSnap and how to set up your account",
      icon: BookOpen,
      color: "from-blue-400 to-cyan-400",
    },
    {
      id: 2,
      title: "Uploading Documents",
      description: "How to upload, organize and manage your files efficiently",
      icon: FileText,
      color: "from-orange-400 to-red-400",
    },
    {
      id: 3,
      title: "Using AI Chat",
      description: "Get the most out of AI-powered document analysis and insights",
      icon: Zap,
      color: "from-yellow-400 to-orange-400",
    },
    {
      id: 4,
      title: "Advanced Search",
      description: "Find documents faster with smart search filters and techniques",
      icon: Search,
      color: "from-green-400 to-teal-400",
    },
    {
      id: 5,
      title: "Security & Privacy",
      description: "Understand how we protect your documents and personal data",
      icon: Shield,
      color: "from-purple-400 to-pink-400",
    },
    {
      id: 6,
      title: "Tips & Tricks",
      description: "Pro tips to maximize your productivity with PaperSnap",
      icon: Zap,
      color: "from-indigo-400 to-blue-400",
    },
  ]

  return (
    <div className="p-4 sm:p-8 smooth-scroll pb-12">
      {/* Header */}
      <div className="mb-8">
        <h1
          className="text-3xl sm:text-4xl font-bold mb-2"
          style={{
            background: "linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Guides & Help
        </h1>
        <p className="text-gray-600 text-sm sm:text-base">
          Learn how to use PaperSnap effectively and get the most out of your documents
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {guides.map((guide) => {
          const Icon = guide.icon
          return (
            <div
              key={guide.id}
              className="p-6 sm:p-8 rounded-xl backdrop-blur-xl border border-blue-100 hover:border-blue-300 transition-all duration-300 group cursor-pointer transform hover:scale-105 hover:shadow-lg"
              style={{ background: "rgba(255, 255, 255, 0.8)" }}
            >
              {/* Icon */}
              <div
                className={`w-12 h-12 rounded-lg mb-4 flex items-center justify-center text-white bg-gradient-to-r ${guide.color}`}
              >
                <Icon size={24} />
              </div>

              {/* Content */}
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                {guide.title}
              </h3>
              <p className="text-sm text-gray-600 mb-4 line-clamp-2">{guide.description}</p>

              {/* Arrow */}
              <div className="flex items-center gap-2 text-blue-500 group-hover:text-blue-600 transition-all duration-300">
                <span className="text-sm font-medium">Learn More</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          )
        })}
      </div>

      {/* CTA Section */}
      <div
        className="mt-12 p-8 rounded-2xl backdrop-blur-xl border border-blue-200"
        style={{ background: "linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(34, 211, 238, 0.1) 100%)" }}
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Still need help?</h2>
        <p className="text-gray-600 mb-6 text-sm sm:text-base">
          Our support team is available 24/7 to assist you with any questions or issues.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            className="px-6 py-3 rounded-lg text-white font-semibold transition-all duration-300 hover:shadow-lg transform hover:scale-105 text-sm"
            style={{ background: "linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%)" }}
          >
            Contact Support
          </button>
          <button className="px-6 py-3 rounded-lg font-semibold transition-all duration-300 border-2 border-blue-400 text-blue-600 hover:bg-blue-50 text-sm">
            View Documentation
          </button>
        </div>
      </div>
    </div>
  )
}
