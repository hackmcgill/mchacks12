import React, {useEffect} from "react"

import CodeofConduct from "../components/DocPages/CodeofConduct"
import Footer from "../components/Footer/Footer"
import Nav from "../components/Nav/Nav"
import SEO from "../components/SEO/SEO"

const CodeOfConductPage = () => {

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' }, 0);
  }, []);

  return (
    <div>
      <SEO />
      <Nav darkBackground={true} docPage={true} hiddenBackground={true}/>
      <CodeofConduct />
      <Footer />
    </div>
  )
}

export default CodeOfConductPage
