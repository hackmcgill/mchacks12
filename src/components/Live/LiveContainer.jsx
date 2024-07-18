import styled from "styled-components"
import * as styleVars from "../variable"
import Container from "../FAQ/Container"

const LiveContainer = styled(Container)`
  height: auto;
  text-align: center;
  background: none;
  margin: auto;
  margin-top: 12rem;
  margin-bottom: 12rem;
  max-width: 600px;
  padding: 26px;

  h2 {
    color: ${styleVars.darkSecondaryBlue};
    font-size: 3rem;
    font-weight: 400;
  }

  .QuestionBox {
    width: 100%;
    padding: 12px 24px;
    text-align: left;
    font-size: 1.1em;
    cursor: pointer;
    box-sizing: border-box;
    margin: 20px auto 20px auto;
  }

  @media {
    height: auto;
  }
`

export default LiveContainer
