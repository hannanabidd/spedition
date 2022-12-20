import React from "react";
import { CSVLink } from "react-csv";
// import './report.css'

const ReportTop = (props) => {
  return (
    <>
      {/* <TopSearchBar /> */}
      <div className="reportHeadingMain">
        <div className="reportHeading">
          <img src="/images/arrowLeft.svg" alt="arrow Left" />
          <h1>Reports</h1>
        </div>
        <div className="reportAppointUrl forFlexRow">
          <p>
            Report /<span> {props.name}</span>
          </p>
          <div className="iconPrint" style={{ display: props.display }}>
            <CSVLink
              headers={props.headers}
              filename={"export.csv"}
              data={props.data}
            >
              <div className="iconPrint" >
              <img src="/images/printBlue.svg" alt="print" />
              <p>Print Report</p>
              </div>
            </CSVLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReportTop;
