import React from "react"
import radio from "../../assets/images/designs/radio.svg"
import speakerBorder from "../../assets/images/designs/speakerBorder.svg"
import Avatar from "./Avatar"

const RadioAvatar = ({ image }) => {
  return (
    <Avatar style={{ position: "relative", top: "0", left: "0", width: "50%" }}>
      <img
        style={{
          width: "330px",
          borderImage: "../../../public/static/speakerBorder.svg",
          position: "relative",
          top: "0",
          left: "0",
        }}
        alt=""
        src={speakerBorder}
      />
      <img
        style={{
          width: "303px",
          position: "absolute",
          top: "13px",
          left: "13px",
          zIndex: "1",
          borderRadius: "50%",
        }}
        alt=""
        src={image}
      />
      <img
        style={{
          width: "380px",
          position: "absolute",
          top: "0px",
          left: "-32px",
          zIndex: "2",
        }}
        alt=""
        src={radio}
      />
    </Avatar>
  )
}

export default RadioAvatar
