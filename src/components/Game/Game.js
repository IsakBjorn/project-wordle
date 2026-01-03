import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import Guesses from "../Guesses";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  function handleNewGuess(guess) {
    setGuesses([...guesses, guess]);
  }

  return (
    <>
      <Guesses guesses={guesses}></Guesses>
      <GuessInput handleNewGuess={handleNewGuess}></GuessInput>
    </>
  );
}

export default Game;
