# npui - Modern Component Library & Future Design System

<!-- ![npui Logo](public/placeholder.svg?height=150&width=150&text=npui) -->

`npui` is a modern, accessible, and highly customizable component library for React, built with Tailwind CSS. Developed and maintained by **Mahdi Hazrati** as part of **Next Production Dev**, `npui` aims to empower developers to accelerate their UI development with a collection of beautiful, production-ready components, hooks, and utilities. Our vision is to evolve `npui` into a comprehensive design system that provides a unified language for design and development.

## ✨ Features

*   **Extensive Component Library:** A growing collection of UI components (Buttons, Cards, Alerts, Inputs, Carousels, Accordions, Tabs, Dialogs, Dropdown Menus, Checkboxes, Radio Groups, Selects, Sliders, Switches, Tooltips, Avatar, Badge, Progress, Toast, Calendar, Alert Dialog, Hover Card, Separator) designed for various use cases.
*   **Custom Hooks:** A curated set of React hooks to simplify common logic and enhance application functionality (e.g., `useDebounce`, `useLocalStorage`, `useOutsideClick`, `useMediaQuery`, `usePrevious`, `useCopyToClipboard`, `useEventListener`, `useIsomorphicLayoutEffect`, `useWindowSize`, `useScrollPosition`).
*   **Utility Functions:** Essential JavaScript utilities for common tasks (e.g., `cn`, `formatDate`, `capitalize`, `truncateString`, `debounce`, `throttle`, `isValidEmail`, `generateRandomId`, `clamp`, `hexToRgba`, `getRandomItem`).
*   **Tailwind CSS-first:** All components are styled using Tailwind CSS, providing full control over styling and easy customization.
*   **Full Customization:** Components are installed directly into your project, allowing you to modify them to suit your exact needs without fighting opinionated defaults.
*   **Accessibility (A11y):** Components are built with accessibility in mind, following WAI-ARIA guidelines to ensure inclusive user experiences.
*   **Modular & Composable:** Designed to be easily combined like building blocks to create complex and unique interfaces.
*   **Comprehensive Documentation:** Detailed documentation for each component, hook, and utility, including props, variants, code examples, and live previews.
*   **SEO Friendly:** Optimized for search engines with proper metadata and semantic HTML.

## 🚀 Getting Started

### Installation

To add `npui` components to your project, you'll use the `npui` CLI tool.

First, ensure you have `pnpm` installed globally (`npm install -g pnpm`).

Then, you can use `npx` to run the `npui` CLI:

```bash
npx @npui/cli add <component-name>
```

For example, to add a Button component:

```bash
npx @npui/cli add button
```

This command will copy the component's code directly into your project, usually under `src/components/ui/`, making it fully customizable.

### Project Setup (Conceptual)

1.  **Next.js Project:** Ensure you have a Next.js project set up (App Router recommended).
2.  **Tailwind CSS:** Make sure Tailwind CSS is configured in your project. `npui` relies heavily on Tailwind for styling.
3.  **`globals.css`:** The `app/globals.css` file should include the base Tailwind directives and any custom CSS variables for `npui`'s theming.
4.  **`tailwind.config.ts`:** Your Tailwind configuration should extend `npui`'s custom colors and other settings.

You can also run the conceptual `init` command to help set up your project:

```bash
npx @npui/cli init
```

## 💡 Usage

### Components

Once a component is added to your project, you can import and use it like any other React component:

```tsx
// components/my-page.tsx
import { Button } from "@/components/ui/button"; // Or "@/components/npui-components/button" if you moved it

export default function MyPage() {
  return (
    <div>
      <Button onClick={() => alert("Hello!")}>Click Me</Button>
      <Button variant="secondary">Learn More</Button>
    </div>
  );
}
```

Refer to the `/docs` section of the `npui` platform for detailed usage, props, and examples for each component.

### Hooks

Hooks are functions that let you "hook into" React state and lifecycle features from function components.

```tsx
// components/my-component.tsx
import { useState } from "react";
import { useDebounce } from "@/hooks/use-debounce"; // Assuming path

export default function MyComponent() {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  // Use debouncedSearchTerm for API calls or heavy operations
  // useEffect(() => {
  //   if (debouncedSearchTerm) {
  //     console.log("Fetching data for:", debouncedSearchTerm);
  //   }
  // }, [debouncedSearchTerm]);

  return (
    <input
      type="text"
      placeholder="Search..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
}
```

Explore the `/hooks` section for a full list of available hooks and their usage.

### Utilities

Utility functions are standalone helpers for common tasks.

```ts
// my-script.ts
import { capitalize } from "@/lib/utils/capitalize"; // Assuming path
import { isValidEmail } from "@/lib/utils/is-valid-email"; // Assuming path

console.log(capitalize("hello world")); // Output: "Hello world"
console.log(isValidEmail("test@example.com")); // Output: true
console.log(isValidEmail("invalid-email")); // Output: false
```

Check the `/utils` section for all available utilities and their examples.

## 📁 Project Structure (Monorepo)

This project is structured as a monorepo using `pnpm` workspaces:

```
npui-monorepo/
├── pnpm-workspace.yaml       # Defines monorepo workspaces
├── package.json              # Root package.json for monorepo scripts
├── apps/
│   └── web/                  # The Next.js documentation website
│       ├── package.json      # Website's dependencies and scripts
│       ├── app/
│       ├── components/
│       └── ...
└── packages/
    └── cli/                  # The `npui` CLI tool
        ├── package.json      # CLI's dependencies and metadata for npm publish
        └── src/
            └── index.ts      # CLI logic (e.g., `add` command)
```

### Publishing to npm

To publish the `@npui/cli` package to npm, you would navigate to the root of the monorepo and run:

```bash
pnpm publish -r --filter=@npui/cli --access public
```

This command tells `pnpm` to recursively publish packages, specifically filtering for the `@npui/cli` package, and setting its access to public.

## 🗺️ Roadmap to a Design System

Our goal is to evolve `npui` beyond a component library into a comprehensive design system. This journey involves integrating design principles, guidelines, and tooling to create a unified language for both designers and developers.

### Phase 1: Foundations & Core Components (Current State & Near Future)

*   **Establish Design Principles:** Define core values and principles that guide all design and development decisions (e.g., accessibility-first, performance, flexibility, consistency).
*   **Refine Design Tokens:** Formalize and expand Tailwind CSS configuration into a robust set of design tokens (colors, typography, spacing, shadows, border-radius) that can be consumed by both code and design tools.
*   **Expand Component Library:** Continue adding a wide range of high-quality, accessible, and customizable React components, covering more UI patterns and use cases.
*   **Enhance Documentation:** Improve component documentation with clear usage guidelines, accessibility notes, and best practices.

### Phase 2: Design Integration & Tooling

*   **Design Kit Creation:** Develop and maintain design kits (e.g., Figma, Sketch libraries) that mirror the `npui` component library and design tokens, enabling designers to work with the same building blocks as developers.
*   **Automated Token Sync:** Explore tools and processes to automatically sync design tokens between design tools and the codebase, ensuring consistency.
*   **CLI Enhancements:** Extend the `npui` CLI to support scaffolding new components with predefined structures and potentially managing design tokens.
*   **Usage Guidelines:** Create detailed guidelines for when and how to use each component, including content best practices, interaction patterns, and accessibility considerations.

### Phase 3: Governance & Maturity

*   **Contribution Model:** Establish a clear contribution model for both design and development, encouraging community involvement while maintaining quality and consistency.
*   **Version Control & Release Strategy:** Implement a robust versioning and release strategy for the design system, ensuring backward compatibility and clear communication of changes.
*   **Performance & Accessibility Audits:** Regularly conduct performance and accessibility audits to ensure the system remains high-quality and inclusive.
*   **Community & Support:** Foster a strong community around `npui`, providing support channels and gathering feedback to drive continuous improvement.

By following this roadmap, `npui` aims to become an indispensable tool for building consistent, beautiful, and high-performing user interfaces.

## 🤝 Contributing

We welcome contributions to `npui`! If you have ideas for new components, hooks, utilities, or improvements to existing ones, please feel free to:

1.  **Fork** the repository.
2.  **Create a new branch** for your feature or bug fix.
3.  **Implement** your changes, ensuring they adhere to the existing code style and best practices.
4.  **Write comprehensive documentation** (props, variants, code examples) for any new additions.
5.  **Submit a pull request** with a clear description of your changes.

For detailed developer guidelines, refer to the `DEVELOPER.md` file in the repository.

## 📄 License

This project is licensed under the MIT License.

## ✉️ Contact

For collaborations, project inquiries, or just to say hello, feel free to reach out to **Mahdi Hazrati** or **Next Production Dev**:

*   **Email:** mahdi@nextproduction.dev
*   **Portfolio:** [https://nextproduction.dev](https://nextproduction.dev)
*   **Telegram:** @TheMahdiHazrati
