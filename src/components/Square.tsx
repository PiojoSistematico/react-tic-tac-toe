const Square = ({ nextPlayer, setNextPlayer }) => {
  return (
    <div
      className={nextPlayer ? "square x-symbol" : "square o-symbol"}
      onClick={() => setNextPlayer(!nextPlayer)}
    >
      {nextPlayer ? "X" : "O"}
    </div>
  );
};

export default Square;
