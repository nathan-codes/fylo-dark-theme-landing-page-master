import Button from "./Button";
import "./Contact.css";

function Contact() {
  return (
    <article className="Contact">
      <h2 className="contact-title">Get early access today</h2>
      <p className="contact-text">
        It only takes a minute to sign up and our free starter tier is extremely
        generous. If you have any questions, our support team would be happy to
        help you.
      </p>
      <form action="" className="form-group">
        <input type="email" name="" id="" placeholder="email@example.com" />
        <Button />
      </form>
    </article>
  );
}

export default Contact;
