"use client"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { useAuth } from "@/contexts/auth-context"

export function CreateCourseButton() {
  const { profile } = useAuth()

  if (!profile || (profile.role !== "mentor" && profile.role !== "admin")) {
    return null
  }

  return (
    <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
      <Plus className="h-4 w-4 mr-2" />
      Crear Curso
    </Button>
  )
}
