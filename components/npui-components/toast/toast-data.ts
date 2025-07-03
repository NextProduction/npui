"use client"

import { Button } from "@/components/ui/button"
import type { ComponentVariant, PropDetail } from "@/lib/components-data"

export const toastProps: PropDetail[] = [
  {
    name: "title",
    type: "string",
    description: "The title of the toast.",
  },
  {
    name: "description",
    type: "string",
    description: "The description content of the toast.",
  },
  {
    name: "variant",
    type: `"default" | "destructive"`,
    description: "The visual style of the toast.",
    default: `"default"`,
  },
  {
    name: "duration",
    type: "number",
    description: "How long the toast should be displayed in milliseconds.",
    default: "5000",
  },
]

export const toastVariants: ComponentVariant[] = [
  {
    title: "Default Toast",
    description: "A standard toast notification for general information.",
    code: `import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export function DefaultToast() {
  const { toast } = useToast();

  return (
    <Button
      onClick={() => {
        toast({
          title: "Scheduled: Catch up",
          description: "Friday, February 10, 2023 at 5:57 PM",
        });
      }}
    >
      Show Toast
    </Button>
  );
}`,
    preview: (
      <Button
        onClick={() => {
          // This toast will only work if <Toaster /> is rendered in layout.tsx
          // For preview purposes, we'll just show a static message.
          alert("Toast triggered! (Requires Toaster component in layout)")
        }}
      >
        Show Toast
      </Button>
    ),
  },
  {
    title: "Destructive Toast",
    description: "A toast notification indicating an error or destructive action.",
    code: `import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export function DestructiveToast() {
  const { toast } = useToast();

  return (
    <Button
      variant="destructive"
      onClick={() => {
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: "There was a problem with your request.",
        });
      }}
    >
      Show Destructive Toast
    </Button>
  );
}`,
    preview: (
      <Button
        variant="destructive"
        onClick={() => {
          alert("Destructive Toast triggered! (Requires Toaster component in layout)")
        }}
      >
        Show Destructive Toast
      </Button>
    ),
  },
]
