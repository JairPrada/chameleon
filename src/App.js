import { useEffect, useState } from 'react';
import './App.css';
import { SketchPicker } from 'react-color';
import { neuralNetwork } from './utils';
import { Loader } from './components/loaders';

function App() {
  const [state, setState] = useState({ background: '#417505', textColor: "white" })

  const [isLoading, setIsLoading] = useState(true);

  const handleChangeComplete = (color) => {
    setState({ background: color.hex, textColor: neuralNetwork(color.rgb.r, color.rgb.g, color.rgb.b) });
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }, [])


  return (
    <>
      {isLoading && <Loader />}
      <div className="bg" style={{ background: state.background }}>
        <h1 className='text' style={{ color: state.textColor }}>Chameleon</h1>
        <div style={{ position: "absolute", bottom: "0", right: "0" }}>
          <SketchPicker
            color={state.background}
            onChange={handleChangeComplete}
          />
        </div>
      </div >
    </>
  );
}

export default App;
