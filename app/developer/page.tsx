import Link from "next/link"
import { CodePreview } from "@/components/code-preview"
import { PlayIcon, PackageIcon, TestTubeIcon, TerminalIcon } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function DeveloperPage() {
  const runWebAppCommand = `pnpm dev`
  const publishCliCommand = `pnpm publish -r --filter=@npui/cli --access public`
  const testCliCommand = `npx @npui/cli add button`
  const cliBuildCommand = `pnpm --filter=@npui/cli build`

  return (
    <div className="container py-12 md:py-24 lg:py-32 space-y-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-npui-primary mb-4">
          Developer Guide
        </h1>
        <p className="mx-auto max-w-[800px] text-npui-muted-foreground md:text-xl">
          Essential information for maintaining, developing, and contributing to the `npui` monorepo.
        </p>
      </div>

      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-npui-foreground flex items-center gap-2">
          <PlayIcon className="h-7 w-7 text-npui-primary" /> Running the Web App
        </h2>
        <p className="text-npui-muted-foreground text-lg">
          To start the development server for the `npui` documentation website, navigate to the monorepo root and run
          the following command:
        </p>
        <CodePreview code={runWebAppCommand} language="bash" title="Run Web App" />
        <p className="text-npui-muted-foreground text-lg">
          This will typically start the Next.js development server on `http://localhost:3000`.
        </p>
      </section>

      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-npui-foreground flex items-center gap-2">
          <PackageIcon className="h-7 w-7 text-npui-primary" /> Publishing the CLI to npm
        </h2>
        <p className="text-npui-muted-foreground text-lg">
          When you've made changes to the `@npui/cli` package and are ready to publish a new version to npm, follow
          these steps:
        </p>
        <ol className="list-decimal list-inside space-y-6 text-npui-muted-foreground text-lg">
          <li>
            **Update Version:** Increment the `version` in `packages/cli/package.json` according to{" "}
            <Link
              href="https://semver.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-npui-primary hover:underline"
            >
              Semantic Versioning
            </Link>
            .
          </li>
          <li>
            **Build the CLI:** Ensure the latest changes are compiled. Run this from the monorepo root:
            <CodePreview code={cliBuildCommand} language="bash" title="Build CLI" />
          </li>
          <li>
            **Login to npm:** If you haven't already, log in to your npm account in your terminal:
            <CodePreview code={`npm login`} language="bash" title="npm Login" />
          </li>
          <li>
            **Publish:** From the monorepo root, execute the publish command:
            <CodePreview code={publishCliCommand} language="bash" title="Publish CLI" />
            <p className="text-sm text-npui-muted-foreground mt-2">
              This command tells `pnpm` to recursively publish packages, specifically filtering for the `@npui/cli`
              package, and setting its access to public.
            </p>
          </li>
        </ol>
      </section>

      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-npui-foreground flex items-center gap-2">
          <TestTubeIcon className="h-7 w-7 text-npui-primary" /> Testing the CLI
        </h2>
        <p className="text-npui-muted-foreground text-lg">
          To test the functionality of the `npui` CLI locally without publishing it, you can use `npx` from the monorepo
          root. This allows you to simulate how a user would interact with the CLI.
        </p>
        <Card className="border-npui-border bg-npui-card">
          <CardHeader>
            <CardTitle className="text-npui-foreground flex items-center gap-2">
              <TerminalIcon className="h-5 w-5" /> Example: Adding a Component
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-npui-muted-foreground">
            <p>
              To test the `add` command, which copies a component from the `npui` source to a target directory (e.g.,{" "}
              `src/components/ui/`), run:
            </p>
            <CodePreview code={testCliCommand} language="bash" title="Test CLI Add Command" />
            <p>
              This command will attempt to copy the `button` component's files. Check your `src/components/ui/button`
              directory to verify the files were copied correctly.
            </p>
            <p className="text-sm italic">
              Note: For this local testing, the CLI assumes it's run from the monorepo root to access source component
              files. In a real published scenario, the CLI would fetch from a remote source.
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="space-y-8 text-center">
        <h2 className="text-3xl font-bold text-npui-foreground flex items-center justify-center gap-2">
          <Link
            href="http://github.com/NextProduction/npui/issues"
            target="_blank"
            rel="noopener noreferrer"
            className="text-npui-primary hover:underline flex items-center gap-2"
          >
            <img src="/placeholder.svg?height=28&width=28" alt="GitHub Icon" className="h-7 w-7" />
            Explore on GitHub
          </Link>
        </h2>
        <p className="text-npui-muted-foreground text-lg mx-auto max-w-[700px]">
          For more in-depth developer documentation, including monorepo structure and advanced maintenance tasks, refer
          to the `DEVELOPER.md` file in the repository.
        </p>
      </section>
    </div>
  )
}
