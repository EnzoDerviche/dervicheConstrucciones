"use client"

import { useCallback } from "react"

export const useSmoothScroll = () => {
  const smoothScroll = useCallback((targetId: string) => {
    const target = document.getElementById(targetId)
    if (!target) return

    const headerOffset = 100
    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset
    const offsetPosition = targetPosition - headerOffset

    // Duración en ms
    const duration = 800
    const startPosition = window.pageYOffset
    const distance = offsetPosition - startPosition
    let startTime: number | null = null

    function animation(currentTime: number) {
      if (startTime === null) startTime = currentTime
      const timeElapsed = currentTime - startTime
      const progress = Math.min(timeElapsed / duration, 1)

      // Función de easing para un movimiento más natural
      const easeInOutQuad = (t: number) => {
        return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2
      }

      window.scrollTo(0, startPosition + distance * easeInOutQuad(progress))

      if (timeElapsed < duration) {
        requestAnimationFrame(animation)
      }
    }

    requestAnimationFrame(animation)
  }, [])

  const scrollToSection = useCallback(
    (href: string) => {
      const targetId = href.replace("#", "")
      smoothScroll(targetId)
    },
    [smoothScroll],
  )

  return { smoothScroll, scrollToSection }
}
