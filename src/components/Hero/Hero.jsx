import React from "react"
import Martlet from "../../assets/images/designs/mchacks13-hero-martlet.svg"
import Button from "./Button"
import HeroStyles from "./HeroStyles"
import SignUpForm from "./SignUpForm"
import McHacksImg from "../../assets/images/designs/mchacks13-hero-logo.svg"
import Joystick from "../../assets/images/designs/mchacks12-joystick.svg"
import Buttons from "../../assets/images/designs/mchacks12-buttons.svg"
import Grass from "../../assets/images/designs/mchacks12-grass-and-soil.svg"
import Cloud1 from "../../assets/images/designs/mchacks12-cloud1.svg"
import Cloud2 from "../../assets/images/designs/mchacks12-cloud2.svg"
import Cloud3 from "../../assets/images/designs/mchacks12-cloud3.svg"
import Cloud4 from "../../assets/images/designs/mchacks12-cloud4.svg"

const apply = () => {
  window.location = "https://app.mchacks.ca/"
}

// const live = () => {
//   window.location = "/live"
// }

const Hero = () => (
  <HeroStyles>
    <div className="hero__wrapper">
      <div className="hero__clouds">
        <img className="hero__cloud1" src={Cloud1} alt="Cloud1" />
        <img className="hero__cloud4" src={Cloud4} alt="Cloud4" />
      </div>
      <h1 className="hero__heading">McHacks 12</h1>
      <div className="hero__images-container">
        <img
          className="hero__heading-image"
          src={McHacksImg}
          alt="McHacks 12"
        />
        <img className="hero__martlet" src={Martlet} alt="Martlet Icon" />
      </div>
      <div className="hero__grid">
        <div className="hero__grid__location">
          <h2 className="hero__grid__subheading">McGill University</h2>
        </div>
        <div className="hero__grid__date">
          <h2 className="hero__grid__subheading">January 25-26, 2025</h2>
        </div>
      </div>
      <div className="grid__icons">
        <img className="hero__joystick" src={Joystick} alt="Joystick" />
        <img className="hero__buttons" src={Buttons} alt="Buttons" />
      </div>
      <div className="grid__clouds">
        <img className="hero__cloud2" src={Cloud2} alt="Cloud2" />
        <img className="hero__cloud3" src={Cloud3} alt="Cloud3" />
      </div>
      {/*<Button disabled={false} onClick={apply}>
        Apply Now →
      </Button>*/}
      <div className="hero__grid__signup">
        <SignUpForm className="hero__signup" />
      </div>
      {/* <Button onClick={live}>Live Site →</Button> */}
      <div className="hero__grass">
        <img className="hero__grass_image" src={Grass} alt="Grass" />
      </div>
    </div>
  </HeroStyles>
)

export default Hero
