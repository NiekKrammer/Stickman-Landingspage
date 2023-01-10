import "./App.css";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import About from "./Components/About";
import Roadmap from "./Components/Roadmap";
import Tokenomics from "./Components/Tokenomics";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Tokenomics />
      <About />
      <Roadmap/>
      <Footer />
    </div>
  );
}

export default App;
