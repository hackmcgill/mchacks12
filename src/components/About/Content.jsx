import styled from "styled-components"
import * as styleVars from "../variable"

export const Content = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  max-width: 1440px;
  margin: auto;
  gap: 40px;

  .bubbles {
  }

  .bubble-sm {
    position: absolute;
    width: 5rem;
  }

  .bubble-md {
    position: absolute;
    width: 8rem;
  }

  .bubble1 {
    top: 12%;
    left: 27%;
  }

  .bubble2 {
    top: 20%;
    left: 18%;
  }

  .bubble3 {
    top: 25%;
    left: 23%;
  }

  .bubble4 {
    top: 40%;
    left: 40%;
  }

  .bubble5 {
    top: 25%;
    right: 8%;
  }

  .bubble6 {
    bottom: 3%;
    left: 16%;
  }

  @media only screen and (max-width: ${styleVars.mdUp}) {
    flex-direction: column;
    justify-content: center;
    padding-left: 30px;
    padding-right: 30px;
    padding-top: 40px;

    .bubbles {
      display: none;
    }
  }

  @media only screen and (max-width: ${styleVars.smUp}) {
    padding: 0;
  }
`
