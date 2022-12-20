import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUtil } from "../../api/functions";
import { getAllAttornies, getAllMri } from "../../redux/records";
import Circle from "../Circle/Circle";
import MainModal from "../modal/MainModal";

const AddUtils = (props) => {
  const [data, setData] = useState({});
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  return (
    <>
      <MainModal>
        <form
          onSubmit={async (e) => {
            setLoading(true);
            e.preventDefault();
            try {
              await addUtil(data, props.endpoint);
              dispatch(
                props.label === "attorney" ? getAllAttornies() : getAllMri()
              ).then(() => {
                setLoading(false);
                props.onClick();
              });
            } catch (error) {}
          }}
          onChange={({ target: { name, value } }) =>
            setData({ ...data, [name]: value })
          }
          className="attorneyOfficeForm"
        >
          <button className="crossAttr" onClick={props.onClick}>
            X
          </button>
          <h2>{props.nameModal}</h2>
          <div className="firstRowInputsOfAttorny">
            <div>
              <label>{props.name}</label>
              <input
                name={props.label}
                type="text"
                placeholder={props.placeholder}
                value={data?.[props.label]}
              />
            </div>
            <div>
              <label>Address</label>
              <input
                name="address"
                value={data?.address}
                type="text"
                placeholder="Enter Address"
              />
            </div>
          </div>
          <div className="firstRowInputsOfAttorny">
            <div>
              <label>Town</label>
              <input
                name="town"
                type="text"
                value={data?.town}
                placeholder="Enter Town"
              />
            </div>
            <div>
              <label>Zip Code</label>
              <input
                value={data?.zipCode}
                type="text"
                name="zipCode"
                placeholder="Enter Zip code"
              />
            </div>
          </div>
          <div className="firstRowInputsOfAttorny">
            <div>
              <label>Phone number</label>
              <input
                type="text"
                name="phoneNumber"
                placeholder="Enter Phone No"
                value={data?.phoneNumber}
              />
            </div>
            <div>
              <label>Fax</label>
              <input
                value={data?.fax}
                type="text"
                name="fax"
                placeholder="Enter Fax"
              />
            </div>
          </div>
          <div className="firstRowInputsOfAttorny">
            <div>
              <label>Contatc</label>
              <input
                value={data?.contact}
                type="text"
                placeholder="Enter Contact"
                name="contact"
              />
            </div>
          </div>
          <div className="mdBtnSave" type="button">
            <button type="submit">
              {loading ? <Circle height="0px" /> : "Add & Save"}
            </button>
          </div>
        </form>
      </MainModal>
    </>
  );
};

export default AddUtils;
