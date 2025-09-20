"use client"

import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { useAdmin } from "@/contexts/admin-context"

export function CreateCourseButton() {
  const { userRole } = useAdmin()
  
  if (userRole !== "mentor" && userRole !== "admin") {
    return null
  }
  
  return (
    <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
      <Plus className="h-4 w-4 mr-2" />
      Crear Curso
    </Button>
  )
}
