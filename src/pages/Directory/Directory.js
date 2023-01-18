import React from "react";
import DirectoryTable from "../../components/Tables/DirectoryTable";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Directory = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="dashBoardMainPage">
        <div className="row mb-[20px]">
          <div className="col-lg-6">
            <h1 className="font-[600] text-[#a8a69d]">
              {t("directory.directory")}
            </h1>
          </div>
          <div className="col-lg-6 flex justify-end">
            <Link to="/sender/new-directory">
              <button className="sidebar-book">{t("directory.save")}</button>
            </Link>
          </div>
        </div>
        <div className="borderDash"></div>
        <div className="row">
          <div className="col-lg-12">
            <div className="table p-[10px]">
              <DirectoryTable />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Directory;
