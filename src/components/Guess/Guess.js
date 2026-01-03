import React from "react";
import { range } from "../../utils";

function Guess({ checkedGuess }) {
  if (!checkedGuess) {
    return range(0, 5).map((i) => <span className="cell" key={i}></span>);
  }

  return (
    <>
      {range(0, 5).map((i) => (
        <span className={`cell ${checkedGuess[i].status}`} key={i}>
          {checkedGuess[i].letter}
        </span>
      ))}
    </>
  );
}

export default Guess;
