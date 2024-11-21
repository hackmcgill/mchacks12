import styled from "styled-components"
import * as styleVars from "../variable"

export const PageLink = styled.a`
  color: ${styleVars.hackWhite};
  cursor: pointer;
  text-decoration: none;
  letter-spacing: 1px;
  word-spacing: 3px;

  &:focus,
  &:hover {
    color: ${styleVars.m12Maroon};
  }
`

export default PageLink
