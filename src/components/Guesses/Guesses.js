import React from "react";
import Guess from "../Guess";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function Guesses({ guesses }) {
  return (
    <div className="guess-results">
      {range(0, NUM_OF_GUESSES_ALLOWED).map((index) => {
        return (
          <p className="guess" key={index}>
            <Guess guess={guesses[index] ?? ""}></Guess>
          </p>
        );
      })}
    </div>
  );
}

export default Guesses;
