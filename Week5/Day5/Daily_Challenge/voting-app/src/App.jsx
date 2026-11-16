
import { useState } from "react";
import "./App.css";

function App() {
  const [languages, setLanguages] = useState([
    { id: 1, name: "Php", votes: 0 },
    { id: 2, name: "Python", votes: 0 },
    { id: 3, name: "JavaScript", votes: 0 },
    { id: 4, name: "Java", votes: 0},
  ]);

  // Function to increase votes
  const handleVote = (id) => {
    setLanguages((previousLanguages) =>
      previousLanguages.map((lang) =>
        lang.id === id
          ? { ...lang, votes: lang.votes + 1 }
          : lang
      )
    );
  };

  return (
    <div className="container">
      <h1>Vote Your Language!</h1>

      <div className="list">
        {languages.map((lang) => (
          <div key={lang.id} className="card">
            <span className="votes">{lang.votes}</span>

            <span className="name">{lang.name}</span>

            <button onClick={() => handleVote(lang.id)}>
              Click Here
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;