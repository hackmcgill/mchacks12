import styled from "styled-components"
import * as styleVars from "../variable"

export const Container = styled.nav`
  z-index: 200;
  height: 78px;
  background-color: transparent;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition:
    0.4s background-color ease-in,
    0.4s box-shadow ease-in;

  &.has-border,
  &.dark-background {
    background-color: #3ba4df !important;
  }

  .home-link {
    font-family: "ArcadeClassic", sans-serif;
    font-size: 24px;
    cursor: pointer;
    color: ${styleVars.m12Maroon};
    text-decoration: none;
    transition: color 0.3s ease;
  }

  .home-link:hover {
    color: white;
  }
`

export default Container
