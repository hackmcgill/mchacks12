import styled from "styled-components"
import * as styleVars from "../variable"

export const Content = styled.section`
  padding-bottom: 15rem;
  display:flex;
  flex-direction: column;
  gap: 10px;

  h1 {
    font-size: 6rem;
    text-align: center;
    color: ${styleVars.m12DarkestTeal};
    margin: 7rem 0 2rem 0;
    font-family: "ArcadeClassic", sans-serif;
  }
`

export default Content
