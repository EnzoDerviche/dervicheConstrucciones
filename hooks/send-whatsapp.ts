const whatsappNumber = "+541166621082"

export const openWhatsApp = () => {
    window.open(
      `https://wa.me/${whatsappNumber}?text=Hola, me interesa conocer más sobre sus servicios de construcción!`,
      "_blank",
    )
  }