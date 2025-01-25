import React from "react"
import Container from "./SocialMediaBarContainer"

import Discord from "../../assets/images/logos/discord.svg"
import Devpost from "../../assets/images/logos/mchacks12-devpost-logo.svg"
import Facebook from "../../assets/images/logos/mchacks12-fb-logo.svg"
import GitHub from "../../assets/images/logos/mchacks12-github-logo.svg"
import Instagram from "../../assets/images/logos/mchacks12-ig-logo.svg" 
import Twitter from "../../assets/images/logos/mchacks12-x-logo.svg"

const SocialMediaBar = () => (
  <Container>
    <div className="SocialMediaBar__icon">
      <a href="https://discord.gg/bVG5uHQz" target="_blank" rel="noopener noreferrer">
        <img src={Discord} alt="Discord" />
      </a>
    </div>
    <div className="SocialMediaBar__icon">
      <a href="https://mchacks-12.devpost.com/" target="_blank" rel="noopener noreferrer">
        <img src={Devpost} alt="Devpost" />
      </a>
    </div>
    <div className="SocialMediaBar__icon">
      <a
        href="https://www.facebook.com/mcgillhacks/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={Facebook} alt="Facebook" />
      </a>
    </div>

    <div className="SocialMediaBar__icon">
      <a
        href="https://www.instagram.com/mcgillhacks/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={Instagram} alt="Instagram" />
      </a>
    </div>

    <div className="SocialMediaBar__icon">
      <a
        href="https://twitter.com/McGillHacks?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={Twitter} alt="twitter" />
      </a>
    </div>

    <div className="SocialMediaBar__icon">
      <a
        href="https://github.com/hackmcgill"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={GitHub} alt="GitHub" />
      </a>
    </div>
  </Container>
)

export default SocialMediaBar
