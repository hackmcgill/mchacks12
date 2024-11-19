import styled from "styled-components"
import * as styleVars from "../variable"

export const Content = styled.section`
  padding-bottom: 10rem;

  h1 {
    font-size: 5rem;
    text-align: center;
    color: ${styleVars.faqBlue1};
    margin: 0;
    font-family: "ArcadeClassic", sans-serif;
  }

  @media (max-width: 1024px) {
    h1 {
      margin: -20vh 0 -10vh 0;
      font-size: 4rem;
    }
  }
  

  @media (max-width: 768px) {
    h1 {
      margin: -20vh 0 -15vh 0;
      font-size: 4rem;
    }
  }

  @media (max-width: 420px) {
    h1 {
      margin: 0vh 0 -15vh 0;
      font-size: 4rem;
    }
  }
`

export default Content
