"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { FileText, Zap, Brain, MessageSquare, Upload, Cpu, BookOpen, Play, X, ArrowRight } from "lucide-react"

export default function LandingPage() {
  const [selectedFeature, setSelectedFeature] = useState(null)
  const [isVideoOpen, setIsVideoOpen] = useState(false)

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
      {/* Colorful Background with Red-Yellow Gradient */}
      <div className="fixed inset-0 -z-20 bg-gradient-to-br from-orange-50 via-yellow-50 to-red-50" />

      {/* Animated Background Elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-red-400 rounded-full mix-blend-multiply filter blur-3xl opacity-15"
          animate={{
            y: [0, 50, 0],
            x: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/3 right-1/4 w-96 h-96 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-15"
          animate={{
            y: [0, -50, 0],
            x: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 left-1/2 w-96 h-96 bg-orange-400 rounded-full mix-blend-multiply filter blur-3xl opacity-15"
          animate={{
            y: [0, 30, 0],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Hero Section */}
      <motion.section
        className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20"
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={containerVariants}
      >
        <motion.div
          className="text-center max-w-4xl mx-auto"
          variants={containerVariants}
        >
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 bg-clip-text text-transparent"
            variants={itemVariants}
          >
            Turn Documents into Knowledge with AI
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl text-gray-700 font-semibold mb-8 leading-relaxed"
            variants={itemVariants}
          >
            Upload. Understand. Interact — PaperSnapX transforms your notes, PDFs, and slides into summaries, quizzes,
            and chat-ready insights.
          </motion.p>

          <motion.div className="flex flex-col sm:flex-row gap-4 justify-center items-center" variants={itemVariants}>
            <button
              onClick={() => scrollToSection("cta")}
              className="px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:bg-red-600 hover:text-white hover:shadow-2xl hover:shadow-red-500/50 hover:scale-105 active:scale-95"
            >
              Get Started
            </button>
            <button
              onClick={() => scrollToSection("demo")}
              className="px-8 py-4 border-2 border-orange-600 text-orange-600 font-semibold rounded-lg transition-all duration-300 active:scale-95 hover:bg-teal-500 hover:text-white"
            >
              Check Demo
            </button>
          </motion.div>
        </motion.div>
      </motion.section>

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
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105 active:scale-95"
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
            {features.map((feature) => {
              if (feature.id === selectedFeature) {
                const Icon = feature.icon
                return (
                  <div key={feature.id}>
                    <div className="flex items-center justify-between mb-4">
                      <Icon className={`w-12 h-12 ${feature.accentColor}`} />
                      <button
                        onClick={() => setSelectedFeature(null)}
                        className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                      >
                        <X className="w-6 h-6" />
                      </button>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">{feature.title}</h3>
                    <p className="text-gray-700 text-lg leading-relaxed font-medium">{feature.details}</p>
                  </div>
                )
              }
            })}
          </motion.div>
        </motion.div>
      )}

      {/* Video Modal */}
      {isVideoOpen && (
        <motion.div
          className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50 backdrop-blur-sm"
          onClick={() => setIsVideoOpen(false)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="relative w-full max-w-4xl aspect-video"
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
          >
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="PaperSnapX Demo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg"
            />
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}
