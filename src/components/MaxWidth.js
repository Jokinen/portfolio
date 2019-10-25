import styled from 'styled-components'
import Box from 'system/Box'

const MaxWidth = styled(Box)`
  width: 100%;
  max-width: ${(props) => props.theme.sizes.maxWidth};
`

export default MaxWidth
