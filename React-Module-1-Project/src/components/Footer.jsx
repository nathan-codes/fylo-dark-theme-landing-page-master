import navLogo from "../images/logo.svg";
import location from "../images/icon-location.svg";
import phoneImage from "../images/icon-phone.svg";
import emailImage from "../images/icon-email.svg";
import "./Footer.css";

function Footer() {
  return (
    <section className="Footer">
      <div class=" text-center container">
        <div class="row">
          <div className="col-12 col-lg-3">
            <img src={navLogo} alt="FYLO-logo" className="footerLogo" />

            <span className="spanGroup">
              <img src={location} alt="ico-location" />
              <p className="locationText">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </p>
            </span>
          </div>
          <div className="col-12 col-lg-3 px-4  my-4">
            <span className="details">
              <img src={phoneImage} alt="" />{" "}
              <p className="text"> +1-543-123-4567</p>{" "}
            </span>
            <span className="details">
              <img src={emailImage} alt="" />{" "}
              <p className="text">example@fylo.com</p>{" "}
            </span>
          </div>
          <div className="col-12 col-lg-2 my-2">
            <p>About Us</p>
            <p>Jobs</p>
            <p>Press</p>
            <p>Blog</p>
          </div>
          <div className="col-12 col-lg-2 my-auto">
            <p>Contact Us</p>
            <p>Terms</p>
            <p>Privacy</p>
          </div>
          <div className="col-12 col-lg-2 my-2">
            <span className="socialIcons">
              <i class="fa-brands fa-facebook-f "></i>
            </span>

            <span className="socialIcons">
              <i class="fa-brands fa-twitter"></i>
            </span>

            <span className="socialIcons">
              <i class="fa-brands fa-instagram"></i>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
