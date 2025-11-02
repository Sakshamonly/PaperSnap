"use client"

import { useState } from "react"
import Navbar from "./components/navbar-d"
import DashboardHome from "./components/dashboard-home"
import DocumentsPage from "./components/documents-page"
import AIChatPage from "./components/ai-chat-page"
import GuidesPage from "./components/guides-page"
import SettingsPage from "./components/settings-page"

export default function Page() {
  const [currentPage, setCurrentPage] = useState("dashboard")
  const [documents, setDocuments] = useState([])
  const [totalDocuments, setTotalDocuments] = useState(0)
  const [lastUpload, setLastUpload] = useState("Never")
  const [storageUsed, setStorageUsed] = useState(0)

  const handleAddDocument = (newDoc) => {
    setDocuments([newDoc, ...documents])
    setTotalDocuments((prev) => prev + 1)
    setLastUpload(new Date().toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" }))
    const newStorage = storageUsed + Number.parseFloat(newDoc.size)
    setStorageUsed(Number.parseFloat(newStorage.toFixed(2)))
  }

  const handleDeleteDocument = (id) => {
    const docToDelete = documents.find((doc) => doc.id === id)
    if (docToDelete) {
      const newStorage = storageUsed - Number.parseFloat(docToDelete.size)
      setStorageUsed(Number.parseFloat(newStorage.toFixed(2)))
    }
    const newDocs = documents.filter((doc) => doc.id !== id)
    setDocuments(newDocs)
    setTotalDocuments(newDocs.length)
  }

  const renderPage = () => {
    switch (currentPage) {
      case "dashboard":
        return (
          <DashboardHome
            setCurrentPage={setCurrentPage}
            documents={documents}
            totalDocuments={totalDocuments}
            lastUpload={lastUpload}
            storageUsed={storageUsed}
            handleAddDocument={handleAddDocument}
          />
        )
      case "documents":
        return (
          <DocumentsPage
            documents={documents}
            setDocuments={setDocuments}
            handleDeleteDocument={handleDeleteDocument}
            setCurrentPage={setCurrentPage}
          />
        )
      case "chat":
        return (
          <AIChatPage documents={documents} handleAddDocument={handleAddDocument} setCurrentPage={setCurrentPage} />
        )
      case "guides":
        return <GuidesPage setCurrentPage={setCurrentPage} />
      case "settings":
        return <SettingsPage setCurrentPage={setCurrentPage} />
      default:
        return (
          <DashboardHome
            setCurrentPage={setCurrentPage}
            documents={documents}
            totalDocuments={totalDocuments}
            lastUpload={lastUpload}
            storageUsed={storageUsed}
            handleAddDocument={handleAddDocument}
          />
        )
    }
  }

  return (
    <div className="min-h-screen" style={{ background: "linear-gradient(135deg, #f5f7ff 0%, #f0f9ff 100%)" }}>
      <Navbar setCurrentPage={setCurrentPage} />
      <main className="pt-24 w-full">{renderPage()}</main>
    </div>
  )
}
