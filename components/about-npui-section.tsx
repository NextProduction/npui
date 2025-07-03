"use client"

import { GSAPAnimationWrapper } from "./gsap-animations"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function AboutNpuiSection() {
  return (
    <section className="py-16 md:py-24 bg-npui-background">
      <div className="container px-4 md:px-6 space-y-12">
        <GSAPAnimationWrapper
          selector=".about-heading"
          animationProps={{ opacity: 1, y: 0, duration: 1, ease: "power3.out" }}
        >
          <h2 className="about-heading text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 opacity-0 translate-y-10">
            Welcome to <span className="text-npui-primary">npui</span>
          </h2>
        </GSAPAnimationWrapper>

        <GSAPAnimationWrapper
          selector=".about-intro"
          animationProps={{ opacity: 1, y: 0, duration: 1, delay: 0.2, ease: "power3.out" }}
        >
          <p className="about-intro mx-auto max-w-[800px] text-npui-muted-foreground md:text-xl text-center opacity-0 translate-y-10">
            npui – a modern, flexible, and easy-to-use component library built with Tailwind CSS. Our goal is to empower
            developers to build beautiful UIs quickly and efficiently, while giving you full control over customization.
            Let's get you started! 🚀
          </p>
        </GSAPAnimationWrapper>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <GSAPAnimationWrapper
            selector=".what-is-npui-card"
            animationProps={{ opacity: 1, y: 0, duration: 1, delay: 0.4, ease: "power3.out" }}
          >
            <Card className="what-is-npui-card h-full border-npui-border bg-npui-card opacity-0 translate-y-10">
              <CardHeader>
                <CardTitle className="text-npui-foreground">✨ What is npui?</CardTitle>
              </CardHeader>
              <CardContent className="text-npui-muted-foreground">
                <p className="mb-4">
                  npui is a component library designed to help you speed up development without sacrificing flexibility.
                  Every component is created with simplicity in mind, while still offering powerful customization
                  options.
                </p>
                <p>
                  No need to dig into node_modules! Components are installed directly into your project so you can
                  modify them to suit your exact needs. 💡
                </p>
              </CardContent>
            </Card>
          </GSAPAnimationWrapper>

          <GSAPAnimationWrapper
            selector=".installation-card"
            animationProps={{ opacity: 1, y: 0, duration: 1, delay: 0.6, ease: "power3.out" }}
          >
            <Card className="installation-card h-full border-npui-border bg-npui-card opacity-0 translate-y-10">
              <CardHeader>
                <CardTitle className="text-npui-foreground">🔧 Installation</CardTitle>
              </CardHeader>
              <CardContent className="text-npui-muted-foreground">
                <p className="mb-4">Get started by installing npui into your project. It's super easy!</p>
                <div className="relative mb-4">
                  <pre className="rounded-md bg-npui-background p-4 text-sm text-npui-foreground overflow-x-auto">
                    <code>npx npui add &lt;component-name&gt;</code>
                  </pre>
                </div>
                <p className="mb-4">For example, to add a Button component:</p>
                <div className="relative">
                  <pre className="rounded-md bg-npui-background p-4 text-sm text-npui-foreground overflow-x-auto">
                    <code>npx npui add button</code>
                  </pre>
                </div>
                <p className="mt-4">
                  That’s it! The component will now be available in your project folder, ready for customization. 🎨
                </p>
              </CardContent>
            </Card>
          </GSAPAnimationWrapper>

          <GSAPAnimationWrapper
            selector=".features-customization-card"
            animationProps={{ opacity: 1, y: 0, duration: 1, delay: 0.8, ease: "power3.out" }}
          >
            <Card className="features-customization-card h-full border-npui-border bg-npui-card opacity-0 translate-y-10">
              <CardHeader>
                <CardTitle className="text-npui-foreground">🧩 Features & 🛠️ Customizing Components</CardTitle>
              </CardHeader>
              <CardContent className="text-npui-muted-foreground">
                <ul className="list-disc list-inside space-y-2 mb-6">
                  <li>
                    <strong>Tailwind CSS-first:</strong> All components are styled using Tailwind CSS, so you can
                    leverage its utility classes for effortless styling.
                  </li>
                  <li>
                    <strong>Full Customization:</strong> You have direct access to the component files. Tailor them to
                    your project’s needs with ease! ✍️
                  </li>
                  <li>
                    <strong>Documentation:</strong> Find everything you need right here, from how to use each component
                    to how to tweak them for your project. 📚
                  </li>
                </ul>
                <p>
                  One of npui's standout features is the ability to easily customize components. After installing a
                  component, simply modify the files in your project folder to match your design and functionality
                  needs. For example, you can update styles, tweak layouts, or add functionality – it’s all in your
                  hands! 👐
                </p>
              </CardContent>
            </Card>
          </GSAPAnimationWrapper>
        </div>
      </div>
    </section>
  )
}
