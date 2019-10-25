import styled from 'styled-components'

const Link = styled.a`
  font-family: ${(props) => props.theme.fonts.proximaNova};
  font-size: ${(props) => props.theme.fontSizes[1]}px;
  font-weight: ${(props) => props.theme.fontWeights.regular};
  color: ${(props) => props.theme.colors.linkColor};

  &:hover {
    text-decoration: none;
  }
`

export default Link
