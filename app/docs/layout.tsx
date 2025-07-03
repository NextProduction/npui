import type React from "react"
import { DocsSidebar } from "@/components/docs-sidebar"

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-[calc(100vh-4rem)]">
      {" "}
      {/* Adjust min-height to account for header */}
      <DocsSidebar />
      <div className="flex-1 overflow-auto p-8">{children}</div>
    </div>
  )
}
