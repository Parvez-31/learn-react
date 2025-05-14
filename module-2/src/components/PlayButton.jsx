import Button from "./Button";

const PlayButton = ({ moviename }) => {
  const handlePlayClick = () => {
    alert(`I wanna play ${moviename}`);
  };
  return (
    <>
      <Button onSmash={handlePlayClick}>Play {moviename}</Button>
    </>
  );
};

export default PlayButton;
