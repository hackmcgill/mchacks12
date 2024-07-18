import styled from "styled-components"
import * as styleVars from "../variable"

export const PageLink = styled.a`
  color: ${styleVars.hackBlack60};
  cursor: pointer;
  text-decoration: none;

  &:focus,
  &:hover {
    color: ${styleVars.colorHackRed};
  }
`

export default PageLink
