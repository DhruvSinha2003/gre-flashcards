import React, { useState } from "react";
import "./App.css";
import wordsData from "./vocab.json";

const words = wordsData.words;

function getRandom() {
  return Math.floor(Math.random() * words.length);
}

function App() {
  const [random, setRandom] = useState(getRandom());

  const handleClick = () => {
    setRandom(getRandom());
  };

  return (
    <div className="App">
      <div className="container">
        <h1>{words[random].word}</h1>
        <h2>{words[random].definition}</h2>
        <button onClick={handleClick}>Next Word</button>
      </div>
    </div>
  );
}

export default App;
