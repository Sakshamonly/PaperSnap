"use client"

import { useState } from "react"
import { ChevronDown, Zap, Shield, Rocket, TrendingUp, CheckCircle, ArrowRight } from "lucide-react"
import Navbar from "../components/usable/navbar"
import Footer from "../components/usable/footer"

export default function GuidesPage() {
  const [openFAQ, setOpenFAQ] = useState(null)

  const faqItems = [
    {
      id: 1,
      question: "How do I get started with the platform?",
      answer:
        "Getting started is simple. Sign up for an account, complete the onboarding tutorial, and you'll be ready to create your first project in minutes. Our step-by-step guide will walk you through everything.",
    },
    {
      id: 2,
      question: "What are the system requirements?",
      answer:
        "Our platform works on any modern browser including Chrome, Firefox, Safari, and Edge. No additional software installation is required. We recommend a stable internet connection for the best experience.",
    },
    {
      id: 3,
      question: "Can I integrate with other tools?",
      answer:
        "Yes! We support integrations with 50+ popular tools and services. Check our integrations marketplace to see all available options and connect your favorite apps.",
    },
    {
      id: 4,
      question: "Is there a free trial available?",
      answer:
        "Absolutely. We offer a 14-day free trial with full access to all features. No credit card required to start. After the trial, choose a plan that works best for you.",
    },
    {
      id: 5,
      question: "How is my data secured?",
      answer:
        "We use enterprise-grade encryption, regular security audits, and comply with GDPR, SOC 2, and ISO 27001 standards. Your data is your data, and we take security seriously.",
    },
    {
      id: 6,
      question: "Can I customize the platform for my team?",
      answer:
        "Yes, our platform offers extensive customization options. You can configure workflows, create custom fields, set up automation rules, and tailor the interface to match your team's specific needs and preferences.",
    },
    {
      id: 7,
      question: "What kind of support do you offer?",
      answer:
        "We provide 24/7 email support, live chat during business hours, comprehensive documentation, video tutorials, and a community forum. Premium plans include dedicated account managers and priority support.",
    },
    {
      id: 8,
      question: "How often do you release new features?",
      answer:
        "We release new features and improvements every two weeks. Our product roadmap is transparent and community-driven. You can vote on features you'd like to see and stay updated with our monthly product updates.",
    },
    {
      id: 9,
      question: "Can I export my data?",
      answer:
        "Absolutely. You can export all your data in multiple formats including CSV, JSON, and PDF. We believe your data belongs to you, and we make it easy to migrate or backup whenever you need.",
    },
    {
      id: 10,
      question: "Is there an API available for developers?",
      answer:
        "Yes, we offer a comprehensive REST API and webhooks for developers. Our API documentation is extensive with code examples in multiple languages. You can build custom integrations and automate workflows programmatically.",
    },
  ]

  const benefits = [
    {
      icon: Zap,
      title: "Lightning Fast Performance",
      description:
        "Process tasks 10x faster with our optimized AI engine. Experience sub-second response times and real-time updates across all your workflows.",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description:
        "Bank-level encryption and compliance standards. We maintain SOC 2 Type II certification and GDPR compliance to protect your sensitive data.",
    },
    {
      icon: Rocket,
      title: "Seamless Integration",
      description:
        "Connect with your existing tools in minutes. Our pre-built connectors work with 50+ popular platforms including Slack, Salesforce, and more.",
    },
    {
      icon: TrendingUp,
      title: "Advanced Analytics",
      description:
        "Track performance with detailed insights and custom dashboards. Get actionable metrics to optimize your workflows and measure ROI effectively.",
    },
  ]

  const differentiators = [
    {
      title: "AI-Powered Intelligence",
      description: "Advanced machine learning models that learn from your usage patterns",
    },
    {
      title: "Unlimited Scalability",
      description: "Grow from startup to enterprise without infrastructure changes",
    },
    {
      title: "24/7 Expert Support",
      description: "Dedicated support team available round the clock",
    },
  ]

  const steps = [
    {
      number: "01",
      title: "Create Account",
      description: "Sign up in seconds with your email or social login",
    },
    {
      number: "02",
      title: "Configure Settings",
      description: "Customize your workspace and preferences",
    },
    {
      number: "03",
      title: "Connect Tools",
      description: "Integrate with your favorite applications",
    },
    {
      number: "04",
      title: "Start Building",
      description: "Launch your first project and see results",
    },
  ]

  return (
    <>
      <Navbar />
      <div className="w-full bg-white text-gray-900" style={{ paddingTop: "72px" }}>
        {/* Hero Section - Enhanced with more content */}
        <section className="relative bg-gradient-to-br from-gray-50 to-gray-100 py-24 md:py-40 overflow-hidden">
          {/* Subtle background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: "radial-gradient(circle at 1px 1px, gray 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            ></div>
          </div>

          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">Master Your Workflow</h1>
            <p className="text-lg md:text-2xl text-gray-600 mb-6 max-w-4xl mx-auto leading-relaxed font-medium">
              Unlock the full potential of our AI-powered platform with comprehensive guides, tutorials, and best
              practices.
            </p>
            {/* <p className="text-base md:text-lg text-gray-500 mb-10 max-w-3xl mx-auto leading-relaxed">
              Whether you're just getting started or looking to master advanced features, our guides are designed to help
              you succeed. Learn from industry experts, discover productivity tips, and join thousands of users
              transforming their workflows.
            </p> */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition font-semibold text-lg">
                Start Learning
              </button>
              <button className="border-2 border-gray-300 text-gray-900 px-8 py-4 rounded-lg hover:border-gray-400 transition font-semibold text-lg">
                View Documentation
              </button>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-16 max-w-2xl mx-auto">
              <div>
                <div className="text-3xl font-bold text-blue-600">50+</div>
                <p className="text-gray-600 text-sm mt-1">Integrations</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">10K+</div>
                <p className="text-gray-600 text-sm mt-1">Active Users</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">99.9%</div>
                <p className="text-gray-600 text-sm mt-1">Uptime</p>
              </div>
            </div>
          </div>
        </section>

        {/* Project Overview Section */}
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Text Content */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">How It Works</h2>
                <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                  Our platform combines cutting-edge AI technology with an intuitive interface to streamline your
                  workflow. Whether you're a beginner or an expert, you'll find everything you need to succeed.
                </p>
                <ul className="space-y-4">
                  {["Intuitive dashboard", "Real-time collaboration", "Advanced automation", "Detailed analytics"].map(
                    (item, i) => (
                      <li key={i} className="flex items-center gap-3 text-gray-700">
                        <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                        {item}
                      </li>
                    ),
                  )}
                </ul>
              </div>

              {/* Product Screenshot Placeholder */}
              <div className="bg-gradient-to-br from-blue-50 to-gray-100 rounded-2xl p-8 shadow-lg">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <div className="space-y-4">
                    <div className="h-3 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                    <div className="grid grid-cols-3 gap-4 mt-6">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="h-20 bg-blue-100 rounded-lg"></div>
                      ))}
                    </div>
                    <div className="h-3 bg-gray-200 rounded w-full mt-6"></div>
                    <div className="h-3 bg-gray-200 rounded w-5/6"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How It Helps You</h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Discover the key benefits that make our platform the choice of thousands
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {benefits.map((benefit, i) => {
                const Icon = benefit.icon
                return (
                  <div
                    key={i}
                    className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition border border-gray-100"
                  >
                    <div className="bg-blue-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                      <Icon className="w-7 h-7 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Differentiators Section */}
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Sets Us Apart</h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Industry-leading features that give you a competitive edge
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {differentiators.map((item, i) => (
                <div key={i} className="bg-gradient-to-br from-blue-50 to-gray-50 rounded-2xl p-8 border border-blue-100">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-white font-bold text-lg">{i + 1}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Getting Started in 4 Steps Section */}
        <section className="py-20 md:py-28 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Getting Started in 4 Steps</h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">Follow our simple process to get up and running</p>
            </div>

            <div className="relative">
              {/* Timeline line removed */}

              <div className="grid md:grid-cols-4 gap-8">
                {steps.map((step, i) => (
                  <div key={i} className="relative">
                    {/* Timeline dot */}
                    <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-0 w-12 h-12 bg-white border-4 border-blue-600 rounded-full items-center justify-center z-10">
                      <span className="text-blue-600 font-bold">{i + 1}</span>
                    </div>

                    {/* Card */}
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 md:mt-16">
                      <div className="md:hidden mb-4 w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold">{i + 1}</span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-600 text-lg">Find answers to common questions about our platform</p>
            </div>

            <div className="space-y-4">
              {faqItems.map((item) => (
                <div
                  key={item.id}
                  className="border border-gray-200 rounded-lg overflow-hidden hover:border-gray-300 transition"
                >
                  <button
                    onClick={() => setOpenFAQ(openFAQ === item.id ? null : item.id)}
                    className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-gray-50 transition"
                  >
                    <span className="text-left font-semibold text-gray-900">{item.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-600 flex-shrink-0 transition-transform ${
                        openFAQ === item.id ? "transform rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openFAQ === item.id && (
                    <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                      <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Support Form Section */}
        <section className="py-20 md:py-28 bg-gray-50">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Still Have Questions?</h2>
              <p className="text-gray-600 mb-8">
                Our support team is here to help. Fill out the form below and we'll get back to you within 24 hours.
              </p>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">Full Name</label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">Email Address</label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">Subject</label>
                  <input
                    type="text"
                    placeholder="How can we help?"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">Message</label>
                  <textarea
                    rows="5"
                    placeholder="Tell us more about your question..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-medium"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-700 py-20 md:py-28">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
              Join thousands of users who are already transforming their workflow with our platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition font-semibold flex items-center justify-center gap-2">
                Start Free Trial <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:bg-opacity-10 transition font-semibold">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}
