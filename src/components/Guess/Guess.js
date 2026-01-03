import React from "react";
import { range } from "../../utils";

function Guess({ guess }) {
  return (
    <>
      {range(0, 5).map((i) => (
        <span className="cell" key={i}>
          {guess[i]}
        </span>
      ))}
    </>
  );
}

export default Guess;
