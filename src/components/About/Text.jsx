import styled from "styled-components"
import * as styleVars from "../variable"

export const Text = styled.div`
  max-width: 590px;
  font-size: 16px;
  height: min-content;
  padding: 60px;

  h2 {
    font-family: "Press Start 2P";
    text-decoration: none;
    color: ${styleVars.m12White};
    font-size: 24px;
    font-weight: normal;
    margin-top: 0;
  }

  p {
    font-family: "Space Mono";
    color: ${styleVars.m12White};
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
