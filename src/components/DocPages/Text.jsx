import styled from "styled-components"
import * as styleVars from "../variable"

export const Text = styled.div`
  margin-bottom: 1rem;
  padding: 26px;
  color: ${styleVars.hackBlack};

  h1 {
    padding-top: 5rem;
    color: ${styleVars.darkSecondaryBlue};
    font-size: 5rem;
    font-weight: 400;
  }

  h2 {
    color: ${styleVars.lightSecondaryBlue};
    font-size: 3rem;
    font-weight: 400;
    margin-bottom: 0.22rem;
  }

  a {
    color: ${styleVars.darkYellow};
  }

  b {
    color: ${styleVars.hackBlack};
  }

  @media only screen and (max-width: ${styleVars.smUp}) {
    width: 100%;
    margin: 0;
    padding: 36px;
  }
`

export default Text
