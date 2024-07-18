import React, { useEffect } from "react"
import { navigate } from "gatsby"

// (2021-11-24) - The navigate function will be removed in the next major release of Gatsby.
const NotFound = () => {
  useEffect(() => navigate("/"))
  return <></>
}

export default NotFound
