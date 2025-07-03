import Link from "next/link"
import { CodePreview } from "@/components/code-preview"
import { LightbulbIcon, CodeIcon, GitPullRequestIcon, FileTextIcon } from "lucide-react"

export default function ContributePage() {
  const componentDataExample = `// components/npui-components/my-new-component/my-new-component-data.ts
import { MyNewComponent } from "@/components/ui/my-new-component"; // Or your custom component path
import type { ComponentVariant, PropDetail } from "@/lib/components-data";

export const myNewComponentProps: PropDetail[] = [
  {
    name: "variant",
    type: '"default" | "secondary"',
    description: "The visual style of the component.",
    default: '"default"',
  },
];

export const myNewComponentVariants: ComponentVariant[] = [
  {
    title: "Default MyNewComponent",
    description: "A basic example of MyNewComponent.",
    code: \`import { MyNewComponent } from "@/components/ui/my-new-component";
export function DefaultMyNewComponent() {
  return <MyNewComponent>Hello World</MyNewComponent>;
}\`,
    preview: <MyNewComponent>Hello World</MyNewComponent>,
  },
];`

  const componentRegistryExample = `// lib/components-data.ts
// ... other imports
import { myNewComponentProps, myNewComponentVariants } from "@/components/npui-components/my-new-component/my-new-component-data";

export const npuiComponents: NpuiComponent[] = [
  // ... existing components
  {
    name: "My New Component",
    slug: "my-new-component",
    description: "A brand new component for npui.",
    category: "general", // Or another relevant category
    githubUrl: "http://github.com/NextProduction/npui",
    npmPackageName: "npui-my-new-component", // Placeholder
    props: myNewComponentProps,
    variants: myNewComponentVariants,
  },
];`

  const hookCodeExample = `// hooks/use-my-new-hook.ts
"use client"
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button"

import { Button } from "@/components/ui/button"

import { Button } from "@/components/ui/button"

import { Button } from "@/components/ui/button"

import { Button } from "@/components/ui/button"

import { Button } from "@/components/ui/button"

import { Button } from "@/components/ui/button"

import { Button } from "@/components/ui/button"

import { Button } from "@/components/ui/button"

import { Button } from "@/components/ui/button"

import { Button } from "@/components/ui/button"

import { Button } from "@/components/ui/button"

import { Button } from "@/components/ui/button"

import { Button } from "@/components/ui/button"

import { Button } from "@/components/ui/button"

import { Button } from "@/components/ui/button"

import { Button } from "@/components/ui/button"

import { Button } from "@/components/ui/button"

import { Button } from "@/components/ui/button"

import { Button } from "@/components/ui/button"

import { Button } from "@/components/ui/button"

import { Button } from "@/components/ui/button"

import { Button } from "@/components/ui/button"

import { Button } from "@/components/ui/button"

import { Button } from "@/components/ui/button"

import { Button } from "@/components/ui/button"

import { Button } from "@/components/ui/button"

import { Button } from "@/components/ui/button"

import { Button } from "@/components/ui/button"

import { Button } from "@/components/ui/button"


export function useMyNewHook(initialValue: number) {
  const [count, setCount] = useState(initialValue);

  useEffect(() => {
    console.log("My new hook is active!");
  }, []);

  return count;
}`

  const hookRegistryExample = `// lib/hooks-data.ts
// ... other imports
import { useMyNewHook } from "@/hooks/use-my-new-hook";

export const npuiHooks: HookDetail[] = [
  // ... existing hooks
  {
    name: "useMyNewHook",
    slug: "use-my-new-hook",
    description: "A custom hook that demonstrates a simple counter.",
    code: \`import { useState, useEffect } from "react";
export function useMyNewHook(initialValue: number) {
  const [count, setCount] = useState(initialValue);
  useEffect(() => {
    console.log("My new hook is active!");
  }, []);
  return count;
}\`,
    usageExample: \`import { useMyNewHook } from "@/hooks/use-my-new-hook";
export function MyNewHookExample() {
  const count = useMyNewHook(0);
  return <p>Count from hook: {count}</p>;
}\`,
  },
];`

  const utilCodeExample = `// lib/utils/my-new-utility.ts
/**
 * Adds two numbers together.
 * @param a The first number.
 * @param b The second number.
 * @returns The sum of a and b.
 */
export function addNumbers(a: number, b: number): number {
  return a + b;
}`

  const utilRegistryExample = `// lib/utils-data.ts
// ... other imports
import { addNumbers } from "@/lib/utils/my-new-utility";

export const npuiUtilities: UtilityDetail[] = [
  // ... existing utilities
  {
    name: "addNumbers",
    slug: "add-numbers",
    description: "A utility function to add two numbers.",
    code: \`export function addNumbers(a: number, b: number): number {
  return a + b;
}\`,
    usageExample: \`import { addNumbers } from "@/lib/utils/my-new-utility";
export function AddNumbersExample() {
  const sum = addNumbers(5, 3);
  return <p>5 + 3 = {sum}</p>;
}\`,
  },
];`

  return (
    <div className="container py-12 md:py-24 lg:py-32 space-y-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-npui-primary mb-4">
          Contribute to <span className="inline-flex items-center">npui</span>
        </h1>
        <p className="mx-auto max-w-[800px] text-npui-muted-foreground md:text-xl">
          Help us grow the `npui` library by contributing your own components, hooks, and utilities!
        </p>
      </div>

      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-npui-foreground flex items-center gap-2">
          <LightbulbIcon className="h-7 w-7 text-npui-primary" /> General Guidelines
        </h2>
        <p className="text-npui-muted-foreground text-lg">Before you start, please keep the following in mind:</p>
        <ul className="list-disc list-inside space-y-2 text-npui-muted-foreground text-lg">
          <li>
            **Consistency:** Follow the existing code style, naming conventions (kebab-case for slugs, PascalCase for
            component/hook names), and project structure.
          </li>
          <li>
            **Documentation:** Every contribution (component, hook, utility) must come with comprehensive documentation,
            including a description, code example, and a live preview/usage example.
          </li>
          <li>
            **Accessibility:** Ensure your contributions are accessible by following WAI-ARIA guidelines where
            applicable.
          </li>
          <li>
            **Testing:** While not strictly enforced in this environment, consider how your contribution would be tested
            in a real-world scenario.
          </li>
        </ul>
      </section>

      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-npui-foreground flex items-center gap-2">
          <CodeIcon className="h-7 w-7 text-npui-primary" /> Contributing Components
        </h2>
        <p className="text-npui-muted-foreground text-lg">To add a new component to `npui`, follow these steps:</p>
        <ol className="list-decimal list-inside space-y-6 text-npui-muted-foreground text-lg">
          <li>
            **Create Component Files:**
            <p className="mt-2">
              Create a new directory under `components/npui-components/` with your component's `kebab-case` slug (e.g.,{" "}
              `components/npui-components/my-new-component/`). Inside, create:
            </p>
            <ul className="list-disc list-inside ml-6 space-y-1">
              <li>
                `my-new-component-data.ts`: This file will hold the `PropDetail[]` and `ComponentVariant[]` for your
                component.
              </li>
              <li>
                Your component's `.tsx` file: If it's a direct `shadcn/ui` re-export, it might live in `components/ui/`.
                If it's a custom component built on `shadcn/ui` primitives, place it here (e.g.,{" "}
                `my-new-component.tsx`).
              </li>
            </ul>
            <p className="mt-4">Example `my-new-component-data.ts` content:</p>
            <CodePreview code={componentDataExample} language="tsx" title="my-new-component-data.ts" />
          </li>
          <li>
            **Update Component Registry:**
            <p className="mt-2">
              Open `lib/components-data.ts`. Import your component's `props` and `variants` from its data file, then add
              a new `NpuiComponent` object to the `npuiComponents` array.
            </p>
            <CodePreview code={componentRegistryExample} language="tsx" title="lib/components-data.ts" />
          </li>
          <li>
            **Ensure Preview:** Make sure the `preview` property in your `ComponentVariant` objects renders a functional
            and visually representative example of your component. This is crucial for the landing page and docs.
          </li>
        </ol>
      </section>

      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-npui-foreground flex items-center gap-2">
          <LightbulbIcon className="h-7 w-7 text-npui-primary" /> Contributing Hooks
        </h2>
        <p className="text-npui-muted-foreground text-lg">To add a new custom React hook, follow these steps:</p>
        <ol className="list-decimal list-inside space-y-6 text-npui-muted-foreground text-lg">
          <li>
            **Create Hook File:**
            <p className="mt-2">
              Create a new file under `hooks/` with a `use-` prefix and `kebab-case` slug (e.g.,{" "}
              `hooks/use-my-new-hook.ts`).
            </p>
            <CodePreview code={hookCodeExample} language="tsx" title="hooks/use-my-new-hook.ts" />
          </li>
          <li>
            **Update Hook Registry:**
            <p className="mt-2">
              Open `lib/hooks-data.ts`. Import your new hook and add a new `HookDetail` object to the `npuiHooks` array.
              Provide a `code` string and a `usageExample` React node.
            </p>
            <CodePreview code={hookRegistryExample} language="tsx" title="lib/hooks-data.ts" />
          </li>
        </ol>
      </section>

      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-npui-foreground flex items-center gap-2">
          <FileTextIcon className="h-7 w-7 text-npui-primary" /> Contributing Utilities
        </h2>
        <p className="text-npui-muted-foreground text-lg">To add a new utility function, follow these steps:</p>
        <ol className="list-decimal list-inside space-y-6 text-npui-muted-foreground text-lg">
          <li>
            **Create Utility File:**
            <p className="mt-2">
              Create a new file under `lib/utils/` with a `kebab-case` slug (e.g., `lib/utils/my-new-utility.ts`).
            </p>
            <CodePreview code={utilCodeExample} language="tsx" title="lib/utils/my-new-utility.ts" />
          </li>
          <li>
            **Update Utility Registry:**
            <p className="mt-2">
              Open `lib/utils-data.ts`. Import your new utility and add a new `UtilityDetail` object to the
              `npuiUtilities` array. Provide a `code` string and a `usageExample` React node.
            </p>
            <CodePreview code={utilRegistryExample} language="tsx" title="lib/utils-data.ts" />
          </li>
        </ol>
      </section>

      <section className="space-y-8 text-center">
        <h2 className="text-3xl font-bold text-npui-foreground flex items-center justify-center gap-2">
          <GitPullRequestIcon className="h-7 w-7 text-npui-primary" /> Submit Your Contribution
        </h2>
        <p className="text-npui-muted-foreground text-lg mx-auto max-w-[700px]">
          Once you've added your component, hook, or utility and updated its respective data file, you're ready to
          submit a Pull Request to the `npui` GitHub repository. We appreciate your contributions!
        </p>
        <Button
          asChild
          size="lg"
          className="bg-npui-primary text-npui-primary-foreground hover:bg-npui-primary/90 mt-6"
        >
          <Link href="http://github.com/NextProduction/npui/issues" target="_blank" rel="noopener noreferrer">
            Go to GitHub
          </Link>
        </Button>
      </section>
    </div>
  )
}
