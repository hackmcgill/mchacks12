import React from "react"
import Avatar from "./Avatar"
import IndividualContainer from "./IndividualContainer"
import Text from "./Text"

const Individual = ({ image, name, position, companyName }) => {
  return (
    <IndividualContainer>
      <Avatar image={image} name={name} />
      <Text>
        <h2>{name}</h2>
        {position && companyName ? (
          <h3>
            {position}, {companyName}
          </h3>
        ) : null}
      </Text>
    </IndividualContainer>
  )
}

export default Individual
