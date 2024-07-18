import React from "react"

import * as COLORS from "../variable"
import IndividualSpeaker from "./IndividualSpeaker"

// Company Logo
import ovhCloud from "../../assets/images/sponsor/OVHcloud.png"
import Brivia from "../../assets/images/sponsor/brivia.jpg"
import FrontRowVentures from "../../assets/images/sponsor/frontRowVenturesLogo.png"
import Secureworks from "../../assets/images/sponsor/secureworksLogo.png"
import huawei from "../../assets/images/sponsor/new/Huawei_678x452.png"

// Speakers
import YanivTordjman from "../../assets/images/headshots/YanivTordjman.jpg"
import JasonWang from "../../assets/images/headshots/Jason Wang - Yiheng Wang.jpg"
import MaksimBober from "../../assets/images/headshots/MaksimBober.jpeg"
import CharlesVaillancourt from "../../assets/images/headshots/CharlesVaillencourt.png"
import DevJain from "../../assets/images/headshots/DevJ.jpg"
import PierreLuc from "../../assets/images/headshots/Pier-Luc - Pier-Luc Nadeau-Labadie.png"
import SabrinaChartrand from "../../assets/images/headshots/Sabrina Profile Photo - Ann Zhou.jpg"
import QianWang from "../../assets/images/headshots/DerekQianWang.jpg"

const Speakers = ({ scrollRef }) => (
  <div ref={scrollRef}>
    <div
      style={{
        fontSize: "5rem",
        textAlign: "center",
        color: COLORS.faqBlue1,
      }}
    >
      Speakers
    </div>
    <div>
      <IndividualSpeaker
        image={SabrinaChartrand}
        companyLogo={huawei}
        name="Sabrina Chartrand"
        position=" Vice President, Government Affairs"
      />

      <IndividualSpeaker
        image={QianWang}
        companyLogo={huawei}
        name="Qian Wang (Mentor, Judge)"
        position="Staff researcher"
        description={`Dr. Wang received his Ph.D. in Electrical and Computer Engineering from University of Alberta. 
                               Now, he is a Staff researcher in Huawei Canada, working on AI hardware, software and application development. `}
      />
      <IndividualSpeaker
        image={MaksimBober}
        companyLogo={Secureworks}
        name="Maksim Bober (Mentor)"
        position="Platform Software Engineer"
      />
      <IndividualSpeaker
        image={CharlesVaillancourt}
        companyLogo={ovhCloud}
        name="Charles Vaillancourt"
        position="SRE team lead"
        description={`Passionate about technology, 
                               Charles has been with OVHcloud for most of his professional career. 
                               Focussing mostly on cloud technologies with a strong inclination towards automation 
                               he is currently an SRE team lead for public cloud products. `}
      />
      <IndividualSpeaker
        image={YanivTordjman}
        companyLogo={Brivia}
        name="Yaniv Tordjman"
        description={`Presenter of Link Apartments workshop.`}
      />

      <IndividualSpeaker
        image={JasonWang}
        companyLogo={FrontRowVentures}
        name="Jason Wang"
        position="Investment Associate"
      />

      <IndividualSpeaker
        image={PierreLuc}
        companyLogo={FrontRowVentures}
        name="Pier-Luc"
        position="Investment Associate"
        description={`Investment Associate at Front Row Ventures - find startups in the Canadian ecosystem to invest in`}
      />

      <IndividualSpeaker
        image={DevJain}
        name="Dev Jain (Recruiter, Judge)"
        position="CEO"
        description={`CEO and Founder of RailVision Analytics`}
      />
    </div>
  </div>
)

export default Speakers
