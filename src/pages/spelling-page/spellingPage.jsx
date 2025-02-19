import { useContext, useEffect } from "react";
import ContextProvider from "../../context/context";
import styles from "./spellingPage.module.css";
import Form from "../../components/form/form";

const SpellingPage = () => {
  const { data } = useContext(ContextProvider);

  useEffect(() => {
    scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.container__text}>
        <h1>
          Good luck<span>{data ? ` ${data.childName}` : ""}</span>! To hear the
          spelling press the play button and type on the log!
        </h1>
      </div>
      <Form data={data.spellings} />
    </div>
  );
};

export default SpellingPage;
