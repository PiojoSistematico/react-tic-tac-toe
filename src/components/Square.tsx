type SquareProps = {
  handleClick: (index: number) => void;
  squares: any[];
  value: number;
};

const Square: React.FunctionComponent<SquareProps> = ({
  squares,
  handleClick,
  value,
}) => {
  return (
    <div
      className={
        squares[value] == "X"
          ? "square x-symbol"
          : squares[value] == "O"
          ? "square o-symbol"
          : "square"
      }
      onClick={() => handleClick(value)}
    >
      {squares[value]}
    </div>
  );
};

export default Square;
