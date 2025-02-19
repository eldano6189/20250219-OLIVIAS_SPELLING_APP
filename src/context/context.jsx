import { createContext, useState } from "react";

const ContextProvider = createContext();

export const ContextWrapper = ({ children }) => {
  const [answers, setAnswers] = useState([]);
  const [data, setData] = useState(() => {
    const storedSpellings = localStorage.getItem("spellingsApp");
    return storedSpellings
      ? JSON.parse(storedSpellings)
      : { childName: "", spellings: [] };
  });

  const GOOGLE_TTS_API_KEY = import.meta.env.VITE_TTS_API_KEY;
  const GOOGLE_TTS_URL = import.meta.env.VITE_TTS_URL;

  const speakText = async (text) => {
    if (!text) return;

    const url = `${GOOGLE_TTS_URL}${GOOGLE_TTS_API_KEY}`;

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          input: { text },
          voice: { languageCode: "en-UK", ssmlGender: "FEMALE" },
          audioConfig: { audioEncoding: "mp3" },
        }),
      });

      const data = await response.json();
      const audioSrc = "data:audio/mp3;base64," + data.audioContent;

      const audio = new Audio(audioSrc);
      audio.play();
    } catch (error) {
      console.error("Google TTS Error:", error);
    }
  };

  return (
    <ContextProvider.Provider
      value={{
        data,
        setData,
        answers,
        setAnswers,
        speakText,
      }}
    >
      {children}
    </ContextProvider.Provider>
  );
};

export default ContextProvider;
