import styled from "styled-components"
import * as styleVars from "../variable"

export const HeroStyles = styled.section`
  padding-top: 50px;
  background: #8cdcfe;

  .hero__images-container {
    position: relative;
    width: 100%;
    max-width: 600px;
    height: auto;

    .hero__heading-image {
      width: 100%;
      height: auto;
      display: block;
    }

    .hero__martlet {
      position: absolute;
      top: 5%;
      left: 5%;
      width: 10%;
      height: auto;
      transform: translate(-90%, -85%);

      @media only screen and (max-width: ${styleVars.mdUp}) {
        width: 8%;
      }

      @media only screen and (max-width: ${styleVars.smUp}) {
        width: 7%;
      }

      @media only screen and (max-width: ${styleVars.xsUp}) {
        width: 6%;
      }
    }
  }

  .hero__wrapper {
    display: flex;
    flex-direction: column;
    z-index: 1;
    text-align: center;
    width: 100%;
    padding-top: 240px;
    justify-content: center;
    align-items: center;
    gap: 30px;

    .hero__clouds {
      display: flex;
      justify-content: space-around;
      gap: 40vw;
      width: 100%;
      margin-bottom: -50px;

      .hero__cloud1,
      .hero__cloud4 {
        width: 6vw;
      }
    }

    .grid__clouds {
      display: flex;
      justify-content: space-around;
      width: 100%;
      margin-top: -20px;

      .hero__cloud2,
      .hero__cloud3 {
        width: 5vw;
      }
    }

    .grid__icons {
      display: flex;
      gap: 100px;
      justify-content: center;
      align-items: center;

      .hero__buttons {
        width: 7vw;
      }

      .hero__joystick {
        width: 4vw;
      }
    }
  }

  .hero__grid {
    display: flex;
    gap: 50px;
    max-width: 100%;
    justify-content: flex-start;
    margin-top: -20px;
    letter-spacing: 0.5px;
    word-spacing: 5px;

    & > div {
      font-family: "ArcadeClassic", san-serif;
      border-radius: 20px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .hero__heading-image {
      grid-column: 1 / span 3;
      width: 100%;
    }

    .hero__grid__shapes {
      grid-column: 1;
      grid-row: 2 / span 2;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .hero__grid__location {
      grid-column: 2;
      grid-row: 2;
    }

    .hero__grid__date {
      grid-column: 3;
      grid-row: 2;
    }

    .hero__grid__signup {
      position: relative;
      grid-column: 2 / span 2;
      grid-row: 3;
    }

    .hero__grid__text {
      font-size: 16px;
      font-weight: 400;
      text-align: center;
      margin: 0 8px 14px 8px;
      font-family: "Brown", san-serif;
    }

    .hero__grid__subheading {
      font-size: 24px;
      line-height: normal;
      margin: 0;
      font-weight: 400;
      text-align: center;
      color: ${styleVars.m12Maroon};
    }
  }

  .hero__heading {
    display: none; /* Leave in h1 for SEO */
  }

  .hero__grass {
    width: 100vw;
  }

  .hero__grass_image {
    width: 100%;
    margin-bottom: -10px;
  }

  @media only screen and (max-width: ${styleVars.mdUp}) {
    padding-top: 30px;

    .hero__wrapper {
      padding-top: 200px;
      gap: 20px;

      .grid__clouds {
        display: none;
      }

      .hero__clouds {
        display: none;
      }
    }

    .hero__grid {
      margin: 10px;
      max-width: 720px;

      .hero__grid__text {
        margin-bottom: 6px;
      }

      .hero__grid__signup {
        .hero__martlet {
          width: 8%;
          top: 4%;
          left: 4%;
        }
      }
    }

    .hero__images-container {
      max-width: 450px;

      .hero__martlet {
        width: 50px;
        height: 50px;
      }
    }

    .hero__grid__subheading {
      font-size: 20px;
    }

    button {
      font-size: 16px;
      padding: 10px 20px;
    }
  }
  @media only screen and (max-width: ${styleVars.smUp}) {
    padding-top: 10px;
    .hero__wrapper {
      padding-top: 130px;
      gap: 15px;

      .grid__clouds {
        display: none;
      }

      .hero__clouds {
        display: none;
      }
    }

    .hero__grid {
      margin: 10px;
      flex-direction: column;
      align-items: center;
      gap: 30px;
      max-width: 85%;

      .hero__heading-image {
        grid-column: 1 / span 2;
        width: 80%;
      }

      .hero__grid__shapes {
        display: none;
      }

      .hero__grid__location,
      .hero__grid__date {
        grid-column: 1;
        grid-row: auto;
        width: 100%;
      }

      .hero__grid__signup {
        grid-column: 1 / span 2;
        grid-row: 3;
      }

      .hero__grid__subheading {
        font-size: 18px;
      }
    }

    .hero__images-container {
      max-width: 300px;
      margin-top: 10vh;

      .hero__martlet {
        width: 15%;
        top: 6%;
        left: 8%;
      }
    }

    .hero__grid__signup {
      width: 100%;
      padding: 0 10px;
    }

    button {
      font-size: 14px;
      padding: 8px 16px;
    }

    .grid__clouds {
      display: none;
    }

    .hero__clouds {
      display: none;
    }
  }

  @media only screen and (max-width: ${styleVars.xsUp}) {
    padding-top: 10px;
    .hero__wrapper {
      padding-top: 100px;
      gap: 10px;

      .grid__clouds {
        display: none;
      }

      .hero__clouds {
        display: none;
      }
    }

    .hero__grid {
      max-width: 90%;
      margin: 10px;

      .hero__grid__subheading {
        font-size: 16px;
      }
    }

    .hero__images-container {
      max-width: 250px;

      .hero__martlet {
        width: 13%;
        top: 10%;
        left: 5%;
      }
    }

    .hero__grid__signup {
      padding: 0 5px;
    }

    button {
      font-size: 12px;
      padding: 6px 12px;
    }
  }
`

export default HeroStyles
