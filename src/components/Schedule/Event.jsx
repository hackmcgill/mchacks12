import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faPizzaSlice,
  faGamepad,
  faLaptop,
  faBus,
  faBed,
  faCog,
  faMugHot,
} from "@fortawesome/free-solid-svg-icons"

const Event = ({
  type,
  startTime,
  endTime,
  name,
  location,
  subtitle,
  description,
  prize,
  company,
}) => {
  let logo = <div></div>
  if (type === "Workshop") {
    logo = <FontAwesomeIcon icon={faCog} />
  } else if (type === "Game") {
    logo = <FontAwesomeIcon icon={faGamepad} />
  } else if (type === "Social") {
    logo = <FontAwesomeIcon icon={faMugHot} />
  } else if (type === "Food") {
    logo = <FontAwesomeIcon icon={faPizzaSlice} />
  } else if (type === "Main Event") {
    logo = <FontAwesomeIcon icon={faLaptop} />
  } else if (type === "Travel") {
    logo = <FontAwesomeIcon icon={faBus} />
  } else if (type === "Rest") {
    logo = <FontAwesomeIcon icon={faBed} />
  }

  return (
    <div className={"Event type-" + type.replace(/\s+/g, "-").toLowerCase()}>
      <div className="time">
        <div className="start">
          {startTime}
          {endTime ? <span> - {endTime}</span> : ""}
          {startTime
            ? startTime.toLowerCase().includes("am") ||
              startTime.toLowerCase().includes("pm")
              ? ""
              : ""
            : "TBD"}
          <br />
          <div className="activityType">{type.toUpperCase()}</div>
          {company ? <div className="company">{company}</div> : ""}
        </div>
      </div>
      <div className="detail">
        <div className="overview">
          <div className="name">
            {name}
            <br></br>
            <small>{subtitle}</small>
          </div>
          {description ? <div className="description">{description}</div> : ""}
          {prize ? <div className="prize">Prize: {prize}</div> : ""}
          {location ? <div className="location"># {location}</div> : ""}
        </div>
      </div>
      <div className="icon">{logo}</div>
    </div>
  )
}

export default Event
