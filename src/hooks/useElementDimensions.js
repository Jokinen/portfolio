import { useRef, useState, useLayoutEffect, useCallback } from 'react'

const getDimensions = (node) => node.getBoundingClientRect()

export default function useElementDimensions() {
  const elementRef = useRef(null)
  const [rect, setRect] = useState({})
  const node = elementRef.current

  useLayoutEffect(() => {
    if (node) {
      const measure = () =>
        window.requestAnimationFrame(() => setRect(getDimensions(node)))

      measure()

      window.addEventListener('resize', measure)
      window.addEventListener('scroll', measure)

      return () => {
        window.removeEventListener('resize', measure)
        window.removeEventListener('scroll', measure)
      }
    }
  }, [node])

  const setRef = useCallback((node) => {
    if (node) {
      setRect(getDimensions(node))

      elementRef.current = node
    }
  }, [])

  return [setRef, rect, node]
}
