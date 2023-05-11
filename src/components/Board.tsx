import Square from "./Square";

const Board = ({ nextPlayer, setNextPlayer }) => {
  return (
    <div className="board">
      <Square nextPlayer={nextPlayer} setNextPlayer={setNextPlayer}></Square>
      <Square nextPlayer={nextPlayer} setNextPlayer={setNextPlayer}></Square>
      <Square nextPlayer={nextPlayer} setNextPlayer={setNextPlayer}></Square>
      <Square nextPlayer={nextPlayer} setNextPlayer={setNextPlayer}></Square>
      <Square nextPlayer={nextPlayer} setNextPlayer={setNextPlayer}></Square>
      <Square nextPlayer={nextPlayer} setNextPlayer={setNextPlayer}></Square>
      <Square nextPlayer={nextPlayer} setNextPlayer={setNextPlayer}></Square>
      <Square nextPlayer={nextPlayer} setNextPlayer={setNextPlayer}></Square>
      <Square nextPlayer={nextPlayer} setNextPlayer={setNextPlayer}></Square>
    </div>
  );
};

export default Board;
