import React from "react";
import { Select } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { recordsSlice } from "../../redux/records";
const { Option } = Select;
const PatientDropDown = ({ onChange, selected }) => {
  const dispatch = useDispatch();
  const { patients, selectedPatient } = useSelector((state) => state.records);
  return (
    <div
    className="patientSelect"
      
    >
      <label>Select Patient</label>
      <Select
        bordered='false'
        className="antdSelect"
        defaultValue={selected || selectedPatient?._id}
        showSearch
        placeholder="All Patients"
        optionFilterProp="children"
        size="large"
        // style={{ width: 200 }}
        onChange={
          onChange
            ? onChange()
            : (value, opt) =>
                dispatch(
                  recordsSlice.actions.changeSelectedPatient(
                    patients.find((patient) => patient?._id === value)
                  )
                )
        }
        filterOption={(input, option) => {
          return (
            option.children?.toLowerCase()?.indexOf(input.toLowerCase()) >= 0
          );
        }}
      >
        {patients.map((patient) => {
          return (
            <Option key={patient._id} value={patient?._id}>
              {`${patient?.firstName} ${patient?.lastName}`}
            </Option>
          );
        })}
      </Select>
    </div>
  );
};

export default PatientDropDown;
