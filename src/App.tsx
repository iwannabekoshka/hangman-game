import { useState } from "react";
import Hangman from "./components/Hangman";
import s from "./App.module.scss";

function App() {
  const [wordToGuess, setWordToGuess] = useState("");
  const [isGameReady, setIsGameReady] = useState(false);

  function submitWordToGuessHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (wordToGuess.trim().length === 0) {
      return;
    }

    setIsGameReady(true);
  }

  function restartHandler() {
    setIsGameReady(false);
    setWordToGuess("");
  }

  function wordToGuessChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;

    if (isOnlyLetters(value) || value === "") {
      setWordToGuess(value.toLowerCase());
    }
  }

  function isOnlyLetters(string: string) {
    const letters = /^[A-Za-z]+$/;
    if (string.match(letters)) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <main className="main">
      <div className="container">
        <h1 className="text-center">Hangman!</h1>
      </div>

      {!isGameReady && (
        <div className="container">
          <form className={s.form} onSubmit={submitWordToGuessHandler}>
            <h2>Zagadai slovo</h2>

            <input
              type="text"
              value={wordToGuess}
              onChange={wordToGuessChangeHandler}
            />

            <button type="submit">Submit</button>
          </form>
        </div>
      )}

      {isGameReady && (
        <div className="container">
          <Hangman wordToGuess={wordToGuess} restart={restartHandler} />
        </div>
      )}
    </main>
  );
}

export default App;
