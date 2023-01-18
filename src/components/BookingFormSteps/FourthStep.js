import { Checkbox, Input, Select } from "antd";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const FourthStep = ({ setSteps }) => {
  const [check, setCheck] = useState([]);
  const [value, setValue] = useState("");
  const { t } = useTranslation();

  const nextStep = () => {
    setSteps(5);
  };
  const previousStep = () => {
    setSteps(3);
  };
  const options = [
    {
      label: `${t("fourthStep.save")}`,
      value: "stackable",
    },
    {
      label: `${t("fourthStep.confirmation")}`,
      value: "dangerous",
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
      <div className="flex justify-center flex-col w-full">
        <div className="row mt-[50px]">
          <div className="col-lg-6 mb-[20px]">
            <h5 className="label-headings underline">
              {t("fourthStep.pickup")}
            </h5>
            <div className="row">
              <div className="col-lg-12 mb-[10px]">
                <h5 className="label-headings">{t("fourthStep.business")}</h5>
                <Input
                  placeholder={t("fourthStep.business")}
                  className="h-[50px] success"
                  style={{ borderRadius: "5px" }}
                />
              </div>
              <div className="col-lg-6 mb-[10px]">
                <h5 className="label-headings">{t("fourthStep.first")}</h5>
                <Input
                  placeholder={t("fourthStep.first")}
                  className="h-[50px] success"
                  style={{ borderRadius: "5px" }}
                />
              </div>
              <div className="col-lg-6  mb-[10px]">
                <h5 className="label-headings">{t("fourthStep.sur")}</h5>
                <Input
                  placeholder={t("fourthStep.sur")}
                  className="h-[50px] success"
                  style={{ borderRadius: "5px" }}
                />
              </div>
              <div className="col-lg-8 mb-[10px]">
                <h5 className="label-headings">{t("fourthStep.street")}</h5>
                <Input
                  placeholder={t("fourthStep.street")}
                  className="h-[50px] success"
                  style={{ borderRadius: "5px" }}
                />
              </div>
              <div className="col-lg-4 mb-[10px]">
                <h5 className="label-headings">{t("fourthStep.post")}</h5>
                <Input
                  placeholder={t("fourthStep.address")}
                  className="h-[50px] success"
                  style={{ borderRadius: "5px" }}
                />
              </div>
              <div className="col-lg-12 mb-[10px]">
                <h5 className="label-headings">{t("fourthStep.postCode")}</h5>
                <Input
                  placeholder={t("fourthStep.postCode")}
                  className="h-[50px] success"
                  style={{ borderRadius: "5px" }}
                />
              </div>
              <div className="col-lg-6 mb-[10px]">
                <h5 className="label-headings">{t("fourthStep.email")}</h5>
                <Input
                  placeholder={t("fourthStep.email")}
                  className="h-[50px] success"
                  style={{ borderRadius: "5px" }}
                />
              </div>
              <div className="col-lg-6 mb-[10px]">
                <h5 className="label-headings">{t("fourthStep.telephone")}</h5>
                <Input
                  placeholder={t("fourthStep.telephone")}
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
          <div className="col-lg-6 mb-[20px]">
            <h5 className="label-headings underline">
              {t("fourthStep.delivery")}
            </h5>
            <div className="row">
              <div className="col-lg-12 mb-[10px]">
                <h5 className="label-headings">{t("fourthStep.business")}</h5>
                <Input
                  placeholder={t("fourthStep.business")}
                  className="h-[50px] success"
                  style={{ borderRadius: "5px" }}
                />
              </div>
              <div className="col-lg-6 mb-[10px]">
                <h5 className="label-headings">{t("fourthStep.first")}</h5>
                <Input
                  placeholder={t("fourthStep.first")}
                  className="h-[50px] success"
                  style={{ borderRadius: "5px" }}
                />
              </div>
              <div className="col-lg-6  mb-[10px]">
                <h5 className="label-headings">{t("fourthStep.sur")}</h5>
                <Input
                  placeholder={t("fourthStep.sur")}
                  className="h-[50px] success"
                  style={{ borderRadius: "5px" }}
                />
              </div>
              <div className="col-lg-8 mb-[10px]">
                <h5 className="label-headings">{t("fourthStep.street")}</h5>
                <Input
                  placeholder={t("fourthStep.street")}
                  className="h-[50px] success"
                  style={{ borderRadius: "5px" }}
                />
              </div>
              <div className="col-lg-4 mb-[10px]">
                <h5 className="label-headings">{t("fourthStep.post")}</h5>
                <Input
                  placeholder={t("fourthStep.address")}
                  className="h-[50px] success"
                  style={{ borderRadius: "5px" }}
                />
              </div>
              <div className="col-lg-12 mb-[10px]">
                <h5 className="label-headings">{t("fourthStep.postCode")}</h5>
                <Input
                  placeholder={t("fourthStep.postCode")}
                  className="h-[50px] success"
                  style={{ borderRadius: "5px" }}
                />
              </div>
              <div className="col-lg-6 mb-[10px]">
                <h5 className="label-headings">{t("fourthStep.email")}</h5>
                <Input
                  placeholder={t("fourthStep.email")}
                  className="h-[50px] success"
                  style={{ borderRadius: "5px" }}
                />
              </div>
              <div className="col-lg-6 mb-[10px]">
                <h5 className="label-headings">{t("fourthStep.telephone")}</h5>
                <Input
                  placeholder={t("fourthStep.telephone")}
                  className="h-[50px] success"
                  style={{ borderRadius: "5px" }}
                />
              </div>
              <div>
                <Checkbox.Group
                  options={options}
                  defaultValue={["stackable"]}
                  onChange={onChange}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end w-full mt-[30px]">
          <button className="nextBtn" onClick={previousStep}>
            Preview
          </button>
          <button className="nextBtn mx-[30px]" onClick={nextStep}>
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default FourthStep;
