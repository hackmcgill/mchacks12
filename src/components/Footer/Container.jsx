import styled from "styled-components"
import * as styleVars from "../variable"

export const Container = styled.footer`
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

  @media only screen and (max-width: ${styleVars.lgUp}) {
    padding: 16px;
    gap: 24px;
    font-size: 1.125rem;
  }

  @media only screen and (max-width: ${styleVars.mdUp}) {
    flex-direction: column;
    align-items: flex-start;
    padding: 12px;
    gap: 16px;
    font-size: 1rem; 
  }

  @media only screen and (max-width: ${styleVars.smUp}) {
    font-size: 0.875rem;
  }

  @media only screen and (max-width: ${styleVars.xsUp}) {
    font-size: 0.75rem; 
    gap: 8px;

    .footer__social-links {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }
  }
`

export default Container
