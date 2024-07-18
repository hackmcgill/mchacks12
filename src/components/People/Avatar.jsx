import React from "react"
import AvatarImage from "./AvatarImage"

const Avatar = ({ image, name }) => {
  return image ? <AvatarImage alt={name} src={image} /> : null
}

export default Avatar
