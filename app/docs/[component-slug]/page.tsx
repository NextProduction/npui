import { notFound } from "next/navigation"
import { npuiComponents } from "@/lib/components-data"
import { ComponentDocs } from "@/components/component-docs"

interface ComponentPageProps {
  params: {
    "component-slug": string
  }
}

export default function ComponentPage({ params }: ComponentPageProps) {
  const component = npuiComponents.find((comp) => comp.slug === params["component-slug"])

  if (!component) {
    notFound()
  }

  return <ComponentDocs component={component} />
}

// Generate static paths for all components
export async function generateStaticParams() {
  return npuiComponents.map((component) => ({
    "component-slug": component.slug,
  }))
}
