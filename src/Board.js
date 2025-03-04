import {Dice}from "./Dice.js"

export const Board =({color,num, gameHistory})=> {
  return (
    <div>
      <Dice color={color}num={num}/>

      <div>
        {gameHistory.join(',')}
      </div>
    </div>
  );
}
