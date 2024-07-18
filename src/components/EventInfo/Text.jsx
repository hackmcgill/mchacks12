import styled from "styled-components"
import * as styleVars from "../variable"

const Text = styled.div`
  font-size: 18px;
  padding-right: 30px;
  padding-left: 54px;
  max-width: 440px;

  h3 {
    color: ${styleVars.hackWhite};
    font-size: 26px;
    font-weight: bold;
    margin-top: 16px;
    margin-bottom: 16px;
  }

  p {
    color: ${styleVars.textColor};
    margin: 0;
    margin-bottom: 16px;
  }

  @media only screen and (max-width: ${styleVars.smUp}) {
    width: 100%;
    margin: 0;
    padding: 0;
  }

  @media only screen and (max-width: 1118px) {
    margin-left: auto;
    margin-right: auto;
    padding: 0;
  }
`

export default Text
