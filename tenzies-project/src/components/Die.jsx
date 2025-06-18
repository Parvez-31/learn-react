const Die = (props) => {
  const diceColor = {
    backgroundColor: props.isHeld ? "#59E391" : "white",
  };

  return (
    <>
      <button
        style={diceColor}
        onClick={() => props.holdFn(props.id)}
        aria-label={`Dice with value ${props.value}, ${
          props.isHeld ? "held" : "not held"
        }`}
      >
        {props.value}
      </button>
    </>
  );
};

export default Die;
