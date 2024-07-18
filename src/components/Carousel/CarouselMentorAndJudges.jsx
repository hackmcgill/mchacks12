import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import Carousel from "./Carousel"
import Content from "./Content"

const CarouselMentorAndJudges = ({ scrollRef }) => {
  const data = useStaticQuery(graphql`
    query {
      allGoogleSpreadsheetJudges {
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
      {data.allGoogleSpreadsheetJudges.edges.length > 0 && (
        <>
          <Content>Mentors And Judges</Content>
          <Carousel data={data.allGoogleSpreadsheetJudges.edges} />
        </>
      )}
    </div>
  )
}

export default CarouselMentorAndJudges
