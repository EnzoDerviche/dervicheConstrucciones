"use client"

import { Button } from "@/components/ui/button"
import { useSmoothScroll } from "@/hooks/useSmoothScroll"
import { ArrowRight, Award, Users, Calendar, Building2, Hammer, Shield } from "lucide-react"

export default function HeroSection() {
  const { smoothScroll } = useSmoothScroll()

  const scrollToContact = () => {
    smoothScroll("contacto")
  }

  const scrollToServices = () => {
    smoothScroll("servicios")
  }

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-amber-50"
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-amber-200 to-orange-200 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-amber-300 to-orange-300 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-amber-400 rounded-full opacity-60"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-orange-400 rounded-full opacity-40"></div>
        <div className="absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-amber-500 rounded-full opacity-50"></div>
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Building2 className="absolute top-20 left-10 h-8 w-8 text-amber-200 opacity-30 animate-pulse" />
        <Hammer className="absolute top-40 right-20 h-6 w-6 text-orange-200 opacity-40 animate-pulse delay-1000" />
        <Shield className="absolute bottom-40 left-20 h-7 w-7 text-amber-300 opacity-35 animate-pulse delay-2000" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <div className="inline-flex items-center space-x-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium mb-8">
              <Award className="h-4 w-4" />
              <span>15+ años construyendo sueños</span>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-gray-900">
            Construimos tus
            <span className="block bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent">
              Sueños
            </span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Con más de 15 años de experiencia, transformamos ideas en realidades arquitectónicas excepcionales en toda
            la zona sur de Buenos Aires
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={scrollToContact}
            >
              Solicitar Cotización
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white px-8 py-4 text-lg font-semibold transition-all duration-300 bg-transparent"
              onClick={scrollToServices}
            >
              Ver Servicios
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="flex flex-col items-center p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold mb-1 text-gray-900">15+</div>
              <div className="text-gray-600 font-medium">Años de Experiencia</div>
            </div>

            <div className="flex flex-col items-center p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold mb-1 text-gray-900">200+</div>
              <div className="text-gray-600 font-medium">Proyectos Completados</div>
            </div>

            <div className="flex flex-col items-center p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center mb-4">
                <Calendar className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold mb-1 text-gray-900">100%</div>
              <div className="text-gray-600 font-medium">Satisfacción Cliente</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
