import "./App.css";
import Button from "./components/Button";
import Phrase from "./components/Phrase";
import phrases from "./utils/phrases.json";
import getRandomArray from "./utils/getRandomArray";
import { useState } from "react";

const imgs = [1,2,3,4]

function App() {
  const [phraseRandom, setphraseRandom] = useState(getRandomArray(phrases))
  const [numberimg, setNumberimg] = useState(getRandomArray(imgs))
  const appStyle = {
      backgroundImage: `url('/backgrounds/fondo${numberimg}.jpg')`
  }
  return (
    <div style={appStyle} className="App">
      <h1 className="App__title">Galleta de la fortuna</h1>
      <Button 
        setphraseRandom={setphraseRandom} 
        setNumberimg ={setNumberimg}
      />
      <Phrase phraseRandom={phraseRandom} />
    </div>
  )
}

export default App;
