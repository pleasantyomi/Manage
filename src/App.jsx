import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Manage from "./Components/Manage";
import Simplify from "./Components/Simplify";
import Testimony from "./Components/Testimony";
import { useState } from "react";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="pt-10 font-primary overflow-x-hidden bg-white relative ">
        <Header setIsMenuOpen={setIsMenuOpen} />
        <div className={`main-content ${isMenuOpen ? "overlay-active" : ""}`}>
          <Hero />
          <Manage />
          <Testimony />
          <Simplify />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
