import React from 'react'
import styled from 'styled-components/macro'
import Fade from 'react-reveal/Fade'
import Box from 'system/Box'
import Text from 'system/Text'
import MaxWidth from 'components/MaxWidth'
import handSrc from 'vectors/hand.svg'

function Cover() {
  const lines = [
    'Helping',
    <BottomBorder>humans & technology</BottomBorder>,
    'work together',
  ]

  return (
    <MaxWidth
      display="flex"
      alignItems="center"
      height={['auto', '100vh']}
      mt={[4, '-112px']}
    >
      <Text variant="cover" as="h1" style={{ whiteSpace: 'pre-line' }}>
        {lines.map((line, i) => (
          <Fade key={line} bottom duration={500} delay={300 + i * 100}>
            <React.Fragment key={line}>
              {line}
              {'\n'}
            </React.Fragment>
          </Fade>
        ))}
      </Text>
      <Box display={['none', 'flex']} justifyContent="flex-end" flexGrow={1}>
        <img alt="Cover graphic" src={handSrc} style={{ width: 800 }} />
      </Box>
    </MaxWidth>
  )
}

const BottomBorder = styled.span`
  border-bottom: ${(props) => props.theme.borders.cover};
`

export default Cover
