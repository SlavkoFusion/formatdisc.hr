import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Mail, Phone, MapPin, Globe } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer id="contact" className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-16 md:py-20">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <Badge variant="outline" className="text-primary border-primary/30">
              Contact / Kontakt
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">FORMATDSIC</h2>
            <p className="text-lg text-muted-foreground">vl. Mladen Gertner</p>
          </div>

          {/* Contact Information - Grid Layout */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-primary">
                <Globe className="w-5 h-5" />
                <span className="font-medium">Website</span>
              </div>
              <Link
                href="https://www.formatdisc.hr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors block"
              >
                www.formatdisc.hr
              </Link>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2 text-primary">
                <Mail className="w-5 h-5" />
                <span className="font-medium">Email</span>
              </div>
              <Link
                href="mailto:info@formatdisc.hr"
                className="text-muted-foreground hover:text-foreground transition-colors block"
              >
                info@formatdisc.hr
              </Link>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2 text-primary">
                <Phone className="w-5 h-5" />
                <span className="font-medium">Phone / Telefon</span>
              </div>
              <Link
                href="tel:+385915421014"
                className="text-muted-foreground hover:text-foreground transition-colors block"
              >
                +385 91 542 1014
              </Link>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2 text-primary">
                <MapPin className="w-5 h-5" />
                <span className="font-medium">Location / Lokacija</span>
              </div>
              <p className="text-muted-foreground">
                Republika Hrvatska
                <br />
                Zagreb
              </p>
            </div>
          </div>

          <Separator />

          {/* Business Information */}
          <div className="text-center space-y-4">
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">VAT ID / OIB:</span> 18915075854
              </p>
              <p className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">FORMATDISC</span> - Owned by Mladen Gertner
              </p>
            </div>
          </div>

          <Separator />

          {/* Copyright & Links */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} FORMATDSIC. All rights reserved.</p>
            <div className="flex flex-wrap items-center gap-6">
              <Link href="#about" className="hover:text-foreground transition-colors">
                About
              </Link>
              <Link href="#projects" className="hover:text-foreground transition-colors">
                Projects
              </Link>
              <Link href="#saas-order" className="hover:text-foreground transition-colors">
                Order SaaS
              </Link>
              <Link href="#playground" className="hover:text-foreground transition-colors">
                Playground
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
