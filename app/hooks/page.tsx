import Link from "next/link"
import { npuiHooks } from "@/lib/hooks-data"
import { LightbulbIcon } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function HooksPage() {
  return (
    <div className="space-y-10 p-8">
      <div>
        <h1 className="text-4xl font-bold tracking-tighter text-npui-primary mb-4">Custom Hooks</h1>
        <p className="text-lg text-npui-muted-foreground">
          Explore a collection of useful React hooks designed to simplify common patterns and enhance your application's
          functionality. Click on a hook to view its detailed documentation and live examples.
        </p>
      </div>

      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-npui-foreground flex items-center gap-2">
          <LightbulbIcon className="h-7 w-7 text-npui-primary" /> Available Hooks
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {npuiHooks.map((hook) => (
            <Link key={hook.slug} href={`/hooks/${hook.slug}`}>
              <Card className="h-full border-npui-border bg-npui-card transition-all hover:shadow-md hover:border-npui-primary/50">
                <CardHeader>
                  <CardTitle className="text-npui-foreground">{hook.name}</CardTitle>
                  <CardDescription className="text-npui-muted-foreground line-clamp-2">
                    {hook.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>{/* No live preview here, just a link to the detailed page */}</CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
