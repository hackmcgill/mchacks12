import styled from "styled-components"
import * as styleVars from "../variable"

export const StyledGIF = styled.img`
  width: 100%;

  @media only screen and (min-width: ${styleVars.smUp}) {
    width: 80%;
  }
`

export default StyledGIF
