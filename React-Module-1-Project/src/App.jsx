import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CardGroup from "./components/CardGroup";
import InfoSection from "./components/InfoSection";
import CommentSection from "./components/CommentSection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

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
        <Footer />
      </header>
    </>
  );
}

export default App;
