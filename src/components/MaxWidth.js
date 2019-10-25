import styled from 'styled-components/macro'
import Box from 'system/Box'

const MaxWidth = styled(Box)`
  width: 100%;
  padding: 0 ${(props) => props.theme.space[3]}px;
  max-width: ${(props) => props.theme.sizes.maxWidth};
`

export default MaxWidth
