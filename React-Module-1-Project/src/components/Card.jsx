import "./Card.css";

function Card({ image, title, text }) {
  return (
    <div className="card">
      <img src={image} alt="icon" className="card-icon" />
      <div className="cardbody">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
      </div>
    </div>
  );
}

export default Card;
