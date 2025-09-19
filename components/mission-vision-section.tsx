import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Target, Eye } from "lucide-react"

export function MissionVisionSection() {
  return (
    <section id="nosotros" className="py-20 lg:py-32">
      <div className="container px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-balance lg:text-4xl">Nuestra Misión y Visión</h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
            Conoce los valores y propósitos que guían nuestro compromiso con la educación transformadora.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card className="border-primary/20 bg-primary/5">
            <CardHeader>
              <div className="flex items-center gap-4 mb-4">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">Misión</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-lg leading-relaxed text-pretty">
                Impulsar procesos educativos, socioemocionales y culturales que promuevan el bienestar, la inclusión y
                el crecimiento personal y colectivo, a través de experiencias en establecimientos, programas, cursos,
                diplomados y formaciones accesibles y de calidad, que dejen huella en las personas y en sus comunidades.
              </p>
            </CardContent>
          </Card>

          <Card className="border-secondary/20 bg-secondary/5">
            <CardHeader>
              <div className="flex items-center gap-4 mb-4">
                <div className="h-12 w-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                  <Eye className="h-6 w-6 text-secondary" />
                </div>
                <CardTitle className="text-2xl">Visión</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-lg leading-relaxed text-pretty">
                Ser un referente nacional e internacional en educación y transformación social, reconocidos por nuestro
                compromiso humano, nuestro enfoque innovador y nuestra capacidad de construir comunidades más
                conscientes, inclusivas y resilientes, donde cada persona encuentre herramientas para desarrollar su
                potencial y contribuir al bien común.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
