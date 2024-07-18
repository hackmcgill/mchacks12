import React from "react"
import Text from "../Speakers/Text"
import SmallAvatar from "./SmallAvatar"

const IndividualSpeaker = ({ image, name, position, companyName, isRed }) => {
  return (
    <div
      style={{
        width: "400px",
        padding: "2rem 1rem",
        height: "250px",
        maxWidth: "1000px",
        margin: "auto",
        marginBottom: "5rem",
        display: "flex",
      }}
    >
      <SmallAvatar image={image} isRed={isRed} />
      <Text>
        <h2>{name}</h2>
        <h3>{position}</h3>
        <h3>{companyName}</h3>
      </Text>
    </div>
  )
}

export default IndividualSpeaker
