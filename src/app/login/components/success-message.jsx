import { Check } from "lucide-react"

export function SuccessMessage({ title, message }) {
  return (
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
      <div
        style={{
          width: "64px",
          height: "64px",
          backgroundColor: "#10b981",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Check size={32} color="#ffffff" />
      </div>

      <div style={{ textAlign: "center" }}>
        <h2 style={{ fontSize: "20px", fontWeight: "600", color: "#ffffff", marginBottom: "0.5rem" }}>{title}</h2>
        <p style={{ fontSize: "14px", color: "#888888" }}>{message}</p>
      </div>
    </div>
  )
}
