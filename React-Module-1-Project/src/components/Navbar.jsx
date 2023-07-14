import "./Navbar.css";
import navLogo from "../images/logo.svg"

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-lg">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src={navLogo} alt="FYLO-logo" className="navLogo" />
          </a>
    
        
            <div className="navbar-nav flex-row ">
              <a className="nav-link" aria-current="page" href="#">
                Features
              </a>
              <a className="nav-link" href="#">
                Team
              </a>
              <a className="nav-link" href="#">
                Sign In 
              </a>
         
            </div>
        
        </div>
      </nav>
    </>
  );
}

export default Navbar;
