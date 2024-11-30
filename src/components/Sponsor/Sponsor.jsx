import React from "react"

import Container from "./Container"
import Content from "./Content"
import Image from "./Image"
import Text from "./Text"
import Button from "./Button"

import SponsorImg from "../../assets/images/designs/mchacks12-sponsor-image.svg"
import Bubble from "../../assets/images/designs/mchacks12-bubble.svg"

const mailTo = () => {
  window.location = "mailto:sponsorship@mchacks.ca?Subject=Hello!"
}

const Sponsor = ({ scrollRef }) => (
  <Container ref={scrollRef}>
    <Content>
      <div className="bubbles">
        <img className="bubble-md bubble1" src={Bubble} alt="bubble"></img>
        <img className="bubble-sm bubble2" src={Bubble} alt="bubble"></img>
        <img className="bubble-sm bubble3" src={Bubble} alt="bubble"></img>
        <img className="bubble-md bubble4" src={Bubble} alt="bubble"></img>
        <img className="bubble-sm bubble5" src={Bubble} alt="bubble"></img>
      </div>
      <div>
        <Image src={SponsorImg} />
      </div>
      <Text>
        <h2>Sponsoring McHacks</h2>
        <p>
          This winter, the best and brightest students from around the world
          will connect for 24 hours to shake the world of technology. We want
          you to be a part of this incredible experience, and we need your help
          to bring it to life!
        </p>
        <p>
          Spend a weekend with McHacks and witness tomorrow’s leaders using your
          technologies to solve real problems from the ground up. We've got a
          table with your name on it!
        </p>
        <Button onClick={mailTo}>Become a Sponsor</Button>
      </Text>
    </Content>
  </Container>
)

export default Sponsor
