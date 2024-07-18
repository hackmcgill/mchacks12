import styled from "styled-components"
import * as styleVars from "../variable"

export const Text = styled.div`
  margin-bottom: 1rem;
  padding: 26px;
  font-family: "Hind Siliguri", sans-serif;
  h2 {
    color: ${styleVars.darkSecondaryBlue};
    font-size: 3rem;
    font-weight: 400;
    margin-bottom: 0.22rem;

    @media only screen and (min-width: ${styleVars.smUp}) {
      font-size: 3rem;
    }
  }
  b {
    color: ${styleVars.hackBlack};
  }
  a {
    color: ${styleVars.darkYellow};
  }
`

export default Text
