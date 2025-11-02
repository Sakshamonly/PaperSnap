"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { FileText, Zap, Brain, MessageSquare, Upload, Cpu, BookOpen, Play, X, ArrowRight } from "lucide-react"
import Navbar from "@/app/components/usable/navbar"
import Footer from "@/app/components/usable/footer"

export default function LandingPage() {
  const [selectedFeature, setSelectedFeature] = useState(null)
  const [isVideoOpen, setIsVideoOpen] = useState(false)
  const router = useRouter()

  const features = [
    {
      id: "storage",
      icon: FileText,
      title: "Smart Storage",
      description: "Auto-organize and tag documents.",
      details:
        "Automatically categorize and tag your documents with AI-powered intelligence. Never lose track of important files again with smart organization.",
      bgColor: "from-orange-50 to-red-50",
      accentColor: "text-orange-600",
      borderColor: "border-orange-300",
      hoverShadow: "hover:shadow-orange-200/50",
    },
    {
      id: "summaries",
      icon: Zap,
      title: "AI Summaries",
      description: "Instant key-point extraction.",
      details:
        "Get instant summaries of your documents with key points extracted automatically. Save hours of reading time with intelligent summarization.",
      bgColor: "from-yellow-50 to-amber-50",
      accentColor: "text-yellow-600",
      borderColor: "border-yellow-300",
      hoverShadow: "hover:shadow-yellow-200/50",
    },
    {
      id: "quiz",
      icon: Brain,
      title: "Quiz Generator",
      description: "Create MCQs and flashcards.",
      details:
        "Generate multiple-choice questions and flashcards from your documents. Perfect for studying and reinforcing your learning.",
      bgColor: "from-pink-50 to-rose-50",
      accentColor: "text-pink-600",
      borderColor: "border-pink-300",
      hoverShadow: "hover:shadow-pink-200/50",
    },
    {
      id: "chat",
      icon: MessageSquare,
      title: "Chat with Docs",
      description: "Ask anything from your uploads.",
      details:
        "Have a natural conversation with your documents. Ask questions and get instant answers powered by advanced AI.",
      bgColor: "from-cyan-50 to-blue-50",
      accentColor: "text-cyan-600",
      borderColor: "border-cyan-300",
      hoverShadow: "hover:shadow-cyan-200/50",
    },
  ]

  const steps = [
    {
      number: 1,
      icon: Upload,
      title: "Upload Your Document",
      description: "Simply drag and drop or select your PDF, DOCX, PPT, or TXT files.",
    },
    {
      number: 2,
      icon: Cpu,
      title: "Let AI Process It",
      description: "Our advanced AI analyzes and understands your document in seconds.",
    },
    {
      number: 3,
      icon: BookOpen,
      title: "Interact & Learn",
      description: "Get summaries, quizzes, and chat with your documents instantly.",
    },
  ]

  const integrations = ["PDF", "DOCX", "PPT", "TXT"]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
    exit: { opacity: 0, transition: { duration: 0.5 } },
  }

  const itemVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
    exit: { opacity: 0, transition: { duration: 0.5 } },
  }

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen text-gray-900 overflow-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-40"
        style={{
          background:
            "linear-gradient(90deg, rgba(255,255,255,0.95) 0%, rgba(245,245,245,0.95) 100%)",
          backdropFilter: "blur(4px)",
        }}
      >
        <div className="text-center mx-auto w-full max-w-5xl">
          <h1 className="text-3xl sm:text-4xl lg:text-7xl font-extrabold mb-8 text-black leading-tight tracking-tight font-sans">
            Turn Documents into Knowledge with AI
          </h1>
          <p className="text-2xl sm:text-2xl font-medium mb-10 text-gray-600 leading-relaxed font-serif">
            Upload. Understand. Interact — PaperSnapX transforms your notes, PDFs, and slides into summaries, quizzes,
            and chat-ready insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => router.push("/login")}
              className="px-8 py-4 bg-black text-white font-semibold rounded-lg transition-all duration-300 transform hover:bg-white hover:text-black hover:shadow-2xl hover:scale-105 active:scale-95 border border-black"
            >
              Get Started
            </button>
            <button
              onClick={() => scrollToSection("demo")}
              className="px-8 py-4 bg-white text-black font-semibold rounded-lg transition-all duration-300 active:scale-95 hover:bg-red-600 hover:text-white border border-black"
            >
              Check Demo
            </button>
          </div>
        </div>
      </section>

      {/* Feature Highlights Section */}
      <motion.section
        id="features"
        className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-white/40 to-transparent"
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: false, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.div
          className="max-w-6xl mx-auto"
          variants={containerVariants}
        >
          <motion.h2
            className="text-4xl sm:text-5xl font-bold text-center mb-4 text-black"
            variants={itemVariants}
          >
            Why PaperSnapX?
          </motion.h2>
          <motion.p className="text-center text-gray-700 font-semibold mb-16 text-lg" variants={itemVariants}>
            Powerful features designed for modern learners
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={feature.id}
                  className={`group relative p-6 rounded-2xl bg-gradient-to-br ${feature.bgColor} border-2 ${feature.borderColor} hover:border-opacity-100 cursor-pointer transition-all duration-300 hover:shadow-xl ${feature.hoverShadow}`}
                  onClick={() => setSelectedFeature(feature.id)}
                  initial="hidden"
                  whileInView="visible"
                  exit="exit"
                  viewport={{ once: false, margin: "-100px" }}
                  variants={itemVariants}
                >
                  <Icon
                    className={`w-12 h-12 ${feature.accentColor} mb-4 group-hover:scale-110 transition-transform`}
                  />
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-700 font-medium">{feature.description}</p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </motion.section>

      {/* How It Works Section */}
      <motion.section
        id="how-it-works"
        className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 via-cyan-50 to-transparent"
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: false, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.div
          className="max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: false, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.h2
            className="text-4xl sm:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"
            variants={itemVariants}
          >
            3 Steps to Smarter Studying
          </motion.h2>
          <motion.p className="text-center text-gray-700 font-semibold mb-16 text-lg" variants={itemVariants}>
            Simple, fast, and powerful
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div key={step.number} className="relative" variants={itemVariants}>
                  <div className="flex flex-col items-center">
                    <motion.div
                      className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center mb-6 text-white text-2xl font-bold shadow-lg"
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icon className="w-10 h-10" />
                    </motion.div>
                    <h3 className="text-2xl font-bold mb-3 text-center text-gray-900">{step.title}</h3>
                    <p className="text-gray-700 font-medium text-center">{step.description}</p>
                  </div>

                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-10 -right-4 w-8 h-1 bg-gradient-to-r from-blue-600 to-cyan-600" />
                  )}
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </motion.section>

      {/* Demo Video Section */}
      <motion.section
        id="demo"
        className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-purple-50/30 to-transparent"
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: false, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.div
          className="max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: false, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.h2
            className="text-4xl sm:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
            variants={itemVariants}
          >
            See PaperSnapX in Action
          </motion.h2>

          <motion.div
            className="relative mt-12 rounded-2xl overflow-hidden bg-gray-900 aspect-video flex items-center justify-center cursor-pointer group"
            onClick={() => setIsVideoOpen(true)}
            variants={itemVariants}
            whileHover={{ scale: 1.03 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20 group-hover:from-purple-600/40 group-hover:to-pink-600/40 transition-all duration-300" />
            <motion.div
              className="w-20 h-20 rounded-full bg-white flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg"
              whileHover={{ scale: 1.2 }}
            >
              <Play className="w-8 h-8 text-purple-600 ml-1" />
            </motion.div>
            <img
              src="/ai-document-processing-interface.jpg"
              alt="PaperSnapX Demo"
              className="absolute inset-0 w-full h-full object-cover opacity-40"
            />
          </motion.div>

          <motion.p className="text-center text-gray-700 font-semibold mt-8 text-lg" variants={itemVariants}>
            Watch how PaperSnapX turns your notes into interactive learning tools — from upload to chat.
          </motion.p>

          <motion.div className="flex justify-center mt-8" variants={itemVariants}>
            <button
              onClick={() => scrollToSection("cta")}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:bg-blue-200 hover:text-black active:scale-95"
            >
              Try It Yourself
            </button>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Integrations Section */}
      <motion.section
        className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-green-50 via-emerald-50 to-transparent"
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: false, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.div
          className="max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: false, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.h2
            className="text-4xl sm:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent"
            variants={itemVariants}
          >
            Works Anywhere You Work
          </motion.h2>

          <motion.div className="flex flex-wrap justify-center gap-6 mt-12" variants={containerVariants}>
            {integrations.map((format) => (
              <motion.div
                key={format}
                className="px-8 py-4 rounded-xl bg-white border-2 border-green-300 font-bold text-green-700 hover:border-green-500 hover:shadow-lg hover:shadow-green-200/50 transition-all duration-300"
                variants={itemVariants}
                whileHover={{ scale: 1.08, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                {format}
              </motion.div>
            ))}
          </motion.div>

          <motion.p className="text-center text-gray-700 font-semibold mt-12 text-lg" variants={itemVariants}>
            PaperSnapX seamlessly supports your favorite formats and platforms.
          </motion.p>
        </motion.div>
      </motion.section>

      {/* Final CTA Section */}
      <motion.section
        id="cta"
        className="relative py-20 px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: false, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.div
          className="max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: false, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div
            className="relative rounded-3xl overflow-hidden p-12 sm:p-16 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white text-center shadow-2xl"
            variants={itemVariants}
          >
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full mix-blend-multiply filter blur-3xl" />
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-white rounded-full mix-blend-multiply filter blur-3xl" />
            </div>

            <div className="relative z-10">
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">Ready to turn your papers into power?</h2>
              <p className="text-lg sm:text-xl mb-8 opacity-95 font-semibold">
                Join thousands of students and professionals transforming their learning experience.
              </p>
              <motion.button
                onClick={() => router.push("/login")}
                className="px-10 py-4 bg-white text-purple-600 font-bold rounded-lg hover:shadow-2xl transition-all duration-300 inline-flex items-center gap-2"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Free <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Feature Modal */}
      {selectedFeature && (
        <motion.div
          className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50 backdrop-blur-sm"
          onClick={() => setSelectedFeature(null)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 20 }}
          >
            {(() => {
              const feature = features.find((f) => f.id === selectedFeature)
              if (!feature) return null
              const Icon = feature.icon
              return (
                <>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <Icon className={`w-12 h-12 ${feature.accentColor}`} />
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => setSelectedFeature(null)}
                      className="p-2 rounded-full hover:bg-gray-100"
                      aria-label="Close"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                  <p className="text-gray-700 mb-4">{feature.details}</p>
                  <div className="flex justify-end">
                    <button
                      onClick={() => setSelectedFeature(null)}
                      className="px-4 py-2 bg-gray-100 rounded-md font-medium hover:bg-gray-200"
                    >
                      Close
                    </button>
                  </div>
                </>
              )
            })()}
          </motion.div>
        </motion.div>
      )}

      {/* Video Modal */}
      {isVideoOpen && (
        <motion.div
          className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50 backdrop-blur-sm"
          onClick={() => setIsVideoOpen(false)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-black rounded-xl overflow-hidden w-full max-w-3xl aspect-video"
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.95 }}
          >
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="PaperSnapX Demo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </motion.div>
        </motion.div>
      )}

      <Footer />
    </div>
  )
}
