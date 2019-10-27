function addFont(name, fontWeight = 'normal', fontStyle = 'normal') {
  const fontName = `Metropolis-${name}`

  return `
    @font-face{
        font-family: "metropolis";
        src: url(${require(`fonts/metropolis/EOT/${fontName}.eot`)});
        src: url(${require(`fonts/metropolis/EOT/${fontName}.eot`)}?#iefix) format("embedded-opentype"),
            url(${require(`fonts/metropolis/WOFF2/${fontName}.woff2`)}) format("woff2"),
            url(${require(`fonts/metropolis/WOFF/${fontName}.woff`)}) format("woff");

        font-style: ${fontStyle};
        font-weight: ${fontWeight};
        font-display: swap;
    }
  `
}

const MetropolisFont = `
  ${addFont('Thin', 200)}
  ${addFont('Light', 300)}
  ${addFont('Regular', 400)}
  ${addFont('Medium', 500)}
  ${addFont('SemiBold', 600)}
  ${addFont('Bold', 700)}
  ${addFont('ExtraBold', 800)}
  ${addFont('Black', 900)}
`

export default MetropolisFont
