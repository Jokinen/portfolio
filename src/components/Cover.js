import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade'
import Box from 'system/Box'
import Text from 'system/Text'
import MaxWidth from 'components/MaxWidth'
import { ReactComponent as FaceWithDetails } from 'vectors/face-with-details.svg'

function Cover() {
  const lines = [
    'Helping',
    <BottomBorder>humans & technology</BottomBorder>,
    'work together',
  ]

  return (
    <MaxWidth display="flex" alignItems="center" height="100vh" mt="-112px">
      <Text variant="cover" as="h1" style={{ whiteSpace: 'pre-line' }}>
        {lines.map((line, i) => (
          <Fade key={line} bottom duration={500} delay={i * 100}>
            <React.Fragment>
              {line}
              {'\n'}
            </React.Fragment>
          </Fade>
        ))}
      </Text>
      <Box display="flex" justifyContent="center" flexGrow={1}>
        <FaceWithDetails style={{ maxWidth: 500 }} />
      </Box>
    </MaxWidth>
  )
}

const BottomBorder = styled.span`
  border-bottom: ${(props) => props.theme.borders.cover};
`

export default Cover
