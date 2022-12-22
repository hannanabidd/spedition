import React from "react";
import Flag from "../../assets/flagg.jpeg";

const LocationFilter = (props) => {
  return (
    <div className="flex justify-center items-center">
      <h5 className="text-[#111] text-700">
        <img src={Flag} className="h-[100px]" alt="hlo" />
      </h5>
    </div>
  );
};

export default LocationFilter;
