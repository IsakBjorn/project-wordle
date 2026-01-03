import React from "react";

function InputBox() {
  const [guess, setGuess] = React.useState("");
  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(e) => {
        e.preventDefault();
        const guessInUppercase = guess.toUpperCase();
        console.log(guessInUppercase);
        setGuess("");
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        value={guess}
        pattern="[a-zA-Z]{5}"
        title="5 letters only"
        onChange={(event) => {
          setGuess(event.target.value);
        }}
      />
    </form>
  );
}

export default InputBox;
