import "./App.css";
import Header from "./components/Header";
import GamePlay from "./components/GamePlay";
import CryptoStraps from "./components/CryptoStraps";
import NonPrush from "./components/NonPrush";
import Dictum from "./components/Dictum";
import Team from "./components/Team";
import FaqAccordion from "./components/FaqAccordion";
import Salona from "./components/Salona";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

function App() {
  return (
    <>
      <BackToTop />
      <Header />
      <GamePlay />
      <CryptoStraps />
      <NonPrush />
      <Dictum />
      <Team />
      <FaqAccordion />
      <Salona />
      <Footer />
    </>
  );
}

export default App;
