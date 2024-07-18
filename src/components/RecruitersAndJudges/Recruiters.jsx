import React from "react"
import ChristinaDiMaio from "../../assets/images/headshots/ChristinaDiMaio.png"
import EricSimard from "../../assets/images/headshots/Eric Simard.jpg"
import KristenKovacs from "../../assets/images/headshots/Kristen.jpg"
import LouisPhilippeHuberdeau from "../../assets/images/headshots/Louis-Philippe Huberdeau.png"
import * as COLORS from "../variable"
import DynamicGrid from "./DynamicGrid"
import Individual from "./Individual"

const Recruiters = ({ scrollRef }) => {
  return (
    <div ref={scrollRef}>
      <div
        style={{
          fontSize: "5rem",
          textAlign: "center",
          color: COLORS.faqBlue1,
        }}
      >
        Recruiters
      </div>
      <DynamicGrid>
        <div className="grid">
          <Individual
            image={LouisPhilippeHuberdeau}
            name="Louis-Philippe Huberdeau"
            position="Tech Lead"
            companyName="Secureworks"
            isRed={true}
          />
          <Individual
            name={`François Labrèche`}
            position="Data Scientist"
            companyName="Secureworks"
            isRed={true}
          />
          <Individual
            image={ChristinaDiMaio}
            name="Christina Di Maio"
            position="Event Manager"
            companyName="OVHcloud"
            isRed={true}
          />
          <Individual
            image={EricSimard}
            name="Eric Simard"
            position="Dir. of Operations"
            companyName="Ivey Business School"
            isRed={true}
          />
          <Individual
            image={KristenKovacs}
            name="Kristen Kovacs"
            position="MSc Recruitment Associate"
            companyName="Ivey Business School"
            isRed={true}
          />
        </div>
      </DynamicGrid>
    </div>
  )
}

export default Recruiters
