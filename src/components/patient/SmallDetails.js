import React from "react";

const SmallDetails = (props) => {
  return (
    <div className="detailsWithExp">
      <h4>{props.name}</h4>
      <p>{props.details}</p>
    </div>
  );
};

export default SmallDetails;
