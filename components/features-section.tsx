import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Heart, Globe, Lightbulb, Users, Trophy } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "Desarrollo Socioemocional",
    description: "Fortalece habilidades emocionales y sociales para un crecimiento integral y consciente.",
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600",
    borderColor: "border-blue-200 hover:border-blue-400",
  },
  {
    icon: Heart,
    title: "Bienestar Personal",
    description: "Programas enfocados en el bienestar mental, físico y emocional de cada participante.",
    bgColor: "bg-rose-50",
    iconColor: "text-rose-600",
    borderColor: "border-rose-200 hover:border-rose-400",
  },
  {
    icon: Globe,
    title: "Inclusión y Diversidad",
    description: "Espacios seguros y accesibles que celebran la diversidad y promueven la inclusión.",
    bgColor: "bg-purple-50",
    iconColor: "text-purple-600",
    borderColor: "border-purple-200 hover:border-purple-400",
  },
  {
    icon: Lightbulb,
    title: "Metodologías Innovadoras",
    description: "Experiencias educativas virtuales con tecnología de vanguardia y enfoques creativos.",
    bgColor: "bg-amber-50",
    iconColor: "text-amber-600",
    borderColor: "border-amber-200 hover:border-amber-400",
  },
  {
    icon: Users,
    title: "Comunidad Resiliente",
    description: "Construye redes de apoyo y colaboración que perduran más allá del aula virtual.",
    bgColor: "bg-emerald-50",
    iconColor: "text-emerald-600",
    borderColor: "border-emerald-200 hover:border-emerald-400",
  },
  {
    icon: Trophy,
    title: "Certificación ATE",
    description: "Programas respaldados por certificación oficial que garantizan calidad educativa.",
    bgColor: "bg-orange-50",
    iconColor: "text-orange-600",
    borderColor: "border-orange-200 hover:border-orange-400",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-20 lg:py-32">
      <div className="container px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-balance lg:text-4xl">¿Por qué elegir Con Tribu Ir?</h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
            Nuestro enfoque integral combina innovación educativa con compromiso humano para crear experiencias
            transformadoras que dejan huella.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className={`${feature.borderColor} transition-colors`}>
              <CardHeader>
                <div className={`h-12 w-12 rounded-lg ${feature.bgColor} flex items-center justify-center mb-4`}>
                  <feature.icon className={`h-6 w-6 ${feature.iconColor}`} />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
