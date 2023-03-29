import getRandomArray from "../utils/getRandomArray";
import phrases from "../utils/phrases.json";

const Button = ({setphraseRandom, setNumberimg}) => {
  const handChange = () => {
    const newPhrase = getRandomArray(phrases)
    setphraseRandom(newPhrase)
    setNumberimg(getRandomArray([1,2,3,4]))

  }
  return (
    <button className="App__button"
      onClick={handChange}>Probar mi suerte
    </button>
  )
}

export default Button;
