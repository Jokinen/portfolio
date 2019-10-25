import React from 'react'
import styled from 'styled-components'
import Box from 'system/Box'
import MaxWidth from 'components/MaxWidth'

const Wrapper = styled(Box)`
  text-align: center;

  border-top: 1px solid rgba(255, 255, 255, 0.2);
`

function Footer() {
  return (
    <>
      <MaxWidth>
        <Wrapper py={4}>
          <span role="img" aria-label="wave emoji">
            👋
          </span>
        </Wrapper>
      </MaxWidth>
    </>
  )
}

export default Footer
