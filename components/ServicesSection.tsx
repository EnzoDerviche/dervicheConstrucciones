import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Home, Building, Wrench, Paintbrush, Hammer, TreePine } from "lucide-react"

export default function ServicesSection() {
  const services = [
    {
      icon: Home,
      title: "Construcción Residencial",
      description: "Casas unifamiliares, duplex y complejos habitacionales con diseños personalizados",
      price: "Desde $1,200/m²",
      features: ["Diseño personalizado", "Materiales premium", "Garantía 5 años"],
    },
    {
      icon: Building,
      title: "Construcción Comercial",
      description: "Oficinas, locales comerciales y edificios corporativos con estándares internacionales",
      price: "Desde $1,500/m²",
      features: ["Certificación LEED", "Tecnología avanzada", "Entrega puntual"],
    },
    {
      icon: Wrench,
      title: "Remodelaciones",
      description: "Renovación completa de espacios existentes con diseño moderno y funcional",
      price: "Desde $800/m²",
      features: ["Sin mudarse", "Diseño 3D", "Materiales incluidos"],
    },
    {
      icon: Paintbrush,
      title: "Diseño de Interiores",
      description: "Ambientación completa con mobiliario, decoración y acabados de lujo",
      price: "Desde $300/m²",
      features: ["Consultoría gratuita", "Renders 3D", "Mobiliario incluido"],
    },
    {
      icon: Hammer,
      title: "Mantenimiento",
      description: "Servicios de mantenimiento preventivo y correctivo para propiedades",
      price: "Desde $150/visita",
      features: ["Servicio 24/7", "Garantía total", "Presupuesto sin costo"],
    },
    {
      icon: TreePine,
      title: "Paisajismo",
      description: "Diseño y construcción de jardines, terrazas y espacios verdes",
      price: "Desde $200/m²",
      features: ["Plantas incluidas", "Sistema de riego", "Mantenimiento 1 año"],
    },
  ]

  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Nuestros <span className="text-amber-600">Servicios</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Ofrecemos una amplia gama de servicios de construcción y diseño para satisfacer todas tus necesidades,
              desde proyectos residenciales hasta comerciales.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                  <div className="text-2xl font-bold text-amber-600 mb-4">{service.price}</div>
                  <ul className="text-sm text-gray-500 mb-6 space-y-1">
                    {service.features.map((feature, idx) => (
                      <li key={idx}>✓ {feature}</li>
                    ))}
                  </ul>
                  <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white">Solicitar Cotización</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
