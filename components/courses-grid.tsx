import { CourseCard } from "@/components/course-card"

const courses = [
  {
    id: 1,
    title: "Inteligencia Emocional para Líderes",
    instructor: "María González",
    category: "Desarrollo Socioemocional",
    price: 89,
    rating: 4.8,
    students: 1234,
    duration: "6 semanas",
    level: "Intermedio",
    image: "/emotional-intelligence-leadership.png",
    description: "Desarrolla habilidades de liderazgo emocional para transformar equipos y organizaciones.",
  },
  {
    id: 2,
    title: "Mindfulness y Bienestar Integral",
    instructor: "Carlos Ruiz",
    category: "Bienestar Personal",
    price: 65,
    rating: 4.9,
    students: 892,
    duration: "4 semanas",
    level: "Principiante",
    image: "/mindfulness-wellness-meditation-course.jpg",
    description: "Aprende técnicas de mindfulness para mejorar tu bienestar físico y mental.",
  },
  {
    id: 3,
    title: "Diversidad e Inclusión en el Aula",
    instructor: "Ana Martínez",
    category: "Inclusión y Diversidad",
    price: 75,
    rating: 4.7,
    students: 567,
    duration: "8 semanas",
    level: "Intermedio",
    image: "/placeholder-s9t3y.png",
    description: "Estrategias prácticas para crear ambientes educativos inclusivos y diversos.",
  },
  {
    id: 4,
    title: "Metodologías Ágiles en Educación",
    instructor: "Roberto Silva",
    category: "Metodologías Innovadoras",
    price: 95,
    rating: 4.6,
    students: 743,
    duration: "10 semanas",
    level: "Avanzado",
    image: "/agile-methodologies-education-innovation.jpg",
    description: "Implementa metodologías ágiles para revolucionar los procesos educativos.",
  },
  {
    id: 5,
    title: "Construcción de Comunidades Resilientes",
    instructor: "Laura Pérez",
    category: "Comunidad Resiliente",
    price: 110,
    rating: 4.9,
    students: 456,
    duration: "12 semanas",
    level: "Avanzado",
    image: "/resilient-communities-building-social-impact.jpg",
    description: "Aprende a construir y fortalecer comunidades resilientes y sostenibles.",
  },
  {
    id: 6,
    title: "Certificación ATE: Fundamentos",
    instructor: "Dr. Miguel Torres",
    category: "Certificación ATE",
    price: 150,
    rating: 4.8,
    students: 234,
    duration: "16 semanas",
    level: "Intermedio",
    image: "/ate-certification-educational-foundations.jpg",
    description: "Curso oficial para obtener la certificación ATE en educación transformadora.",
  },
]

export function CoursesGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  )
}
