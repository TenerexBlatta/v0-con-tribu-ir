import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Filter, Star, Clock, DollarSign } from "lucide-react"

export function CoursesFilters() {
  return (
    <Card className="p-6 sticky top-24">
      <div className="flex items-center gap-2 mb-6">
        <Filter className="h-5 w-5 text-primary" />
        <h2 className="font-semibold text-lg">Filtros</h2>
      </div>

      <div className="space-y-6">
        {/* Categorías */}
        <div>
          <h3 className="font-medium mb-3 text-foreground">Categorías</h3>
          <div className="space-y-2">
            {[
              "Desarrollo Socioemocional",
              "Bienestar Personal",
              "Inclusión y Diversidad",
              "Metodologías Innovadoras",
              "Comunidad Resiliente",
              "Certificación ATE",
            ].map((category) => (
              <div key={category} className="flex items-center space-x-2">
                <Checkbox id={category} />
                <label htmlFor={category} className="text-sm text-muted-foreground cursor-pointer">
                  {category}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Nivel */}
        <div>
          <h3 className="font-medium mb-3 text-foreground">Nivel</h3>
          <div className="space-y-2">
            {["Principiante", "Intermedio", "Avanzado"].map((level) => (
              <div key={level} className="flex items-center space-x-2">
                <Checkbox id={level} />
                <label htmlFor={level} className="text-sm text-muted-foreground cursor-pointer">
                  {level}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Precio */}
        <div>
          <h3 className="font-medium mb-3 text-foreground flex items-center gap-2">
            <DollarSign className="h-4 w-4" />
            Precio
          </h3>
          <div className="space-y-3">
            <Slider defaultValue={[0, 100]} max={200} step={10} className="w-full" />
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>$0</span>
              <span>$200+</span>
            </div>
          </div>
        </div>

        {/* Duración */}
        <div>
          <h3 className="font-medium mb-3 text-foreground flex items-center gap-2">
            <Clock className="h-4 w-4" />
            Duración
          </h3>
          <div className="space-y-2">
            {["1-4 semanas", "1-3 meses", "3-6 meses", "6+ meses"].map((duration) => (
              <div key={duration} className="flex items-center space-x-2">
                <Checkbox id={duration} />
                <label htmlFor={duration} className="text-sm text-muted-foreground cursor-pointer">
                  {duration}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Rating */}
        <div>
          <h3 className="font-medium mb-3 text-foreground flex items-center gap-2">
            <Star className="h-4 w-4" />
            Calificación
          </h3>
          <div className="space-y-2">
            {[5, 4, 3, 2].map((rating) => (
              <div key={rating} className="flex items-center space-x-2">
                <Checkbox id={`rating-${rating}`} />
                <label
                  htmlFor={`rating-${rating}`}
                  className="flex items-center gap-1 text-sm text-muted-foreground cursor-pointer"
                >
                  {Array.from({ length: rating }).map((_, i) => (
                    <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span>y más</span>
                </label>
              </div>
            ))}
          </div>
        </div>

        <Button variant="outline" className="w-full bg-transparent">
          Limpiar Filtros
        </Button>
      </div>
    </Card>
  )
}
