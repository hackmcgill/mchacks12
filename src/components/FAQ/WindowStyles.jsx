import styled from "styled-components"
import * as styleVars from "../variable"

import WindowSvg from "../../assets/images/designs/mchacks12-faq-window.svg"
import WindowSvgMid from "../../assets/images/designs/mchacks12-faq-window-mid.svg"
import WindowSvgLong from "../../assets/images/designs/mchacks12-faq-window-long.svg"

export const WindowStyles = styled.div`
  --scaling-factor: 1 / 1442 * 100vw;
  position: relative;
  margin: auto;
  top: 450px;

  width: calc(1271 * var(--scaling-factor));
  height: calc(1172 * var(--scaling-factor));
  max-width: 1271px;
  max-height: 1172px;

  text-align: center;

  background-image: url(${WindowSvg});
  background-repeat: no-repeat;
  background-size: cover;

  h2 {
    font-family: "Press Start 2P";
    color: ${styleVars.m12DarkestTeal};
    font-size: 36px;
    font-weight: 600;
    padding-bottom: 10px;
  }


  .content {
    position: relative;
    top: min(154px, calc(154 * var(--scaling-factor)));
    left: min(20px, calc(20 * var(--scaling-factor)));

    height: calc(693 * var(--scaling-factor));
    width: calc(1202 * var(--scaling-factor));
    max-height: 693px;
    max-width: 1202px;

    padding-top: 270px;
    top: -130px;
  }

  .question {
    font-family: "Space Mono";
    color: ${styleVars.m12White};
  }

  .question {
    font-family: "Space Mono";
    color: ${styleVars.m12White};
  }

  .questions {
    width: 40%;
    margin: auto;
    max-width: 750px;
  }

  @media only screen and (max-width: 1400px) {
    background-image: url(${WindowSvgMid});
    width: calc(1271 * var(--scaling-factor));
    height: calc(1315 * var(--scaling-factor));
    max-height: initial;

    .content {
      height: calc(1000 * var(--scaling-factor));
      width: calc(1202 * var(--scaling-factor));
      max-height: initial;
      padding-top: 35px;
    }
    .questions {
      width: 50%;
      max-width: 750px;
    }
  }

  @media only screen and (max-width: 1200px) {
    background-image: url(${WindowSvgLong});
    width: calc(1279 * var(--scaling-factor));
    height: calc(1558 * var(--scaling-factor));
    max-height: initial;

    .content {
      height: calc(1000 * var(--scaling-factor));
      width: calc(1202 * var(--scaling-factor));
      max-height: initial;
      padding-top: 25px;
    }

    .questions {
      width: 60%;
      max-width: 750px;
    }
  }

  @media only screen and (max-width: 1000px) {
    background-image: none;
    background-color: ${styleVars.hackWhite};

    border-radius: 32px;
    max-height: none;
    max-width: 720px;
    height: initial;
    width: 100%;
    top: 0;

    .content {
      position: initial;
      margin: auto;
      height: initial;
      width: 100%;
      max-height: none;
      padding-top: 80px;
      padding-bottom: 50px;
      padding-left: 40px;
      padding-right: 40px;
    }

    .questions {
      width: 80%;
      max-width: 500px;
    }

    .QuestionBox {
      width: 100%;
      padding: 16px 24px;
      text-align: left;
      font-size: 1.2em;
      cursor: pointer;
      margin: 20px 0;
      box-sizing: border-box;
      height: auto;
    }
  }
`
export default WindowStyles
