import './Card.css'
import cardimage from '../images/icon-access-anywhere.svg'


function Card() {
    return (
      <div className="card" >
        <img src={cardimage} alt="icon" className="card-icon" />
        <div className="card-body">
          <h5 className="card-title">Access your files, anywhere</h5>
          <p className="card-text">
            The ability to use a smartphone, tablet, or computer to access your
            account means your files follow you everywhere.
          </p>

        </div>
      </div>
    );
}

export default Card;
