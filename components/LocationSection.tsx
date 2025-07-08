export default function LocationSection() {
  const serviceAreas = [
    {
      zone: "Capital Federal",
      neighborhoods: ["Palermo", "Belgrano", "Recoleta", "San Telmo", "La Boca", "Puerto Madero", "Barracas"],
    },
    {
      zone: "Zona Sur GBA",
      neighborhoods: [
        "Avellaneda",
        "Quilmes",
        "Berazategui",
        "Florencio Varela",
        "Lanús",
        "Lomas de Zamora",
        "Banfield",
      ],
    },
    {
      zone: "Zona Sur CABA",
      neighborhoods: ["San Cristóbal", "Constitución", "Monserrat", "Parque Patricios", "Nueva Pompeya", "Barracas"],
    },
  ]

  return (
    <section id="cobertura" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Zonas de <span className="text-amber-600">Cobertura</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Brindamos nuestros servicios de construcción en toda la zona sur de Buenos Aires y Capital Federal. Nos
              desplazamos hasta tu ubicación para evaluar tu proyecto.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-amber-500 to-orange-600 text-white p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">🚛 Servicio a Domicilio</h3>
                <p className="text-lg leading-relaxed">
                  Nos trasladamos a tu ubicación para realizar presupuestos gratuitos, supervisión de obra y todos los
                  servicios necesarios.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-4 text-lg">📞 Modalidad de Trabajo</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start space-x-2">
                    <span className="text-amber-600 font-bold">1.</span>
                    <span>Contacto inicial por teléfono o WhatsApp</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-amber-600 font-bold">2.</span>
                    <span>Visita gratuita para evaluación del proyecto</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-amber-600 font-bold">3.</span>
                    <span>Presupuesto detallado sin costo</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-amber-600 font-bold">4.</span>
                    <span>Ejecución del proyecto en tu ubicación</span>
                  </li>
                </ul>
              </div>

              <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-500">
                <h4 className="font-bold text-gray-900 mb-2">💡 ¿Estás fuera de estas zonas?</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Consultanos igual. Evaluamos proyectos en otras zonas dependiendo del tipo y magnitud de la obra.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Áreas de Servicio</h3>

              {serviceAreas.map((area, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <h4 className="text-xl font-bold text-amber-600 mb-3">{area.zone}</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {area.neighborhoods.map((neighborhood, idx) => (
                      <span key={idx} className="text-gray-600 text-sm bg-gray-50 px-3 py-1 rounded-full">
                        {neighborhood}
                      </span>
                    ))}
                  </div>
                </div>
              ))}

              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h4 className="font-bold text-green-800 mb-2 flex items-center">✅ Ventajas de Nuestro Servicio</h4>
                <ul className="text-green-700 text-sm space-y-1">
                  <li>• Presupuestos gratuitos a domicilio</li>
                  <li>• Sin costos de traslado en zonas de cobertura</li>
                  <li>• Supervisión constante de obra</li>
                  <li>• Materiales incluidos en el presupuesto</li>
                  <li>• Garantía en todos nuestros trabajos</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <div className="bg-gray-900 text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">¿Querés saber si llegamos a tu zona?</h3>
              <p className="text-gray-300 mb-6">Contactanos y te confirmamos disponibilidad en tu área</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/5491123456789?text=Hola, quiero saber si brindan servicio en mi zona"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
                >
                  Consultar por WhatsApp
                </a>
                <a
                  href="tel:+541112345678"
                  className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
                >
                  Llamar Ahora
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
