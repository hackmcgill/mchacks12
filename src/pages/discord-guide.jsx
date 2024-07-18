import React from "react"

import DiscordGuide from "../components/Discord/DiscordGuide"
import Footer from "../components/Footer/Footer"
import Nav from "../components/Nav/Nav"
import SEO from "../components/SEO/SEO"

const DiscordGuidePage = () => {
  return (
    <div>
      <SEO />
      <Nav darkBackground={true} />
      <DiscordGuide />
      <Footer />
    </div>
  )
}

export default DiscordGuidePage
