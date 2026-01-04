import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import Guesses from "../Guesses";
import BannerSuccess from "../BannerSuccess";
import BannerFailure from "../BannerFailure";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { checkGuess } from "../../game-helpers";

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
    checkGameCondition(newGuesses, guess);
  }

  function checkGameCondition(allGuesses, latestGuess) {
    const checkedLatestGuess = checkGuess(latestGuess, answer);

    if (
      checkedLatestGuess &&
      checkedLatestGuess.every((cell) => cell.status === "correct")
    ) {
      setGamestate("won");
      return;
    }

    if (allGuesses.length === NUM_OF_GUESSES_ALLOWED) {
      setGamestate("lost");
    }
  }

  return (
    <>
      {gameState === "won" && (
        <BannerSuccess numOfGuesses={guesses.length}></BannerSuccess>
      )}
      {gameState === "lost" && <BannerFailure answer={answer}></BannerFailure>}
      <Guesses
        guesses={guesses}
        correctAnswer={answer}
        setGamestate={setGamestate}
      ></Guesses>
      <GuessInput
        gamestate={gameState}
        handleNewGuess={handleNewGuess}
      ></GuessInput>
    </>
  );
}

export default Game;
