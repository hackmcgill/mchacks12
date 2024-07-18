import styled from "styled-components"
import * as styleVars from "../variable"

export const NavLink = styled.a`
  display: flex;
  margin-right: 2.8rem;
  margin-right: calc(1vw + 5px); // NEW
  cursor: pointer;
  color: ${styleVars.primary};
  text-decoration: none;
  transition: color 0.3s ease;

  &.active,
  &:focus,
  &:hover,
  &:active {
    background: transparent;
    color: white;
  }
`

export default NavLink
