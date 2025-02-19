import Background from "./components/background/background";
import Header from "./components/header/header";
import { Route, Routes } from "react-router-dom";
import SpellingPage from "./pages/spelling-page/spellingPage";
import ResultPage from "./pages/result-page/resultPage";
import HomePage from "./pages/home-page/homePage";
import SettingsPage from "./pages/settings-page/settingsPage";
import Loading from "./components/loading/loading";

const App = () => {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <Background />
        <Loading />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/spellings" element={<SpellingPage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/results" element={<ResultPage />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default App;
