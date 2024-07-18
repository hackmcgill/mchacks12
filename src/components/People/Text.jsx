import styled from "styled-components"
import { newBlue } from "../variable"

export const Text = styled.figcaption`
  width: 70%;
  font-family: "Brown", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  color: ${newBlue};
  text-align: left !important;
  > * {
    &:nth-child(1) {
      margin: 0 !important;
    }

    &:nth-child(2) {
      margin: 0 !important;
    }
  }
`

export default Text
