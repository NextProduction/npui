import { npuiUtilities } from "@/lib/utils-data"
import { CodePreview } from "@/components/code-preview"
import { Card, CardContent } from "@/components/ui/card"

export default function UtilitiesPage() {
  return (
    <div className="space-y-10 p-8">
      <div>
        <h1 className="text-4xl font-bold tracking-tighter text-npui-primary mb-4">Utility Functions</h1>
        <p className="text-lg text-npui-muted-foreground">
          A collection of small, reusable utility functions to help with common programming tasks and enhance your
          development workflow.
        </p>
      </div>

      <section className="space-y-8">
        {npuiUtilities.map((util, index) => (
          <div key={util.slug} className="space-y-4 border-t border-npui-border pt-6 first:border-t-0 first:pt-0">
            <h2 className="text-2xl font-semibold text-npui-foreground">{util.name}</h2>
            <p className="text-npui-muted-foreground">{util.description}</p>

            <h3 className="text-xl font-semibold text-npui-foreground mt-6">Code</h3>
            <CodePreview code={util.code} language="tsx" title={`Code for ${util.name}`} />

            {util.usageExample && (
              <>
                <h3 className="text-xl font-semibold text-npui-foreground mt-6">Usage Example</h3>
                <Card className="border-npui-border bg-npui-card">
                  <CardContent className="p-6 flex items-center justify-center min-h-[150px]">
                    {util.usageExample}
                  </CardContent>
                </Card>
              </>
            )}
          </div>
        ))}
      </section>
    </div>
  )
}
