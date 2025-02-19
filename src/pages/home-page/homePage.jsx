import styles from "./homePage.module.css";
import Board from "../../assets/svgs/board";
import NewGameBtn from "../../assets/svgs/newGameBtn";
import { Link } from "react-router-dom";
import NewSpellingsBtn from "../../assets/svgs/newSpellingsBtn";
import { useContext } from "react";
import ContextProvider from "../../context/context";

const HomePage = () => {
  const { data } = useContext(ContextProvider);

  return (
    <div className={styles.container}>
      <div className={styles.container__center}>
        <Board />
        <div className={styles.board__content}>
          <h1>
            Welcome<span>{data ? ` ${data.childName}` : ""}</span>, lets
            practise some spellings.
          </h1>
          <ul className={styles.list}>
            {data.spellings.length > 0 && (
              <li className={styles.list__item}>
                <Link to="/spellings">
                  <NewGameBtn />
                </Link>
              </li>
            )}
            <li className={styles.list__item}>
              <Link to="/settings">
                <NewSpellingsBtn />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
