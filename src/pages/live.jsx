import React, { useState } from "react"

import SEO from "../components/SEO/SEO"
import LiveNav from "../components/Live/LiveNav"
import Schedule from "../components/Schedule/Schedule"
import Info from "../components/Live/Info"
import Resources from "../components/Live/Resources"
import Judging from "../components/Live/Judging"

const LivePage = () => {
  const [activePage, _setActivePage] = useState("info")
  const setActivePage = (newPage) => {
    if (newPage !== activePage) {
      _setActivePage(newPage)
      window.scrollTo(0, 0)
    }
  }

  return (
    <div>
      <SEO />
      <LiveNav switchPage={setActivePage} activePage={activePage} />
      <Info visible={activePage === "info"} />
      <Schedule visible={activePage === "schedule"} />
      <Judging visible={activePage === "judging"} />
      {/*<Resources visible={activePage === "resources"} />*/}
    </div>
  )
}

export default LivePage
