import styled from "styled-components"
import * as styleVars from "../variable"

export const Content = styled.section`
  padding-bottom: 15rem;
  display:flex;
  flex-direction: column;
  gap: 10px;

  h1 {
    font-size: 5rem;
    text-align: center;
    color: ${styleVars.faqBlue1};
    margin: 0;
    margin-bottom: 5rem;
    font-family: "ArcadeClassic", sans-serif;
  }
`

export default Content
