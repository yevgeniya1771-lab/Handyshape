import { useState, useCallback } from "react"

export function useCarousel<T>(items: T[]) {
  const [activeIndex, setActiveIndex] = useState(0)

  const prev = useCallback(
    () => setActiveIndex((i) => (i - 1 + items.length) % items.length),
    [items.length]
  )

  const next = useCallback(
    () => setActiveIndex((i) => (i + 1) % items.length),
    [items.length]
  )

  const goTo = useCallback((index: number) => setActiveIndex(index), [])

  return { activeIndex, active: items[activeIndex], prev, next, goTo }
}
