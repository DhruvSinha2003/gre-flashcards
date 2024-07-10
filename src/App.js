import React, { useState } from "react";
import "./App.css";
import wordsData from "./vocab.json";

const words = wordsData.words;

function getRandom(exclude) {
  let random;
  do {
    random = Math.floor(Math.random() * words.length);
  } while (exclude.includes(random));
  return random;
}

function App() {
  const [random, setRandom] = useState(getRandom([]));
  const [viewedWords, setViewedWords] = useState([]);

  const handleClick = () => {
    const newRandom = getRandom(viewedWords.map((word) => word.index));
    setViewedWords([...viewedWords, { index: random, ...words[random] }]);
    setRandom(newRandom);
  };

  return (
    <div className="App">
      <div className="container">
        <h1>{words[random].word}</h1>
        <h2>{words[random].definition}</h2>
        <button onClick={handleClick}>Next Word</button>
        <h3>Flashcards Viewed in this session: {viewedWords.length + 1}</h3>
      </div>
      <table>
        <thead>
          <tr>
            <th>Sr No</th>
            <th>Word</th>
            <th>Definition</th>
          </tr>
        </thead>
        <tbody>
          {viewedWords.map((word, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{word.word}</td>
              <td>{word.definition}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <footer>
        <a href="https://www.vocabulary.com/">
          Words Obtained from vocabulary.com
        </a>
      </footer>
    </div>
  );
}

export default App;
