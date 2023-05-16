import { useState } from "react";
import Board from "./Board";
import calculateWinner from "../helpers/calculateWinner";

const Game = () => {
  const [isXNext, setIsXNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  /* handle the click on a square */
  function handleClick(index: number): any {
    /* if the square has a X or O do nothing */
    if (squares[index]) return;

    /* create a copy of squares to modify the new move */
    let newSquares = squares.slice();
    newSquares[index] = isXNext ? "X" : "O";
    setSquares(newSquares);

    /* if the current move is a  */
    if (calculateWinner(newSquares)) return;
    setIsXNext(!isXNext);
  }

  /* refresh page for a new game */
  function refreshPage() {
    window.location.reload();
  }

  /* calculate a winner from the current set of values of squares */
  const isThereAWinner = calculateWinner(squares);

  /* if there is a winner change the h1 and add a new game button */
  let header;
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
    /* if there is not a winner show the next move */
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
      <Board squares={squares} handleClick={handleClick}></Board>
    </main>
  );
};

export default Game;
