import { notFound } from "next/navigation"
import { npuiHooks } from "@/lib/hooks-data"
import { HookDocs } from "@/components/hook-docs" // New component for hook documentation

interface HookPageProps {
  params: {
    "hook-slug": string
  }
}

export default function HookPage({ params }: HookPageProps) {
  const hook = npuiHooks.find((h) => h.slug === params["hook-slug"])

  if (!hook) {
    notFound()
  }

  return <HookDocs hook={hook} />
}

// Generate static paths for all hooks
export async function generateStaticParams() {
  return npuiHooks.map((hook) => ({
    "hook-slug": hook.slug,
  }))
}
