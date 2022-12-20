import React from "react";
import Circle from "./Circle/Circle";

const Cards = ({ uniqueKey, src, data, loading }) => {
  return (
    <div key={uniqueKey} className="graphsInfoCard">
      <div className="graphName">
        <div className="circleImg">
          {loading ? (
            <Circle marginBottom={"0px"} />
          ) : (
            <img src="/images/cardIcon.svg" alt="icon " />
          )}
        </div>
        <div className="graphDetails">
          <h3>{data[1]}</h3>
          <p>
            {data[0]?.replace(/[A-Z]/g, (letter) => ` ${letter.toLowerCase()}`)}
          </p>
        </div>
      </div>
      {<img src={src} alt="lines" />}
    </div>
  );
};

export default Cards;
