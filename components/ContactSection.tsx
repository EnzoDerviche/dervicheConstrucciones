"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone, MapPin } from "lucide-react"
import { openWhatsApp } from "@/hooks/send-whatsapp"

export default function ContactSection() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Teléfono",
      info: "+54 11 6662-1082",
      link: "tel:+541166621082",
    },
    {
      icon: MapPin,
      title: "Zona de Cobertura",
      info: "Zona Sur GBA y Capital Federal",
      link: "#ubicacion",
    },
  ]

  return (
    <section id="contacto" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Contáctanos <span className="text-amber-600">Hoy</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              ¿Tienes un proyecto en mente? Nos encantaría escuchar tus ideas y ayudarte a hacerlas realidad.
              Contáctanos para una consulta gratuita.
            </p>
          </div>

          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Información de Contacto</h3>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {contactInfo.map((item, index) => (
                <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                        <item.icon className="h-6 w-6 text-amber-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{item.title}</h4>
                        {item.link ? (
                          <a
                            href={item.link}
                            className="text-gray-600 hover:text-amber-600 transition-colors duration-300"
                          >
                            {item.info}
                          </a>
                        ) : (
                          <p className="text-gray-600">{item.info}</p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="border-0 shadow-lg bg-gradient-to-br from-amber-500 to-orange-600 text-white">
              <CardContent className="p-8 text-center">
                <h4 className="text-2xl font-bold mb-4">¿Necesitas una cotización urgente?</h4>
                <p className="text-lg mb-6">Llámanos ahora y te atenderemos inmediatamente</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    variant="secondary"
                    className="bg-white text-amber-600 hover:bg-gray-100 px-6 py-3 text-lg font-semibold"
                    onClick={() => window.open("tel:+541166621082")}
                  >
                    Llamar Ahora
                  </Button>
                  <Button
                    variant="secondary"
                    className="bg-white text-green-600 hover:bg-gray-100 px-6 py-3 text-lg font-semibold"
                    onClick={openWhatsApp}
                  >
                    WhatsApp
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
