import { useState } from "react";
import { analyzeResume } from "../utils/analyzer";

export default function ResumeAnalyzer() {
  const [text, setText] = useState("");
  const [result, setResult] = useState(null);

  return (
    <section style={{ padding: "40px" }}>
      <h2>AI Resume Analyzer 🤖</h2>

      <textarea
        rows="5"
        style={{ width: "100%", color: "black" }}
        onChange={(e) => setText(e.target.value)}
      />

      <button onClick={() => setResult(analyzeResume(text))}>
        Analyze
      </button>

      {result && (
        <div>
          <p>Score: {result.score}</p>
          <p>Skills: {result.foundSkills.join(", ")}</p>
          <p>{result.suggestions}</p>
        </div>
      )}
    </section>
  );
      }
