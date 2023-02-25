import { useState, useEffect, useCallback } from 'react';

function App() {
  const [choice, setChoice] = useState(null);
  const [result, setResult] = useState('');
  const [compChoice, setCompChoice] = useState('');
  const choices = ['rock', 'paper', 'scissors'];

  const gameResult = useCallback(() => {
    if (
      (choice === 'rock' && compChoice === 'rock') ||
      (choice === 'paper' && compChoice === 'paper') ||
      (choice === 'scissors' && compChoice === 'scissors')
    ) {
      setResult('DRAW');
    } else if (
      (choice === 'rock' && compChoice === 'scissors') ||
      (choice === 'paper' && compChoice === 'rock') ||
      (choice === 'scissors' && compChoice === 'paper')
    ) {
      setResult('WIN');
    } else if (
      (choice === 'rock' && compChoice === 'paper') ||
      (choice === 'paper' && compChoice === 'scissors') ||
      (choice === 'scissors' && compChoice === 'rock')
    ) {
      setResult('LOSE');
    }
  }, [choice, compChoice]);

  const handleClick = (value) => {
    const random = Math.floor(Math.random() * choices.length);
    setCompChoice(choices[random]);
    setChoice(value);
  };

  useEffect(() => {
    gameResult();
  }, [gameResult]);

  const renderedChoices = choices.map((choice) => {
    return (
      <button key={choice} onClick={() => handleClick(choice)}>
        {choice}
      </button>
    );
  });
  return (
    <div>
      <h1>USER CHOICE IS : {choice}</h1>
      <h1>COMPUTER CHOICE IS: {compChoice}</h1>
      {renderedChoices}
      <h1>{result}</h1>
    </div>
  );
}

export default App;
