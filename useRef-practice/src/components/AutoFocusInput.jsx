import { useEffect, useRef } from "react";

const AutoFocusInput = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <>
      <div className="">
        <h2>Auto Focus Input</h2>
        <input ref={inputRef} type="text" placeholder="Type here..." />
      </div>
    </>
  );
};

export default AutoFocusInput;
