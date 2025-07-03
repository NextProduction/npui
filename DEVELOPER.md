# npui - Developer Documentation

This document provides guidelines for maintaining and contributing to the `npui` monorepo.

## 📁 Monorepo Structure

The `npui` project is organized as a monorepo using `pnpm` workspaces. This structure allows us to manage multiple related packages (the documentation website and the CLI tool) within a single repository.

```
npui-monorepo/
├── pnpm-workspace.yaml       # Defines monorepo workspaces
├── package.json              # Root package.json for monorepo-wide scripts
├── apps/
│   └── web/                  # The Next.js documentation website
│       ├── package.json      # Website's dependencies and scripts
│       ├── app/              # Next.js App Router pages
│       ├── components/       # Shared React components (Header, Footer, etc.)
│       │   ├── ui/           # Shadcn/ui components (assumed)
│       │   └── npui-components/ # Co-located component data and custom wrappers
│       ├── hooks/            # Custom React hooks
│       └── lib/              # Data definitions and utility functions
│           ├── components-data.ts
│           ├── hooks-data.ts
│           ├── utils-data.ts
│           └── utils/
└── packages/
    └── cli/                  # The `@npui/cli` tool
        ├── package.json      # CLI's dependencies and metadata for npm publish
        ├── src/              # CLI source code
        │   └── index.ts      # Main CLI logic
        └── dist/             # Compiled CLI output
```

## 🚀 Getting Started (for Developers)

1.  **Clone the repository:**
    ```bash
    git clone <your-repo-url>
    cd npui-monorepo
    ```
2.  **Install pnpm:** If you don't have `pnpm` installed globally:
    ```bash
    npm install -g pnpm
    ```
3.  **Install dependencies:** From the monorepo root:
    ```bash
    pnpm install
    ```
    This will install dependencies for both `apps/web` and `packages/cli`.
4.  **Build the CLI:**
    ```bash
    pnpm --filter=@npui/cli build
    ```
    This compiles the TypeScript code for the CLI.
5.  **Start the development server (website):**
    ```bash
    pnpm dev
    ```
    This will start the Next.js development server for the documentation website.

## 🛠️ Maintenance Tasks

### Running Scripts

All monorepo-wide scripts are defined in the root `package.json`. You can run them using `pnpm`:

*   **Build all packages:** `pnpm build`
*   **Run dev server for website:** `pnpm dev`
*   **Lint all packages:** `pnpm lint`
*   **Run tests for all packages:** `pnpm test` (conceptual, assuming tests are set up)

### Publishing the CLI

To publish a new version of the `@npui/cli` to npm:

1.  **Update version:** Increment the `version` in `packages/cli/package.json` according to [Semantic Versioning](https://semver.org/).
2.  **Build the CLI:** Ensure the latest changes are compiled:
    ```bash
    pnpm --filter=@npui/cli build
    ```
3.  **Login to npm:** If you haven't already:
    ```bash
    npm login
    ```
4.  **Publish:** From the monorepo root:
    ```bash
    pnpm publish -r --filter=@npui/cli --access public
    ```
    This command will publish the `@npui/cli` package to the npm registry.

### Adding/Updating Components

1.  **Create/Update Component Files:**
    *   For a new component, create a new directory under `apps/web/components/npui-components/<component-slug>/`.
    *   Inside, create `<component-slug>-data.ts` (for props and variants) and the component's `.tsx` file (if it's a custom wrapper or not directly from `shadcn/ui`).
    *   Ensure the component's main `.tsx` file is also available in `apps/web/components/ui/` if it's a direct `shadcn/ui` component.
2.  **Update `apps/web/lib/components-data.ts`:**
    *   Import the `props` and `variants` from your component's data file.
    *   Add a new `NpuiComponent` object to the `npuiComponents` array, ensuring all fields (name, slug, description, category, props, variants) are correctly populated.
    *   The `preview` property in `ComponentVariant` is crucial for displaying the component on the landing page and docs.
3.  **Verify in Docs:** Run `pnpm dev` and navigate to `/docs/<component-slug>` to ensure your component's documentation page renders correctly.

### Adding/Updating Hooks

1.  **Create/Update Hook File:**
    *   Create a new file under `apps/web/hooks/` with a `use-<hook-slug>.ts` naming convention (e.g., `use-my-new-hook.ts`).
2.  **Update `apps/web/lib/hooks-data.ts`:**
    *   Import your new hook.
    *   Add a new `HookDetail` object to the `npuiHooks` array.
    *   Provide the `code` (as a string) and a `usageExample` (as a ReactNode) for documentation.
3.  **Verify in Docs:** Run `pnpm dev` and navigate to `/hooks/<hook-slug>` to ensure your hook's documentation page renders correctly.

### Adding/Updating Utilities

1.  **Create/Update Utility File:**
    *   Create a new file under `apps/web/lib/utils/` with a `kebab-case` slug (e.g., `my-new-utility.ts`).
2.  **Update `apps/web/lib/utils-data.ts`:**
    *   Import your new utility function.
    *   Add a new `UtilityDetail` object to the `npuiUtilities` array.
    *   Provide the `code` (as a string) and a `usageExample` (as a ReactNode) for documentation.
3.  **Verify in Docs:** Run `pnpm dev` and navigate to `/utils` to ensure your utility's documentation appears correctly.

## 🤝 Contribution Guidelines

*   **Code Style:** Adhere to the existing TypeScript and React code style. Use ESLint and Prettier (configured in the project) to format your code.
*   **Naming Conventions:**
    *   Component/Hook/Utility names (in code): `PascalCase` (e.g., `MyComponent`, `useMyHook`).
    *   Slugs (for URLs and file names): `kebab-case` (e.g., `my-component`, `use-my-hook`).
*   **Accessibility:** All new components should be built with accessibility in mind, following WAI-ARIA guidelines.
*   **Documentation:** Every new component, hook, or utility *must* include comprehensive documentation in its respective data file (`*-data.ts`), including:
    *   A clear `description`.
    *   Detailed `props` with `name`, `type`, `description`, and `default` values.
    *   At least one `variant` with a `title`, `description` (optional), `code` snippet, and a live `preview` component.
*   **Testing:** While not explicitly set up in this conceptual project, consider how your contributions would be tested (unit, integration, E2E) in a production environment.

## ❓ Troubleshooting

*   **`pnpm` commands not working:** Ensure you are in the correct directory (monorepo root for global commands, or specific package directory for local commands).
*   **Component/Hook not appearing:** Double-check imports in `lib/components-data.ts` or `lib/hooks-data.ts` and ensure the `slug` matches the file path.
*   **CLI errors:** Ensure you've run `pnpm --filter=@npui/cli build` after making changes to the CLI source.

For any further questions or issues, please open an issue on the GitHub repository.
