import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Users, Clock, BookOpen } from "lucide-react"

interface Course {
  id: number
  title: string
  instructor: string
  category: string
  price: number
  rating: number
  students: number
  duration: string
  level: string
  image: string
  description: string
}

interface CourseCardProps {
  course: Course
}

const categoryColors = {
  "Desarrollo Socioemocional": "bg-blue-100 text-blue-800 border-blue-200",
  "Bienestar Personal": "bg-pink-100 text-pink-800 border-pink-200",
  "Inclusión y Diversidad": "bg-purple-100 text-purple-800 border-purple-200",
  "Metodologías Innovadoras": "bg-amber-100 text-amber-800 border-amber-200",
  "Comunidad Resiliente": "bg-emerald-100 text-emerald-800 border-emerald-200",
  "Certificación ATE": "bg-orange-100 text-orange-800 border-orange-200",
}

export function CourseCard({ course }: CourseCardProps) {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm">
      <CardHeader className="p-0">
        <div className="relative overflow-hidden rounded-t-lg">
          <img
            src={course.image || "/placeholder.svg"}
            alt={course.title}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-3 left-3">
            <Badge variant="secondary" className={categoryColors[course.category as keyof typeof categoryColors]}>
              {course.category}
            </Badge>
          </div>
          <div className="absolute top-3 right-3">
            <Badge variant="outline" className="bg-background/90 backdrop-blur-sm">
              {course.level}
            </Badge>
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-6">
        <h3 className="font-semibold text-lg mb-2 text-foreground group-hover:text-primary transition-colors">
          {course.title}
        </h3>
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{course.description}</p>
        <p className="text-sm text-muted-foreground mb-4">
          Por <span className="font-medium text-foreground">{course.instructor}</span>
        </p>

        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="font-medium">{course.rating}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4" />
            <span>{course.students.toLocaleString()}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{course.duration}</span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-6 pt-0 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-primary">${course.price}</span>
          <span className="text-sm text-muted-foreground">USD</span>
        </div>
        <Button className="bg-primary hover:bg-primary/90">
          <BookOpen className="h-4 w-4 mr-2" />
          Inscribirse
        </Button>
      </CardFooter>
    </Card>
  )
}
