import { useState } from "react";
import "./App.css";
import HangmanGame from "./HangmanGame.jsx";

function App() {
  const [game, setGame] = useState(null);

  const startNewGame = async () => {
    const response = await fetch(
      "http://localhost:8090/hangman-games?playerId=1",
      {
        method: "POST",
      }
    );

    const currentGame = await response.json();
    console.log(currentGame);
    setGame(currentGame);
  };

  return (
    <>
      <h2>HangmanGame</h2>
      <button onClick={startNewGame}>Reset Game</button>
      {game && <HangmanGame game={game} setGame={setGame} />}
    </>
  );
}

export default App;
