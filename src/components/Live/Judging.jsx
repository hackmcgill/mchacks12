import React from "react"

import Content from "./Content"
import Text from "../Discord/Text"
import Container from "../Discord/Container"

const Judging = ({ visible }) => (
  <Container className={!visible ? "hidden" : ""}>
    <Content>
      <Text>
      <h1><b>McHacks 12 Judging Guidelines</b></h1>
        <h3><b>Judging Criteria</b></h3>
        <ul>
            <li><strong>Execution:</strong> Does the hack work? Is it easy to use? Quality of the user interface, design, and aesthetics?</li>
            <li><strong>Technical Complexity:</strong> How technically impressive was the hack? Was the technical problem the team tackled difficult? Is the technology used in a clever way? Is it complex?</li>
            <li><strong>Potential Impact:</strong> Could it solve a real-world problem or make a difference in people’s lives? Could it disrupt the status quo? Could it be scaled?</li>
            <li><strong>Creativity:</strong> Is this idea original? Does it use innovative problem-solving? Has this idea been done at hackathons before or does it already exist?</li>
        </ul>

        <h3><b>Stack Ranking</b></h3>
        <ul>
            <li>Judges will be assigned a set of projects to review.</li>
            <li>Sets will be staggered so that projects will not always be compared against the same competitors.</li>
            <li>All projects will be reviewed by 3 different judges.</li>
            <li>Judges will <b>only rank their top 3 favourite projects</b> within that set, with points assigned as follows:
                <ul>
                    <li>3 points for First Place</li>
                    <li>2 points for Second Place</li>
                    <li>1 point for Third Place</li>
                </ul>
            </li>
            <li>The top projects will be bubbled up for a second round of judging on the top 3 teams, followed by a final decision.</li>
        </ul>

        <h1><b>McHacks 12 Project Submission Rules</b></h1>
        <ul>
            <li>All work should be done during the hackathon.</li>
            <li><b>No commits should be made to your code repository (e.g., GitHub) after the project submission deadline 12:00 PM on Sunday, January 26, 2025, otherwise your project will be disqualified.</b></li>
            <li>Projects that were started before the hackathon start will be disqualified.</li>
            <li>All work on the project must be completed exclusively by members of your team.
                <ul>
                    <li>While you may seek advice or consultation from others, no outside contributors may perform any part of the work.</li>
                    <li>Projects involving work completed by non-team members will be disqualified.</li>
                </ul>
            </li>
            <li>All work should be made public on a code repository (e.g., GitHub).
                <ul>
                    <li>Projects with code that is not visible to judges/organizers will be disqualified.</li>
                </ul>
            </li>
            <li><strong>Strongly Recommended:</strong> Please record a 2-minute video to submit on DevPost. This should be a demo of your hack, not a presentation. This video will be used to verify the quality of finalists/winners and to make final decisions in case of a tie.</li>
        </ul>
      </Text>
    </Content>
  </Container>
)

export default Judging