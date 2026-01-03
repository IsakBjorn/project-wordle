import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import InputBox from "../InputBox";
import Guesses from "../Guesses";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  function handleNewGuess(guess) {
    const newGuess = { id: crypto.randomUUID(), guess };
    const newGuesses = [...guesses, newGuess];

    setGuesses(newGuesses);
  }

  return (
    <>
      <InputBox handleNewGuess={handleNewGuess}></InputBox>
      <Guesses guesses={guesses}></Guesses>
    </>
  );
}

export default Game;
