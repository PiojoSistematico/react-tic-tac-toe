import { useState } from "react";
import Board from "./Board";
import calculateWinner from "../helpers/calculateWinner";

const Game = () => {
  const [isXNext, setIsXNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(index: number) {
    if (squares[index]) return;
    let newSquares = squares.slice();
    newSquares[index] = isXNext ? "X" : "O";

    setSquares(newSquares);
    if (calculateWinner(newSquares)) return;
    setIsXNext(!isXNext);
  }

  function refreshPage() {
    window.location.reload();
  }

  const isThereAWinner = calculateWinner(squares);
  let header;
  console.log(header, "winner", isThereAWinner);
  if (isThereAWinner) {
    header = (
      <>
        <p>
          The winner is{" "}
          <span className={isXNext ? "x-symbol" : "o-symbol"}>
            {isXNext ? "X" : "O"}
          </span>
        </p>
        <button onClick={() => refreshPage()}>New game</button>
      </>
    );
  } else {
    header = (
      <p>
        Next player{" "}
        <span className={isXNext ? "x-symbol" : "o-symbol"}>
          {isXNext ? "X" : "O"}
        </span>
      </p>
    );
  }

  return (
    <main>
      <h1>{header}</h1>
      <Board
        squares={squares}
        isXNext={isXNext}
        handleClick={handleClick}
      ></Board>
    </main>
  );
};

export default Game;
