import { useEffect, useRef, useState } from "react";

const RunningTimer = () => {
  const [time, setTime] = useState(0);
  const intervelRef = useRef(null);

  useEffect(() => {
    console.log("running...");

    intervelRef.current = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);

    return () => clearInterval(intervelRef.current);
  }, []);

  return (
    <>
      <div className="">
        <h1>Timer : {time} seconds</h1>
      </div>
    </>
  );
};

export default RunningTimer;
