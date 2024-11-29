import styled from "styled-components"
import * as styleVars from "../variable"

import BgGridSquare from "../../assets/images/designs/mchacks12-grid.svg"

const Container = styled.section`
  position: relative;
  height: 1900px;

  background-color: ${styleVars.m12DarkestTeal};

  background-image:
  url(${BgGridSquare}),
  linear-gradient(
    to bottom, 
    rgba(26, 112, 118, 1) 0%, 
    rgba(0, 0, 0, 0) 10%,
    rgba(0, 0, 0, 0) 90%,
    rgba(248, 248, 248, 1) 99%
  );

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media only screen and (max-width: 1000px) {
    height: 2100px;
  }

  .heartbar {
    width: 20em;
    position: absolute;
    top: 16%;
    right: 5%;

    @media only screen and (max-width: 1000px) {
      display: none;
    }
  }

  .QuestionBox {
    border: 1px solid ${styleVars.hackBlack};
    padding: 14px 10px;
    border-radius: 5px;
    text-align: left;
    font-size: 1em;
    cursor: pointer;
    transition: background 0.5s ease;
    margin-bottom: 29px;
    box-sizing: border-box;
    background-color: white;

    a {
      color: ${styleVars.m12DarkestGrey};
    }

    .questionRow {
      display: flex;

      .question {
        color: ${styleVars.hackBlack80};
      }

      .spacer {
        flex: 1;
      }

      .expandButton > img {
        opacity: 90%;
        position: relative;
        top: 0px;
        transition: opacity 0.3s ease, transform 0.3s ease;
      }
    }

    .answer {
      font-family: "Space Mono";
      color: ${styleVars.m12DarkestGrey};
      margin-top: 10px;
      font-size: 0.9em;
      display: none;
    }

    &.expanded {
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.18);
      align-self: stretch;

      .answer {
        display: block;
      }

      .expandButton > img {
        transform: rotate(-180deg);
      }

      .question {
        color: ${styleVars.m12DarkestTeal};
      }
  }

  @media only screen and (max-width: 1000px) {
    height: 180px;
    overflow: hidden;
  }

  @media only screen and (max-width: ${styleVars.smUp}) {
    height: 200px;
  }

  &.hidden {
    display: none !important;
  }
`

export default Container
