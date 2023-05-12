const Square = ({ squares, isXNext, handleClick, value }) => {
  return (
    <div
      className={squares[value] == "X" ? "square x-symbol" : "square o-symbol"}
      onClick={() => handleClick(value)}
    >
      {squares[value]}
    </div>
  );
};

export default Square;
