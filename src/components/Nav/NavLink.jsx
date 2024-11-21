import styled from "styled-components"
import * as styleVars from "../variable"

export const NavLink = styled.a`
  font-family: 'ArcadeClassic', sans-serif;
  font-size: 24px;
  display: flex;
  cursor: pointer;
  color: ${styleVars.m12Maroon};
  text-decoration: none;
  transition: color 0.3s ease;

  &.active,
  &:focus,
  &:hover,
  &:active {
    background: transparent;
    color: ${styleVars.m12White};
  }

  .home-link {
  font-family: 'ArcadeClassic';
  font-size: 24px;
  display: flex;
  cursor: pointer;
  color: ${styleVars.m12Maroon};
  text-decoration: none;
  transition: color 0.3s ease;}
}
`

export default NavLink
