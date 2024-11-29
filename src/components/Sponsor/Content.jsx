import styled from "styled-components"
import * as styleVars from "../variable"

export default styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  max-width: 1440px;
  margin: auto;
  gap: 40px;

  .bubble-sm {
    position: absolute;
    width: 5rem;
  }

  .bubble-md {
    position: absolute;
    width: 8rem;
  }

  .bubble1 {
    top: 5%;
    left: 40%;
  }

  .bubble2 {
    top: 24%;
    left: 8%;
  }

  .bubble3 {
    top: 15%;
    right: 15%;
  }

  .bubble4 {
    top: 25%;
    left: 50%;
  }

  .bubble5 {
    top: 50%;
    right: 3%;
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
