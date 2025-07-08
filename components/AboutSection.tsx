import { Card, CardContent } from "@/components/ui/card"
import { Building2, Shield, Clock, Star } from "lucide-react"
import Image from "next/image"

export default function AboutSection() {
  const values = [
    {
      icon: Building2,
      title: "Calidad Superior",
      description: "Utilizamos materiales de primera calidad y técnicas constructivas avanzadas",
    },
    {
      icon: Shield,
      title: "Confianza Total",
      description: "Garantizamos cada proyecto con seguros y certificaciones profesionales",
    },
    {
      icon: Clock,
      title: "Puntualidad",
      description: "Cumplimos con los plazos establecidos sin comprometer la calidad",
    },
    {
      icon: Star,
      title: "Excelencia",
      description: "Buscamos la perfección en cada detalle de nuestros proyectos",
    },
  ]

  return (
    <section id="nosotros" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Sobre <span className="text-amber-600">Nosotros</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Somos una empresa familiar con más de 15 años de trayectoria en el sector de la construcción,
              especializada en proyectos residenciales y comerciales de alta calidad.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Nuestra Historia</h3>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Fundada en 2008, Derviche Construcciones nació del sueño de crear espacios que transformen la vida de
                  las personas. Comenzamos como un pequeño equipo de profesionales apasionados por la construcción.
                </p>
                <p>
                  A lo largo de los años, hemos crecido manteniendo nuestros valores fundamentales: calidad, honestidad
                  y compromiso con cada cliente. Cada proyecto es único y merece nuestra máxima dedicación.
                </p>
                <p>
                  Hoy somos reconocidos como una de las constructoras más confiables de la región, con un equipo de más
                  de 50 profesionales especializados.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/img/construccion-img.jpg"
                alt="Equipo de Derviche Construcciones"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl w-full h-auto"
                priority
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-amber-600" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
