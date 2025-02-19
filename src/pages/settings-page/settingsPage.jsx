import styles from "./settingsPage.module.css";
import LogIcon from "../../assets/svgs/logIcon";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import ContextProvider from "../../context/context";
import Button from "../../components/button/button";

const SettingsPage = () => {
  const { data, setData, voices } = useContext(ContextProvider);
  const [childName, setChildName] = useState(data.childName || "");
  const [newSpellingList, setNewSpellingList] = useState(
    data.spellings.length > 0 ? [...data.spellings, ""] : [""]
  );
  console.log(voices.length > 0 && voices[0].name);
  const navigate = useNavigate();

  const handleChildNameChange = (e) => {
    setChildName(e.target.value);
  };

  const handleSpellingChange = (index, value) => {
    const newSpellings = [...newSpellingList];
    newSpellings[index] = value;

    if (value !== "" && index === newSpellingList.length - 1) {
      newSpellings.push("");
    }

    if (
      value === "" &&
      index < newSpellingList.length - 1 &&
      newSpellingList[index + 1] === ""
    ) {
      newSpellings.pop();
    }

    setNewSpellingList(newSpellings);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const filteredSpellings = newSpellingList.filter(
      (spelling) => spelling.trim() !== ""
    );

    const formData = {
      childName,
      spellings: filteredSpellings,
    };

    localStorage.setItem("spellingsApp", JSON.stringify(formData));

    setData(formData);
    navigate("/");
  };

  return (
    <div className={styles.container}>
      <select name="" id="">
        {voices.length > 0 &&
          voices.map((voice, i) => {
            return <option key={i}>{voice.name}</option>;
          })}
      </select>
      <h1>
        This is where you can personallise and input your childs spellings.
      </h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <p>Childs name</p>
        <div className={styles.container__log}>
          <LogIcon />
          <div className={styles.input}>
            <input
              type="text"
              value={childName}
              placeholder="..."
              onChange={(e) => handleChildNameChange(e)}
            />
          </div>
        </div>
        <p>Childs spellings</p>
        {newSpellingList.map((spelling, index) => (
          <div key={index} className={styles.container__log}>
            <LogIcon />
            <div className={styles.input}>
              <input
                type="text"
                placeholder="..."
                value={spelling}
                onChange={(e) => handleSpellingChange(index, e.target.value)}
              />
            </div>
          </div>
        ))}
        <p>
          Your childs spelling data is saved locally on this device. If your
          child uses multiple devices, you will need to enter their spellings on
          each one separately.
        </p>
        <p>
          Note: Autocorrect and predictive text have been disabled for PC
          devices. For the best experience, please turn off predictive text on
          all other devices.
        </p>
        <Button />
      </form>
    </div>
  );
};

export default SettingsPage;
