import styled from "styled-components"
import * as styleVars from "../variable"

export const Container = styled.footer`
  padding: 2rem 0;
  background-color: ${styleVars.background};
  border-top: 2px solid ${styleVars.hackBlack};
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  z-index: 2;
  height: 80px;
  margin-top: 0;
  padding: 20px;
  gap: 32px;

  @media only screen and (max-width: ${styleVars.xsUp}) {
    .footer__social-links {
      display: none;
    }
  }
`

export default Container
