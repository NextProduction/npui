import Link from "next/link"
import { PuzzleIcon } from "lucide-react" // Changed from MountainIcon

export function Footer() {
  return (
    <footer className="border-t border-npui-border py-8 text-npui-muted-foreground">
      <div className="container flex flex-col items-center justify-between gap-4 px-4 md:flex-row md:px-6">
        <div className="flex items-center gap-2">
          <PuzzleIcon className="h-5 w-5 text-npui-primary" /> {/* Changed icon */}
          <span className="text-sm font-medium">npui</span>
        </div>
        <p className="text-center text-sm md:text-left">&copy; {new Date().getFullYear()} npui. All rights reserved.</p>
        <nav className="flex gap-4 text-sm">
          <Link href="#" className="hover:text-npui-primary transition-colors">
            Privacy
          </Link>
          <Link href="#" className="hover:text-npui-primary transition-colors">
            Terms
          </Link>
        </nav>
      </div>
    </footer>
  )
}
