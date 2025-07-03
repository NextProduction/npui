import Link from "next/link"
import { MailIcon, GlobeIcon, SendIcon, DownloadIcon } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function ContactPage() {
  return (
    <div className="container py-12 md:py-24 lg:py-32 text-center">
      <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-npui-primary mb-4">Contact Us</h1>
      <p className="mx-auto max-w-[800px] text-npui-muted-foreground md:text-xl mb-12">
        Connect with the developer behind npui or inquire about new projects.
      </p>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
        {/* Developer Profile Card */}
        <Card className="md:col-span-2 border-npui-border bg-npui-card text-left">
          <CardHeader>
            <CardTitle className="text-npui-foreground">Mahdi Hazrati - Front-End Developer</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 text-npui-muted-foreground">
            <p className="text-lg font-semibold text-npui-primary">{"<Hello World />"}</p>
            <p className="text-2xl font-bold text-npui-foreground">I'm Mahdi Hazrati</p>
            <p className="text-xl font-medium text-npui-accent">Front-End developer</p>
            <p className="font-mono text-sm">↑ ↑ ↓ ↓ ← → ← → B A</p>
            <Button
              asChild
              variant="outline"
              className="border-npui-border text-npui-foreground hover:bg-npui-secondary bg-transparent"
            >
              <Link href="/mahdi-hazrati-cv.pdf" download>
                <DownloadIcon className="h-4 w-4 mr-2" />
                Download My CV
              </Link>
            </Button>

            <h3 className="text-lg font-semibold text-npui-primary">{"<AboutMe /> ☕⚡"}</h3>
            <p>
              hey there! i love chai ☕, codding 💻, making geek stuff 🤓, and learning new things 🚀. been doing
              software enginer stuff for 3 years, mostly with react ⚛️ and next.js 🗺️. i battle bugs 🐞, write code, and
              break things just to fix them again. also love open source cuz sharing is cool. let's build something
              awesome together! ⚡
            </p>

            <h3 className="text-lg font-semibold text-npui-primary">{"<Skills /> ⚡"}</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>frontend geek stuff 🤓:</strong> react ⚛️, next.js 🚀, making things work (somehow)
              </li>
              <li>
                <strong>terminal vibes 🖥️:</strong> ubuntu 🐧, linux commands 💻, living in the terminal
              </li>
              <li>
                <strong>python hacker 🐍:</strong> scripts, automation, random experiments ⚗️
              </li>
              <li>
                <strong>open source explorer 🌍:</strong> breaking stuff, fixing stuff, contributing just because 🚀
              </li>
              <li>
                <strong>chaos coder ☕⚡:</strong> making something from zero knowledge, powered by chai
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Contact Information Card */}
        <Card className="border-npui-border bg-npui-card text-left">
          <CardHeader>
            <CardTitle className="text-npui-foreground">Connect & Inquire</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 text-npui-muted-foreground">
            <p>
              npui is developed by Mahdi Hazrati under the Next Production portfolios. For collaborations, project
              inquiries, or just to say hello, feel free to reach out!
            </p>

            <h3 className="text-lg font-semibold text-npui-primary">{"<Connect /> 🌐"}</h3>
            <div className="flex flex-col gap-4">
              <Link
                href="mailto:mahdi.hazrati@example.com" // Placeholder email
                className="flex items-center gap-3 text-npui-foreground hover:text-npui-primary transition-colors"
              >
                <MailIcon className="h-5 w-5" />
                <span>mahdi.hazrati@example.com</span>
              </Link>
              <Link
                href="https://next-prediction.com" // Placeholder website
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-npui-foreground hover:text-npui-primary transition-colors"
              >
                <GlobeIcon className="h-5 w-5" />
                <span>next-prediction.com (Portfolio)</span>
              </Link>
              <Link
                href="https://t.me/your_telegram_username" // Placeholder Telegram
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-npui-foreground hover:text-npui-primary transition-colors"
              >
                <SendIcon className="h-5 w-5" />
                <span>@your_telegram_username</span>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
