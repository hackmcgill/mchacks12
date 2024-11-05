import styled from "styled-components"
import * as styleVars from "../variable"

export const Container = styled.footer`
  padding: 2rem 0;
  background: linear-gradient(180deg, #1A7076 0.34%, #22425A 5.5%, #22425A 8%);
  border-top: 2px solid ${styleVars.hackGrey};
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  z-index: 2;
  height: 80px;
  margin-top: 0;
  padding: 20px;
  gap: 32px;
  font-family: "ArcadeClassic", sans-serif;
  font-size: 20px;

  @media only screen and (max-width: ${styleVars.xsUp}) {
    .footer__social-links {
      display: none;
    }
  }
`

export default Container
