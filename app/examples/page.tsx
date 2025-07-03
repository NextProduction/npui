import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CodePreview } from "@/components/code-preview"

export default function ExamplesPage() {
  const exampleCodeSnippet = `import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function MyCustomExample() {
  return (
    <Card className="p-6 max-w-md mx-auto">
      <h3 className="text-xl font-semibold mb-4">Example Card</h3>
      <p className="text-npui-muted-foreground mb-6">
        This is a custom example combining npui components.
      </p>
      <Button>Action Button</Button>
    </Card>
  );
}`

  return (
    <div className="container py-12 md:py-24 lg:py-32">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-npui-primary mb-4">
          Building with npui Examples
        </h1>
        <p className="mx-auto max-w-[800px] text-npui-muted-foreground md:text-xl">
          Learn how to create and contribute your own interactive examples using npui components.
        </p>
      </div>

      <section className="space-y-8 mb-16">
        <h2 className="text-3xl font-bold text-npui-foreground">What are npui Examples?</h2>
        <p className="text-npui-muted-foreground text-lg">
          npui examples are practical demonstrations of how to combine and utilize various npui components to build
          real-world UI patterns. They showcase best practices, common use cases, and inspire new ideas for your
          projects.
        </p>
      </section>

      <section className="space-y-8 mb-16">
        <h2 className="text-3xl font-bold text-npui-foreground">How to Create Your Own Example</h2>
        <p className="text-npui-muted-foreground text-lg">
          Creating an example is straightforward. You simply combine existing npui components (or even custom ones
          you've built on top of npui) to form a functional and visually appealing UI snippet.
        </p>
        <Card className="border-npui-border bg-npui-card">
          <CardHeader>
            <CardTitle>Example Structure</CardTitle>
            <CardDescription>A basic structure for an npui example component.</CardDescription>
          </CardHeader>
          <CardContent>
            <CodePreview code={exampleCodeSnippet} language="tsx" title="my-custom-example.tsx" />
          </CardContent>
        </Card>
        <p className="text-npui-muted-foreground text-lg mt-4">
          Remember to import the necessary components from `@/components/ui` and wrap your example in a functional React
          component.
        </p>
      </section>

      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-npui-foreground">Contribute Your Examples</h2>
        <p className="text-npui-muted-foreground text-lg">
          We encourage the community to contribute their own creative examples! If you've built something cool with npui
          and want to share it, follow these steps:
        </p>
        <ol className="list-decimal list-inside space-y-2 text-npui-muted-foreground text-lg">
          <li>Fork the npui GitHub repository.</li>
          <li>Create a new branch for your example.</li>
          <li>Add your example component file(s) to the `examples` directory.</li>
          <li>Update the `app/examples/page.tsx` to include a link/preview to your new example.</li>
          <li>Submit a pull request with a clear description of your example.</li>
        </ol>
        <Button
          asChild
          size="lg"
          className="bg-npui-primary text-npui-primary-foreground hover:bg-npui-primary/90 mt-6"
        >
          <Link href="http://github.com/NextProduction/npui/issues" target="_blank" rel="noopener noreferrer">
            Suggest or Contribute an Example
          </Link>
        </Button>
      </section>
    </div>
  )
}
