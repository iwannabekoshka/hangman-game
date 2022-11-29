import { useEffect, useState } from "react";
import s from "./Hangman.module.scss";
import Stickman from "./Stickman/Stickman";
import WordToGuess from "./WordToGuess/WordToGuess";

type Props = {
  /** Загаданное слово */
  wordToGuess: string;

  restart: Function;
};

const NUMBERS = new Array(10).fill("").map((elem, i) => i.toString());
const LETTERS = "abcdefghijklmnopqrstuvwxyz".split("");

function Hangman({ wordToGuess, restart }: Props) {
  const [clickedSymbols, setClickedSymbols] = useState<string[]>([]);
  const [correctSymbols, setCorrectSymbols] = useState<string[]>([]);
  const [errorsCount, setErrorsCount] = useState<number>(0);

  const [isWin, setIsWin] = useState(false);
  const [isLose, setIsLose] = useState(false);

  useEffect(() => {
    let _wordToGuess = wordToGuess.split("");

    for (const symbol of correctSymbols) {
      if (_wordToGuess.includes(symbol)) {
        _wordToGuess = _wordToGuess.filter((s) => s !== symbol);
      }
    }

    if (_wordToGuess.length === 0) {
      setIsWin(true);
    }
  }, [correctSymbols]);

  useEffect(() => {
    if (errorsCount === 6) {
      setIsLose(true);
    }
  }, [errorsCount]);

  function symbolClickHandler(symbol: string) {
    if (clickedSymbols.includes(symbol) || isWin || isLose) {
      return;
    }

    setClickedSymbols((prev) => [...prev, symbol]);

    if (wordToGuess.includes(symbol)) {
      setCorrectSymbols((prev) => [...prev, symbol]);
    } else {
      setErrorsCount((prev) => prev + 1);
    }
  }

  function clickRestartHandler() {
    restart();
  }

  return (
    <div className={s.hangman}>
      {/* Stickman */}
      <div className={s.stickman}>
        <Stickman errorsCount={errorsCount} />
      </div>

      <WordToGuess wordToGuess={wordToGuess} correctSymbols={correctSymbols} />

      {/* Symbols */}
      <div className={s.symbols}>
        {LETTERS.map((symbol) => (
          <button
            key={`symbols-${symbol}`}
            disabled={clickedSymbols.includes(symbol)}
            onClick={() => symbolClickHandler(symbol)}
          >
            {symbol}
          </button>
        ))}
      </div>

      {/* Win/Lose message */}
      {(isWin || isLose) && (
        <div className={s.winLoseMessage}>
          <p>
            {isWin && "You win!"}
            {isLose && "You lose"}
          </p>

          <button onClick={clickRestartHandler}>Restart</button>
        </div>
      )}
    </div>
  );
}

export default Hangman;
