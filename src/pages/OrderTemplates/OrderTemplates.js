import React from "react";
import DirectoryTable from "../../components/Tables/DirectoryTable";
import { useTranslation } from "react-i18next";
import TemplatesTable from "../../components/Tables/TemplatesTable";

const OrderTemplates = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="dashBoardMainPage">
        <div className="row mb-[20px]">
          <div className="col-lg-6">
            <h1 className="font-[600] text-[#a8a69d]">
              {t("templates.templates")}{" "}
            </h1>
          </div>
          <div className="col-lg-6 flex justify-end">
            <button className="sidebar-book">
              {t("templates.templatesBtn")}
            </button>
          </div>
        </div>
        <div className="borderDash"></div>
        <div className="row">
          <div className="col-lg-12">
            <div className="table p-[10px]">
              <TemplatesTable />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default OrderTemplates;
