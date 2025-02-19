import styles from "./form.module.css";
import { useNavigate } from "react-router-dom";
import Input from "../input/input";
import Button from "../button/button";

const Form = ({ data }) => {
  const navigate = useNavigate();

  const handleSubmitSpellings = (e) => {
    e.preventDefault();
    navigate("/results");
  };

  return (
    <form
      className={styles.container}
      onSubmit={(e) => handleSubmitSpellings(e)}
    >
      {data.map((spelling, index) => (
        <Input key={index} number={index + 1} spelling={spelling} />
      ))}
      <Button />
    </form>
  );
};

export default Form;
