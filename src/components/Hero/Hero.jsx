import React from "react"
import HeroShapesImg from "../../assets/images/designs/hero-shapes.svg"
import Martlet from "../../assets/images/designs/mchacks13-hero-martlet.svg"
import Button from "./Button"
import HeroStyles from "./HeroStyles"
import SignUpForm from "./SignUpForm"
import McHacksImg from "../../assets/images/designs/mchacks13-hero-logo.svg"

const apply = () => {
  window.location = "https://app.mchacks.ca/"
}

// const live = () => {
//   window.location = "/live"
// }

const Hero = () => (
  <HeroStyles>

    <div className="hero__wrapper">
      <h1 className="hero__heading">McHacks 12</h1>
      <div className="hero__images-container">
        <img
          className="hero__heading-image"
          src={McHacksImg}
          alt="McHacks 12"
        />
        <img
          className="hero__martlet"
          src={Martlet}
          alt="Martlet Icon"
        />
      </div>
      
      <div className="hero__grid">
        <div className="hero__grid__location">
          <h2 className="hero__grid__subheading">McGill University</h2>
        </div>
        <div className="hero__grid__date">
          <h2 className="hero__grid__subheading">January 25-26, 2025</h2>
        </div>
      </div>
      <div className="grid-icons">Place icons here</div>
      <Button disabled={false} onClick={apply}>
        Apply Now →
      </Button>
      <div className="hero__grid__signup">
          <SignUpForm className="hero__signup"/>
      </div>
      {/* <Button onClick={live}>Live Site →</Button> */}
    </div>
  </HeroStyles>
)

export default Hero
