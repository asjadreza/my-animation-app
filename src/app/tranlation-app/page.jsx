"use client";
import { useState } from "react";
import { translateText } from "../../services/storyServices";

export default function Home() {
  const [text, setText] = useState("");
  const [translated, setTranslated] = useState("");

  const handleTranslate = async () => {
    const result = await translateText(text, "English", "Spanish");
    setTranslated(result);
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>LangChain Translator</h1>
      <textarea
        rows="4"
        cols="50"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type your text..."
      />
      <br />
      <button onClick={handleTranslate}>Translate</button>
      <h3>Translation:</h3>
      <p>{translated}</p>
    </div>
  );
}
