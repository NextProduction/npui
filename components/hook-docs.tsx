"use client"

import type { HookDetail } from "@/lib/hooks-data"
import { CodePreview } from "./code-preview"
import { Card, CardContent } from "@/components/ui/card"

interface HookDocsProps {
  hook: HookDetail
}

export function HookDocs({ hook }: HookDocsProps) {
  return (
    <div className="space-y-10">
      {/* Title and Description */}
      <div>
        <h1 className="text-4xl font-bold tracking-tighter text-npui-primary mb-4">{hook.name}</h1>
        <p className="text-lg text-npui-muted-foreground">{hook.description}</p>
      </div>

      {/* Code */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-npui-foreground">Code</h2>
        <CodePreview code={hook.code} language="tsx" title={`Code for ${hook.name}`} />
      </section>

      {/* Usage Example */}
      {hook.usageExample && (
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-npui-foreground">Usage Example</h2>
          <Card className="border-npui-border bg-npui-card">
            <CardContent className="p-6 flex items-center justify-center min-h-[150px]">
              {hook.usageExample}
            </CardContent>
          </Card>
        </section>
      )}
    </div>
  )
}
