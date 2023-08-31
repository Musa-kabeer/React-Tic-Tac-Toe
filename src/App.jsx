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

  return (
    <div className="container">
      <div className="boxContainer">
        <p>
          You can start the game by inputting (X or Y) or any letter
          you wanna use 😊.
        </p>
        <div className="box">
          <input type="text" defaultValue={''} />

          <input type="text" defaultValue={''} />

          <input type="text" defaultValue={''} />

          <input type="text" defaultValue={''} />

          <input type="text" defaultValue={''} />

          <input type="text" defaultValue={''} />

          <input type="text" defaultValue={''} />

          <input type="text" defaultValue={''} />

          <input type="text" defaultValue={''} />
        </div>
      </div>
    </div>
  );
}

export default App;
