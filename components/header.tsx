"use client"

import { Button } from "@/components/ui/button"
import { Menu, X, LogOut, User } from "lucide-react"
import { useState } from "react"
import Link from "next/link"
import { useAuth } from "@/contexts/auth-context"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { user, profile, signOut } = useAuth()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl">🐜</span>
          <span className="font-bold text-xl text-balance">Con Tribu Ir</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
            Inicio
          </Link>
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
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  {profile?.full_name || user.email}
                  {profile?.role === "mentor" && (
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Mentor</span>
                  )}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={signOut}>
                  <LogOut className="h-4 w-4 mr-2" />
                  Cerrar Sesión
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <>
              <Button variant="ghost" size="sm" asChild>
                <Link href="/auth/login">Iniciar Sesión</Link>
              </Button>
              <Button size="sm" asChild>
                <Link href="/auth/register">Registrarse</Link>
              </Button>
            </>
          )}
        </div>

        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <nav className="flex flex-col space-y-4 p-4">
            <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
              Inicio
            </Link>
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
              {user ? (
                <>
                  <div className="text-sm font-medium">
                    {profile?.full_name || user.email}
                    {profile?.role === "mentor" && (
                      <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full ml-2">Mentor</span>
                    )}
                  </div>
                  <Button variant="ghost" size="sm" onClick={signOut}>
                    <LogOut className="h-4 w-4 mr-2" />
                    Cerrar Sesión
                  </Button>
                </>
              ) : (
                <>
                  <Button variant="ghost" size="sm" asChild>
                    <Link href="/auth/login">Iniciar Sesión</Link>
                  </Button>
                  <Button size="sm" asChild>
                    <Link href="/auth/register">Registrarse</Link>
                  </Button>
                </>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
