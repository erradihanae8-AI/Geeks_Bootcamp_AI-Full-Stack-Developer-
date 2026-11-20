
import React, { useState } from "react";

import Exercise1 from "./components/Exercise1";
import Exercise2 from "./components/Exercise2";
import Exercise3 from "./components/Exercise3";

import "./App.css";

function App() {
  const [currentExercise, setCurrentExercise] = useState("exercise3");

  return (
    <div>
      <h1>React Exercises XP</h1>

      <button onClick={() => setCurrentExercise("exercise1")}>
        Exercise 1
      </button>

      <button onClick={() => setCurrentExercise("exercise2")}>
        Exercise 2
      </button>

      <button onClick={() => setCurrentExercise("exercise3")}>
        Exercise 3
      </button>

      {currentExercise === "exercise1" && <Exercise1 />}
      {currentExercise === "exercise2" && <Exercise2 />}
      {currentExercise === "exercise3" && <Exercise3 />}
    </div>
  );
}

export default App;