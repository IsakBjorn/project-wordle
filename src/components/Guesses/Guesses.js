import React from "react";
import Guess from "../Guess";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { checkGuess } from "../../game-helpers";

function Guesses({ guesses, correctAnswer }) {
  return (
    <div className="guess-results">
      {range(0, NUM_OF_GUESSES_ALLOWED).map((index) => {
        const checkedGuess = checkGuess(guesses[index], correctAnswer);
        return (
          <p className="guess" key={index}>
            <Guess checkedGuess={checkedGuess}></Guess>
          </p>
        );
      })}
    </div>
  );
}

export default Guesses;
