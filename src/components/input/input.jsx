import styles from "./input.module.css";
import { useContext } from "react";
import ContextProvider from "../../context/context";
import LogIcon from "../../assets/svgs/logIcon";
import SpellingNumberIcon from "../../assets/svgs/spellingNumberIcon";
import PlayBtn from "../../assets/svgs/playBtn";

const InputContainer = ({ number, spelling }) => {
  const { voices, setAnswers } = useContext(ContextProvider);

  const handleSpeakWord = (e) => {
    e.preventDefault();
    // window.speechSynthesis.cancel();
    // if (!spelling) return;

    // const utterance = new SpeechSynthesisUtterance(spelling);

    // if (voices.length > 0) {
    //   utterance.voice = voices[0];
    // }

    // window.speechSynthesis.speak(utterance);
  };

  const handleAnswer = (e) => {
    const answer = e.target.value;

    setAnswers((prevAnswers) => {
      const updatedAnswers = [...prevAnswers];
      updatedAnswers[number - 1] = answer;
      return updatedAnswers;
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.container__input}>
        <div className={styles.container__log}>
          <LogIcon />
          <div className={styles.input}>
            <input
              required
              type="text"
              autoCapitalize="off"
              autoComplete="off"
              autoCorrect="off"
              spellCheck="false"
              placeholder="..."
              onChange={(e) => handleAnswer(e)}
            />
          </div>
        </div>
        <div className={styles.container__number}>
          <SpellingNumberIcon />
          <p>{number}</p>
        </div>
        <div className={styles.container__play}>
          <button onClick={handleSpeakWord}>
            <PlayBtn />
          </button>
        </div>
      </div>
    </div>
  );
};

export default InputContainer;
