import styled from "styled-components"
import * as styleVars from "../variable"

export const Button = styled.button`
  font-family: "Press Start 2P";
  font-weight: 400;
  font-size: 17px;
  text-transform: none;
  background-color: ${styleVars.m12DarkPurple};
  color: ${styleVars.m12White};
  border: none;
  transition: all 0.15s ease-in-out;
  margin-top: 16px;
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 25px;
  padding-right: 25px;

  &:hover {
    background-color: ${styleVars.buttonColorHover};
  }
`

export default Button
