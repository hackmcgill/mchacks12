import styled from "styled-components"
import * as styleVars from "../variable"

export const Text = styled.div`
  max-width: 590px;
  font-size: 16px;
  margin-top: 60px;
  height: min-content;
  padding: 60px;

  h2 {
    color: ${styleVars.primary};
    font-size: 36px;
    font-weight: bold;
    margin-top: 0;
  }

  p {
    color: ${styleVars.primary};
    margin-top: 0;
  }

  @media only screen and (max-width: ${styleVars.smUp}) {
    padding: 40px;
  }

  @media only screen and (max-width: ${styleVars.xsUp}) {
    padding: 20px;
  }
`

export default Text
