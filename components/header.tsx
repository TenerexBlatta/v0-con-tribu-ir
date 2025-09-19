"use client"

import { Button } from "@/components/ui/button"
import { Menu, X, Shield } from "lucide-react"
import { useState } from "react"
import Link from "next/link"
import { useAdmin } from "@/contexts/admin-context"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { isAdmin, setIsAdmin } = useAdmin()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl">🐜</span>
          <span className="font-bold text-xl text-balance">Con Tribu Ir</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/cursos" className="text-sm font-medium hover:text-primary transition-colors">
            Cursos
          </Link>
          <a href="#nosotros" className="text-sm font-medium hover:text-primary transition-colors">
            Nosotros
          </a>
          <a href="#contacto" className="text-sm font-medium hover:text-primary transition-colors">
            Contacto
          </a>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Button
            variant={isAdmin ? "default" : "outline"}
            size="sm"
            onClick={() => setIsAdmin(!isAdmin)}
            className="flex items-center gap-2"
          >
            <Shield className="h-4 w-4" />
            {isAdmin ? "Admin ON" : "Admin OFF"}
          </Button>
          <Button variant="ghost" size="sm">
            Iniciar Sesión
          </Button>
          <Button size="sm">Registrarse</Button>
        </div>

        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <nav className="flex flex-col space-y-4 p-4">
            <Link href="/cursos" className="text-sm font-medium hover:text-primary transition-colors">
              Cursos
            </Link>
            <a href="#nosotros" className="text-sm font-medium hover:text-primary transition-colors">
              Nosotros
            </a>
            <a href="#contacto" className="text-sm font-medium hover:text-primary transition-colors">
              Contacto
            </a>
            <div className="flex flex-col space-y-2 pt-4 border-t">
              <Button
                variant={isAdmin ? "default" : "outline"}
                size="sm"
                onClick={() => setIsAdmin(!isAdmin)}
                className="flex items-center gap-2"
              >
                <Shield className="h-4 w-4" />
                {isAdmin ? "Admin ON" : "Admin OFF"}
              </Button>
              <Button variant="ghost" size="sm">
                Iniciar Sesión
              </Button>
              <Button size="sm">Registrarse</Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
