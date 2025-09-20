import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function SuccessPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-amber-50 p-4">
      <Card className="w-full max-w-md text-center">
        <CardHeader>
          <div className="flex justify-center mb-4">
            <span className="text-4xl">🐜</span>
          </div>
          <CardTitle className="text-2xl font-bold text-green-600">¡Cuenta Creada!</CardTitle>
          <CardDescription>Revisa tu email para confirmar tu cuenta</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Te hemos enviado un email de confirmación. Haz clic en el enlace para activar tu cuenta.
          </p>
          <Button asChild className="w-full">
            <Link href="/auth/login">Ir a Iniciar Sesión</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
