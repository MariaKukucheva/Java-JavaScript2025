const bulgarianAlphabet = [
    'а', 'б', 'в', 'г', 'д', 'е', 'ж', 'з', 'и', 'й',
    'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у',
    'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ь', 'ю', 'я'
];

function HangmanGame({ game, setGame }) {
  const makeGuess = async (letter) => {
    const gameId = game.id;
    const response = await fetch(
      `http://localhost:8090/hangman-games/${gameId}/letter/${letter}`,
      {
        method: "PUT",
      }
    );
    const changedGame = await response.json();
    setGame(changedGame);
  };

  return (
    <>
      <h2>Player: {game.player.username}</h2>
      <h2>{game.currentWord}</h2>
      <h2>{game.status}</h2>
      {game.status !== "WON" && game.status !== "LOST" && 
  
        bulgarianAlphabet.map((letter) => {
            return <button onClick={() => makeGuess(letter)}>{letter}</button>;
        })
      }
    </>
  );
}

export default HangmanGame;
