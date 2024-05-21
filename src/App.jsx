import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Manage from "./Components/Manage";
import Simplify from "./Components/Simplify";
import Testimony from "./Components/Testimony";

function App() {
  return (
    <>
      <div className="font-primary  pt-10 overflow-x-hidden bg-white">
        <Header />
        <Hero />
        <Manage />
        <Testimony />
        <Simplify />
        <Footer />
      </div>
    </>
  );
}

export default App;
