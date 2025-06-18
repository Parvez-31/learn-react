import { useEffect } from "react";
import RunningTimer from "./components/RunningTimer";
import WithoutReRender from "./components/WithoutReRender";
import { useRef } from "react";
const App = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      {/* <AutoFocusInput /> */}
      {/* <WithoutReRender /> */}
      {/* <RunningTimer /> */}
      <input ref={inputRef} type="text" placeholder="Type here..." />
      {/* <button onClick={focusInput}>Focus Input</button> */}
    </div>
  );
};

export default App;
