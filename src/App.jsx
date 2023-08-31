import { useState } from 'react';

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

  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  console.log(value);

  return (
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
  );
}

export default App;
