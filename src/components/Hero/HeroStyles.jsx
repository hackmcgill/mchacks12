import styled from "styled-components"
import * as styleVars from "../variable"

export const HeroStyles = styled.section`
  padding-bottom: 520px;

  .hero__wrapper {
    display: flex;
    flex-direction: column;
    z-index: 1;
    text-align: center;
    width: 100%;
    padding-top: 260px;
    justify-content: center;
    align-items: center;
    gap: 60px;
  }

  .hero__color-blur-1,
  .hero__color-blur-2 {
    position: absolute;
    z-index: -1;
    width: 45%;
  }

  .hero__color-blur-2 {
    right: 0;
    top: 600px;
    transform: translateY(-25%);
  }

  .hero__grid {
    display: grid;
    grid-template-columns: 243px 1fr 1fr;
    grid-template-rows: 1fr 60px 130px;
    gap: 28px;
    max-width: 820px;
    margin: 0 42px 0 42px;

    & > div {
      border: 2.5px solid ${styleVars.primary};
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

      .hero__martlet {
        position: absolute;
        top: -26px;
        right: -42px;
      }
    }

    .hero__grid__text {
      font-size: 16px;
      font-weight: 400;
      text-align: center;
      color: ${styleVars.secondary};
      margin: 0 8px 14px 8px;
      font-family: "Brown", san-serif;
    }

    .hero__grid__subheading {
      font-size: 24px;
      line-height: normal;
      margin: 0;
      font-weight: 400;
      text-align: center;
      color: ${styleVars.primary};
    }
  }

  .hero__heading {
    display: none; /* Leave in h1 for SEO */
  }

  @media only screen and (max-width: ${styleVars.mdUp}) {
    padding-bottom: 350px;
    .hero__grid {
      max-width: 720px;

      .hero__grid__text {
        margin-bottom: 6px;
      }

      .hero__grid__signup {
        .hero__martlet {
          height: 70px;
          top: -28px;
          right: -38px;
        }
      }
    }
  }

  @media only screen and (max-width: ${styleVars.smUp}) {
    padding-bottom: 300px;
    .hero__grid {
      max-width: 85%;
      grid-template-columns: 1fr 1fr;

      .hero__heading-image {
        grid-column: 1 / span 2;
        width: 100%;
      }

      .hero__grid__shapes {
        display: none;
      }

      .hero__grid__location {
        grid-column: 1;
        grid-row: 2;
      }

      .hero__grid__date {
        grid-column: 2;
        grid-row: 2;
      }

      .hero__grid__signup {
        grid-column: 1 / span 2;
        grid-row: 3;
      }
    }
  }

  @media only screen and (max-width: ${styleVars.xsUp}) {
    padding-bottom: 200px;
    .hero__color-blur-1 {
      width: 70%;
    }

    .hero__color-blur-2 {
      top: 800px;
      width: 70%;
    }
  }
`

export default HeroStyles
