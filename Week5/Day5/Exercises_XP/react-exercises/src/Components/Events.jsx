
import { useState } from "react";

function Events() {

  // Part I
  const clickMe = () => {
    alert("I was clicked");
  };

  // Part II
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      alert(event.target.value);
    }
  };

  // Part III
  const [isToggleOn, setIsToggleOn] = useState(true);

  const toggleButton = () => {
    setIsToggleOn(!isToggleOn);
  };

  return (
    <div>
      <h2>Part I: Click Event</h2>
      <button onClick={clickMe}>
        Click Me
      </button>

      <h2>Part II: Keyboard Event</h2>
      <input
        type="text"
        placeholder="Press the  ENTER Key "
        onKeyDown={handleKeyDown}
      />

      <h2>Part III: Toggle Button</h2>
      <button onClick={toggleButton}>
        {isToggleOn ? "ON" : "OFF"}
      </button>
    </div>
  );
}

export default Events;