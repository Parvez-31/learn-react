const Pad = ({ color, colorOnOff, toggle, id }) => {
  return (
    <>
      <button
        onClick={() => toggle(id)}
        className={colorOnOff ? "on" : null}
        style={{
          backgroundColor: color,
        }}
      ></button>
    </>
  );
};

export default Pad;
