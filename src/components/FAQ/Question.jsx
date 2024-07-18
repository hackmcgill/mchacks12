import React from "react"

import ArrowDown from "./arrow_down.svg"
import ArrowUp from "./arrow_up.svg"

const Question = ({ question, expanded, onClickToggle, children }) => {
  return (
    <div
      className={"QuestionBox " + (expanded ? "expanded" : "")}
      onClick={() => onClickToggle()}
      onKeyDown={() => onClickToggle()}
      role="button"
      tabIndex={0}
    >
      <div className="questionRow">
        <div className="question">{question}</div>
        <div className="spacer"></div>
        <div className="expandButton">
          <img src={expanded ? ArrowUp : ArrowDown} alt="down arrow button" />
        </div>
      </div>
      <div className="answer">{children}</div>
    </div>
  )
}

export default Question
