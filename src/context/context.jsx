import { createContext, useState, useEffect } from "react";

const ContextProvider = createContext();

export const ContextWrapper = ({ children }) => {
  const [voices, setVoices] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [data, setData] = useState(() => {
    const storedSpellings = localStorage.getItem("spellingsApp");
    return storedSpellings
      ? JSON.parse(storedSpellings)
      : { childName: "", spellings: [] };
  });

  // useEffect(() => {
  //   const loadVoices = () => {
  //     const availableVoices = window.speechSynthesis.getVoices();
  //     setVoices(availableVoices);
  //   };

  //   loadVoices();

  //   window.speechSynthesis.onvoiceschanged = loadVoices;
  // }, []);

  return (
    <ContextProvider.Provider
      value={{
        data,
        setData,
        answers,
        setAnswers,
        voices,
      }}
    >
      {children}
    </ContextProvider.Provider>
  );
};

export default ContextProvider;
