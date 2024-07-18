import React from "react"
import * as COLORS from "../variable"
import DynamicGrid from "./DynamicGrid"
import Individual from "./Individual"

import MikeWelsh from "../../assets/images/headshots/MikeWelsh.jpeg"
import Fred from "../../assets/images/headshots/profile-picture - Fred DeSerres-Blanchet.jpeg"
import Loreina from "../../assets/images/headshots/IMG_0033 3 - Loreina Chew.jpg"
import Amy from "../../assets/images/headshots/Amy P - Christina Di Maio.jpg"
import JinLin from "../../assets/images/headshots/pro - Jing Lin.jpeg"
import Mostafa from "../../assets/images/headshots/Screen Shot 2022-01-21 at 3.27.47 AM.png"

const MentorsAndJudges = ({ scrollRef }) => {
  return (
    <div ref={scrollRef}>
      <div
        style={{
          fontSize: "5rem",
          textAlign: "center",
          color: COLORS.faqBlue1,
        }}
      >
        Mentors And Judges
      </div>
      <DynamicGrid>
        <div className="grid">
          <Individual
            image={Mostafa}
            name="Mostafa Shabka (Judge)"
            position="Senior Manager"
            companyName="Huawei"
          />
          <Individual
            image={Amy}
            name="Amy Pollard (Judge)"
            position="PM"
            companyName="OVHcloud"
          />
          <Individual
            image={Loreina}
            name="Loreina Chew (Mentor)"
            position="Product Designer"
            companyName="Twilio"
          />
          <Individual
            image={JinLin}
            name={`Jin Lin (Mentor)`}
            position="SWE"
            companyName="Google"
          />
          <Individual
            image={MikeWelsh}
            name="Michael Welsh (Mentor)"
            position="Principal engineer"
            companyName="Ritual"
          />
          <Individual
            image={Fred}
            name="Fred DeSerres (Mentor)"
            position="Backend engineer"
            companyName="Ritual"
          />
        </div>
      </DynamicGrid>
    </div>
  )
}

export default MentorsAndJudges
