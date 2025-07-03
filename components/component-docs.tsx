"use client"

import type { NpuiComponent, PropDetail } from "@/lib/components-data"
import { CodePreview } from "./code-preview"
import { Card, CardContent } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { CopyIcon, CheckIcon, GithubIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import Link from "next/link"

interface ComponentDocsProps {
  component: NpuiComponent
}

export function ComponentDocs({ component }: ComponentDocsProps) {
  const [copiedCommand, setCopiedCommand] = useState(false)

  const installCommand = `npx npui add ${component.slug}`

  const handleCopyCommand = () => {
    navigator.clipboard.writeText(installCommand)
    setCopiedCommand(true)
    setTimeout(() => setCopiedCommand(false), 2000)
  }

  return (
    <div className="space-y-10">
      {/* Title and Description */}
      <div>
        <h1 className="text-4xl font-bold tracking-tighter text-npui-primary mb-4">{component.name}</h1>
        <p className="text-lg text-npui-muted-foreground">{component.description}</p>
        <div className="mt-4 flex flex-wrap items-center gap-4">
          {component.githubUrl && (
            <Button
              asChild
              variant="outline"
              className="border-npui-border text-npui-foreground hover:bg-npui-secondary bg-transparent"
            >
              <Link href={component.githubUrl} target="_blank" rel="noopener noreferrer">
                <GithubIcon className="h-4 w-4 mr-2" />
                Improve on GitHub
              </Link>
            </Button>
          )}
          {component.githubUrl && (
            <img
              src={`https://img.shields.io/github/stars/${component.githubUrl.split("github.com/")[1]}?style=social`}
              alt="GitHub stars"
              className="h-5"
            />
          )}
          {component.npmPackageName && (
            <img
              src={`https://img.shields.io/npm/dm/${component.npmPackageName}?label=npm%20downloads&color=orange&style=flat-square`}
              alt="npm downloads"
              className="h-5"
            />
          )}
        </div>
      </div>

      {/* Installation Command */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-npui-foreground">Installation</h2>
        <p className="text-npui-muted-foreground">Add this component to your project using the npui CLI:</p>
        <div className="relative rounded-lg border border-npui-border bg-npui-card overflow-hidden">
          <div className="flex items-center justify-between p-4 border-b border-npui-border">
            <code className="font-mono text-sm text-npui-foreground">{installCommand}</code>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleCopyCommand}
              className="text-npui-muted-foreground hover:text-npui-foreground"
            >
              {copiedCommand ? <CheckIcon className="h-4 w-4 mr-2" /> : <CopyIcon className="h-4 w-4 mr-2" />}
              {copiedCommand ? "Copied!" : "Copy Command"}
            </Button>
          </div>
        </div>
      </section>

      {/* Variants/Examples */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-npui-foreground">Variants & Examples</h2>
        {component.variants.map((variant, index) => (
          <div key={index} className="space-y-4 border-t border-npui-border pt-6 first:border-t-0 first:pt-0">
            <h3 className="text-xl font-semibold text-npui-foreground">{variant.title}</h3>
            {variant.description && <p className="text-npui-muted-foreground">{variant.description}</p>}
            <Card className="border-npui-border bg-npui-card">
              <CardContent className="p-6 flex items-center justify-center min-h-[150px]">
                {variant.preview}
              </CardContent>
            </Card>
            <CodePreview code={variant.code} language="tsx" title={`Code for ${variant.title}`} />
          </div>
        ))}
      </section>

      {/* Props List */}
      {component.props && component.props.length > 0 && (
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-npui-foreground">Props</h2>
          <p className="text-npui-muted-foreground">
            These are the available props for the {component.name} component:
          </p>
          <div className="rounded-md border border-npui-border overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-npui-secondary hover:bg-npui-secondary">
                  <TableHead className="w-[150px] text-npui-secondary-foreground">Prop</TableHead>
                  <TableHead className="w-[200px] text-npui-secondary-foreground">Type</TableHead>
                  <TableHead className="text-npui-secondary-foreground">Description</TableHead>
                  <TableHead className="w-[100px] text-npui-secondary-foreground">Default</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {component.props.map((prop: PropDetail) => (
                  <TableRow key={prop.name} className="border-npui-border">
                    <TableCell className="font-medium text-npui-foreground">{prop.name}</TableCell>
                    <TableCell className="font-mono text-sm text-npui-accent">{prop.type}</TableCell>
                    <TableCell className="text-npui-muted-foreground">{prop.description}</TableCell>
                    <TableCell className="font-mono text-sm text-npui-muted-foreground">
                      {prop.default || "-"}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </section>
      )}
    </div>
  )
}
