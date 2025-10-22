"use client"

export function AuthLayout({ children, title }) {
    return (
        <div
            style={{
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#0a0a0a",
                padding: "1rem",
                fontFamily: "system-ui, -apple-system, sans-serif",
            }}
        >
            <div
                style={{
                    width: "100%",
                    maxWidth: "480px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                {/* Logo */}
                <div style={{ width: "100%", display: "flex", justifyContent: "center", marginBottom: "2rem" }}>
                    <img
                        src="/logo.png"
                        alt="PaperSnapX Logo"
                        style={{
                            height: "48px",
                            width: "auto",
                            objectFit: "contain",
                            display: "block"
                        }}
                    />
                </div>
                {/* Title */}
                <h1
                    style={{
                        fontSize: "clamp(28px, 5vw, 36px)",
                        fontWeight: "600",
                        color: "#ffffff",
                        marginBottom: "2rem",
                        textAlign: "center",
                        letterSpacing: "-0.5px",
                    }}
                >
                    {title}
                </h1>

                {/* Content */}
                {children}

                {/* Footer */}
                <div
                    style={{
                        marginTop: "2rem",
                        textAlign: "center",
                        fontSize: "12px",
                        color: "#666666",
                    }}
                >
                    <a
                        href="#"
                        style={{
                            color: "#888888",
                            textDecoration: "none",
                            transition: "color 0.2s ease",
                        }}
                        onMouseEnter={(e) => (e.target.style.color = "#ffffff")}
                        onMouseLeave={(e) => (e.target.style.color = "#888888")}
                    >
                        Terms of Service
                    </a>
                    {" and "}
                    <a
                        href="#"
                        style={{
                            color: "#888888",
                            textDecoration: "none",
                            transition: "color 0.2s ease",
                        }}
                        onMouseEnter={(e) => (e.target.style.color = "#ffffff")}
                        onMouseLeave={(e) => (e.target.style.color = "#888888")}
                    >
                        Privacy Policy
                    </a>
                </div>
            </div>
        </div>
    )
}
