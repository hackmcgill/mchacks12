import React from "react"

import LiveContainer from "./LiveContainer"
import Question from "../FAQ/Question"
import QuestionGroup from "../FAQ/QuestionGroup"

const Resources = ({ visible }) => (
  <LiveContainer className={!visible ? "hidden" : ""}>
    <h2>Sponsor Resources</h2>
    <QuestionGroup>
      <Question question="OVHCloud">
        Create your first OVHcloud public cloud project! Learn how to create
        your first Public Cloud project via the OVHcloud Control Panel. Learn
        more{" "}
        <a
          href="https://docs.ovh.com/gb/en/public-cloud/create_a_public_cloud_project/"
          target="_blank"
          rel="noopener noreferrer"
        >
          here
        </a>
        . For step-by-step instructions, click{" "}
        <a
          href="https://www.youtube.com/watch?v=vQA5KJLC8f4"
          target="_blank"
          rel="noopener noreferrer"
        >
          here
        </a>
        .
        <br />
        Voucher Code: OVHcloud-McHacks2
      </Question>

      <Question question="Balsamiq">
        Get a 90-day extended trial promo code when using Balsamiq Cloud!
        <br />
        Learn more about Balsamiq{" "}
        <a
          href="https://balsamiq.cloud/"
          target="_blank"
          rel="noopener noreferrer"
        >
          here
        </a>
        .
        <br />
        To use their API, follow the steps{" "}
        <a
          href="https://balsamiq.com/wireframes/cloud/sales/promo/"
          target="_blank"
          rel="noopener noreferrer"
        >
          here
        </a>
        .
        <br />
        Code: BQRSDEHW010522
      </Question>

      <Question question="Twilio">
        Facilitate your app’s communications and design using the Twilio API and
        design system.
        <br />
        Access{" "}
        <a
          href="https://github.com/twilio/hackathons"
          target="_blank"
          rel="noopener noreferrer"
        >
          resources on Twilio at a hackathon
        </a>
        .
        <br />
        Learn more about{" "}
        <a
          href="https://paste.twilio.design/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Paste, Twilio's design system
        </a>
        .
        <br />
        Promo code: MCHACKS22
      </Question>

      <Question question="Huawei">
        Build your hackathon project with the AI capabilities provided by Huawei
        Ascend AI Platform! Please note that information to access their AI
        platform and resources will be provided upon request after the Huawei
        workshop at 9:15pm on Friday. Each team will be granted with one free
        account.
        <br />
        Link:{" "}
        <a
          href="https://atlas.cmc.ca/"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://atlas.cmc.ca/
        </a>
      </Question>
    </QuestionGroup>
  </LiveContainer>
)

export default Resources
