import styled from "styled-components"
import * as styleVars from "../variable"

export const SocialLink = styled.a`
  color: ${styleVars.hackBlack60};
  cursor: pointer;
  text-decoration: none;
  font-size: 16px;

  &:focus,
  &:hover {
    color: ${styleVars.colorHackRed};
  }
`

export default SocialLink
