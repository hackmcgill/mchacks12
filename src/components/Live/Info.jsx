import React from "react"
import Content from "./Content"
import Text from "../Discord/Text"

import Container from "../Discord/Container"

const DISCORD_LINK = "https://discord.gg/nE3bfXJaM9"

const Info = ({ visible }) => (
  <Container className={!visible ? "hidden" : ""}>
    <Content>
      <Text>
        <h2>
          Welcome to McHacks 12!{" "}
          <span role="img" aria-label="wave">
            👋
          </span>{" "}
        </h2>
        <p>We’re so glad you could make it.</p>
        <div>
          Our live site is divided into two sections:
          <ul>
            <li>
              Check out the events, workshops, and activities happening
              under <b>Schedule</b>.
            </li>
            <li>
              View judging criteria and guidelines under <b>Judging</b>.
            </li>
            {/*<li>
              Learn the ins and outs of Discord with our comprehensive{" "}
              <b>Discord Guide</b>.
            </li>*/}
          </ul>
        </div>
        <p>
          {/*Make sure to join the{" "}
          <a href="https://discord.com/invite/fqbjr43cKf">McHacks 12 Discord</a>{" "}
          server for announcements, event Zoom links, to chat with other
          hackers, and to form teams. It’s important for all hackers to be in
          the Discord as it is the main form of communication between hackers,
          judges, sponsors, and organizers during McHacks.*/}
          Discord server for announcements, to chat with other
          hackers, and to form teams. It’s important for all hackers to be in
          the Discord as it is the main form of communication between hackers,
          judges, sponsors, and organizers during McHacks. You can access the Discord Server <a href={DISCORD_LINK} target="_blank">here</a>.

          <br />
          <br />
          {/*Check out the{" "}
          <a href="https://mchacks-11.devpost.com/">McHacks 11 Devpost</a> for
          information on judging and prizes and to submit your team’s hack.*/}

          Check out the{" "}
          <a href="https://mchacks-11.devpost.com/">McHacks 11 Devpost</a> for 
          previous projects and judging information.
          <br />
          <br />
          {/*Feel free to get in touch with an organizer on Discord if you have any
          questions or concerns! To reach us, you can DM any organizer with the
          green Organizer role, or post in <b>#troubleshooting</b> or{" "}
          <b>#ask-organizers</b> for help.*/}
          Feel free to get in touch by email at <b>contact@mchacks.ca</b> if you have any questions or concerns!
        </p>
        <br />
        Happy hacking,
        <br />
        McHacks Team
      </Text>
    </Content>
  </Container>
)

export default Info
