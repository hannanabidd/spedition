import React from "react";
import { useSelector } from "react-redux";

const MriFacility = ({ onChange, name }) => {
  const { mriFacility } = useSelector((state) => state.records);
  return (
    <>
      <label>Select Facility</label>
      <select name={name} onChange={onChange}>
        <option hidden disabled selected>
          Select Facility
        </option>
        {mriFacility.map((mri) => (
          <option key={mri?._id} value={mri?._id}>
            {mri?.mriFacility}
          </option>
        ))}
      </select>
    </>
  );
};

export default MriFacility;
