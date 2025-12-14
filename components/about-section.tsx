import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Cpu, Terminal, Layers, Zap } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="border-b border-border">
      <div className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Header - Bilingual */}
          <div className="text-center space-y-4">
            <Badge variant="outline" className="text-primary border-primary/30">
              About / O meni
            </Badge>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance">Mladen Gertner</h2>
            <p className="text-xl md:text-2xl text-muted-foreground text-balance max-w-3xl mx-auto leading-relaxed">
              Architect of agent kernels, motion-first UI systems, and audit-proof business structures.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground/80 text-balance max-w-3xl mx-auto">
              Arhitekt agent kernela, motion-first UI sustava i audit-proof poslovnih struktura.
            </p>
          </div>

          {/* Showcase Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-primary/20 bg-card/50 hover:bg-card transition-colors">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Cpu className="w-6 h-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold text-lg">SlavkoKernel™</h3>
                  <p className="text-sm text-muted-foreground">
                    Reproducible agent execution with full audit trails and narrative replay capabilities.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/20 bg-card/50 hover:bg-card transition-colors">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Terminal className="w-6 h-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold text-lg">ONE CLI Platform</h3>
                  <p className="text-sm text-muted-foreground">
                    Unified command-line interface for orchestrating complex agent workflows and deployments.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/20 bg-card/50 hover:bg-card transition-colors">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Layers className="w-6 h-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold text-lg">META HIBRID Builder</h3>
                  <p className="text-sm text-muted-foreground">
                    Hybrid architecture framework combining SSR, CSR, and edge computing for optimal performance.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/20 bg-card/50 hover:bg-card transition-colors">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold text-lg">SlavkoShell</h3>
                  <p className="text-sm text-muted-foreground">
                    Advanced shell environment with native agent integration and real-time monitoring.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
