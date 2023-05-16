type SquareProps = {
  handleClick: any;
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
      className={squares[value] == "X" ? "square x-symbol" : "square o-symbol"}
      onClick={() => handleClick(value)}
    >
      {squares[value]}
    </div>
  );
};

export default Square;
