import "./Comment.css";

function Comment({ name, title, text, image }) {
  return (
    <div className="Comment">
      <p className="comment-text">{text}</p>
      <div className="comment-group">
        <img src={image} alt="icon" className="comment-image" />
        <div className="cardbody">
          <h5 className="comment-name">{name}</h5>
          <p className="comment-title"> {title}</p>
        </div>
      </div>
    </div>
  );
}

export default Comment;
