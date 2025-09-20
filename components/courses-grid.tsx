"use client"

import { CourseCard } from "@/components/course-card"
import { useState, useEffect } from "react"

const courses = [
  {
    id: 1,
    title: "RAECH",
    instructor: "Equipo Con Tribu Ir",
    category: "Desarrollo Socioemocional",
    price: 15,
    rating: 5.0,
    students: 0,
    duration: "8 semanas",
    level: "Intermedio",
    image: "/emotional-intelligence-leadership.png",
    description: "Curso tentativo de desarrollo socioemocional y liderazgo transformador.",
  },
]

interface CoursesGridProps {
  searchQuery?: string
}

export function CoursesGrid({ searchQuery = "" }: CoursesGridProps) {
  const [filteredCourses, setFilteredCourses] = useState(courses)

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredCourses(courses)
    } else {
      const filtered = courses.filter(
        (course) =>
          course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          course.instructor.toLowerCase().includes(searchQuery.toLowerCase()) ||
          course.description.toLowerCase().includes(searchQuery.toLowerCase()),
      )
      setFilteredCourses(filtered)
    }
  }, [searchQuery])

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {filteredCourses.length > 0 ? (
        filteredCourses.map((course) => <CourseCard key={course.id} course={course} />)
      ) : (
        <div className="col-span-full text-center py-12">
          <p className="text-muted-foreground">No se encontraron cursos que coincidan con tu búsqueda.</p>
        </div>
      )}
    </div>
  )
}
