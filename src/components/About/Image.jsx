import styled from "styled-components"
import * as styleVars from "../variable"

export const Image = styled.img`
  max-width: 100%;

  @media only screen and (max-width: ${styleVars.mdUp}) {
    display: none;
  }
`
export default Image
