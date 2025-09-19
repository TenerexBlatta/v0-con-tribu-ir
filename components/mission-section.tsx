import { Card, CardContent } from "@/components/ui/card"
import { Target, Heart, Users } from "lucide-react"

export function MissionSection() {
  return (
    <section id="nosotros" className="py-20 lg:py-32 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container px-4">
        <div className="text-center space-y-6 mb-20">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-primary/10 border border-primary/20">
            <Target className="h-6 w-6 text-primary" />
            <span className="font-semibold text-primary text-lg">Nuestra Misión</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold tracking-tight text-balance bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Transformando Vidas
          </h2>
          <p className="text-xl lg:text-2xl text-muted-foreground text-pretty max-w-4xl mx-auto leading-relaxed">
            A través de la educación innovadora y el desarrollo integral
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Card className="border-2 border-primary/20 bg-gradient-to-br from-background via-primary/5 to-secondary/10 shadow-2xl">
            <CardContent className="p-12">
              <div className="flex items-start gap-6 mb-8">
                <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4 text-balance">Nuestro Compromiso</h3>
                  <p className="text-xl leading-relaxed text-pretty text-muted-foreground">
                    Impulsar procesos educativos, socioemocionales y culturales que promuevan el bienestar, la inclusión
                    y el crecimiento personal y colectivo, a través de experiencias en establecimientos, programas,
                    cursos, diplomados y formaciones accesibles y de calidad, que dejen huella en las personas y en sus
                    comunidades.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mt-12">
                <div className="text-center p-6 rounded-xl bg-primary/10 border border-primary/20">
                  <Users className="h-8 w-8 text-primary mx-auto mb-3" />
                  <h4 className="font-semibold text-lg mb-2">Inclusión</h4>
                  <p className="text-sm text-muted-foreground">Espacios accesibles para todos</p>
                </div>
                <div className="text-center p-6 rounded-xl bg-secondary/10 border border-secondary/20">
                  <Target className="h-8 w-8 text-secondary mx-auto mb-3" />
                  <h4 className="font-semibold text-lg mb-2">Calidad</h4>
                  <p className="text-sm text-muted-foreground">Experiencias transformadoras</p>
                </div>
                <div className="text-center p-6 rounded-xl bg-accent/10 border border-accent/20">
                  <Heart className="h-8 w-8 text-accent mx-auto mb-3" />
                  <h4 className="font-semibold text-lg mb-2">Impacto</h4>
                  <p className="text-sm text-muted-foreground">Huella en comunidades</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
