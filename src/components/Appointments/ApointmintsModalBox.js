import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getDashboarddList } from "../../api/functions";

const AppointmintsModal = (props) => {
  const [list, setList] = useState([]);
  const { isAuthenticated } = useSelector((state) => state.auth);
  useEffect(() => {
    if (isAuthenticated)
      (async () => {
        try {
          const data = await getDashboarddList(props.endpoint);
          setList(data?.data?.data);
        } catch (error) {}
      })();
  }, [props.endpoint, isAuthenticated]);

  return (
    <div className="upcomingAppointments">
      <div className="headingAppointment">
        <h4 className="head">{props.name}</h4>
        <img src={props.src} alt="icon" />
      </div>
      <div className="appointDetail">
        <div className="appointsDetailsHeadingDash">
          <h4>Name</h4>
          <h4>{props.heading2}</h4>
          <h4>{"Type"}</h4>
        </div>
        {list?.map((record) => (
          <div className="detailsOfAppoint">
            <p>{`${record?.patientId?.firstName} ${record?.patientId?.lastName}`}</p>
            <p>
              {props.endpoint === "flag-analysis"
                ? record?.patientId?.flagStatus
                : `${new Date(record?.initial).toDateString()}`}
            </p>
            <p>{record?.type}</p>
          </div>
        ))}
      </div>
      <div className="btnSeeMore">
        See More
        <img src="/images/arrowForward.svg" alt="forward" />
      </div>
    </div>
  );
};

export default AppointmintsModal;
