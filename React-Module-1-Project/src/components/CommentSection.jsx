import "./CommentSection.css";
import Comment from "./Comment";
import profile1 from "../images/profile-1.jpg";
import profile2 from "../images/profile-2.jpg";
import profile3 from "../images/profile-3.jpg";

const comments = [
  {
    image: profile1,
    name: "Satish Patel",
    position: "Founder & CEO, Huddle",
    text: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
  },
  {
    image: profile2,
    name: "Bruce McKenzie",
    position: "Founder & CEO, Huddle",
    text: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
  },
  {
    image: profile3,
    name: "Iva Boyd",
    position: "Founder & CEO, Huddle",
    text: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
  },
];

function CommentSection() {
  const commentGroup = comments.map((comment, index) => {
    return (
      <Comment
        key={index}
        name={comment.name}
        title={comment.position}
        image={comment.image}
        text={comment.text}
      />
    );
  });
  return <section className="CommentSection">{commentGroup}</section>;
}

export default CommentSection;
