import styles from "./button.module.css";
import FinishButton from "../../assets/svgs/finishButton";

const Button = () => {
  return (
    <div className={styles.container}>
      <button>
        <FinishButton />
      </button>
    </div>
  );
};

export default Button;
