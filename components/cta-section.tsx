import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Mail, Phone } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-20 lg:py-32 bg-primary/5">
      <div className="container px-4">
        <Card className="border-primary/20 bg-gradient-to-r from-primary/10 to-secondary/10">
          <CardContent className="p-12 text-center">
            <div className="space-y-6 max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold tracking-tight text-balance lg:text-4xl">
                ¿Listo para transformar tu futuro?
              </h2>
              <p className="text-xl text-muted-foreground text-pretty">
                Únete a nuestra comunidad de aprendizaje y descubre herramientas para desarrollar tu potencial y
                contribuir al bien común.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button size="lg" className="text-base">
                  Comenzar Ahora
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg" className="text-base bg-transparent">
                  Agendar Consulta
                </Button>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8 border-t border-border/50">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Mail className="h-4 w-4" />
                  <span>info@contribuir.org</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Phone className="h-4 w-4" />
                  <span>+56 9 1234 5678</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
