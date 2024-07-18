import styled from "styled-components"
import * as styleVars from "../variable"

const Container = styled.section`
  position: relative;
  height: 1360px;
  padding: 0 14px 0 14px;

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
      color: ${styleVars.faqBlue1};
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
      color: ${styleVars.faqBlack};
      margin-top: 10px;
      font-size: 0.9em;
      display: none;
      font-family: "Hind Siliguri", sans-serif;
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
        color: ${styleVars.faqBlue3};
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
