let fontSizes = [16, 18, 22, 26, 32, 36, 48, 64]
fontSizes.cover = fontSizes[7]
fontSizes.body = fontSizes[2]
fontSizes.body2 = fontSizes[3]
fontSizes.body2 = fontSizes[1]
fontSizes.title1 = fontSizes[6]
fontSizes.title2 = fontSizes[5]
fontSizes.title3 = fontSizes[3]
fontSizes.quote = fontSizes[5]

let colors = {
  bg: '#091216',
  fg: '#fff',
  primary: '#581DD6',
  primarys: ['#3b2669'],
  text: '#fff',
  linkColor: '#48A4FA',
}

let fontWeights = [200, 300, 400, 500, 600, 700, 800, 900]
fontWeights.regular = fontWeights[2]
fontWeights.semibold = fontWeights[4]
fontWeights.bold = fontWeights[5]
fontWeights.light = fontWeights[2]

let fonts = [
  'proxima-nova',
  'SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace',
]
fonts.proximaNova = fonts[0]
fonts.mono = fonts[1]

let borderWidths = [1, 2, 6]

let borders = [`${borderWidths[2]}px solid ${colors.primary}`]
borders.cover = borders[0]

export default {
  space: [0, 4, 8, 16, 24, 32, 64, 88, 112],
  fontSizes,
  colors,
  fonts,
  fontWeights,
  lineHeights: [],
  letterSpacings: ['0.01em'],
  sizes: {
    maxWidth: '1600px',
  },
  borderWidths,
  borderStyles: [],
  borders,
  radii: [2, 4, 8],
  shadows: [],
  zIndices: [],
}
