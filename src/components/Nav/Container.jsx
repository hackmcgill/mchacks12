import styled from "styled-components"
import headerImage from '../../assets/images/designs/mchacks12-header.svg';
import * as styleVars from "../variable"

export const Container = styled.nav`
  z-index: 200;
  height: 78px;
  background-color: transparent;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition:
    0.4s background-color ease-in,
    0.4s box-shadow ease-in;

  &.has-border,
  &.dark-background {
    background-color: #3BA4DF !important;
    box-shadow: 0 2px 6px 3px !important;
  }

  .background {
    margin-top: 16vh;
    width: 100%;
    height: 20vh;
    background-image: url(${headerImage});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
  .home-link {
    font-family: 'ArcadeClassic';
    font-size: 24px;
    cursor: pointer;
    color: ${styleVars.hackRed};
    text-decoration: none;
    transition: color 0.3s ease;
  }

  .home-link:hover {
    color: white;
  }

  @media only screen and (max-width: ${styleVars.mdUp}) {
    .background {
      margin-top: 10vh;
      width: 100%;
      height: 10vh;
    }
  }

  @media only screen and (max-width: ${styleVars.smUp}) {
    .background {
      margin-top: 10vh;
      width: 100%;
      height: 10vh;
    }
  }

  @media only screen and (max-width: ${styleVars.lgUp}) {
    .background {
      margin-top: 10vh;
      width: 100%;
      height: 10vh;
    }
  }

  @media only screen and (max-width: ${styleVars.xsUp}) {
    .background {
      margin-top: 10vh;
      width: 100%;
      height: 10vh;
    }
  }
`

export default Container
