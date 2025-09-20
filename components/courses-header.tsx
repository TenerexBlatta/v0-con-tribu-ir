"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Bell, Search, User } from "lucide-react"

interface CoursesHeaderProps {
  onSearchChange: (query: string) => void
}

export function CoursesHeader({ onSearchChange }: CoursesHeaderProps) {
  return (
    <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🐜</span>
              <span className="font-bold text-xl text-foreground">Con Tribu Ir</span>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                Inicio
              </a>
              <a href="/cursos" className="text-foreground font-medium">
                Cursos
              </a>
              <a href="/#nosotros" className="text-muted-foreground hover:text-foreground transition-colors">
                Nosotros
              </a>
              <a href="/#contacto" className="text-muted-foreground hover:text-foreground transition-colors">
                Contacto
              </a>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <input
                type="text"
                placeholder="Buscar cursos..."
                className="pl-10 pr-4 py-2 bg-background border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 w-64"
                onChange={(e) => onSearchChange(e.target.value)}
              />
            </div>
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
            <Badge variant="secondary" className="bg-primary/10 text-primary">
              Mentor
            </Badge>
          </div>
        </div>
      </div>
    </header>
  )
}
