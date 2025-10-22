"use client"

import { Github, Linkedin } from "lucide-react"
import { FcGoogle } from "react-icons/fc" // Google icon import

export function SocialLoginButtons() {
  return (
    <>
      {/* Divider */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          margin: "1.5rem 0",
        }}
      >
        <div style={{ flex: 1, height: "1px", backgroundColor: "#2a2a2a" }} />
        <span style={{ fontSize: "12px", color: "#666666", fontWeight: "500" }}>OR</span>
        <div style={{ flex: 1, height: "1px", backgroundColor: "#2a2a2a" }} />
      </div>

      {/* Social Buttons */}
      <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", width: "100%" }}>
        {/* Google */}
        <button
          style={{
            width: "100%",
            padding: "12px 16px",
            backgroundColor: "transparent",
            border: "1px solid #2a2a2a",
            borderRadius: "8px",
            color: "#ffffff",
            fontSize: "14px",
            fontWeight: "500",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.75rem",
            transition: "all 0.2s ease",
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "#1a1a1a"
            e.target.style.borderColor = "#3a3a3a"
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "transparent"
            e.target.style.borderColor = "#2a2a2a"
          }}
        >
          <FcGoogle size={18} />
          Continue with Google
        </button>

        {/* GitHub */}
        <button
          style={{
            width: "100%",
            padding: "12px 16px",
            backgroundColor: "transparent",
            border: "1px solid #2a2a2a",
            borderRadius: "8px",
            color: "#ffffff",
            fontSize: "14px",
            fontWeight: "500",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.75rem",
            transition: "all 0.2s ease",
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "#1a1a1a"
            e.target.style.borderColor = "#3a3a3a"
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "transparent"
            e.target.style.borderColor = "#2a2a2a"
          }}
        >
          <Github size={18} />
          Continue with GitHub
        </button>

        {/* LinkedIn */}
        <button
          style={{
            width: "100%",
            padding: "12px 16px",
            backgroundColor: "transparent",
            border: "1px solid #2a2a2a",
            borderRadius: "8px",
            color: "#ffffff",
            fontSize: "14px",
            fontWeight: "500",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.75rem",
            transition: "all 0.2s ease",
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "#1a1a1a"
            e.target.style.borderColor = "#3a3a3a"
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "transparent"
            e.target.style.borderColor = "#2a2a2a"
          }}
        >
          <Linkedin size={18} style={{ color: "#0a66c2" }} />
          Continue with LinkedIn
        </button>
      </div>
    </>
  )
}
