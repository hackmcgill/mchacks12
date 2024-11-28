import React from "react"

import Container from "./Container"
import Text from "./Text"
import Image from "./Image"

import AboutImg from "../../assets/images/designs/mchacks12-about-image.svg"
import Bubble from "../../assets/images/designs/mchacks12-bubble.svg"
import { Content } from "./Content"

const About = ({ scrollRef }) => (
  <Container ref={scrollRef} style={{}}>
    <Content>
      <div className="bubbles">
        <img className="bubble-sm bubble1" src={Bubble} alt="bubble"></img>
        <img className="bubble-sm bubble2" src={Bubble} alt="bubble"></img>
        <img className="bubble-sm bubble3" src={Bubble} alt="bubble"></img>
        <img className="bubble-md bubble4" src={Bubble} alt="bubble"></img>
        <img className="bubble-md bubble5" src={Bubble} alt="bubble"></img>
        <img className="bubble-sm bubble6" src={Bubble} alt="bubble"></img>
      </div>
      <Text>
        <h2>Dream.develop.deploy!</h2>
        <p>
          For 24 hours, over 500 of the boldest young minds across the globe
          come together for a jam-packed online weekend of beginner-to-pro
          workshops, networking, and epic hacking.
        </p>
        <p>
          Whether you're writing your first line of code, playing around with
          APIs, or building the next blockchain, McHacks is the place for you.
          We'll see you this January at the 12th annual rendition of Canada's
          original collegiate hackathon!
        </p>
      </Text>
      <div>
        <Image src={AboutImg} />
      </div>
    </Content>
  </Container>
)

export default About
