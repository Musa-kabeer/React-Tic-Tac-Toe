import { useEffect, useState } from 'react';

function App() {
  const [value, setValue] = useState({
    firstInput: '',
    secondInput: '',
    thirdInput: '',
    fourthInput: '',
    fivethInput: '',
    sixthInput: '',
    seventhInput: '',
    eightInput: '',
    ninethInput: '',
  });

  const [winner, setWinner] = useState('');

  const handleChange = (e) => {
    if (!e.target.value) return;

    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    if (
      value.firstInput === value.secondInput &&
      value.secondInput === value.thirdInput
    ) {
      return setWinner(value.firstInput);
    }

    if (
      value.firstInput === value.fourthInput &&
      value.fourthInput === value.seventhInput
    ) {
      return setWinner(value.firstInput);
    }

    if (
      value.firstInput === value.fivethInput &&
      value.fivethInput === value.ninethInput
    ) {
      return setWinner(value.firstInput);
    }

    if (
      value.secondInput === value.fivethInput &&
      value.fivethInput === value.eightInput
    ) {
      return setWinner(value.secondInput);
    }

    if (
      value.thirdInput === value.sixthInput &&
      value.sixthInput === value.ninethInput
    ) {
      return setWinner(value.thirdInput);
    }

    if (
      value.thirdInput === value.fivethInput &&
      value.fivethInput === value.seventhInput
    ) {
      return setWinner(value.thirdInput);
    }

    if (
      value.fourthInput === value.fivethInput &&
      value.fivethInput === value.sixthInput
    ) {
      return setWinner(value.fourthInput);
    }

    if (
      value.seventhInput === value.eightInput &&
      value.eightInput === value.ninethInput
    ) {
      return setWinner(value.seventhInput);
    }
  }, [value]);

  const handleClick = () => {
    setWinner('');

    // VANILLA JAVASCRIPT
    window.location.reload();
  };

  return (
    <div style={{ position: 'relative' }}>
      <div className={`overlay ${winner === '' ? 'hidden' : ''}`}>
        <div className="winnerContainer">
          <span className="times" onClick={handleClick}>
            &times;
          </span>
          <p>Person "{winner}" win the Game</p>
        </div>
      </div>
      <div className="container">
        <div className="boxContainer">
          <p>
            You can start the game by inputting (X or Y) or any letter
            you wanna use 😊.
          </p>
          <div className="box">
            <input
              type="text"
              name="firstInput"
              defaultValue={''}
              onChange={handleChange}
            />

            <input
              type="text"
              name="secondInput"
              defaultValue={''}
              onChange={handleChange}
            />

            <input
              type="text"
              name="thirdInput"
              defaultValue={''}
              onChange={handleChange}
            />

            <input
              type="text"
              name="fourthInput"
              defaultValue={''}
              onChange={handleChange}
            />

            <input
              type="text"
              name="fivethInput"
              defaultValue={''}
              onChange={handleChange}
            />

            <input
              type="text"
              name="sixthInput"
              defaultValue={''}
              onChange={handleChange}
            />

            <input
              type="text"
              name="seventhInput"
              defaultValue={''}
              onChange={handleChange}
            />

            <input
              type="text"
              name="eightInput"
              defaultValue={''}
              onChange={handleChange}
            />

            <input
              type="text"
              name="ninethInput"
              defaultValue={''}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
