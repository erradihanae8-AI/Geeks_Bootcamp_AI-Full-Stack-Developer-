
import "./Exercise.css";

function Exercise() {

  // Inline Styling
  const styleHeader = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial",
  };

  return (
    <div>

      {/* Heading */}
      <h1 style={styleHeader}>Styled Header</h1>

      {/* Paragraph */}
      <p className="para">
        Welcome to my first React application!
      </p>

      {/* Link */}
      <a href="" target="_blank" rel="noreferrer">
        Learn React
      </a>

      {/* Form */}
      <form onSubmit={(event) => event.preventDefault()}>
        <label htmlFor="name">Your name: </label>

        <input
          type="text"
          id="name"
          placeholder="Enter your name"
        />

        <button type="submit">Submit</button>
      </form>

      {/* Image */}
      <img
        src="https://tse1.mm.bing.net/th/id/OIP.cSShcLEtJV5oPcNajCV6sAHaHa?r=0&pid=Api&h=220&P=0"
        alt="Example"
        width="300"
      />

      {/* List */}
      <h2>My Favorite Technologies</h2>

      <ul>
        <li>React</li>
        <li>JavaScript</li>
        <li>HTML</li>
        <li>CSS</li>
      </ul>

    </div>
  );
}

export default Exercise;
