import styled from 'styled-components/macro'
import { variant, typography, space, color } from 'styled-system'

const Text = styled.span`
  margin: 0;

  color: ${(props) => props.theme.colors.text};
  font-family: ${(props) => props.theme.fonts.proximaNova};

  ${variant({
    variants: {
      cover: {
        fontSize: 'cover',
        fontWeight: 'regular',
        lineHeight: 1.3,
      },
      body: {
        fontSize: 'body',
        fontWeight: 'regular',
        lineHeight: 1.6,
      },
      body2: {
        fontSize: 'body2',
        fontWeight: 'regular',
        lineHeight: 1.6,
      },
      body3: {
        fontSize: 'body3',
        fontWeight: 'regular',
        lineHeight: 1.6,
      },
      title1: {
        fontSize: 'title1',
        fontWeight: 'semibold',
      },
      title2: {
        fontSize: 'title2',
        fontWeight: 'bold',
      },
      title3: {
        fontSize: 'title3',
        fontWeight: 'semibold',
      },
      quote: {
        fontSize: 'quote',
        fontWeight: 'light',
        textAlign: 'center',
        lineHeight: 1.3,
      },
      quote2: {
        fontSize: 'quote2',
        fontWeight: 'thin',
        lineHeight: 1.3,
      },
    },
  })}

  ${color}
  ${typography}
  ${space}
`

export default Text
