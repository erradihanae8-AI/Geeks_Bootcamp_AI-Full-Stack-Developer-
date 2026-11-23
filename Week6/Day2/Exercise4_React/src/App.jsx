
import { useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");
  const [reply, setReply] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async (e) => {
    e.preventDefault();

    if (!message.trim()) return;

    setLoading(true);
    setError("");
    setReply("");

    try {
      const response = await fetch("http://127.0.0.1:5001/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setReply(data.response);
    } catch (err) {
      setError("Unable to connect to the Flask server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h1>My React Chatbot</h1>

      <form onSubmit={sendMessage}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Write your message..."
          disabled={loading}
        />

        <button type="submit" disabled={loading}>
          {loading ? "Loading..." : "Send"}
        </button>
      </form>

      {error && <p className="error">{error}</p>}
      {reply && <p className="reply">{reply}</p>}
    </div>
  );
}

export default App;
