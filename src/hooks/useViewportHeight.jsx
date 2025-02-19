import { useEffect, useState } from "react";

export const useViewportHeight = () => {
  const [vh, setVh] = useState(window.innerHeight);

  useEffect(() => {
    const updateHeight = () => {
      setVh(window.innerHeight);
    };

    window.addEventListener("resize", updateHeight);
    updateHeight(); // Set initial height

    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  return vh;
};
