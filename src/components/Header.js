import React from 'react'
import { ReactComponent as Logo } from 'vectors/logo.svg'
import Box from 'system/Box'
import MaxWidth from './MaxWidth'

function Header() {
  return (
    <MaxWidth>
      <Box py={4}>
        <Logo />
      </Box>
    </MaxWidth>
  )
}

export default Header
