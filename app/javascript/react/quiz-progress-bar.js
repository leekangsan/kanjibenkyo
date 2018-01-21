import React from "react"

const QuizProgressBar = props => {
  console.log(props.correctFlags.slice())
  const progressBlocks = props.correctFlags.map((flag, i) => {
    let color = ""
    if (flag === true) {
      console.log("hello")
      color = " correct"
    } else if (flag === false) {
      console.log("bye")
      color = " incorrect"
    }

    return <div key={i} className={"progress-block" + color}></div>
  })

  return (
    <div className="progress-bar">
      {progressBlocks}
    </div>
  )
}

export default QuizProgressBar
