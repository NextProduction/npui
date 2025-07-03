"use client"

import { useState } from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism"
import { Button } from "@/components/ui/button"
import { CopyIcon, CheckIcon } from "lucide-react"
import { Label } from "@/components/ui/label"

interface CodePreviewProps {
  code: string
  language?: string // e.g., "tsx", "javascript"
  title?: string
}

export function CodePreview({ code, language = "tsx", title = "Code Example" }: CodePreviewProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000) // Reset after 2 seconds
  }

  return (
    <div className="relative rounded-lg border border-npui-border bg-npui-card overflow-hidden">
      <div className="flex items-center justify-between p-4 border-b border-npui-border">
        <Label className="text-npui-foreground">{title}</Label>
        <Button
          variant="ghost"
          size="sm"
          onClick={handleCopy}
          className="text-npui-muted-foreground hover:text-npui-foreground"
        >
          {copied ? <CheckIcon className="h-4 w-4 mr-2" /> : <CopyIcon className="h-4 w-4 mr-2" />}
          {copied ? "Copied!" : "Copy Code"}
        </Button>
      </div>
      <div className="p-4 overflow-x-auto">
        <SyntaxHighlighter
          language={language}
          style={atomDark}
          showLineNumbers
          wrapLines
          customStyle={{
            backgroundColor: "transparent",
            padding: 0,
            margin: 0,
            fontSize: "0.875rem", // text-sm
            lineHeight: "1.5", // leading-relaxed
          }}
          lineNumberStyle={{
            color: "#525252", // a darker gray for line numbers
            minWidth: "2.5em", // ensure enough space for line numbers
            paddingRight: "1em",
          }}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  )
}
