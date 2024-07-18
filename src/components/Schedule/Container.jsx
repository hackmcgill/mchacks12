import styled from "styled-components"
import * as styleVars from "../variable"

export const Container = styled.section`
  max-width: 1080px;
  text-align: center;
  margin: auto;
  margin-bottom: 100px;
  margin-top: 130px;

  &.hidden {
    display: none !important;
  }

  h2 {
    color: ${styleVars.darkSecondaryBlue};
    font-size: 3rem;
    font-weight: 400;
    margin-bottom: 0px;
  }

  p {
    margin-top: 0px;
    margin-bottom: 25px;
  }

  .sticky-inner-wrapper {
    z-index: 1000;
  }

  .DayTabNav {
    display: flex;
    background: ${styleVars.hackWhite};
    margin-top: -10px;

    .DayTab {
      text-align: center;
      flex: 1;
      cursor: pointer;
      border-bottom: 2px solid ${styleVars.hackBlack20};
      padding: 35px 0 10px 0;
      font-size: 1.2em;
      color: ${styleVars.hackBlack60};
      font-weight: normal;

      &.active {
        color: ${styleVars.hackBlack80};
        border-color: ${styleVars.yellow};
      }
    }
  }

  .Event {
    display: flex;
    border-bottom: 2px solid ${styleVars.hackBlack10};

    .time {
      flex: 1;
      padding: 24px 32px 24px 32px;
      box-sizing: border-box;
      text-align: left;
      display: flex;
      align-items: center;

      @media all and (max-width: ${styleVars.smUp}) {
        padding: 24px 0px 24px 16px;
      }

      .to {
        font-size: 0.85em;
      }

      .type {
        color: ${styleVars.colorHackRed};
      }

      .company {
        color: ${styleVars.yellow};
      }
    }

    .detail {
      flex: 1;
      padding: 24px 32px 24px 32px;
      box-sizing: border-box;
      text-align: left;
      display: flex;
      align-items: center;
      @media all and (max-width: ${styleVars.smUp}) {
        padding: 24px 0px 24px 16px;
      }
      .overview {
        flex: 1;

        .name {
          font-size: 1.5em;
          margin-top: -4px;

          small {
            font-size: 0.8em;
          }
        }

        .type {
          font-size: 0.85em;
          text-transform: uppercase;
        }

        .description {
          color: ${styleVars.hackBlack70};
          font-family: "Hind Siliguri", sans-serif;
          margin-top: 8px;
          a {
            color: ${styleVars.darkSecondaryBlue};
          }
          ol {
            margin-top: 4px;
          }
        }

        .prize,
        .location {
          margin-top: 8px;
          font-family: "Hind Siliguri", sans-serif;
        }
      }
    }
    .icon {
      flex: 1;
      padding: 24px 32px 24px 32px;
      box-sizing: border-box;
      font-size: 2.4em;
      display: block;
      margin-left: auto;
      margin-right: auto;
      margin-top: auto;
      margin-bottom: auto;

      @media all and (max-width: ${styleVars.smUp}) {
        padding: 24px 0px 24px 16px;
      }
    }

    .icon > *:before {
      background: linear-gradient(#f2463a, #f2463a55);
      background-clip: text;
      text-fill-color: transparent;
    }

    &.type-main-event {
      .icon {
        color: ${styleVars.darkYellow};
      }
      .activityType {
        color: ${styleVars.darkYellow};
      }
    }

    &.type-workshop {
      .icon {
        color: ${styleVars.yellow};
      }
      .activityType {
        color: ${styleVars.yellow};
      }
    }

    &.type-social,
    &.type-game,
    &.type-food,
    &.type-travel,
    &.type-rest {
      .icon {
        color: ${styleVars.darkSecondaryBlue};
      }
      .activityType {
        color: ${styleVars.darkSecondaryBlue};
      }
    }
  }

  @media only screen and (max-width: ${styleVars.smUp}) {
    display: block;
  }
`

export default Container
