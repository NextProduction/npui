import Link from "next/link"
import { Button } from "@/components/ui/button"
import { PuzzleIcon } from "lucide-react"

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-npui-border bg-npui-background/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 font-bold text-npui-primary">
          <PuzzleIcon className="h-6 w-6" />
          <span className="text-xl">npui</span>
        </Link>
        <nav className="flex items-center gap-4 sm:gap-6">
          <Link href="/docs" className="text-sm font-medium hover:text-npui-primary transition-colors">
            Docs
          </Link>
          <Link href="/hooks" className="text-sm font-medium hover:text-npui-primary transition-colors">
            Hooks
          </Link>
          <Link href="/utils" className="text-sm font-medium hover:text-npui-primary transition-colors">
            Utilities
          </Link>
          <Link href="/examples" className="text-sm font-medium hover:text-npui-primary transition-colors">
            Examples
          </Link>
          <Link href="/learn" className="text-sm font-medium hover:text-npui-primary transition-colors">
            Learn
          </Link>
          <Link href="/contribute" className="text-sm font-medium hover:text-npui-primary transition-colors">
            Contribute
          </Link>
          <Link href="/playground" className="text-sm font-medium hover:text-npui-primary transition-colors">
            Playground
          </Link>
          <Link href="/developer" className="text-sm font-medium hover:text-npui-primary transition-colors">
            Developer
          </Link>
          <Link href="/production-ready" className="text-sm font-medium hover:text-npui-primary transition-colors">
            Production Ready
          </Link>
          <Link href="/about" className="text-sm font-medium hover:text-npui-primary transition-colors">
            About
          </Link>
          <Link href="/contact" className="text-sm font-medium hover:text-npui-primary transition-colors">
            Contact
          </Link>
          <Button
            asChild
            variant="secondary"
            className="bg-npui-secondary text-npui-secondary-foreground hover:bg-npui-secondary/80"
          >
            <Link href="hhttp://github.com/NextProduction/npui" target="_blank" rel="noopener noreferrer">
              GitHub
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  )
}
