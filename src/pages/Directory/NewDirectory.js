import React, { useState } from "react";
import { Checkbox, Input, Select } from "antd";
import { useTranslation } from "react-i18next";

const NewDirectory = () => {
  const [check, setCheck] = useState([]);
  const [value, setValue] = useState("");
  const { t } = useTranslation();

  const options = [
    {
      label: `${t("directory.billing")}`,
      value: `${t("directory.billing")}`,
    },
    {
      label: `${t("directory.shipping")}`,
      value: `${t("directory.shipping")}`,
    },
    {
      label: `${t("directory.default")}`,
      value: `${t("directory.default")}`,
    },
    {
      label: `${t("directory.email")}`,
      value: `${t("directory.email")}`,
    },
    {
      label: `${t("directory.phone")}`,
      value: `${t("directory.phone")}`,
    },
    {
      label: `${t("directory.different")}`,
      value: `${t("directory.different")}`,
    },
  ];
  const onChange = (checkedValues) => {
    setCheck(checkedValues);
  };

  const handleChange = (e) => {
    setValue(e.target.value);
    console.log(`selected ${e.target.value}`);
  };
  return (
    <>
      <div className="dashBoardMainPage">
        <div className="row mb-[20px]">
          <div className="col-lg-6">
            <h1 className="font-[600] text-[#a8a69d]">{t("directory.new")}</h1>
          </div>
          <div className="col-lg-6 flex justify-end">
            <button className="nextBtn">{t("fifthStep.save")}</button>
          </div>
        </div>
        <div className="borderDash"></div>
        <div className="row">
          <div className="col-lg-12">
            <div className="table p-[10px]">
              <div className="row px-[20px] ">
                <div className="col-lg-8">
                  <div className="row">
                    <div className="mb-[20px]">
                      <h5 className="label-headings ">
                        {t("directory.address")}
                      </h5>
                    </div>
                    <div className="col-lg-6 mb-[20px] ">
                      <Input
                        placeholder={t("signUp.number")}
                        className="h-[50px] success"
                        style={{ borderRadius: "5px" }}
                      />
                    </div>
                    <div className="col-lg-6 mb-[20px]">
                      <Input
                        name="email"
                        placeholder={t("signUp.email")}
                        className="h-[50px] success"
                        style={{ borderRadius: "5px" }}
                      />
                    </div>
                    <div className="col-lg-12 mb-[20px]">
                      {/* <h5 className="label-headings">{t("fourthStep.business")}</h5> */}
                      <Input
                        placeholder={t("fourthStep.business")}
                        className="h-[50px] success"
                        style={{ borderRadius: "5px" }}
                      />
                    </div>
                    <div className="col-lg-4 mb-[20px]">
                      <Select
                        placeholder={t("signUp.salutation")}
                        style={{
                          borderRadius: "5px",
                          height: "45px",
                          border: "none",
                        }}
                        className="h-[50px] success w-full border-none"
                        onChange={handleChange}
                        options={[
                          {
                            value: "frau",
                            label: `${t("signUp.frau")}`,
                          },
                          {
                            value: "herr",
                            label: `${t("signUp.herr")}`,
                          },
                          {
                            value: "diver",
                            label: `${t("signUp.Divers")}`,
                          },
                        ]}
                      />
                    </div>
                    <div className="col-lg-4 mb-[20px]">
                      <Input
                        placeholder={t("signUp.first")}
                        className="h-[50px] success"
                        style={{ borderRadius: "5px" }}
                      />
                    </div>
                    <div className="col-lg-4 mb-[20px]">
                      <Input
                        placeholder={t("signUp.sur")}
                        className="h-[50px] success"
                        style={{ borderRadius: "5px" }}
                      />
                    </div>
                    <div className="col-lg-4 mb-[20px]">
                      <Input
                        placeholder={t("signUp.post_code")}
                        className="h-[50px] success"
                        style={{ borderRadius: "5px" }}
                      />
                    </div>

                    <div className="col-lg-4 mb-[20px]">
                      {/* <h5 className="label-headings">{t("fourthStep.street")}</h5> */}
                      <Input
                        placeholder={t("fourthStep.street")}
                        className="h-[50px] success"
                        style={{ borderRadius: "5px" }}
                      />
                    </div>
                    <div className="col-lg-4 mb-[20px]">
                      {/* <h5 className="label-headings">{t("fourthStep.post")}</h5> */}
                      <Input
                        placeholder={t("fourthStep.address")}
                        className="h-[50px] success"
                        style={{ borderRadius: "5px" }}
                      />
                    </div>
                    <div className="col-lg-6 mb-[20px]">
                      <Select
                        placeholder={t("signUp.type")}
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
                            label: `${t("signUp.sole")}`,
                          },
                          {
                            value: "lucy",
                            label: `${t("signUp.gese")}`,
                          },
                        ]}
                      />
                    </div>
                    <div className="col-lg-6 mb-[20px]">
                      <Input
                        placeholder={t("signUp.tax")}
                        className="h-[50px] success"
                        style={{ borderRadius: "5px" }}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="row">
                    <div className="mb-[20px]">
                      <h5 className="label-headings ">
                        {t("directory.optional")}
                      </h5>
                    </div>
                    <div className="col-lg-12 mb-[20px]">
                      <Select
                        placeholder={t("firstStep.type")}
                        style={{
                          borderRadius: "5px",
                          height: "45px",
                          border: "none",
                        }}
                        className="h-[50px] success w-full border-none"
                        onChange={handleChange}
                        options={[
                          {
                            value: "commercial",
                            label: `${t("firstStep.commercial")}`,
                          },
                          {
                            value: "home",
                            label: `${t("firstStep.home")}`,
                          },
                        ]}
                      />
                    </div>
                    <div className="col-lg-12 mb-[20px]">
                      <Input
                        placeholder={t("directory.internal")}
                        className="h-[50px] success"
                        style={{ borderRadius: "5px" }}
                      />
                    </div>
                    <div className="flex flex-col">
                      <Checkbox.Group
                        options={options}
                        defaultValue={["stackable"]}
                        onChange={onChange}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default NewDirectory;
