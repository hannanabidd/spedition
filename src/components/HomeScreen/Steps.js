import React from "react";
import One from "../../assets/step-one.svg";
import Two from "../../assets/step-two.svg";
import Three from "../../assets/step-three.svg";

const StepsData = [
  {
    id: "0",
    heading: "Geben Sie Ihre Sendungsdetails ein",
    img: `${One}`,
    paragraph:
      "Sagen Sie uns, wo Ihre Ware abgeholt werden soll und nennen Sie uns den Zielort. Geben Sie hierbei zudem an, ob Sie als Privat- oder gewerblicher Kunde auftreten. Vom einzelnen Paket bis hin zur Palette oder Möbeln- geben Sie uns im folgenden Schritt an, um welche Art der Ladung es sich handelt.",
  },
  {
    id: "1",
    heading: "Erhalten Sie mühelos unverbindliche Preise",
    img: `${Two}`,
    paragraph:
      "Innerhalb weniger Sekunden erhalten Sie eine detaillierte und unverbindliche Übersicht über verschiedene Transportangebote. Vergleichen Sie diese und finden Sie das zu Ihnen am besten passende Angebot.",
  },
  {
    id: "2",
    heading: "Buchen Sie Ihren Transport ganz einfach online!",
    img: `${Three}`,
    paragraph:
      "Wünschen und Vorstellungen entspricht? Dann steht der Buchung nichts mehr im Wege! Lehnen Sie sich zurück. Speditioncheck bringt Sie anschließend mit dem Anbieter in Kontakt.",
  },
];

const Steps = () => {
  return (
    <section className="steps-section">
      <div className="steps-box">
        <center>
          <h5>3 Schritte Für Den Perfekten Transport</h5>
          <h1>Wie funktioniert Speditioncheck</h1>
          <p>
            Schnell. <span className="ml-[20px]" /> Simpel.{" "}
            <span className="ml-[20px]" /> Speditioncheck.
          </p>
        </center>
        <div className="list md:flex justify-between mt-[30px]">
          {StepsData.map((data) => {
            return (
              <div className="list-card px-[15px] md:w-[32%]">
                <center>
                  <img
                    src={data.img}
                    className="mt-[20px] h-[100px] w-[1000px]"
                  />
                  <h2 className="mt-[10px]">{data.heading}</h2>
                  <p className="mt-[10px]">{data.paragraph}</p>
                </center>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Steps;
