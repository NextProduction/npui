"use client"

import { Progress } from "@/components/ui/progress"
import type { ComponentVariant, PropDetail } from "@/lib/components-data"

export const progressProps: PropDetail[] = [
  {
    name: "value",
    type: "number",
    description: "The current value of the progress bar (0-100).",
  },
  {
    name: "max",
    type: "number",
    description: "The maximum value of the progress bar.",
    default: "100",
  },
]

export const progressVariants: ComponentVariant[] = [
  {
    title: "Default Progress",
    description: "A basic progress bar indicating completion.",
    code: `import { Progress } from "@/components/ui/progress";
import { useState, useEffect } from "react";

export function DefaultProgress() {
  const [progress, setProgress] = useState(13);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return <Progress value={progress} className="w-[60%]" />;
}`,
    preview: (
      <div className="w-[60%]">
        <Progress value={66} />
      </div>
    ),
  },
]
