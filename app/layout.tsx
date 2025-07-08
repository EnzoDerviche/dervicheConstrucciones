import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Derviche Construcciones - Construyendo tus Sueños",
  description:
    "Empresa de construcción con más de 15 años de experiencia. Especialistas en construcción residencial, comercial, remodelaciones y diseño de interiores.",
  keywords:
    "construcción, arquitectura, remodelaciones, diseño, Buenos Aires, construcción residencial, construcción comercial, electricista, plomería, gasista, obras, proyectos, reformas, albañilería, construcción de casas, construcción de locales comerciales, construcción de oficinas, construcción en seco, durlock, pintureria, pintor, pisos, revestimientos, cerámicos, porcelanato",
  authors: [{ name: "Derviche Construcciones" }],
  openGraph: {
    title: "Derviche Construcciones - Construyendo tus Sueños",
    description: "Empresa de construcción con más de 15 años de experiencia en proyectos residenciales y comerciales.",
    type: "website",
    locale: "es_AR",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
