"use client"

import { useState } from "react"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

interface CodeEditorProps {
  code: string
  language?: string // e.g., "tsx", "javascript"
  readOnly?: boolean
}

export function CodeEditor({ code, language = "tsx", readOnly = false }: CodeEditorProps) {
  const [editedCode, setEditedCode] = useState(code)

  return (
    <div className="grid w-full gap-1.5">
      <Label htmlFor="code-editor" className="text-npui-foreground">
        Code ({language})
      </Label>
      <Textarea
        id="code-editor"
        value={editedCode}
        onChange={(e) => setEditedCode(e.target.value)}
        readOnly={readOnly}
        className="font-mono text-sm bg-npui-card border-npui-border text-npui-foreground resize-y min-h-[200px]"
        spellCheck="false"
      />
      {!readOnly && (
        <p className="text-xs text-npui-muted-foreground mt-1">
          Note: This is a demonstration editor. For live code execution, copy the code to your local environment.
        </p>
      )}
    </div>
  )
}
