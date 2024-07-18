import styled from "styled-components"

export const Container = styled.section`
  padding: 0 14px 0 14px;
  position: relative;

  .coming-soon {
    position: relative;
    align-text: center;

    > h1 {
      position: absolute;
      font-size: 40px;
      top: 45px;
      margin: 0;
      left: 50%;
      transform: translateX(-50%);
      color: white;
    }

    > .coming-soon__box {
      width: 700px;
      position: relative;
      left: 50%;
      transform: translateX(-50%);
    }

    > .coming-soon__martlet {
      z-index: 30;
      position: absolute;
      right: 470px;
      top: -40px;
    }
  }
`

export default Container
