import React from "react";
import { Input } from "antd";
import { Select } from "antd";
import { useTranslation } from "react-i18next";

const Settings = () => {
  const { t } = useTranslation();

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  return (
    <>
      <div className="dashBoardMainPage">
        <div className="row mb-[20px]">
          <div className="col-lg-6">
            <h1>{t("settings.settings")} </h1>
          </div>
          <div className="col-lg-6 flex justify-end">
            <button className="sidebar-book">{t("settings.save")}</button>
          </div>
        </div>
        <div className="borderDash"></div>
        <div className="row">
          <div className="col-lg-12">
            <div className="table p-[10px]">
              <p className="text-[20px] text-600 ">{t("settings.details")} </p>
              <div className="row">
                <div className="col-lg-6 mb-[20px]">
                  <Input
                    placeholder={t("settings.company")}
                    className="h-[50px] success"
                    style={{ borderRadius: "5px" }}
                  />
                </div>
                <div className="col-lg-6 mb-[20px]">
                  <Select
                    placeholder={t("settings.companyType")}
                    style={{
                      borderRadius: "5px",
                      height: "45px",
                      border: "none",
                    }}
                    className="h-[50px] success w-full border-none"
                    onChange={handleChange}
                    options={[
                      {
                        value: "jack",
                        label: `${t("settings.no")}`,
                      },
                      {
                        value: "lucy",
                        label: `${t("settings.sole")}`,
                      },
                      {
                        value: "Yiminghe",
                        label: `${t("settings.type")}`,
                      },
                    ]}
                  />
                </div>
                <div className="col-lg-3 mb-[20px]">
                  <Input
                    placeholder={t("settings.firstName")}
                    className="h-[50px] success"
                    style={{ borderRadius: "5px" }}
                  />
                </div>
                <div className="col-lg-3 mb-[20px]">
                  <Input
                    placeholder={t("settings.surname")}
                    className="h-[50px] success"
                    style={{ borderRadius: "5px" }}
                  />
                </div>
                <div className="col-lg-6 mb-[20px]">
                  <Select
                    // defaultValue="lucy"
                    placeholder={t("settings.salutation")}
                    style={{
                      borderRadius: "5px",
                      height: "45px",
                      border: "none",
                    }}
                    className="h-[50px] success w-full border-none"
                    onChange={handleChange}
                    options={[
                      {
                        value: "jack",
                        label: `${t("settings.woman")}`,
                      },
                      {
                        value: "lucy",
                        label: `${t("settings.mister")}`,
                      },
                      {
                        value: "Yiminghe",
                        label: `${t("settings.miscellaneous")}`,
                      },
                    ]}
                  />
                </div>
                <div className="col-lg-6 mb-[20px]">
                  <Input
                    placeholder={t("settings.addressOne")}
                    className="h-[50px] success"
                    style={{ borderRadius: "5px" }}
                  />
                </div>
                <div className="col-lg-6 mb-[20px]">
                  <Input
                    placeholder={t("settings.addressTwo")}
                    className="h-[50px] success"
                    style={{ borderRadius: "5px" }}
                  />
                </div>
                <div className="col-lg-6 mb-[20px]">
                  <Input
                    placeholder={t("settings.postCode")}
                    className="h-[50px] success"
                    style={{ borderRadius: "5px" }}
                  />
                </div>
                <div className="col-lg-6 mb-[20px]">
                  <Input
                    placeholder={t("settings.location")}
                    className="h-[50px] success"
                    style={{ borderRadius: "5px" }}
                  />
                </div>
                <div className="col-lg-6 mb-[20px]">
                  <Select
                    // defaultValue="lucy"
                    placeholder={t("settings.country")}
                    style={{
                      borderRadius: "5px",
                      height: "45px",
                      border: "none",
                    }}
                    className="h-[50px] success w-full border-none"
                    onChange={handleChange}
                    options={[
                      {
                        value: "jack",
                        label: "Austria",
                      },
                      {
                        value: "lucy",
                        label: "Germany",
                      },
                      {
                        value: "Albania",
                        label: "Albania",
                      },
                      {
                        value: "Albania",
                        label: "Japan",
                      },
                    ]}
                  />
                </div>
                <div className="col-lg-6 mb-[20px]">
                  <Input
                    placeholder={t("settings.phone")}
                    className="h-[50px] success"
                    style={{ borderRadius: "5px" }}
                  />
                </div>
                <div className="col-lg-6 mb-[20px]">
                  <Input
                    placeholder={t("settings.sales")}
                    className="h-[50px] success"
                    style={{ borderRadius: "5px" }}
                  />
                </div>
                <div className="col-lg-6 mb-[20px]">
                  <Input
                    placeholder={t("settings.email")}
                    className="h-[50px] success"
                    style={{ borderRadius: "5px" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;
