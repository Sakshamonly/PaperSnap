"use client"

import { useState } from "react"
import { AuthLayout } from "@/app/login/components/auth-layout"
import { SignInForm } from "@/app/login/components/sign-in-form"
import { SignUpForm } from "@/app/login/components/sign-up-form"
import { ForgotPasswordForm } from "@/app/login/components/forgot-password-form"
import { SuccessMessage } from "@/app/login/components/success-message"

export default function SignIn() {
  const [view, setView] = useState("signin")
  const [isLoading, setIsLoading] = useState(false)

  // Sign-in states
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)

  // Sign-up states
  const [signupName, setSignupName] = useState("")
  const [signupGender, setSignupGender] = useState("")
  const [signupEmail, setSignupEmail] = useState("")
  const [signupPassword, setSignupPassword] = useState("")
  const [showSignupPassword, setShowSignupPassword] = useState(false)

  const validatePassword = (pwd) => {
    const requirements = {
      length: pwd.length >= 8 && pwd.length <= 15,
      uppercase: /[A-Z]/.test(pwd),
      lowercase: /[a-z]/.test(pwd),
      number: /[0-9]/.test(pwd),
      special: /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(pwd),
    }
    return requirements
  }

  const passwordRequirements = validatePassword(signupPassword)
  const isPasswordValid = Object.values(passwordRequirements).every(Boolean)

  const handleSignIn = (e) => {
    e.preventDefault()
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      setView("signin-success")
      setTimeout(() => {
        window.location.href = "/dashboard"
      }, 2000)
    }, 1000)
  }

  const handleSignUp = (e) => {
    e.preventDefault()
    if (!isPasswordValid) return

    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      setView("signup-success")
      setTimeout(() => {
        window.location.href = "/dashboard"
      }, 2000)
    }, 1000)
  }

  const handleForgotPasswordSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      setView("forgot-success")
    }, 1000)
  }

  const handleGoToSignUp = () => {
    setView("signup")
    setSignupName("")
    setSignupGender("")
    setSignupEmail("")
    setSignupPassword("")
  }

  const handleGoToSignIn = () => {
    setView("signin")
    setEmail("")
    setPassword("")
  }

  const handleGoToForgotPassword = () => {
    setView("forgot-password")
    setEmail("")
  }

  return (
    <AuthLayout
      title={
        view === "signin"
          ? "Sign in"
          : view === "signup"
            ? "Create Account"
            : view === "forgot-password"
              ? "Reset Password"
              : view === "signin-success"
                ? "Welcome back!"
                : view === "signup-success"
                  ? "Account Created!"
                  : "Check Your Email"
      }
    >
      {/* Sign In View */}
      {view === "signin" && (
        <SignInForm
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          showPassword={showPassword}
          setShowPassword={setShowPassword}
          isLoading={isLoading}
          onSubmit={handleSignIn}
          onForgotClick={handleGoToForgotPassword}
          onSignUpClick={handleGoToSignUp}
        />
      )}

      {/* Sign In Success */}
      {view === "signin-success" && (
        <SuccessMessage title="Successfully signed in!" message="Moving to your dashboard..." />
      )}

      {/* Sign Up View */}
      {view === "signup" && (
        <SignUpForm
          name={signupName}
          setName={setSignupName}
          gender={signupGender}
          setGender={setSignupGender}
          email={signupEmail}
          setEmail={setSignupEmail}
          password={signupPassword}
          setPassword={setSignupPassword}
          showPassword={showSignupPassword}
          setShowPassword={setShowSignupPassword}
          passwordRequirements={passwordRequirements}
          isPasswordValid={isPasswordValid}
          isLoading={isLoading}
          onSubmit={handleSignUp}
          onSignInClick={handleGoToSignIn}
        />
      )}

      {/* Sign Up Success */}
      {view === "signup-success" && (
        <SuccessMessage title="Sign up successful!" message="Moving to your dashboard..." />
      )}

      {/* Forgot Password View */}
      {view === "forgot-password" && (
        <ForgotPasswordForm
          email={email}
          setEmail={setEmail}
          isLoading={isLoading}
          onSubmit={handleForgotPasswordSubmit}
          onBackClick={handleGoToSignIn}
        />
      )}

      {/* Forgot Password Success */}
      {view === "forgot-success" && (
        <div
          style={{
            width: "100%",
            backgroundColor: "#1a1a1a",
            borderRadius: "16px",
            padding: "clamp(1.5rem, 5vw, 2rem)",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.4)",
            border: "1px solid #2a2a2a",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1.5rem",
          }}
        >
          <SuccessMessage
            title="Password reset link sent!"
            message={`We've sent a password reset link to ${email}. Check your inbox and follow the link to reset your password.`}
          />

          {/* Back to Sign In Button */}
          <button
            onClick={handleGoToSignIn}
            style={{
              width: "100%",
              padding: "12px 16px",
              backgroundColor: "#ffffff",
              color: "#0a0a0a",
              border: "none",
              borderRadius: "8px",
              fontSize: "15px",
              fontWeight: "600",
              cursor: "pointer",
              transition: "all 0.2s ease",
              marginTop: "1rem",
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#f0f0f0"
              e.target.style.transform = "translateY(-1px)"
              e.target.style.boxShadow = "0 4px 12px rgba(255, 255, 255, 0.15)"
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "#ffffff"
              e.target.style.transform = "translateY(0)"
              e.target.style.boxShadow = "none"
            }}
          >
            Back to Sign In
          </button>
        </div>
      )}
    </AuthLayout>
  )
}
