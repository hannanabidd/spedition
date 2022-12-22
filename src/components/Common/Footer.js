import React from "react";
import FooterLogo from "../../assets/footer-logo.svg";
import Call from "../../assets/call.svg";
import Clock from "../../assets/clock.svg";
import Envelope from "../../assets/envelope.svg";
import Facebook from "../../assets/facebook.svg";
import Instagram from "../../assets/instagram.svg";
import Google from "../../assets/google.svg";
import Payment from "../../assets/payment.svg";

const Footer = () => {
  return (
    <section className="footer-section">
      <div className="md:flex py-[60px]">
        <div className="md:w-[25%]">
          <img src={FooterLogo} />
          <p>
            Wir bringen Sie als unabhängiges Vergleichs- und Buchungsportal mit
            Speditionen zusammen. Unter dem Motto #CheckDeineSpedition
          </p>
          <div className="flex social-media mt-[20px]">
            <img src={Facebook} alt="Facebook" />
            <img src={Instagram} alt="Facebook" className="ml-[20px]" />
            <img src={Google} alt="Facebook" className="ml-[20px]" />
          </div>
        </div>
        <div className="md:w-[25%]">
          <p>Links</p>
          <p>Home</p>
        </div>
        <div className="md:w-[25%]">
          <p>Service</p>
          <p>FAQs</p>
          <p>Contact Us</p>
        </div>
        <div className="md:w-[25%]">
          <div className="flex">
            <img src={Clock} />
            <p className="ml-[10px]">Mo - Fr : 8 - 12 Uhr</p>
          </div>
          <div className="flex mt-[15px]">
            <img src={Call} />
            <p className="ml-[10px]">+49 (0) 551 288 78 615</p>
          </div>
          <div className="flex mt-[10px] ml-[5px]">
            <img src={Envelope} />
            <p className="ml-[10px]">info@speditioncheck.de</p>
          </div>
        </div>
      </div>
      <div className="footer-bar md:flex justify-between">
        <h3>© 2022 Speditioncheck. All rights reserved</h3>
        <img src={Payment} />
      </div>
    </section>
  );
};

export default Footer;
