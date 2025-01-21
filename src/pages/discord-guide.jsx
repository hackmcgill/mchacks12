import React, {useEffect} from "react"

import DiscordGuide from "../components/Discord/DiscordGuide"
import Footer from "../components/Footer/Footer"
import Nav from "../components/Nav/Nav"
import SEO from "../components/SEO/SEO"

const DiscordGuidePage = () => {

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' }, 0);
  }, []);

  return (
    <div>
      <SEO />
      <Nav darkBackground={true} docPage={true} hiddenBackground={true}/>
      <DiscordGuide />
      <Footer />
    </div>
  )
}

export default DiscordGuidePage
