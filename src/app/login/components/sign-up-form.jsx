"use client"

import { Eye, EyeOff, Check, X } from "lucide-react"
import { SocialLoginButtons } from "./social-login-buttons"

export function SignUpForm({
  name,
  setName,
  gender,
  setGender,
  email,
  setEmail,
  password,
  setPassword,
  showPassword,
  setShowPassword,
  passwordRequirements,
  isPasswordValid,
  isLoading,
  onSubmit,
  onSignInClick,
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
      <form onSubmit={onSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
        {/* Name Field */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          <label
            style={{
              fontSize: "14px",
              fontWeight: "500",
              color: "#ffffff",
            }}
          >
            Full Name
          </label>
          <input
            type="text"
            placeholder="Enter your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
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

        {/* Gender Field */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          <label
            style={{
              fontSize: "14px",
              fontWeight: "500",
              color: "#ffffff",
            }}
          >
            Gender
          </label>
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
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
              cursor: "pointer",
            }}
            onFocus={(e) => {
              e.target.style.borderColor = "#4a9eff"
              e.target.style.boxShadow = "0 0 0 3px rgba(74, 158, 255, 0.1)"
            }}
            onBlur={(e) => {
              e.target.style.borderColor = "#3a3a3a"
              e.target.style.boxShadow = "none"
            }}
          >
            <option value="">Select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Email Field */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          <label
            style={{
              fontSize: "14px",
              fontWeight: "500",
              color: "#ffffff",
            }}
          >
            Email
          </label>
          <input
            type="email"
            placeholder="Enter your email"
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

        {/* Password Field */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          <label
            style={{
              fontSize: "14px",
              fontWeight: "500",
              color: "#ffffff",
            }}
          >
            Password
          </label>
          <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
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

          {/* Password Requirements */}
          <div style={{ marginTop: "0.75rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <p style={{ fontSize: "12px", color: "#888888", fontWeight: "500" }}>Password requirements:</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "12px" }}>
                {passwordRequirements.length ? <Check size={14} color="#10b981" /> : <X size={14} color="#ef4444" />}
                <span style={{ color: passwordRequirements.length ? "#10b981" : "#888888" }}>8-15 characters</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "12px" }}>
                {passwordRequirements.uppercase ? <Check size={14} color="#10b981" /> : <X size={14} color="#ef4444" />}
                <span style={{ color: passwordRequirements.uppercase ? "#10b981" : "#888888" }}>
                  1 uppercase letter
                </span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "12px" }}>
                {passwordRequirements.lowercase ? <Check size={14} color="#10b981" /> : <X size={14} color="#ef4444" />}
                <span style={{ color: passwordRequirements.lowercase ? "#10b981" : "#888888" }}>
                  1 lowercase letter
                </span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "12px" }}>
                {passwordRequirements.number ? <Check size={14} color="#10b981" /> : <X size={14} color="#ef4444" />}
                <span style={{ color: passwordRequirements.number ? "#10b981" : "#888888" }}>1 number</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "12px" }}>
                {passwordRequirements.special ? <Check size={14} color="#10b981" /> : <X size={14} color="#ef4444" />}
                <span style={{ color: passwordRequirements.special ? "#10b981" : "#888888" }}>1 special character</span>
              </div>
            </div>
          </div>
        </div>

        {/* Sign Up Button */}
        <button
          type="submit"
          disabled={isLoading || !isPasswordValid || !name || !gender || !email}
          style={{
            width: "100%",
            padding: "12px 16px",
            backgroundColor: isLoading || !isPasswordValid || !name || !gender || !email ? "#3a3a3a" : "#ffffff",
            color: isLoading || !isPasswordValid || !name || !gender || !email ? "#888888" : "#0a0a0a",
            border: "none",
            borderRadius: "8px",
            fontSize: "15px",
            fontWeight: "600",
            cursor: isLoading || !isPasswordValid || !name || !gender || !email ? "not-allowed" : "pointer",
            transition: "all 0.2s ease",
            marginTop: "0.5rem",
          }}
          onMouseEnter={(e) => {
            if (!isLoading && isPasswordValid && name && gender && email) {
              e.target.style.backgroundColor = "#f0f0f0"
              e.target.style.transform = "translateY(-1px)"
              e.target.style.boxShadow = "0 4px 12px rgba(255, 255, 255, 0.15)"
            }
          }}
          onMouseLeave={(e) => {
            if (!isLoading && isPasswordValid && name && gender && email) {
              e.target.style.backgroundColor = "#ffffff"
              e.target.style.transform = "translateY(0)"
              e.target.style.boxShadow = "none"
            }
          }}
        >
          {isLoading ? "Creating account..." : "Sign Up"}
        </button>
      </form>

      {/* Social Login */}
      <SocialLoginButtons />

      {/* Back to Sign In */}
      <p
        style={{
          textAlign: "center",
          fontSize: "14px",
          color: "#888888",
          marginTop: "1.5rem",
        }}
      >
        Already have an account?{" "}
        <button
          onClick={onSignInClick}
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
          Sign in
        </button>
      </p>
    </div>
  )
}
