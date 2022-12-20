import React from "react";

import AppointmintsModal from "../../components/Appointments/ApointmintsModalBox";
import Nav from "../../components/Nav/Nav";
import "./dashboard.css";

const DashBoardPage = () => {
  return (
    <>
      <div className="dashBoardMainPage">
        <h1>Dashboard</h1>
        <div className="borderDash">
          <hr />
        </div>
        {/* <Filters /> */}
        <div className="appointments">
          <AppointmintsModal
            name="Uppcoming Appointment"
            heading2="Date"
            heading3="Specialty"
            src="/images/upcoming.svg"
            endpoint="upcoming-appointments"
          />
          <AppointmintsModal
            name="Missed Appointments"
            heading2="Appt.date"
            heading3="Phone Number"
            src="/images/calling.svg"
            endpoint="missed-appointments"
          />

          <AppointmintsModal
            name="Calling List"
            heading2="Time"
            heading3="Specialty"
            src="/images/missed.svg"
            endpoint="calling-list"
          />
          <AppointmintsModal
            name="Flag Analysis"
            heading2="Status"
            src="/images/missed.svg"
            endpoint="flag-analysis"
          />
        </div>
      </div>
    </>
  );
};

export default DashBoardPage;
