import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Select = ({ label = "Case Type", selector = "attornies" }) => {
  const [data, setData] = useState([]);
  const { records } = useSelector((state) => state);
  useEffect(() => {
    setData(records[selector]);
  }, [selector, records]);

  return (
    <>
      <label>{label}</label>
      <select name="attorney" className="selectOVW">
        <option hidden disabled selected>
          Select {label}
        </option>
        {data.map((record) => (
          <option value={record._id} key={record._id}>
            {record.attorney}
          </option>
        ))}
      </select>
    </>
  );
};

export default Select;
