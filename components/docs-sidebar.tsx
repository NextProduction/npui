"use client"

import Link from "next/link"
import { npuiComponents, npuiCategories } from "@/lib/components-data"
import { npuiHooks } from "@/lib/hooks-data" // Import hooks data
import { npuiUtilities } from "@/lib/utils-data" // Import utilities data
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"
import { useEffect, useState, useMemo } from "react"
import { Input } from "@/components/ui/input"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function DocsSidebar() {
  const pathname = usePathname()
  const [isClient, setIsClient] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    setIsClient(true)
  }, [])

  const filteredComponents = useMemo(() => {
    if (!searchTerm) {
      return npuiComponents
    }
    const lowerCaseSearchTerm = searchTerm.toLowerCase()
    return npuiComponents.filter(
      (component) =>
        component.name.toLowerCase().includes(lowerCaseSearchTerm) ||
        component.description.toLowerCase().includes(lowerCaseSearchTerm),
    )
  }, [searchTerm])

  const groupedComponents = useMemo(() => {
    const groups: { [key: string]: typeof npuiComponents } = {}
    npuiCategories.forEach((category) => {
      groups[category.id] = []
    })

    filteredComponents.forEach((component) => {
      if (groups[component.category]) {
        groups[component.category].push(component)
      }
    })

    return groups
  }, [filteredComponents])

  const filteredHooks = useMemo(() => {
    if (!searchTerm) {
      return npuiHooks
    }
    const lowerCaseSearchTerm = searchTerm.toLowerCase()
    return npuiHooks.filter(
      (hook) =>
        hook.name.toLowerCase().includes(lowerCaseSearchTerm) ||
        hook.description.toLowerCase().includes(lowerCaseSearchTerm),
    )
  }, [searchTerm])

  const filteredUtilities = useMemo(() => {
    if (!searchTerm) {
      return npuiUtilities
    }
    const lowerCaseSearchTerm = searchTerm.toLowerCase()
    return npuiUtilities.filter(
      (util) =>
        util.name.toLowerCase().includes(lowerCaseSearchTerm) ||
        util.description.toLowerCase().includes(lowerCaseSearchTerm),
    )
  }, [searchTerm])

  return (
    <aside className="sticky top-16 h-[calc(100vh-4rem)] w-64 shrink-0 overflow-y-auto border-r border-npui-border bg-npui-background p-6">
      <div className="mb-4">
        <Input
          type="text"
          placeholder="Search docs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full bg-npui-card border-npui-border text-npui-foreground placeholder:text-npui-muted-foreground"
        />
      </div>
      <nav className="flex flex-col gap-2">
        {/* Main Navigation Links */}
        <Link
          href="/docs"
          className={cn(
            "block rounded-md px-3 py-2 text-lg font-semibold text-npui-foreground hover:bg-npui-secondary hover:text-npui-primary transition-colors",
            isClient && pathname === "/docs" && "bg-npui-secondary text-npui-primary",
          )}
        >
          All Components
        </Link>
        <Link
          href="/hooks"
          className={cn(
            "block rounded-md px-3 py-2 text-lg font-semibold text-npui-foreground hover:bg-npui-secondary hover:text-npui-primary transition-colors",
            isClient && pathname === "/hooks" && "bg-npui-secondary text-npui-primary",
          )}
        >
          Hooks
        </Link>
        <Link
          href="/utils"
          className={cn(
            "block rounded-md px-3 py-2 text-lg font-semibold text-npui-foreground hover:bg-npui-secondary hover:text-npui-primary transition-colors",
            isClient && pathname === "/utils" && "bg-npui-secondary text-npui-primary",
          )}
        >
          Utilities
        </Link>
        <Link
          href="/contribute"
          className={cn(
            "block rounded-md px-3 py-2 text-lg font-semibold text-npui-foreground hover:bg-npui-secondary hover:text-npui-primary transition-colors",
            isClient && pathname === "/contribute" && "bg-npui-secondary text-npui-primary",
          )}
        >
          Contribute
        </Link>
        <div className="border-t border-npui-border my-2" /> {/* Separator */}
        {/* Components by Category */}
        <Accordion type="multiple" className="w-full">
          {npuiCategories.map((category) => {
            const componentsInCategory = groupedComponents[category.id] || []
            if (componentsInCategory.length === 0 && searchTerm) {
              return null // Hide category if no matching components and search is active
            }
            return (
              <AccordionItem value={category.id} key={category.id} className="border-b-0">
                <AccordionTrigger className="py-2 text-lg font-semibold text-npui-foreground hover:no-underline hover:text-npui-primary transition-colors">
                  {category.name}
                </AccordionTrigger>
                <AccordionContent className="pb-2">
                  <div className="flex flex-col gap-1 pl-4">
                    {componentsInCategory.length > 0 ? (
                      componentsInCategory.map((component) => (
                        <Link
                          key={component.slug}
                          href={`/docs/${component.slug}`}
                          className={cn(
                            "block rounded-md px-3 py-2 text-sm font-medium text-npui-muted-foreground hover:bg-npui-secondary hover:text-npui-foreground transition-colors",
                            isClient &&
                              pathname === `/docs/${component.slug}` &&
                              "bg-npui-secondary text-npui-foreground",
                          )}
                        >
                          {component.name}
                        </Link>
                      ))
                    ) : (
                      <p className="text-sm text-npui-muted-foreground italic">No components found.</p>
                    )}
                  </div>
                </AccordionContent>
              </AccordionItem>
            )
          })}
        </Accordion>
        {/* Hooks List */}
        {filteredHooks.length > 0 && (
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="hooks-list" className="border-b-0">
              <AccordionTrigger className="py-2 text-lg font-semibold text-npui-foreground hover:no-underline hover:text-npui-primary transition-colors">
                Hooks List
              </AccordionTrigger>
              <AccordionContent className="pb-2">
                <div className="flex flex-col gap-1 pl-4">
                  {filteredHooks.map((hook) => (
                    <Link
                      key={hook.slug}
                      href={`/hooks/${hook.slug}`}
                      className={cn(
                        "block rounded-md px-3 py-2 text-sm font-medium text-npui-muted-foreground hover:bg-npui-secondary hover:text-npui-foreground transition-colors",
                        isClient && pathname === `/hooks/${hook.slug}` && "bg-npui-secondary text-npui-foreground",
                      )}
                    >
                      {hook.name}
                    </Link>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        )}
        {/* Utilities List */}
        {filteredUtilities.length > 0 && (
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="utilities-list" className="border-b-0">
              <AccordionTrigger className="py-2 text-lg font-semibold text-npui-foreground hover:no-underline hover:text-npui-primary transition-colors">
                Utilities List
              </AccordionTrigger>
              <AccordionContent className="pb-2">
                <div className="flex flex-col gap-1 pl-4">
                  {filteredUtilities.map((util) => (
                    <Link
                      key={util.slug}
                      href={`/utils#${util.slug}`} // Utilities remain on single page, link to anchor
                      className={cn(
                        "block rounded-md px-3 py-2 text-sm font-medium text-npui-muted-foreground hover:bg-npui-secondary hover:text-npui-foreground transition-colors",
                        isClient && pathname === `/utils` && "bg-npui-secondary text-npui-foreground", // Highlight if on utilities page
                      )}
                    >
                      {util.name}
                    </Link>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        )}
      </nav>
    </aside>
  )
}
