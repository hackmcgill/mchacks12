import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import Container from "./Container"
import Content from "./Content"

import Logo from "./Logo"
import Tier from "./Tier"

const Logos = ({ scrollRef }) => {
  const {
    allGoogleSpreadsheetSponsors: { edges },
  } = useStaticQuery(graphql`
    query {
      allGoogleSpreadsheetSponsors {
        edges {
          node {
            tier
            link
            image
            alt
          }
        }
      }
    }
  `)

  const TIERS = ["Tera", "Giga", "Mega", "Kilo", "Byte", "In Kind"]
  return (
    <Container ref={scrollRef}>
      {edges.length > 0 ? (
        <Content>
          <h1 className="our-sponsors">Our Sponsors</h1>
          {TIERS.map((tier) => (
            <Tier key={tier}>
              {edges
                .map(({ node }) => node)
                .filter((sponsor) => sponsor.tier === tier)
                .map(({ link, image, alt }) => (
                  <Logo
                    key={link}
                    tier={tier}
                    link={link}
                    image={image}
                    alt={alt}
                  />
                ))}
            </Tier>
          ))}
        </Content>
      ) : null}
      {/* <div className="coming-soon">
        <img className="coming-soon__martlet" src={Martlet}></img>
        <img className="coming-soon__box" src={ComingSoon}></img>
        <h1>and more coming soon...!</h1>
      </div>
       */}
    </Container>
  )
}

export default Logos
