import React from "react"
import bottomLeaf from "../../assets/images/designs/bottomLeaf.svg"
import martlet from "../../assets/images/designs/martlet.svg"
import speakerBorder from "../../assets/images/designs/speakerBorder.svg"
import topLeaf from "../../assets/images/designs/topLeaf.svg"
import Avatar from "./Avatar"

const TwoLeafAvatar = ({ image }) => {
  return (
    <Avatar style={{ position: "relative", top: "0", left: "0", width: "50%" }}>
      <img
        style={{
          width: "330px",
          borderImage: "../../../public/static/speakerBorder.svg",
          position: "absolute",
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
          width: "200px",
          position: "absolute",
          top: "160px",
          left: "-15px",
          zIndex: "2",
        }}
        alt=""
        src={bottomLeaf}
      />
      <img
        style={{
          width: "250px",
          position: "absolute",
          top: "-55px",
          left: "110px",
          zIndex: "3",
        }}
        alt=""
        src={topLeaf}
      />
      <img
        style={{
          width: "130px",
          position: "absolute",
          top: "10px",
          left: "270px",
          zIndex: "4",
        }}
        alt=""
        src={martlet}
      />
    </Avatar>
  )
}

export default TwoLeafAvatar
