import { useState } from "react";
import { GameBoard } from "./GameBoard/GameBoard";
import { GameInfo } from "./GameInfo/GameInfo";

export default function App() {

  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);

  const xIsNextStep = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  const handleOnGameBoard = nextSquares => {
    const nextHistory = [...history.slice(0, currentMove+1)];
    nextHistory.push(nextSquares);
    setHistory(nextHistory);
    setCurrentMove(currentMove+1);
  }

  const changeStep = step => {
    setCurrentMove(step);
  }

  const styleApp = {
    width: "100vw",
    height: "100vh",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  }

  return (
    <div style={styleApp} className="App">
      <GameBoard handle={handleOnGameBoard} currentSquares={currentSquares} xIsNextStep={xIsNextStep}/>
      <GameInfo currentSquares={currentSquares} history={history} xIsNextStep={xIsNextStep} changeStep={changeStep}/>
    </div>
  );
}
