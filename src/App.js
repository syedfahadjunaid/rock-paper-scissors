import { useState, useEffect, useCallback } from 'react';
import rock from './assets/rock.png';
import paper from './assets/paper.png';
import scissors from './assets/scissors.png';

function App() {
  const [choice, setChoice] = useState(null);
  const [result, setResult] = useState('');
  const [compChoice, setCompChoice] = useState('');
  const choices = ['rock', 'paper', 'scissors'];

  let userImage;
  let compimage;

  if (choice === 'rock') {
    userImage = (
      <div className="img">
        <img className="images" src={rock} alt="rock img" />
      </div>
    );
  } else if (choice === 'paper') {
    userImage = (
      <div className="img">
        <img className="images" src={paper} alt="paper img" />
      </div>
    );
  } else if (choice === 'scissors') {
    userImage = (
      <div className="img">
        <img className="images" src={scissors} alt="scissors img" />
      </div>
    );
  }

  if (compChoice === 'rock') {
    compimage = (
      <div className="img">
        <img className="images" src={rock} alt="rock img" />
      </div>
    );
  } else if (compChoice === 'paper') {
    compimage = (
      <div className="img">
        <img className="images" src={paper} alt="paper img" />
      </div>
    );
  } else if (compChoice === 'scissors') {
    compimage = (
      <div className="img">
        <img className="images" src={scissors} alt="scissors img" />
      </div>
    );
  }

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
    <div className="app__rps">
      <div className="choices">
        <h1>USER CHOICE</h1>
        {userImage}
      </div>

      <div className="choices">
        <h1>COMPUTER CHOICE</h1>
        {compimage}
      </div>

      <div className="app__rps-btn">{renderedChoices}</div>

      <h1 className="result">{result}</h1>
    </div>
  );
}

export default App;
