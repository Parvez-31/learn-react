import { useRef } from "react";

const WithoutReRender = () => {
  const clickCount = useRef(0);

  const handleClick = () => {
    clickCount.current = clickCount.current + 1;
    console.log("clicked", clickCount.current, "times");
    alert(`You clicked ${clickCount.current} times`);
  };

  return (
    <>
      <div className="">
        <h2>Click Counter (useRef)</h2>
        <button onClick={handleClick}>Click Me!</button>
      </div>
    </>
  );
};

export default WithoutReRender;
