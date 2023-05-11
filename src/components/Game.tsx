import { useState } from "react";
import Board from "./Board";

const Game = () => {
  const [nextPlayer, setNextPlayer] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  return (
    <main>
      <h1>
        Next player{" "}
        <span className={nextPlayer ? "o-symbol" : "x-symbol"}>
          {!nextPlayer ? "X" : "O"}
        </span>
      </h1>
      <Board nextPlayer={nextPlayer} setNextPlayer={setNextPlayer}></Board>
    </main>
  );
};

export default Game;
