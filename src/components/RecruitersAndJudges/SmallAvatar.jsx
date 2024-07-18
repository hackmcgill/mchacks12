import React from "react"
import mentorAndJudgeBorder from "../../assets/images/designs/mentorAndJudgeBorder.svg"
import recruiterBorder from "../../assets/images/designs/recruiterBorder.svg"

const SmallAvatar = ({ image, isRed }) => {
  return (
    <div
      style={{
        position: "relative",
        left: "0",
        width: "50%",
        paddingRight: "20px",
      }}
    >
      <img
        style={{ width: "155px", position: "relative", top: "0", left: "0" }}
        alt=""
        src={isRed ? recruiterBorder : mentorAndJudgeBorder}
      />
      <img
        style={{
          width: "137px",
          position: "absolute",
          top: "10px",
          left: "10px",
          zIndex: "1",
          borderRadius: "50%",
        }}
        alt=""
        src={image}
      />
    </div>
  )
}

export default SmallAvatar
