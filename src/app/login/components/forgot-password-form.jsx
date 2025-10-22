"use client"

import { Mail } from "lucide-react"

export function ForgotPasswordForm({ email, setEmail, isLoading, onSubmit, onBackClick }) {
  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "#1a1a1a",
        borderRadius: "16px",
        padding: "clamp(1.5rem, 5vw, 2rem)",
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.4)",
        border: "1px solid #2a2a2a",
      }}
    >
      <p
        style={{
          fontSize: "14px",
          color: "#888888",
          marginBottom: "1.5rem",
          textAlign: "center",
        }}
      >
        Enter your email address and we'll send you a link to reset your password.
      </p>

      <form onSubmit={onSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
        {/* Email Field */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          <label
            style={{
              fontSize: "14px",
              fontWeight: "500",
              color: "#ffffff",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            <Mail size={16} />
            Email
          </label>
          <input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "12px 14px",
              backgroundColor: "#0a0a0a",
              border: "1px solid #3a3a3a",
              borderRadius: "8px",
              color: "#ffffff",
              fontSize: "14px",
              outline: "none",
              transition: "all 0.2s ease",
              boxSizing: "border-box",
            }}
            onFocus={(e) => {
              e.target.style.borderColor = "#4a9eff"
              e.target.style.boxShadow = "0 0 0 3px rgba(74, 158, 255, 0.1)"
            }}
            onBlur={(e) => {
              e.target.style.borderColor = "#3a3a3a"
              e.target.style.boxShadow = "none"
            }}
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading}
          style={{
            width: "100%",
            padding: "12px 16px",
            backgroundColor: isLoading ? "#3a3a3a" : "#ffffff",
            color: isLoading ? "#888888" : "#0a0a0a",
            border: "none",
            borderRadius: "8px",
            fontSize: "15px",
            fontWeight: "600",
            cursor: isLoading ? "not-allowed" : "pointer",
            transition: "all 0.2s ease",
            marginTop: "0.5rem",
          }}
          onMouseEnter={(e) => {
            if (!isLoading) {
              e.target.style.backgroundColor = "#f0f0f0"
              e.target.style.transform = "translateY(-1px)"
              e.target.style.boxShadow = "0 4px 12px rgba(255, 255, 255, 0.15)"
            }
          }}
          onMouseLeave={(e) => {
            if (!isLoading) {
              e.target.style.backgroundColor = "#ffffff"
              e.target.style.transform = "translateY(0)"
              e.target.style.boxShadow = "none"
            }
          }}
        >
          {isLoading ? "Sending..." : "Send Reset Link"}
        </button>
      </form>

      {/* Back to Sign In */}
      <p
        style={{
          textAlign: "center",
          fontSize: "14px",
          color: "#888888",
          marginTop: "1.5rem",
        }}
      >
        <button
          onClick={onBackClick}
          style={{
            color: "#4a9eff",
            textDecoration: "none",
            fontWeight: "500",
            transition: "color 0.2s ease",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "0",
          }}
          onMouseEnter={(e) => (e.target.style.color = "#ffffff")}
          onMouseLeave={(e) => (e.target.style.color = "#4a9eff")}
        >
          Back to Sign In
        </button>
      </p>
    </div>
  )
}
