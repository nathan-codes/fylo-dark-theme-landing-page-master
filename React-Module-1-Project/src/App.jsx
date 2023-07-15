import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CardGroup from "./components/CardGroup";
import InfoSection from "./components/InfoSection";
import CommentSection from "./components/CommentSection";
import Contact from "./components/Contact";

import "./App.css";

function App() {
  return (
    <>
      <header className="header">
        <Navbar />
        <Hero />
        <CardGroup />
        <InfoSection />
        <CommentSection />
        <Contact />
      </header>
    </>
  );
}

export default App;
