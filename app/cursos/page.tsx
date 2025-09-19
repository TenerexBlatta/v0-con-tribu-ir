import { CoursesHeader } from "@/components/courses-header"
import { CoursesFilters } from "@/components/courses-filters"
import { CoursesGrid } from "@/components/courses-grid"
import { CreateCourseButton } from "@/components/create-course-button"

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-background">
      <CoursesHeader />
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="lg:w-64 flex-shrink-0">
            <CoursesFilters />
          </aside>
          <div className="flex-1">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h1 className="text-3xl font-bold text-foreground mb-2">Catálogo de Cursos</h1>
                <p className="text-muted-foreground">Descubre experiencias educativas transformadoras</p>
              </div>
              <CreateCourseButton />
            </div>
            <CoursesGrid />
          </div>
        </div>
      </main>
    </div>
  )
}
