import React from "react";

const TransportNetwork = () => {
  return (
    <section className="country-section">
      <div className="country-box">
        <center>
          <h1>Unser Transportnetzwerk</h1>
          <p className="mt-[10px]">
            Vergleichen Sie mit unserem Versandrechner die Preise und
            <br />
            profitieren Sie von unserer europaweiten Reichweite
          </p>
        </center>
        <div className="country-name mt-[20px] ">
          <div className="md:flex justify-between">
            <div className="country-card country-one md:w-[49%] ">
              <p className="country-p">Türkei</p>
            </div>
            <div className="country-card country-two md:w-[24%] md:mt-[0px] mt-[10px]">
              <p className="country-p">Deutschland</p>
            </div>
            <div className="country-card country-three md:w-[24%] md:mt-[0px] mt-[10px]">
              <p className="country-p">Frankreich</p>
            </div>
          </div>
          <div className="md:flex justify-between md:mt-[20px]">
            <div className="country-card country-four md:w-[49%] md:mt-[0px] mt-[10px]">
              <p className="country-p">Italien</p>
            </div>
            <div className="country-card country-five md:w-[24%] md:mt-[0px] mt-[10px]">
              <p className="country-p">Großbritannien</p>
            </div>
            <div className="country-card country-six md:w-[24%] md:mt-[0px] mt-[10px]">
              <p className="country-p">Spanien</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransportNetwork;
