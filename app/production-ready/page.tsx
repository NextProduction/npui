import Link from "next/link"
import { CodePreview } from "@/components/code-preview"
import { RocketIcon, ScaleIcon, ShieldCheckIcon, BugPlayIcon, CodeIcon, CloudIcon } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ProductionReadyPage() {
  const dynamicImportCode = `import dynamic from 'next/dynamic';

const MyHeavyComponent = dynamic(() => import('@/components/MyHeavyComponent'), {
  loading: () => <p>Loading component...</p>,
  ssr: false, // Set to false if component relies heavily on browser APIs
});

export default function MyPage() {
  return (
    <div>
      <h1>My Page</h1>
      <MyHeavyComponent />
    </div>
  );
}`

  const routeHandlerExample = `// app/api/data/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  // Simulate fetching data from a database or external API
  const data = await fetch('https://api.example.com/items', {
    next: { revalidate: 3600 }, // Revalidate data every hour
  });
  const items = await data.json();

  return NextResponse.json(items);
}`

  const errorBoundaryCode = `// components/error-boundary.tsx
"use client"

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

import React from 'react';

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // You can also log the error to an error reporting service
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return this.props.fallback;
    }

    return this.props.children;
  }
}

// Usage example in a page or component:
/*
import { ErrorBoundary } from '@/components/error-boundary';

export default function MyPage() {
  return (
    <ErrorBoundary fallback={<p>Something went wrong with this section.</p>}>
      <ProblematicComponent />
    </ErrorBoundary>
  );
}
*/`

  return (
    <div className="container py-12 md:py-24 lg:py-32 space-y-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-npui-primary mb-4">
          Scalability & Production Readiness
        </h1>
        <p className="mx-auto max-w-[800px] text-npui-muted-foreground md:text-xl">
          Guidelines and best practices for building a robust, high-performance, and scalable `npui` platform.
        </p>
      </div>

      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-npui-foreground flex items-center gap-2">
          <RocketIcon className="h-7 w-7 text-npui-primary" /> Performance Optimization
        </h2>
        <p className="text-npui-muted-foreground text-lg">
          Optimizing performance is crucial for a smooth user experience and better SEO.
        </p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card className="h-full border-npui-border bg-npui-card">
            <CardHeader>
              <CardTitle className="text-npui-foreground">Image & Font Optimization</CardTitle>
            </CardHeader>
            <CardContent className="text-npui-muted-foreground">
              <p className="mb-2">
                Utilize Next.js's built-in `next/image` component for automatic image optimization (resizing, format
                conversion, lazy loading).
              </p>
              <p>
                Leverage `next/font` for efficient font loading, reducing layout shifts and improving text rendering.
              </p>
            </CardContent>
          </Card>
          <Card className="h-full border-npui-border bg-npui-card">
            <CardHeader>
              <CardTitle className="text-npui-foreground">Code Splitting & Lazy Loading</CardTitle>
            </CardHeader>
            <CardContent className="text-npui-muted-foreground">
              <p className="mb-2">
                Break down your application into smaller chunks using dynamic imports (`next/dynamic` or `React.lazy`)
                to load components only when needed. This reduces initial bundle size.
              </p>
              <CodePreview code={dynamicImportCode} language="tsx" title="Dynamic Import Example" />
            </CardContent>
          </Card>
          <Card className="h-full border-npui-border bg-npui-card">
            <CardHeader>
              <CardTitle className="text-npui-foreground">Efficient Data Fetching & Caching</CardTitle>
            </CardHeader>
            <CardContent className="text-npui-muted-foreground">
              <p className="mb-2">
                For server-side data fetching, use Next.js's `fetch` with built-in caching mechanisms (`revalidate`
                option) to minimize redundant requests and improve response times.
              </p>
              <p>Leverage Server Components to fetch data directly on the server, reducing client-side JavaScript.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-npui-foreground flex items-center gap-2">
          <ScaleIcon className="h-7 w-7 text-npui-primary" /> Scalability
        </h2>
        <p className="text-npui-muted-foreground text-lg">
          Designing for scalability ensures your application can handle increased traffic and data.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="h-full border-npui-border bg-npui-card">
            <CardHeader>
              <CardTitle className="text-npui-foreground">Serverless Functions (Route Handlers)</CardTitle>
            </CardHeader>
            <CardContent className="text-npui-muted-foreground">
              <p className="mb-2">
                Utilize Next.js{"'"}s{" "}
                <Link
                  href="https://nextjs.org/docs/app/building-your-application/routing/route-handlers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-npui-primary hover:underline"
                >
                  Route Handlers
                </Link>{" "}
                for backend logic. These are serverless functions that scale automatically with demand.
              </p>
              <CodePreview code={routeHandlerExample} language="tsx" title="Route Handler Example" />
            </CardContent>
          </Card>
          <Card className="h-full border-npui-border bg-npui-card">
            <CardHeader>
              <CardTitle className="text-npui-foreground">Scalable Data Solutions</CardTitle>
            </CardHeader>
            <CardContent className="text-npui-muted-foreground">
              <p className="mb-2">
                Integrate with scalable database and storage solutions like Supabase, Neon, Vercel Blob, or Upstash KV.
                These services are designed to handle high loads and grow with your application.
              </p>
              <p>
                The existing monorepo structure with `pnpm` workspaces also aids scalability by allowing independent
                development and deployment of different parts of the project (e.g., web app and CLI).
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-npui-foreground flex items-center gap-2">
          <BugPlayIcon className="h-7 w-7 text-npui-primary" /> Reliability & Monitoring
        </h2>
        <p className="text-npui-muted-foreground text-lg">
          Ensuring your application is reliable and easily monitored is key for production.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="h-full border-npui-border bg-npui-card">
            <CardHeader>
              <CardTitle className="text-npui-foreground">Error Boundaries</CardTitle>
            </CardHeader>
            <CardContent className="text-npui-muted-foreground">
              <p className="mb-2">
                Implement React{"'"}s{" "}
                <Link
                  href="https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-npui-primary hover:underline"
                >
                  Error Boundaries
                </Link>{" "}
                to gracefully handle runtime errors in your UI components, preventing entire application crashes.
              </p>
              <CodePreview code={errorBoundaryCode} language="tsx" title="Error Boundary Component" />
            </CardContent>
          </Card>
          <Card className="h-full border-npui-border bg-npui-card">
            <CardHeader>
              <CardTitle className="text-npui-foreground">Logging & Monitoring</CardTitle>
            </CardHeader>
            <CardContent className="text-npui-muted-foreground">
              <p className="mb-2">
                Integrate with external logging and monitoring services (e.g., Vercel Analytics, Sentry, Datadog) to
                track application health, performance metrics, and errors in real-time.
              </p>
              <p>Set up alerts for critical issues to ensure prompt responses to production problems.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-npui-foreground flex items-center gap-2">
          <ShieldCheckIcon className="h-7 w-7 text-npui-primary" /> Security Best Practices
        </h2>
        <p className="text-npui-muted-foreground text-lg">Protecting your application and user data is paramount.</p>
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="h-full border-npui-border bg-npui-card">
            <CardHeader>
              <CardTitle className="text-npui-foreground">Environment Variables</CardTitle>
            </CardHeader>
            <CardContent className="text-npui-muted-foreground">
              <p className="mb-2">
                Never hardcode sensitive information (API keys, database credentials) directly in your code. Use
                environment variables, especially Vercel's built-in environment variable management.
              </p>
              <p>Remember that client-side environment variables must be prefixed with `NEXT_PUBLIC_`.</p>
            </CardContent>
          </Card>
          <Card className="h-full border-npui-border bg-npui-card">
            <CardHeader>
              <CardTitle className="text-npui-foreground">Input Validation & Sanitization</CardTitle>
            </CardHeader>
            <CardContent className="text-npui-muted-foreground">
              <p className="mb-2">
                Always validate and sanitize user inputs on both the client and server to prevent common vulnerabilities
                like Cross-Site Scripting (XSS) and SQL Injection.
              </p>
              <p>
                Next.js and React provide some built-in protections, but robust server-side validation is essential.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-npui-foreground flex items-center gap-2">
          <CodeIcon className="h-7 w-7 text-npui-primary" /> Maintainability & Developer Experience
        </h2>
        <p className="text-npui-muted-foreground text-lg">
          A well-structured and maintainable codebase is crucial for long-term success.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="h-full border-npui-border bg-npui-card">
            <CardHeader>
              <CardTitle className="text-npui-foreground">TypeScript, Linting & Formatting</CardTitle>
            </CardHeader>
            <CardContent className="text-npui-muted-foreground">
              <p className="mb-2">
                The project already uses TypeScript, which significantly improves code quality and maintainability.
              </p>
              <p>
                Ensure ESLint and Prettier are configured and enforced to maintain a consistent code style across the
                entire monorepo.
              </p>
            </CardContent>
          </Card>
          <Card className="h-full border-npui-border bg-npui-card">
            <CardHeader>
              <CardTitle className="text-npui-foreground">Comprehensive Testing</CardTitle>
            </CardHeader>
            <CardContent className="text-npui-muted-foreground">
              <p className="mb-2">
                Implement a testing strategy including unit tests (e.g., Jest, React Testing Library), integration
                tests, and end-to-end tests (e.g., Playwright, Cypress) to catch bugs early and ensure functionality.
              </p>
              <p>Automate tests in your CI/CD pipeline for continuous validation.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="space-y-8 text-center">
        <h2 className="text-3xl font-bold text-npui-foreground flex items-center justify-center gap-2">
          <CloudIcon className="h-7 w-7 text-npui-primary" /> Deployment with Vercel
        </h2>
        <p className="text-npui-muted-foreground text-lg mx-auto max-w-[700px]">
          Vercel provides an excellent platform for deploying Next.js applications, offering automatic scaling, global
          CDN, serverless functions, and seamless Git integration, making your `npui` platform production-ready by
          default.
        </p>
        <Button
          asChild
          size="lg"
          className="bg-npui-primary text-npui-primary-foreground hover:bg-npui-primary/90 mt-6"
        >
          <Link href="https://vercel.com/docs" target="_blank" rel="noopener noreferrer">
            Learn More About Vercel Deployment
          </Link>
        </Button>
      </section>
    </div>
  )
}
