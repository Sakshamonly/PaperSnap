"use client"

import { Mail, Lock, Eye, EyeOff } from "lucide-react"
import { SocialLoginButtons } from "./social-login-buttons"

export function SignInForm({
  email,
  setEmail,
  password,
  setPassword,
  showPassword,
  setShowPassword,
  isLoading,
  onSubmit,
  onForgotClick,
  onSignUpClick,
}) {
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
      {/* Form */}
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
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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

        {/* Password Field */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
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
              <Lock size={16} />
              Password
            </label>
            <button
              type="button"
              onClick={onForgotClick}
              style={{
                fontSize: "12px",
                color: "#888888",
                textDecoration: "none",
                transition: "color 0.2s ease",
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "0",
              }}
              onMouseEnter={(e) => (e.target.style.color = "#ffffff")}
              onMouseLeave={(e) => (e.target.style.color = "#888888")}
            >
              Forgot?
            </button>
          </div>
          <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                width: "100%",
                padding: "12px 14px",
                paddingRight: "40px",
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
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              style={{
                position: "absolute",
                right: "12px",
                background: "none",
                border: "none",
                color: "#888888",
                cursor: "pointer",
                padding: "4px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) => (e.target.style.color = "#ffffff")}
              onMouseLeave={(e) => (e.target.style.color = "#888888")}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div>

        {/* Sign In Button */}
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
          {isLoading ? "Signing in..." : "Continue"}
        </button>
      </form>

      {/* Social Login */}
      <SocialLoginButtons />

      {/* Sign Up Link */}
      <p
        style={{
          textAlign: "center",
          fontSize: "14px",
          color: "#888888",
          marginTop: "1.5rem",
        }}
      >
        Don't have an account?{" "}
        <button
          onClick={onSignUpClick}
          style={{
            color: "#ffffff",
            textDecoration: "none",
            fontWeight: "500",
            transition: "color 0.2s ease",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "0",
          }}
          onMouseEnter={(e) => (e.target.style.color = "#4a9eff")}
          onMouseLeave={(e) => (e.target.style.color = "#ffffff")}
        >
          Sign up
        </button>
      </p>
    </div>
  )
}
