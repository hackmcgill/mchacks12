import { useStaticQuery, graphql } from "gatsby"
import React, { useState } from "react"

import Sticky from "react-stickynode"

import Container from "./Container"
import Event from "./Event"

const Schedule = ({ visible }) => {
  const [day, _setDay] = useState(1)
  const setDay = (newDay) => {
    if (newDay !== day) {
      _setDay(newDay)
      window.scrollTo(0, 0)
    }
  }

  const {
    allGoogleSpreadsheetSchedule: { edges },
  } = useStaticQuery(graphql`
    query {
      allGoogleSpreadsheetSchedule {
        edges {
          node {
            day
            name
            type
            startTime
            endTime
            description
            company
            prize
          }
        }
      }
    }
  `)

  return (
    <Container className={!visible ? "hidden" : ""}>
      <h2>McHacks Schedule</h2>
      <p>All times are in Eastern Time (ET)</p>
      <Sticky enabled={true} top={80} innerZ={1}>
        <div className="DayTabNav">
          <div
            className={"DayTab " + (day === 1 ? "active" : "")}
            onClick={() => setDay(1)}
            onKeyDown={() => setDay(1)}
            role="button"
            tabIndex={0}
          >
            Saturday, Jan. 25
          </div>
          <div
            className={"DayTab " + (day === 2 ? "active" : "")}
            onClick={() => setDay(2)}
            onKeyDown={() => setDay(2)}
            role="button"
            tabIndex={0}
          >
            Sunday, Jan. 26
          </div>
        </div>
      </Sticky>

      <div className="Events">
        {edges
          .map(({ node }) => node)
          .filter((event) => event.day === day)
          .map((event, index) => (
            <Event key={index} {...event} />
          ))}
      </div>
    </Container>
  )
}

export default Schedule
