export default function Log({ turns }) {
  return (
    <ol id="log">
      {turns.map((turn, index) => {
        const { square, player } = turn;
        const { row, col } = square;
        return (
          <li key={`${turn.square.row}${turn.square.col}`}>
            {player} played at row {row}, col {col}
          </li>
        );
      })}
    </ol>
  );
}
