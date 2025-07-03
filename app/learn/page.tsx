import Link from "next/link"
export default function LearnPage() {
  return (
    <div className="container py-12 md:py-24 lg:py-32 text-center">
      <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-npui-primary mb-4">Learn npui</h1>
      <p className="mx-auto max-w-[800px] text-npui-muted-foreground md:text-xl mb-8">
        Dive deeper into npui with tutorials, guides, and advanced usage patterns.
      </p>
      <div className="space-y-6 max-w-3xl mx-auto text-left">
        <p className="text-npui-muted-foreground text-lg">
          This section will feature comprehensive guides on topics such as:
        </p>
        <ul className="list-disc list-inside text-npui-muted-foreground text-lg space-y-2">
          <li>Getting Started with npui in a Next.js Project</li>
          <li>Advanced Customization with Tailwind CSS</li>
          <li>Building Accessible Components</li>
          <li>Integrating npui with State Management Libraries</li>
          <li>Performance Optimization Tips</li>
        </ul>
        <p className="text-npui-muted-foreground text-lg">
          Stay tuned for more content! In the meantime, explore our{" "}
          <Link href="/docs" className="text-npui-primary hover:underline">
            documentation
          </Link>{" "}
          and{" "}
          <Link href="/examples" className="text-npui-primary hover:underline">
            examples
          </Link>{" "}
          to get started.
        </p>
      </div>
    </div>
  )
}
