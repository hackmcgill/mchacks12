import styled from "styled-components"
import * as styleVars from "../variable"

export const Links = styled.div`
  display: flex;
  gap: 35px;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: ${styleVars.smUp}) {
    gap: 16px;
  }

  @media only screen and (max-width: ${styleVars.xsUp}) {
    flex-grow: 1;
  }
`

export default Links
