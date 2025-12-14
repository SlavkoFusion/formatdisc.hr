"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Rocket, Sparkles, Users } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative border-b border-border overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background" />
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/10 blur-[150px] rounded-full" />

      <div className="container relative mx-auto px-4 py-20 md:py-32 lg:py-40">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <Sparkles className="w-4 h-4" />
            <span>MVP Simulation Tool. 48h Delivery Guarantee. Audit-Proof.</span>
          </div>

          {/* English Hero */}
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-balance">
              Enterprise SaaS
              <br />
              <span className="text-primary">Delivered in 48 Hours</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground text-balance leading-relaxed max-w-3xl mx-auto">
              Test your idea in our MVP Simulation Tool. See it working before you invest. Production-ready enterprise
              SaaS with complete audit trail and zero-downtime deployment.
            </p>
          </div>

          {/* Croatian Hero */}
          <div className="space-y-4 pt-4 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
            <p className="text-lg md:text-xl text-muted-foreground/80 text-balance max-w-3xl mx-auto">
              <span className="text-foreground/90 font-medium">
                Testirajte svoju ideju u MVP Simulation Tool-u. Vidite kako radi prije nego uložite.
              </span>
              <br className="hidden md:block" />
              Enterprise SaaS spreman za produkciju sa kompletnim audit trail-om.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-300">
            <Button size="lg" className="gap-2 text-base px-8 py-6 h-auto" asChild>
              <Link href="#saas-order">
                <Rocket className="w-5 h-5" />
                Start Your 48h Project
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>

            <Button size="lg" variant="outline" className="gap-2 text-base px-8 py-6 h-auto bg-transparent" asChild>
              <Link href="https://github.com/formatdisc" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5" />
                View 100+ Projects
              </Link>
            </Button>

            <Button size="lg" variant="outline" className="gap-2 text-base px-8 py-6 h-auto bg-transparent" asChild>
              <Link href="#contact">
                <Users className="w-5 h-5" />
                For Investors
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-12 duration-700 delay-500">
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-primary">100+</div>
              <div className="text-sm text-muted-foreground">Projects Delivered</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-primary">48h</div>
              <div className="text-sm text-muted-foreground">Delivery Guarantee</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-primary">€14,999</div>
              <div className="text-sm text-muted-foreground">Enterprise Tier</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-primary">99.95%</div>
              <div className="text-sm text-muted-foreground">SLA Uptime</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
