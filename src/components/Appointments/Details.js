import React,{useState} from "react";


const Details = (props) => {
 

    const [showInfo, setShowInfo] = useState(false);
  const showInfoDetail = () => {
    setShowInfo(!showInfo)
    
  };
  return (
    <div className="pateintDetail" onClick={props.onClick} >
      <h4 onClick={showInfoDetail}>
       {props.name}
        {" "}
        <span 
          className={showInfo ? "arrowDownSign arrowDownSignActive" : 'arrowDownSign'}
        >
          {" "}
          &gt;
        </span>
        
      </h4>
      <div className="borderLine">
        <div className="borderOverflow">
        <hr />

        </div>

        </div>
    </div>
  );
};

export default Details;
