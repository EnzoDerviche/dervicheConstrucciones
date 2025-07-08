"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Building2,
  Home,
  Wrench,
  Paintbrush,
  TreePine,
  Hammer,
  ChevronLeft,
  ChevronRight,
  X,
  ZoomIn,
} from "lucide-react"

interface Project {
  id: number
  title: string
  category: string
  images: string[]
  description: string
}

export default function GallerySection() {
  const [activeFilter, setActiveFilter] = useState("todos")
  const [currentImageIndex, setCurrentImageIndex] = useState<{ [key: number]: number }>({})
  const [modalOpen, setModalOpen] = useState(false)
  const [modalProject, setModalProject] = useState<Project | null>(null)
  const [modalImageIndex, setModalImageIndex] = useState(0)

  const categories = [
    { id: "todos", name: "Todos", icon: Building2 },
    { id: "residencial", name: "Residencial", icon: Home },
    { id: "comercial", name: "Comercial", icon: Building2 },
    { id: "remodelaciones", name: "Remodelaciones", icon: Wrench },
    { id: "interiores", name: "Interiores", icon: Paintbrush },
    { id: "paisajismo", name: "Paisajismo", icon: TreePine },
  ]

  const projects: Project[] = [
    {
      id: 1,
      title: "Casa Moderna en Quilmes",
      category: "residencial",
      images: [
        "/img/construcciones1.jpg",
        "/img/construcciones2.jpg",
        "/img/construcciones3.jpg",
        // "/img/construccion-img.jpg",
      ],
      description: "Construcción completa de vivienda unifamiliar de 180m²",
    },
    {
      id: 2,
      title: "Oficinas Corporativas",
      category: "comercial",
      images: [
        "/img/construcciones3.jpg",
      ],
      description: "Edificio comercial de 3 plantas en Capital Federal",
    },
    {
      id: 3,
      title: "Remodelación Integral",
      category: "remodelaciones",
      images: [
        "/placeholder.svg?height=800&width=1200&text=Remodelacion+Antes",
        "/placeholder.svg?height=800&width=1200&text=Remodelacion+Durante",
        "/placeholder.svg?height=800&width=1200&text=Remodelacion+Despues",
        "/placeholder.svg?height=800&width=1200&text=Remodelacion+Detalle",
      ],
      description: "Renovación completa de casa en Avellaneda",
    },
    {
      id: 4,
      title: "Diseño de Interiores",
      category: "interiores",
      images: [
        "/placeholder.svg?height=800&width=1200&text=Interiores+Living",
        "/placeholder.svg?height=800&width=1200&text=Interiores+Comedor",
        "/placeholder.svg?height=800&width=1200&text=Interiores+Cocina",
        "/placeholder.svg?height=800&width=1200&text=Interiores+Detalle",
      ],
      description: "Ambientación moderna de living y cocina",
    },
    {
      id: 5,
      title: "Jardín Residencial",
      category: "paisajismo",
      images: [
        "/placeholder.svg?height=800&width=1200&text=Jardin+Vista+General",
        "/placeholder.svg?height=800&width=1200&text=Jardin+Piscina",
        "/placeholder.svg?height=800&width=1200&text=Jardin+Deck",
        "/placeholder.svg?height=800&width=1200&text=Jardin+Plantas",
      ],
      description: "Diseño y construcción de jardín con piscina",
    },
    {
      id: 6,
      title: "Duplex en Lanús",
      category: "residencial",
      images: [
        "/placeholder.svg?height=800&width=1200&text=Duplex+Fachada",
        "/placeholder.svg?height=800&width=1200&text=Duplex+Planta+Baja",
        "/placeholder.svg?height=800&width=1200&text=Duplex+Planta+Alta",
        "/placeholder.svg?height=800&width=1200&text=Duplex+Cochera",
      ],
      description: "Construcción de duplex de 220m² con cochera",
    },
    {
      id: 7,
      title: "Local Comercial",
      category: "comercial",
      images: [
        "/placeholder.svg?height=800&width=1200&text=Local+Exterior",
        "/placeholder.svg?height=800&width=1200&text=Local+Interior",
        "/placeholder.svg?height=800&width=1200&text=Local+Cocina",
        "/placeholder.svg?height=800&width=1200&text=Local+Barra",
      ],
      description: "Acondicionamiento de local para restaurante",
    },
    {
      id: 8,
      title: "Ampliación de Vivienda",
      category: "remodelaciones",
      images: [
        "/placeholder.svg?height=800&width=1200&text=Ampliacion+Original",
        "/placeholder.svg?height=800&width=1200&text=Ampliacion+Obra",
        "/placeholder.svg?height=800&width=1200&text=Ampliacion+Terminada",
        "/placeholder.svg?height=800&width=1200&text=Ampliacion+Interior",
      ],
      description: "Ampliación de 60m² con segundo piso",
    },
    {
      id: 9,
      title: "Cocina Moderna",
      category: "interiores",
      images: [
        "/placeholder.svg?height=800&width=1200&text=Cocina+Vista+General",
        "/placeholder.svg?height=800&width=1200&text=Cocina+Isla",
        "/placeholder.svg?height=800&width=1200&text=Cocina+Electrodomesticos",
        "/placeholder.svg?height=800&width=1200&text=Cocina+Detalle",
      ],
      description: "Remodelación completa de cocina con isla central",
    },
  ]

  const filteredProjects =
    activeFilter === "todos" ? projects : projects.filter((project) => project.category === activeFilter)

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!modalOpen || !modalProject) return

      switch (e.key) {
        case "Escape":
          closeModal()
          break
        case "ArrowLeft":
          e.preventDefault()
          prevModalImage()
          break
        case "ArrowRight":
          e.preventDefault()
          nextModalImage()
          break
      }
    }

    if (modalOpen) {
      document.addEventListener("keydown", handleKeyDown)
      document.body.style.overflow = "hidden"
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = "unset"
    }
  }, [modalOpen, modalProject, modalImageIndex])

  const nextImage = (projectId: number, totalImages: number) => {
    setCurrentImageIndex((prev) => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) + 1) % totalImages,
    }))
  }

  const prevImage = (projectId: number, totalImages: number) => {
    setCurrentImageIndex((prev) => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) - 1 + totalImages) % totalImages,
    }))
  }

  const goToImage = (projectId: number, imageIndex: number) => {
    setCurrentImageIndex((prev) => ({
      ...prev,
      [projectId]: imageIndex,
    }))
  }

  const openModal = (project: Project, imageIndex = 0) => {
    setModalProject(project)
    setModalImageIndex(imageIndex)
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
    setModalProject(null)
    setModalImageIndex(0)
  }

  const nextModalImage = () => {
    if (!modalProject) return
    setModalImageIndex((prev) => (prev + 1) % modalProject.images.length)
  }

  const prevModalImage = () => {
    if (!modalProject) return
    setModalImageIndex((prev) => (prev - 1 + modalProject.images.length) % modalProject.images.length)
  }

  return (
    <>
      <section id="galeria" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Nuestros <span className="text-amber-600">Trabajos</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Cada proyecto es único y refleja nuestro compromiso con la calidad y la excelencia. Descubre algunos de
                nuestros trabajos más destacados.
              </p>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  onClick={() => setActiveFilter(category.id)}
                  variant={activeFilter === category.id ? "default" : "outline"}
                  className={`flex items-center space-x-2 px-6 py-3 transition-all duration-300 ${
                    activeFilter === category.id
                      ? "bg-amber-600 hover:bg-amber-700 text-white"
                      : "border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white"
                  }`}
                >
                  <category.icon className="h-4 w-4" />
                  <span>{category.name}</span>
                </Button>
              ))}
            </div>

            {/* Gallery Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => {
                const currentIndex = currentImageIndex[project.id] || 0
                return (
                  <Card
                    key={project.id}
                    className="group border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden cursor-pointer"
                    onClick={() => openModal(project, currentIndex)}
                  >
                    <div className="relative overflow-hidden">
                      {/* Carousel Container */}
                      <div className="relative h-64 overflow-hidden">
                        <Image
                          src={project.images[currentIndex] || "/placeholder.svg"}
                          alt={`${project.title} - Imagen ${currentIndex + 1}`}
                          width={600}
                          height={400}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />

                        {/* Navigation Arrows */}
                        {project.images.length > 1 && (
                          <>
                            <button
                              onClick={(e) => {
                                e.stopPropagation()
                                prevImage(project.id, project.images.length)
                              }}
                              className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100"
                              aria-label="Imagen anterior"
                            >
                              <ChevronLeft className="h-4 w-4" />
                            </button>
                            <button
                              onClick={(e) => {
                                e.stopPropagation()
                                nextImage(project.id, project.images.length)
                              }}
                              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100"
                              aria-label="Imagen siguiente"
                            >
                              <ChevronRight className="h-4 w-4" />
                            </button>
                          </>
                        )}

                        {/* Zoom Icon */}
                        <div className="absolute top-2 left-2 w-8 h-8 bg-black/50 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <ZoomIn className="h-4 w-4" />
                        </div>

                        {/* Image Counter */}
                        {project.images.length > 1 && (
                          <div className="absolute top-2 right-2 bg-black/50 text-white px-2 py-1 rounded text-xs">
                            {currentIndex + 1} / {project.images.length}
                          </div>
                        )}
                      </div>

                      {/* Dots Indicator */}
                      {project.images.length > 1 && (
                        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-1">
                          {project.images.map((_, index) => (
                            <button
                              key={index}
                              onClick={(e) => {
                                e.stopPropagation()
                                goToImage(project.id, index)
                              }}
                              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                index === currentIndex ? "bg-white" : "bg-white/50 hover:bg-white/75"
                              }`}
                              aria-label={`Ir a imagen ${index + 1}`}
                            />
                          ))}
                        </div>
                      )}

                      {/* Overlay with project info */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-8 left-4 right-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                        <h3 className="text-lg font-bold mb-1">{project.title}</h3>
                        <p className="text-sm text-gray-200">{project.description}</p>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">{project.description}</p>
                      <div className="mt-4 flex items-center justify-between">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                          {categories.find((cat) => cat.id === project.category)?.name}
                        </span>
                        {project.images.length > 1 && (
                          <span className="text-xs text-gray-500">{project.images.length} fotos</span>
                        )}
                      </div>
                    </div>
                  </Card>
                )
              })}
            </div>

            {/* Call to Action */}
            <div className="text-center mt-16">
              <div className="bg-gradient-to-br from-amber-500 to-orange-600 text-white p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">¿Te gustó lo que viste?</h3>
                <p className="text-lg mb-6 opacity-90">
                  Estos son solo algunos ejemplos de nuestro trabajo. Cada proyecto es personalizado según tus
                  necesidades.
                </p>
                <Button
                  variant="secondary"
                  className="bg-white text-amber-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold"
                  onClick={() => {
                    const contactSection = document.getElementById("contacto")
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: "smooth" })
                    }
                  }}
                >
                  <Hammer className="mr-2 h-5 w-5" />
                  Solicitar Cotización
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal Overlay */}
      {modalOpen && modalProject && (
        <div className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          {/* Backdrop */}
          <div className="absolute inset-0" onClick={closeModal} />

          {/* Modal Content */}
          <div className="relative bg-white rounded-2xl shadow-2xl max-w-5xl max-h-[90vh] w-full overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">{modalProject.title}</h3>
                <p className="text-gray-600 mt-1">{modalProject.description}</p>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-800 mt-2">
                  {categories.find((cat) => cat.id === modalProject.category)?.name}
                </span>
              </div>
              <button
                onClick={closeModal}
                className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-300 cursor-pointer"
                aria-label="Cerrar modal"
              >
                <X className="h-5 w-5 text-gray-600" />
              </button>
            </div>

            {/* Image Container */}
            <div className="relative bg-gray-50 flex items-center justify-center" style={{ height: "60vh" }}>
              <div className="relative w-full h-full flex items-center justify-center p-4">
                <Image
                  src={modalProject.images[modalImageIndex] || "/placeholder.svg"}
                  alt={`${modalProject.title} - Imagen ${modalImageIndex + 1}`}
                  width={1200}
                  height={800}
                  className="max-w-full max-h-full object-contain rounded-lg"
                  priority
                />

                {/* Navigation Arrows */}
                {modalProject.images.length > 1 && (
                  <>
                    <button
                      onClick={prevModalImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white text-gray-800 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl z-10 cursor-pointer"
                      aria-label="Imagen anterior"
                    >
                      <ChevronLeft className="h-6 w-6" />
                    </button>
                    <button
                      onClick={nextModalImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white text-gray-800 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl z-10 cursor-pointer"
                      aria-label="Imagen siguiente"
                    >
                      <ChevronRight className="h-6 w-6" />
                    </button>
                  </>
                )}

                {/* Image Counter */}
                <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium z-10">
                  {modalImageIndex + 1} / {modalProject.images.length}
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-gray-200 bg-white">
              <div className="flex items-center justify-between">
                {/* Navigation Info */}
                <div className="text-sm text-gray-500">Usa las flechas del teclado ← → para navegar</div>

                {/* Dots Navigation */}
                {modalProject.images.length > 1 && (
                  <div className="flex space-x-2">
                    {modalProject.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setModalImageIndex(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                          index === modalImageIndex ? "bg-amber-600" : "bg-gray-300 hover:bg-gray-400"
                        }`}
                        aria-label={`Ir a imagen ${index + 1}`}
                      />
                    ))}
                  </div>
                )}

                {/* Close Button */}
                <Button
                  onClick={closeModal}
                  variant="outline"
                  className="border-gray-300 text-gray-600 hover:bg-gray-50 bg-transparent cursor-pointer"
                >
                  Cerrar
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
