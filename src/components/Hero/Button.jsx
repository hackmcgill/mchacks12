import styled from "styled-components"
import * as styleVars from "../variable"

export const Button = styled.button`
  font-family: "ArcadeClassic", sans-serif;
  font-weight: 400;
  font-size: 18px;
  text-transform: none;
  color: ${styleVars.hackWhite};
  background-color: ${styleVars.m12DarkestGrey};
  border-radius: 36px;
  border: none;
  transition: all 0.3s ease;
  box-shadow: 2px 4px 16px 0 ${styleVars.hackGrey}66;
  padding-top: 14px;
  padding-bottom: 15px;
  padding-left: 27px;
  padding-right: 27px;
  display: block;
  margin: auto;
  word-spacing: 5px;

  &:disabled {
    cursor: not-allowed;
    pointer-events: none;
    background-color: ${styleVars.hackGold}AA;
    color: ${styleVars.hackWhite}AA;
  }

  &:hover {
    background-color: ${styleVars.hackWhite}ee;
    color: ${styleVars.hackBlack};
  }

  @media only screen and (min-width: 1077px) {
    display: flex;
    margin-left: 0;
    margin-right: 0;
    align-items: left;
  }
`

export default Button
