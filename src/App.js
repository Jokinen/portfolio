import React from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import theme from 'configs/theme'
import Box from 'system/Box'
import Header from 'components/Header'
import Cover from 'components/Cover'
import Humans from 'components/Humans'
import BreatherQuote from 'components/BreatherQuote'
import Technology from 'components/Technology'
import Footer from 'components/Footer'

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Box
          as="main"
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Header />
          <Cover />
          <Box height={200} width={1} />
          <Humans />
          <Box height={400} width={1} />
          <BreatherQuote />
          <Box height={300} width={1} />
          <Technology />
          <Box height={200} width={1} />
          <Footer />
        </Box>
      </ThemeProvider>
    </>
  )
}

export default App

const GlobalStyles = createGlobalStyle`
  html {
    min-height: 100%;
  }

  body {
    background: ${(props) => props.theme.colors.bg};
    margin: 0;
    min-height: 100%;
    font-size: 16px;
  }

  #root {
    min-height: 100%;
  }
`
