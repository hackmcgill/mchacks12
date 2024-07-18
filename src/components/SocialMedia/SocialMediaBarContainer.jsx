import styled from "styled-components"

export const Container = styled.div`
  display: flex;

  .SocialMediaBar__icon {
    margin-left: 14px;
    margin-left: calc(0.4vw + 5px); // NEW
    transition: filter 0.3s ease;

    &:hover {
      filter: brightness(0) invert(1);
    }

    > a {
      display: flex;
      padding: 5px;
    }

    img {
      height: 20px;
      width: auto;
    }
  }
`

export default Container
