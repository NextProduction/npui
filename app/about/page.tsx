import Link from "next/link"
import { MountainIcon, GithubIcon } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="container py-12 md:py-24 lg:py-32 text-center">
      <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-npui-primary mb-4">
        About{" "}
        <span className="inline-flex items-center">
          <MountainIcon className="h-8 w-8 mr-2" />
          npui
        </span>
      </h1>
      <p className="mx-auto max-w-[800px] text-npui-muted-foreground md:text-xl mb-8">
        Our mission is to empower developers to build beautiful, accessible, and high-performance user interfaces with
        ease.
      </p>
      <div className="space-y-6 max-w-3xl mx-auto text-left">
        <p className="text-npui-muted-foreground text-lg">
          npui is a modern component library built with a focus on developer experience and ultimate flexibility. We
          believe that UI components should be easy to use, highly customizable, and seamlessly integrate into any React
          project.
        </p>
        <p className="text-npui-muted-foreground text-lg">
          Unlike traditional component libraries, npui components are designed to be installed directly into your
          project. This "bring your own styles" approach, powered by Tailwind CSS, gives you full control over every
          aspect of the component, from styling to behavior. No more fighting with opinionated defaults or complex
          theming systems!
        </p>
        <p className="text-npui-muted-foreground text-lg">
          We are committed to building a vibrant community around npui. Your feedback, contributions, and ideas are
          invaluable in shaping the future of this library.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
          <Link
            href="http://github.com/NextProduction/npui"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-npui-primary-foreground bg-npui-primary hover:bg-npui-primary/90 transition-colors"
          >
            <GithubIcon className="h-5 w-5 mr-2" />
            Visit our GitHub
          </Link>
          <Link
            href="/docs"
            className="inline-flex items-center justify-center px-6 py-3 border border-npui-border text-base font-medium rounded-md shadow-sm text-npui-foreground bg-npui-card hover:bg-npui-secondary transition-colors"
          >
            Explore Documentation
          </Link>
        </div>
      </div>
    </div>
  )
}
