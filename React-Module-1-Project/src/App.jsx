import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CardGroup from "./components/CardGroup";


import "./App.css";

function App() {

  return (
    <>
      <header className="header">
        
        <Navbar />
        <Hero />
        <CardGroup />
    
      </header>
    </>
  );
}

export default App;
