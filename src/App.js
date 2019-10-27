import React, { Suspense } from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components/macro'
import theme from 'configs/theme'
import Box from 'system/Box'
import Header from 'components/Header'
import Cover from 'components/Cover'

const Humans = React.lazy(() => import('components/Humans'))
const BreatherQuote = React.lazy(() => import('components/BreatherQuote'))
const Technology = React.lazy(() => import('components/Technology'))
const Footer = React.lazy(() => import('components/Footer'))

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
          <Box height={[100, 200]} width={1} />
          <Suspense fallback={<></>}>
            <Humans />
            <Box height={[100, 400]} width={1} />
            <BreatherQuote />
            <Box height={[100, 300]} width={1} />
            <Technology />
            <Box height={[100, 200]} width={1} />
            <Footer />
          </Suspense>
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
