import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import Carousel from "./Carousel"
import Content from "./Content"

const CarouselSpeaker = ({ scrollRef }) => {
  const data = useStaticQuery(graphql`
    query {
      allGoogleSpreadsheetSpeakers {
        edges {
          node {
            id
            name
            company
            position
            imageLink
          }
        }
      }
    }
  `)

  return (
    <div ref={scrollRef}>
      {data.allGoogleSpreadsheetSpeakers.edges.length > 0 && (
        <>
          <Content>Speakers</Content>
          <Carousel data={data.allGoogleSpreadsheetSpeakers.edges} />
        </>
      )}
    </div>
  )
}

export default CarouselSpeaker
