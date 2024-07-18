import styled from "styled-components"

export const Image = styled.img`
  height: auto;
  object-fit: contain;
  position: absolute;
  z-index: 2;

  @media only screen and (max-width: 1000px) {
    display: none;
  }
`

export default Image
