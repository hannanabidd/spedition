import React from "react";
import "./DashboardMain.css";
import { Table, Space } from "antd";
import LastOrderTable from "../../components/Dashboard/LastOrderTable";
import { useTranslation } from "react-i18next";

const DashboardPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="dashBoardMainPage">
        <div className="row mb-[20px]">
          <div className="col-lg-6">
            <h1 className="font-[600] text-[#a8a69d]">
              {t("dashboard.dashboard")}{" "}
            </h1>
          </div>
          {/* <div className="col-lg-6 flex justify-end">
            <button className="sidebar-book">{t("directory.entryBtn")}</button>
          </div> */}
        </div>
        <div className="borderDash"></div>
        <div className="row">
          <div className="col-lg-9">
            <div className="table p-[10px]">
              <LastOrderTable />
            </div>
          </div>
          <div className="col-lg-3">
            <div className="table p-[15px]">
              <h3 className="text-[20px] text-600 ">New Broadcast</h3>
              <p>
                Compare shipping companies and prices and commission exactly the
                right shipping company for your transport.
              </p>
              <button className="btn-book">Book transport now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
