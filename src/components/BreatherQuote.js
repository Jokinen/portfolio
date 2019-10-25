import React from 'react'
import Fade from 'react-reveal/Fade'
import Text from 'system/Text'

function BreatherQuote() {
  const lines = [
    '“Meaningful technology empowers people, well',
    'working teams with appropriate leadership',
    'create meaningful technology.”',
  ]

  return (
    <>
      <Text variant="quote" as="blockquote">
        {lines.map((line, i) => (
          <Fade
            key={line}
            bottom
            duration={1000}
            distance="100px"
            delay={100 + 100 * i}
            fraction={1}
          >
            <>{line}</>
          </Fade>
        ))}
      </Text>
    </>
  )
}

export default BreatherQuote
