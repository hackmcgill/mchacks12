import styled from "styled-components"

export const DynamicGrid = styled.div`
  .grid {
    display: grid;
    width: 80%;
    max-width: 750px;
    margin: auto;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, auto);
    justify-content: center;
    align-items: start;
  }

  @media only screen and (max-width: 1200px) {
    .grid {
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(2, auto);
    }
  }
  @media only screen and (max-width: 800px) {
    .grid {
      position: initial;
      display: flex;
      height: initial;
      width: 100%;
      flex-flow: column wrap;
      align-content: center;
      max-width: 500px;
    }
  }
`

export default DynamicGrid
