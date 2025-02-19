import styles from "./header.module.css";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/svgs/logo";
import HomeIcon from "../../assets/svgs/homeIcon";
import SoundOnBtn from "../../assets/svgs/soundOnBtn";
import SoundOffBtn from "../../assets/svgs/soundOffBtn";
import bgMusic from "/jungle-sound.mp3";

const Header = () => {
  const [muted, setMuted] = useState(true);
  const [audioInitialized, setAudioInitialized] = useState(false);
  const audioRef = useRef(null);

  const initializeAudio = () => {
    if (audioRef.current && !audioInitialized) {
      audioRef.current
        .play()
        .catch((e) => console.error("Error playing audio:", e));
      setAudioInitialized(true);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      initializeAudio(); // Ensure audio is initialized before muting/unmuting

      const newMutedState = !muted;
      setMuted(newMutedState);
      audioRef.current.muted = newMutedState;
    }
  };

  return (
    <header className={styles.header} onClick={initializeAudio}>
      <audio ref={audioRef} src={bgMusic} loop muted />
      <div className={styles.container__logo}>
        <div className={styles.logo}>
          <Logo />
        </div>
      </div>
      <nav className={styles.container__nav}>
        <ul className={styles.nav__list}>
          <li className={styles.nav__item}>
            <Link to="/">
              <HomeIcon />
            </Link>
          </li>
          <li className={styles.nav__item}>
            <button onClick={toggleMute}>
              {!muted ? <SoundOnBtn /> : <SoundOffBtn />}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
