import React from "react"
import CompanyLogo from "./CompanyLogo"
import Content from "./Content"
import OneLeafAvatar from "./OneLeafAvatar"
import RadioAvatar from "./RadioAvatar"
import TelephoneAvatar from "./TelephoneAvatar"
import Text from "./Text"
import TwoLeafAvatar from "./TwoLeafAvatar"

const selectRandomAvatar = ({ image }) => {
  const randomIndex = Math.floor(Math.random() * 4)
  switch (randomIndex) {
    case 0:
      return TwoLeafAvatar({ image })
    case 1:
      return OneLeafAvatar({ image })
    case 2:
      return TelephoneAvatar({ image })
    case 3:
      return RadioAvatar({ image })
    default:
      return null
  }
}

const IndividualSpeaker = ({
  image,
  name,
  position,
  companyLogo,
  description,
}) => {
  return (
    <Content style={{ padding: "50px" }}>
      {selectRandomAvatar({ image })}
      <Text>
        <Content>
          <div>
            <h2>{name}</h2>
            <h3>{position}</h3>
          </div>
          <div style={{ margin: "auto" }}>
            <CompanyLogo src={companyLogo} />
          </div>
        </Content>
        <div>
          <p>{description}</p>
        </div>
      </Text>
    </Content>
  )
}

export default IndividualSpeaker
