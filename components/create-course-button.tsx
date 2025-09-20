import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

export function CreateCourseButton() {
  // Temporalmente siempre mostrar el botón
  return (
    <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
      <Plus className="h-4 w-4 mr-2" />
      Crear Curso
    </Button>
  )
}
