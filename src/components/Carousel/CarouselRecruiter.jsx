import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import Carousel from "./Carousel"
import Content from "./Content"

const CarouselRecruiter = ({ scrollRef }) => {
  const data = useStaticQuery(graphql`
    query {
      allGoogleSpreadsheetRecruiters {
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
      {data.allGoogleSpreadsheetRecruiters.edges.length > 0 && (
        <>
          <Content>Recruiters</Content>
          <Carousel data={data.allGoogleSpreadsheetRecruiters.edges} />
        </>
      )}
    </div>
  )
}

export default CarouselRecruiter
