import { Board } from "./Board"
import { Button } from "./Button.js"
import { useState } from "react"


const random = n => Math.ceil(Math.random() * n)

function App() {
  const [myGameHistory, setMyGameHistory] = useState([])
  const [yourGameHistory, setYourGameHistory] = useState([])

  const handleClick = () => {
    const myNextNum = random(6)
    const yourNextNum = random(6)
    setMyGameHistory([...myGameHistory, myNextNum])
    setYourGameHistory([...yourGameHistory, yourNextNum])
  }
  const handleReset = () => {
    setMyGameHistory([])
    setYourGameHistory([])
  }

  return (
    <div>
      <Board
        color="blue"
        num={myGameHistory.at(-1)??1}
        gameHistory={myGameHistory}
         />
      <Board
        color="red"
        num={yourGameHistory.at(-1)??1}
        gameHistory={yourGameHistory} />
      <Button onClick={handleClick}>던지기</Button>
      <Button onClick={handleReset}>처음부터</Button>
    </div>

  )
}

export default App;