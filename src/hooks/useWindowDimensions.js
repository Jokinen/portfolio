import { useState, useEffect } from 'react'

function getWindowDimensions() {
  const {
    innerWidth: width,
    innerHeight: height,
    pageXOffset,
    pageYOffset,
  } = window

  return {
    width,
    height,
    pageXOffset: pageXOffset || document.documentElement.scrollLeft,
    pageYOffset: pageYOffset || document.documentElement.scrollTop,
  }
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  )

  useEffect(() => {
    function handleResize() {
      window.requestAnimationFrame(() => {
        setWindowDimensions(getWindowDimensions())
      })
    }

    window.addEventListener('resize', handleResize)
    window.addEventListener('scroll', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('scroll', handleResize)
    }
  }, [])

  return windowDimensions
}
