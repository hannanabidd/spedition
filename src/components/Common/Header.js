import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.svg";
import "../../pages/LandingPage/LandingPage.scss";

const Header = () => {
  return (
    <section className=" headerMain">
      <img src={Logo} alt="Logo" />

      <div className="buttons md:block hidden">
        <Link to="/login">
          <button className="loginBtn">Login</button>
        </Link>
        <Link to="/sender-signup">
          <button className="signupBtn">Registrieren</button>
        </Link>
      </div>
    </section>
  );
};

export default Header;
