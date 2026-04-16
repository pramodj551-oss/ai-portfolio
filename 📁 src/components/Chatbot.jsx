import { useState } from "react";

export default function Chatbot() {
  const [input, setInput] = useState("");
  const [reply, setReply] = useState("");

  const getReply = (msg) => {
    msg = msg.toLowerCase();

    if (msg.includes("skills"))
      return "React, Node.js, AI basics";
    if (msg.includes("projects"))
      return "AI Resume Analyzer and Portfolio";
    if (msg.includes("experience"))
      return "Fresher with strong project experience";

    return "Ask about my skills or projects";
  };

  return (
    <div style={{ position: "fixed", bottom: 10, right: 10 }}>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => setReply(getReply(input))}>
        Ask
      </button>

      <p>{reply}</p>
    </div>
  );
      }
