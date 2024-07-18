import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import {
  faTwitter,
  faFacebookSquare,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons"

import Container from "./Container"
import Links from "./Links"
import PageLink from "./PageLink"
import SocialLink from "./SocialLink"

const Footer = () => (
  <Container>
    <Links>
      <PageLink href="/code-of-conduct">Code of Conduct</PageLink>
      <PageLink href="/privacy">Privacy Policy</PageLink>
      <PageLink href="/discord-guide">Discord Guide</PageLink>
      <PageLink href="https://hackp.ac/coc">MLH Code of Conduct</PageLink>
      {/* TODO
        <PageLink>
          Press Kit
      </PageLink> */}
    </Links>

    <Links className="footer__social-links">
      <SocialLink
        href="mailto:contact@mchacks.ca?Subject=Hello!"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faEnvelope} />
      </SocialLink>
      <SocialLink href="https://fb.com/mcgillhacks">
        <FontAwesomeIcon icon={faFacebookSquare} />
      </SocialLink>
      <SocialLink href="https://twitter.com/mcgillhacks">
        <FontAwesomeIcon icon={faTwitter} />
      </SocialLink>
      <SocialLink href="https://instagram.com/mcgillhacks">
        <FontAwesomeIcon icon={faInstagram} />
      </SocialLink>
    </Links>
  </Container>
)

export default Footer
