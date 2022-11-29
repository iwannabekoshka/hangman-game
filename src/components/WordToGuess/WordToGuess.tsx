import s from "./WordToGuess.module.scss";

type Props = {
  /** Загаданное слово */
  wordToGuess: string;
  correctSymbols: string[];
};

function WordToGuess({ wordToGuess, correctSymbols }: Props) {
  return (
    <div className={s.wordToGuess}>
      {wordToGuess.split("").map((symbol, i) => {
        return (
          <span key={`word-to-guess-${symbol}-${i}`} className={s.symbol}>
            {correctSymbols.includes(symbol) && symbol}
          </span>
        );
      })}
    </div>
  );
}

export default WordToGuess;
