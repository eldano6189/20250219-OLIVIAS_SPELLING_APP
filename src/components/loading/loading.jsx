import styles from "./loading.module.css";
import { useState } from "react";

const Loading = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className={styles.container} style={{ display: !modalOpen && "none" }}>
      <div className={styles.modal}></div>
    </div>
  );
};

export default Loading;
