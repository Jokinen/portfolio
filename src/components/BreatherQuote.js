import React from 'react'
import Fade from 'react-reveal/Fade'
import Text from 'system/Text'
import MaxWidth from 'components/MaxWidth'

function BreatherQuote() {
  const lines = [
    '“Meaningful technology empowers people,',
    'human centric methods create meaningful technology.”',
  ]

  return (
    <MaxWidth display="flex" justifyContent="center">
      <Text variant="quote" as="blockquote" maxWidth={770}>
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
    </MaxWidth>
  )
}

export default BreatherQuote
