import { useState, useEffect, useCallback } from "react"

export function useAutoRotate(length: number, intervalMs: number) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (isPaused) return
    const id = setInterval(() => {
      setActiveIndex((i) => (i + 1) % length)
    }, intervalMs)
    return () => clearInterval(id)
  }, [isPaused, length, intervalMs])

  const pause = useCallback(() => setIsPaused(true), [])
  const resume = useCallback(() => setIsPaused(false), [])
  const goTo = useCallback((index: number) => setActiveIndex(index), [])

  return { activeIndex, goTo, pause, resume }
}
