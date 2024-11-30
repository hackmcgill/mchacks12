import styled from "styled-components"

export const Content = styled.div`
  font-family: 'ArcadeClassic';
  display: flex;
  justify-content: space-between;
  max-width: 780px;
  margin: auto;
  font-size: 16px;

  @media only screen and (max-width: 1118px) {
    flex-direction: column;
    justify-content: center;
    padding-left: 30px;
    padding-right: 30px;
    padding-top: 40px;
  }

  h2 {
    margin-bottom: 24px;
  }
`

export default Content
