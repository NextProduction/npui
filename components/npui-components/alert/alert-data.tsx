import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert" // Corrected import
import { Terminal } from "lucide-react"
import type { ComponentVariant, PropDetail } from "@/lib/components-data"

export const alertProps: PropDetail[] = [
  {
    name: "variant",
    type: `"default" | "destructive"`,
    description: "The visual style of the alert.",
    default: `"default"`,
  },
  {
    name: "children",
    type: "React.ReactNode",
    description: "The content of the alert (AlertTitle, AlertDescription, etc.).",
  },
]

export const alertVariants: ComponentVariant[] = [
  {
    title: "Default Alert",
    description: "A standard alert for general information.",
    code: `import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from 'lucide-react';

export function MyAlert() {
  return (
    <Alert>
      <Terminal className="h-4 w-4" />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components to your app using the cli.
      </AlertDescription>
    </Alert>
  );
}`,
    preview: (
      <Alert>
        <Terminal className="h-4 w-4" />
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>You can add components to your app using the cli.</AlertDescription>
      </Alert>
    ),
  },
]
