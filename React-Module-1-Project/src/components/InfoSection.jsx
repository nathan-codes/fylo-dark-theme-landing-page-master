import infoImage from "../images/illustration-stay-productive.png";
import arrowIcon from "../images/icon-arrow.svg";
import "./InfoSection.css";

function InfoSection() {
  return (
    <section className="InfoSection">
      <div className="imageSection">
        <img src={infoImage} alt="productive" />
      </div>
      <div className="textSection">
        <h2>Stay productive, wherever you are </h2>
        <p>
          Never let location be an issue when accessing your files. Fylo has you
          covered for all of your file storage needs.
        </p>
        <p>
          Securely share files and folders with friends, family and colleagues
          for live collaboration. No email attachments required.
        </p>
        <span className="link">
          <a href="#">See how Fylo works </a> <img src={arrowIcon} />
        </span>
      </div>
    </section>
  );
}

export default InfoSection;
