"use client"

import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function FloatingButtons() {
  const whatsappNumber = "5491123456789" // Reemplazar con el número real

  const openWhatsApp = () => {
    window.open(
      `https://wa.me/${whatsappNumber}?text=Hola, me interesa conocer más sobre sus servicios de construcción`,
      "_blank",
    )
  }

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <Button
        onClick={openWhatsApp}
        className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        size="icon"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle className="h-6 w-6 text-white" />
      </Button>
    </div>
  )
}
