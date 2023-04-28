import { useState } from 'react';
import './App.css';
import { SketchPicker } from 'react-color';

function App() {
  const [state, setState] = useState({ background: '#fff' })

  const handleChangeComplete = (color) => {
    console.log(color.rgb);
    setState({ background: color.hex });
  };

  return (
    <div className="bg" style={{ background: state.background }}>
      <h1 className='text'>Chameleon</h1>
      <div

        style={{ position: "absolute", top: "0", left: "0" }}
      >
        <SketchPicker
          color={state.background}
          onChange={handleChangeComplete}
        />
      </div>
    </div>
  );
}

export default App;
