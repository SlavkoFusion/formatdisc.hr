"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Rocket, Clock, CheckCircle2, Zap } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export function SaasOrderSection() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: "Order Received! / Narudžba primljena!",
      description: "We'll start building your enterprise SaaS immediately. Delivery guaranteed within 48 hours.",
    })

    setFormData({ name: "", email: "", project: "" })
    setIsSubmitting(false)
  }

  return (
    <section id="saas-order" className="border-b border-border">
      <div className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Header - Bilingual */}
          <div className="text-center space-y-4">
            <Badge variant="outline" className="text-primary border-primary/30">
              Enterprise SaaS Orders / Enterprise SaaS Narudžbe
            </Badge>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
              Order Your Enterprise SaaS
              <br />
              <span className="text-primary">Delivered in 48 Hours</span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground text-balance max-w-3xl mx-auto leading-relaxed">
              Professional enterprise SaaS development with complete audit trails, council governance, and
              production-ready deployment. Guaranteed delivery within 48 hours.
            </p>
            <p className="text-lg text-muted-foreground/80 text-balance max-w-3xl mx-auto">
              Profesionalni enterprise SaaS razvoj s potpunim audit zapisima, council governance, i deployment spreman
              za produkciju. Garantirana isporuka u roku od 48 sati.
            </p>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-primary/20 bg-card/50">
              <CardHeader>
                <Clock className="w-8 h-8 text-primary mb-2" />
                <CardTitle>48h Delivery</CardTitle>
                <CardDescription>
                  Guaranteed enterprise SaaS delivery within 48 hours with full audit trail
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-primary/20 bg-card/50">
              <CardHeader>
                <CheckCircle2 className="w-8 h-8 text-primary mb-2" />
                <CardTitle>Audit-Proof</CardTitle>
                <CardDescription>Complete logging and reproducible execution flows</CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-primary/20 bg-card/50">
              <CardHeader>
                <Zap className="w-8 h-8 text-primary mb-2" />
                <CardTitle>Production-Ready</CardTitle>
                <CardDescription>Deploy immediately with zero configuration needed</CardDescription>
              </CardHeader>
            </Card>
          </div>

          {/* Order Form */}
          <Card className="border-primary/30 bg-card">
            <CardHeader>
              <CardTitle className="text-2xl">Launch Your SaaS Now / Pokreni svoj SaaS odmah</CardTitle>
              <CardDescription className="text-base">
                Fill out the form below and we'll start building immediately.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name / Ime</Label>
                    <Input
                      id="name"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="project">Project Description / Opis projekta</Label>
                  <Textarea
                    id="project"
                    placeholder="Describe your SaaS idea, target audience, key features, and any specific requirements..."
                    className="min-h-32 resize-none"
                    value={formData.project}
                    onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                    required
                  />
                  <p className="text-sm text-muted-foreground">Be as detailed as possible for the best results</p>
                </div>

                <Button type="submit" size="lg" className="w-full gap-2" disabled={isSubmitting}>
                  <Rocket className="w-5 h-5" />
                  {isSubmitting ? "Submitting Order..." : "Order Your SaaS Now"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
