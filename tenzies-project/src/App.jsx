import { useState } from "react";
import Die from "./components/Die";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";

const App = () => {
  const [randomDiceNumber, setRandomDiceNumber] = useState(() =>
    generateAllNewDice()
  );

  const gameWon =
    randomDiceNumber.every((dice) => dice.isHeld) &&
    randomDiceNumber.every((dice) => dice.value === randomDiceNumber[0].value);

  function generateAllNewDice() {
    let arr = [];

    for (let i = 0; i < 10; i++) {
      const randomNumber = {
        value: Math.floor(Math.random() * 6) + 1,
        isHeld: false,
        id: nanoid(),
      };
      arr.push(randomNumber);
    }

    return arr;
  }

  const hold = (id) => {
    setRandomDiceNumber((prevDiceNumber) =>
      prevDiceNumber.map((die) =>
        die.id === id ? { ...die, isHeld: !die.isHeld } : die
      )
    );
  };

  const diceElement = randomDiceNumber.map((diceNumber, index) => (
    <Die
      key={diceNumber.id}
      value={diceNumber.value}
      isHeld={diceNumber.isHeld}
      holdFn={hold}
      id={diceNumber.id}
    />
  ));

  // Handler
  const handleRollDice = () => {
    if (gameWon) {
      setRandomDiceNumber(generateAllNewDice());
    } else {
      setRandomDiceNumber((prevDice) =>
        prevDice.map((dice) => {
          return dice.isHeld === true
            ? dice
            : { ...dice, value: Math.floor(Math.random() * 6) + 1 };
        })
      );
    }
  };

  return (
    <>
      <main>
        {gameWon && <Confetti />}
        <h1 className="title">{gameWon ? "🎉 You won! 🎉" : "Tenzies"}</h1>
        <p className="instructions">
          Roll until all dice are the same. Click each die to freeze it at its
          current value between rolls.
        </p>
        <div className="dice-container">{diceElement}</div>
        <button className="roll-dice" onClick={handleRollDice}>
          {gameWon ? "New Game" : "Roll"}
        </button>
      </main>
    </>
  );
};

export default App;
