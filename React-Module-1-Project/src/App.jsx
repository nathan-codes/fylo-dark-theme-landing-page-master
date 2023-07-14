import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";

import "./App.css";

function App() {

  return (
    <>
      <header className="header">
        
        <Navbar />
        <Hero />
        <Card />
    
      </header>
    </>
  );
}

export default App;
