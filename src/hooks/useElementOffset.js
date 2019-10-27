import { useState, useLayoutEffect } from 'react'
import useWindowDimensions from 'hooks/useWindowDimensions'
import useElementDimensions from 'hooks/useElementDimensions'

export default function useElementOffset(offset = 0) {
  const [percentageInFrame, setPercentageInFrame] = useState(0)
  const { pageYOffset, height } = useWindowDimensions()
  const [ref, rect, node] = useElementDimensions()

  useLayoutEffect(() => {
    const measure = () =>
      window.requestAnimationFrame(() => {
        if (!node) {
          return
        }

        const elementTopOffset = node.offsetTop
        const elementHeight = rect.height
        const elementCompletelyVisibleScrollPosition =
          elementTopOffset + rect.height - height + offset
        const percentageHidden =
          ((elementCompletelyVisibleScrollPosition - pageYOffset) * 100) /
          (elementHeight * 100)

        setPercentageInFrame(1 - percentageHidden)
      })

    measure()

    window.addEventListener('resize', measure)
    window.addEventListener('scroll', measure)

    return () => {
      window.removeEventListener('resize', measure)
      window.removeEventListener('scroll', measure)
    }
  })

  return [ref, percentageInFrame]
}
