export function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container px-4 py-12">
        <div className="text-center space-y-8">
          <div className="flex items-center justify-center space-x-3">
            <span className="text-3xl">🐜</span>
            <span className="font-bold text-2xl">Con Tribu Ir</span>
          </div>

          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            Transformando vidas a través de la educación innovadora y el desarrollo integral.
          </p>

          <div className="flex items-center justify-center">
            <a
              href="https://instagram.com/ong.contribuir"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              <div className="h-6 w-6 rounded-full bg-white flex items-center justify-center">
                <span className="text-pink-500 text-sm font-bold">📷</span>
              </div>
              @ong.contribuir
            </a>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 Con Tribu Ir. Todos los derechos reservados. Certificado ATE.</p>
        </div>
      </div>
    </footer>
  )
}
