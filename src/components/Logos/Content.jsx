import styled from "styled-components"
import * as styleVars from "../variable"

export const Content = styled.section`
  padding-bottom: 15rem;
  display:flex;
  flex-direction: column;
  gap: 10px;

  h1 {
    font-size: 8rem;
    text-align: center;
    color: ${styleVars.m12DarkestTeal};
    margin: 5rem 0;
    margin-bottom: 5rem;
    font-family: "ArcadeClassic", sans-serif;
  }
`

export default Content
