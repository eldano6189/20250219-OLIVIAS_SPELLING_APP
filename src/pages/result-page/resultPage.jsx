import styles from "./resultPage.module.css";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import ContextProvider from "../../context/context";
import { good, bad } from "../../data/resultsSpeech";
import TryAgain from "../../assets/svgs/tryAgain";
import Correct from "../../assets/svgs/correct";
import Wrong from "../../assets/svgs/wrong";

const ResultPage = () => {
  const { data, answers } = useContext(ContextProvider);
  const [totalCorrect, setTotalCorrect] = useState(0);

  const navigate = useNavigate();
  const percentage = Math.round((totalCorrect / data.spellings.length) * 100);

  const handleNavigate = () => {
    navigate("/");
  };

  useEffect(() => {
    scrollTo(0, 0);
    const getResult = data.spellings.map((spelling, index) => {
      return spelling === answers[index] ? 1 : 0;
    });

    setTotalCorrect(getResult.reduce((a, b) => a + b, 0));
  }, [data.spellings, answers]);

  return (
    <div className={styles.container}>
      <h1>
        Your results are in! Lets see how you did{" "}
        <span>{data ? ` ${data.childName}` : ""}</span>.
      </h1>
      <div className={styles.container__table}>
        {data.spellings.map((spelling, i) => {
          return (
            <div className={styles.table__row} key={i}>
              <div className={styles.container__cells}>
                <div className={styles.table__cell}>
                  <p>{i + 1}</p>
                </div>
                <div className={styles.table__cell}>
                  <p>{spelling}</p>
                </div>
                <div className={styles.table__cell}>
                  <p
                    style={{ color: spelling !== answers[i] ? "red" : "green" }}
                  >
                    {answers[i]}
                  </p>
                </div>
                <div className={styles.table__cell}>
                  {spelling === answers[i] ? <Correct /> : <Wrong />}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className={styles.container__feedback}>
        <h2>
          {percentage >= 75
            ? good[Math.floor(Math.random() * good.length)]
            : bad[Math.floor(Math.random() * bad.length)]}
        </h2>
        <h2>
          You got <span>{totalCorrect}</span> out of{" "}
          <span>{data.spellings.length}</span> answers correct!
        </h2>
      </div>
      <div className={styles.container__btn}>
        <button onClick={handleNavigate}>
          <TryAgain />
        </button>
      </div>
    </div>
  );
};

export default ResultPage;
