import styled from "styled-components"
import * as styleVars from "../variable"

export const Links = styled.div`
  display: flex;
  align-items: center;
  position: fixed;
  padding: 1rem 0;
  top: 14px;
  left: calc(40px);
  gap: 2.5vw;
  height: 100%px;

  .Nav__socials {
    position: fixed;
    transition: right 0.25s ease-in-out;
    z-index: 1;
    right: ${(props) => (props.$hasBorder ? "4rem" : "calc(14rem + 1vw)")};
  }

  .Nav__mlh-banner {
    position: fixed;
    top: 0;
    right: 4.5rem;
    right: calc(3rem + 0.9vw); // NEW
    width: 90px;
    height: auto;
    transition: opacity 0.15s ease-in-out;
    opacity: ${(props) => (props.$hasBorder ? "0" : "1")};
    pointer-events: ${(props) => (props.$hasBorder ? "none" : "")};
    z-index: 0;

    img {
      filter: drop-shadow(2px 4px 2px rgb(0 0 0 / 0.15));
      width: 10rem;
    }
  }

  @media only screen and (max-width: ${styleVars.smUp}) {
    display: none;
  }
`

export default Links
