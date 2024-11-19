import styled from "styled-components"

export const Tier = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  max-height: 35vh;

  @media (max-width: 768px) {
    max-height: 15vh;
  }
`

export default Tier
