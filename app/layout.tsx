import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { AdminProvider } from "@/contexts/admin-context"
import "./globals.css"

export const metadata: Metadata = {
  title: "Con Tribu Ir - Educación Innovadora Virtual",
  description:
    "Portal educativo virtual con certificado ATE. Impulsa tu crecimiento personal y profesional a través de experiencias educativas innovadoras.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <AdminProvider>
          <Suspense fallback={null}>{children}</Suspense>
        </AdminProvider>
        <Analytics />
      </body>
    </html>
  )
}
