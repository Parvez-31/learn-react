import Button from "./Button";

const Toolbar = ({ onPlayMovie, onUpladMoive }) => {
  return (
    <>
      <div>
        <Button onSmash={onPlayMovie}>playmovie</Button>
        <Button onSmash={onUpladMoive}>uploadmovie</Button>
      </div>
    </>
  );
};

export default Toolbar;
