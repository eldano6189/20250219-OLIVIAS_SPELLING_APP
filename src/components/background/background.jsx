import styles from "./background.module.css";

const Background = () => {
  return (
    <div className={styles.container}>
      <img
        className={styles.container__img}
        src="/images/bkgrd.jpg"
        alt="background image of a jungle"
      />
    </div>
  );
};

export default Background;
