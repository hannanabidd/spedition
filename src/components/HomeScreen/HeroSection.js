import React from "react";
import Approved from "../../assets/approved-icon.svg";
import LocationFilter from "./LocationFilter";
import Time from "../../assets/time.svg";
import Save from "../../assets/save.svg";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div>
        <h1>Speditionsversand vergleichen & buchen 24/7</h1>
        <p>Per Mausklick alles bewegen können</p>
      </div>
      <div className="location">
        <LocationFilter name="" />
      </div>
      <div className="points">
        <div className="flex items-center">
          <img src={Approved} alt="hlo" />
          <h6>500+ Speditionen</h6>
        </div>
        <div className="flex items-center">
          <img src={Time} className="mt-[10px]" alt="hlo" />
          <h6>Kostenlos & unverbindlich</h6>
        </div>
        <div className="flex items-center">
          <img src={Save} alt="hlo" />
          <h6>Schnell & sicher buchen</h6>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
