import React from "react";
// import Car from "../../../assets/car.svg";
import Car from "../../assets/car.svg";

const OnlineTransport = () => {
  return (
    <section className="online-transport ">
      <div className="online-bg md:flex">
        <div className="text md:w-[45%] ">
          <img src={Car} alt="car" />
          <p>Mach's Digital</p>
          <h1>Ihr online Transportportal</h1>
          <h6 className="pr-[70px]">
            Speditioncheck ist Ihr unabhängiges Vergleichs- und Buchungsportal.
            Erhalten Sie als Privat- oder Gewerbekunde innerhalb weniger
            Sekunden online Transportangebote von zuverlässigen
            Speditionsunternehmen. Wählen Sie direkt und unkompliziert das für
            Sie am besten geeignete Angebot aus und buchen Sie bequem Ihren
            Transport! Unser Portal stellt für Sie sicher, dass Ihr Transport so
            effizient wie möglich gestaltet wird. <br /> Speditionen können über
            unser Portal Ihre Tarife anbieten um mit kleinem Aufwand online
            Aufträge zu erhalten. Wir helfen Unternehmen dabei, Leerfahrten zu
            vermeiden und zusätzliche Umsätze zu generieren.
          </h6>
        </div>
        <div className="cards md:flex  md:mt-[35vh] mt-[5vh] md:w-[55%]">
          <div className="card-one ">
            <div className="mt-[15px]">
              <h3>Für Versender</h3>
            </div>
            <div className="mt-[60px] flex flex-col justify-between w-[100%]">
              <h1>Transportaufträge verfolgen & verwalten</h1>
              <div className="ml-[50px] mb-[30px]">
                <div className="flex mb-[10px] mt-[50px]">
                  <i className="fa-solid fa-check mt-[7px] text-[#00BB98]"></i>
                  <p className="line ml-[10px]">Kostenlos</p>
                </div>
                <div className="flex mb-[10px]">
                  <i className="fa-solid fa-check mt-[7px] text-[#00BB98]"></i>
                  <p className="line ml-[10px]">Ohne Laufzeit</p>
                </div>
                <div className="flex mb-[10px]">
                  <i className="fa-solid fa-check mt-[7px] text-[#00BB98]"></i>
                  <p className="line ml-[10px]">Keine versteckten Kosten</p>
                </div>
              </div>
              <center>
                <button className="Btn w-[50%] ">Registrieren</button>
              </center>
            </div>
          </div>
          <div className="card-one ml-[20px]">
            <div className="mt-[15px]">
              <h3>Für Speditionen</h3>
            </div>
            <div className="mt-[60px] flex flex-col justify-between w-[100%]">
              <h1>Speditionstarife erstellen & Aufträge erhalten</h1>
              <div className="ml-[50px] mb-[30px]">
                <div className="flex mb-[10px] mt-[15px]">
                  <i className="fa-solid fa-check mt-[7px] text-[#00BB98]"></i>
                  <p className="line ml-[10px]">30 Tage kostenlos testen</p>
                </div>
                <div className="flex mb-[10px]">
                  <i className="fa-solid fa-check mt-[7px] text-[#00BB98]"></i>
                  <p className="line ml-[10px]">Monatlich kündbar</p>
                </div>
                <div className="flex mb-[10px]">
                  <i className="fa-solid fa-check mt-[7px] text-[#00BB98]"></i>
                  <p className="line ml-[10px]">Monatlich nur 99,90 €</p>
                </div>
              </div>
              <center>
                <button className="Btn w-[50%] ">Registrieren</button>
              </center>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OnlineTransport;
