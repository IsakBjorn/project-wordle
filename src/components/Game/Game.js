import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import Guesses from "../Guesses";
import WonBanner from "../BannerSuccess";
import LostBanner from "../BannerFailure";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [gameState, setGamestate] = React.useState("playing");

  function handleNewGuess(guess) {
    const newGuesses = [...guesses, guess];
    setGuesses(newGuesses);
    if (guess === answer) {
      setGamestate("won");
    } else if (newGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGamestate("lost");
    }
  }

  return (
    <>
      <Guesses
        guesses={guesses}
        correctAnswer={answer}
        setGamestate={setGamestate}
      ></Guesses>
      <GuessInput
        gamestate={gameState}
        handleNewGuess={handleNewGuess}
      ></GuessInput>
      {gameState === "won" && (
        <WonBanner numOfGuesses={guesses.length}></WonBanner>
      )}
      {gameState === "lost" && <LostBanner answer={answer}></LostBanner>}
    </>
  );
}

export default Game;
