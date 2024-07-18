import styled from "styled-components"

const Image = styled.img`
  max-width: 840px;
  border-radius: 12px;
  box-shadow: 0 2px 12px 6px rgba(0, 0, 0, 0.15);
  object-fit: cover;
  background-repeat: no-repeat;
  background-position: center center;

  @media only screen and (max-width: 1345px) {
    width: 430px;
    margin-right: 30px;
  }

  @media only screen and (max-width: 1118px) {
    display: none;
  }
`

export default Image
