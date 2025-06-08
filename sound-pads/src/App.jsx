import { useState } from "react";
import pads from "./utils/pads";
import Pad from "./components/Pad";

export default function App({ darkMode }) {
  const [isPads, setIsPads] = useState(pads);

  /**
   * Challenge:
   * Call setPads to update the state of the one pad that was
   * clicked. Map over the previous pads array, and if the current
   * item you're iterating over has the same id as the `id` passed
   * to this function, then return a new object with the `on` value
   * set to the opposite of what it was before.
   * Otherwise (if the ids don't match), just return the previous
   * item as it was, unchanged.
   */

  const toggle = (id) => {
    setIsPads((prevPads) =>
      prevPads.map((item) => {
        return item.id === id ? { ...item, on: !item.on } : item;
      })
    );
  };

  const colorPads = isPads.map((item) => {
    return (
      <Pad
        id={item.id}
        key={item.id}
        color={item.color}
        colorOnOff={item.on}
        toggle={toggle}
      />
    );
  });

  return (
    <main>
      <div className="pad-container">{colorPads}</div>
    </main>
  );
}
