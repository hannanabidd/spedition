import React, { useRef,useState } from "react";
import ReactDatePicker from "react-datepicker";

const DatePicker = ({
  mainClass,
  className,
  name,
  onChange,
  selected = new Date(),
  iconType,
  onClick,
  disabled = false,
}) => {
  const refIcon = useRef();
  const [startDate,setStartDate] = useState(new Date());
  return (
    <div className={`showPickr ${mainClass}`}>
      <ReactDatePicker
        placeholderText={"Please select a date"}
        ref={refIcon}
        selected={selected ? new Date(selected) : null}
        // value={selected}
        onChange={()=>{}}
        name={name}
        disabled={disabled}
        onSelect={onChange}
      />

      <div
        className={`iconForPicker ${className}`}
        onClick={() => {
          !disabled && iconType === "submit"
            ? onClick()
            : refIcon.current.setOpen(true);
        }}
      >
        {iconType === "submit" ? (
          <h5
            style={{
              cursor: disabled ? "default" : "pointer",
              fontSize: "16px",
            }}
          >
            ✔️
          </h5>
        ) : (
          <img src="/images/picker.svg" alt="calender Icon" />
        )}
      </div>
    </div>
  );
};

export default DatePicker;
