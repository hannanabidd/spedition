import React from "react";

const OurServices = () => {
  return (
    <section className="serviceBg">
      <h1 className="heading">Unsere Dienstleistungen</h1>
      <p>
        Transporte von Stückgut, Teilpartien oder Komplettladungen bieten wir
        unseren Kundschaften an
      </p>
      <div className="cards md:flex justify-between mt-[50px]">
        <div className="service-card one md:w-[19%]">
          <p>Transport</p>
        </div>
        <div className="service-card two md:w-[19%]">
          <p>Motorradtransport</p>
        </div>
        <div className="service-card three md:w-[19%]">
          <p>Möbeltransport</p>
        </div>
        <div className="service-card four md:w-[19%]">
          <p>Sperrgutversand</p>
        </div>
        <div className="service-card five md:w-[19%]">
          <p>Palettenversand</p>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
