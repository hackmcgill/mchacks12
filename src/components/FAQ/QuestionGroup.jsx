import React from "react"

const QuestionGroup = ({ children }) => {
  const [expandedQuestion, setExpandedQuestion] = React.useState()

  function toggleQuestion(i) {
    if (expandedQuestion === i) {
      setExpandedQuestion()
    } else {
      setExpandedQuestion(i)
    }
  } 

  return React.Children.map(children, (child, i) => {
    return React.cloneElement(child, {
      expanded: i === expandedQuestion,
      onClickToggle: () => toggleQuestion(i),
    })
  })
}

export default QuestionGroup
