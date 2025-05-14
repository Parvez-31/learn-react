import Toolbar from "./components/Toolbar";

const App = () => {
  return (
    <>
      <Toolbar
        onPlayMovie={() => alert("play moive")}
        onUpladMoive={() => alert("upload movie")}
      />
    </>
  );
};

export default App;
