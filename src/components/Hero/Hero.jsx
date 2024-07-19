import React from "react"
import HeroShapesImg from "../../assets/images/designs/hero-shapes.svg"
import HeroColorBlur1 from "../../assets/images/designs/blur-1.png"
import HeroColorBlur2 from "../../assets/images/designs/blur-2.png"
import Martlet from "../../assets/images/designs/hero-martlet.svg"
import Button from "./Button"
import HeroStyles from "./HeroStyles"
import SignUpForm from "./SignUpForm"
import McHacksImg from "../../assets/images/designs/mchacks12-hero-logo.svg"

const apply = () => {
  window.location = "https://app.mchacks.ca/"
}

// const live = () => {
//   window.location = "/live"
// }

const Hero = () => (
  <HeroStyles>
    <img className="hero__color-blur-1" src={HeroColorBlur1} alt="" />
    <img className="hero__color-blur-2" src={HeroColorBlur2} alt="" />

    <div className="hero__wrapper">
      <h1 className="hero__heading">McHacks 12</h1>
      <div className="hero__grid">
        {/* <h1
          style={{
            color: "black",
            fontSize: "15rem",
            gridColumn: "1 / -1",
            margin: "-3rem 0",
          }}
          className="temp_hero__heading"
        >
          McHacks 12
        </h1> */}
        <img
          className="hero__heading-image"
          src={McHacksImg}
          alt="McHacks 12"
        />
        <div className="hero__grid__shapes">
          <img src={HeroShapesImg} alt="" />
        </div>
        <div className="hero__grid__location">
          <h2 className="hero__grid__subheading">McGill University</h2>
        </div>
        <div className="hero__grid__date">
          <h2 className="hero__grid__subheading">Jan 25-26, 2025</h2>
        </div>
        <div className="hero__grid__signup">
          <img className="hero__martlet" src={Martlet} alt="" />
          <p className="hero__grid__text">
            Sign up for updates on McHacks. No spam, we promise.
          </p>
          <SignUpForm />
        </div>
      </div>
      {/* <Button onClick={apply}>Apply Now →</Button> */}
      <Button onClick={apply}>Application Dashboard →</Button>
      {/* <Button onClick={live}>Live Site →</Button> */}
    </div>
  </HeroStyles>
)

export default Hero
