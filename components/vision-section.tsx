import { Card, CardContent } from "@/components/ui/card"
import { Eye, Globe, Lightbulb, Shield } from "lucide-react"

export function VisionSection() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-secondary/5 via-background to-accent/5">
      <div className="container px-4">
        <div className="text-center space-y-6 mb-20">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-secondary/10 border border-secondary/20">
            <Eye className="h-6 w-6 text-secondary" />
            <span className="font-semibold text-secondary text-lg">Nuestra Visión</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold tracking-tight text-balance bg-gradient-to-r from-secondary via-accent to-primary bg-clip-text text-transparent">
            Referente Global
          </h2>
          <p className="text-xl lg:text-2xl text-muted-foreground text-pretty max-w-4xl mx-auto leading-relaxed">
            En educación y transformación social para un mundo mejor
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Card className="border-2 border-secondary/20 bg-gradient-to-br from-background via-secondary/5 to-accent/10 shadow-2xl">
            <CardContent className="p-12">
              <div className="flex items-start gap-6 mb-8">
                <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-secondary to-accent flex items-center justify-center shadow-lg">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4 text-balance">Nuestro Futuro</h3>
                  <p className="text-xl leading-relaxed text-pretty text-muted-foreground">
                    Ser un referente nacional e internacional en educación y transformación social, reconocidos por
                    nuestro compromiso humano, nuestro enfoque innovador y nuestra capacidad de construir comunidades
                    más conscientes, inclusivas y resilientes, donde cada persona encuentre herramientas para
                    desarrollar su potencial y contribuir al bien común.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mt-12">
                <div className="text-center p-6 rounded-xl bg-secondary/10 border border-secondary/20">
                  <Lightbulb className="h-8 w-8 text-secondary mx-auto mb-3" />
                  <h4 className="font-semibold text-lg mb-2">Innovación</h4>
                  <p className="text-sm text-muted-foreground">Enfoques revolucionarios</p>
                </div>
                <div className="text-center p-6 rounded-xl bg-accent/10 border border-accent/20">
                  <Shield className="h-8 w-8 text-accent mx-auto mb-3" />
                  <h4 className="font-semibold text-lg mb-2">Compromiso</h4>
                  <p className="text-sm text-muted-foreground">Humano y social</p>
                </div>
                <div className="text-center p-6 rounded-xl bg-primary/10 border border-primary/20">
                  <Globe className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h4 className="font-semibold text-lg mb-2">Alcance</h4>
                  <p className="text-sm text-muted-foreground">Nacional e internacional</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
