import "./Hero.css";
import heroImage from "../images/illustration-intro.png";

function Hero() {
  return (
    <section className="Hero">
      <img src={heroImage} alt="hero" className="heroImage" />
      <h1 className="intro-text">
        All your files in one secure location, accessible anywhere.
      </h1>
      <p className="intro-description">
        Fylo stores all your most important files in one secure location. Access
        them wherever you need, share and collaborate with friends family, and
        co-workers.
      </p>
      <button type="button" className="btn">
        Get Started
      </button>
    </section>
  );
}

export default Hero;
