import styled from "styled-components"
import * as styleVars from "../variable"

export default styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  max-width: 1440px;
  margin: auto;
  gap: 40px;

  .color-blur-4 {
    position: absolute;
    top: 0;
    right: 0;
    z-index: -1;
  }

  @media only screen and (max-width: ${styleVars.mdUp}) {
    flex-direction: column;
    justify-content: center;
    padding-left: 30px;
    padding-right: 30px;
    padding-top: 40px;
  }

  @media only screen and (max-width: ${styleVars.smUp}) {
    padding: 0;

    .color-blur-4 {
      width: 70%;
    }
  }
`
