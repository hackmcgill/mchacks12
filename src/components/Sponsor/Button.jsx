import styled from "styled-components"
import * as styleVars from "../variable"

export const Button = styled.button`
  font-family: Brown, sans-serif;
  font-weight: 400;
  font-size: 14px;
  text-transform: none;
  background-color: ${styleVars.hackGold};
  color: ${styleVars.primary};
  border-radius: 3.75em;
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
