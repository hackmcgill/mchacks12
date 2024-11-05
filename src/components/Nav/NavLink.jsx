import styled from "styled-components"
import * as styleVars from "../variable"

export const NavLink = styled.a`
  font-family: 'ArcadeClassic';
  font-size: 24px;
  display: flex;
  cursor: pointer;
  color: ${styleVars.hackRed};
  text-decoration: none;
  transition: color 0.3s ease;

  &.active,
  &:focus,
  &:hover,
  &:active {
    background: transparent;
    color: white;
  }

  .home-link {
  font-family: 'ArcadeClassic';
  font-size: 24px;
  display: flex;
  cursor: pointer;
  color: ${styleVars.hackRed};
  text-decoration: none;
  transition: color 0.3s ease;}
}
`

export default NavLink
