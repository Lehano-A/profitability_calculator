import { css } from 'styled-components'

const labelMixin = css`
  font-size: 1.8rem;
  line-height: 1.17;
  color: ${(props) => props.theme.palette.secondary};
  margin-bottom: 10px;
`

export { labelMixin }
