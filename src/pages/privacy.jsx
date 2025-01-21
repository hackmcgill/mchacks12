import React, {useEffect} from "react"

import Privacy from "../components/DocPages/Privacy"
import Footer from "../components/Footer/Footer"
import Nav from "../components/Nav/Nav"
import SEO from "../components/SEO/SEO"

const PrivacyPage = () => {

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' }, 0);
  }, []);

  return (
    <div>
      <SEO />
      <Nav darkBackground={true} docPage={true} hiddenBackground={true}/>
      <Privacy />
      <Footer />
    </div>
  )
}

export default PrivacyPage
