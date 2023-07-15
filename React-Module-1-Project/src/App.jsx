import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CardGroup from "./components/CardGroup";
import InfoSection from "./components/InfoSection";


import "./App.css";

function App() {

  return (
    <>
      <header className="header">
        
        <Navbar />
        <Hero />
        <CardGroup />
        <InfoSection />

    
      </header>
    </>
  );
}

export default App;
