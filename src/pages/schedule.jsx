import React from "react"
import Footer from "../components/Footer/Footer"
import Nav from "../components/Nav/Nav"
import SEO from "../components/SEO/SEO"
import Schedule from "../components/Schedule/Schedule"

const SchedulePage = () => {
  return (
    <div>
      <SEO />
      <Nav darkBackground={true} hiddenBackground={true} docPage={true}/>
      <Schedule visible={true} />
      <Footer />
    </div>
  )
}

export default SchedulePage
