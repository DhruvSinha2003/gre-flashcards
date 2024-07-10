import "./App.css";
import words from "./vocab.json";
function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="word">
          <h1>{words.word}</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
