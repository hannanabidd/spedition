import { Input, Select } from "antd";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const FirstStep = ({ setSteps }) => {
  const [value, setValue] = useState("");
  const { t } = useTranslation();

  const nextStep = () => {
    setSteps(2);
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
            <h5 className="label-headings">{t("firstStep.pickup")}</h5>
            <Input
              placeholder={t("firstStep.zipCode")}
              className="h-[50px] success"
              style={{ borderRadius: "5px" }}
            />
          </div>
          <div className="col-lg-6 mb-[20px]">
            <h5 className="label-headings">{t("firstStep.delivery")}</h5>
            <Input
              placeholder={t("firstStep.zipCode")}
              className="h-[50px] success"
              style={{ borderRadius: "5px" }}
            />
          </div>
        </div>
        <div className="row mt-[10px]">
          <div className="col-lg-6 mb-[20px]">
            <h5 className="label-headings">{t("firstStep.type")}</h5>
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
          <div className="col-lg-6 mb-[20px]">
            <h5 className="label-headings">{t("firstStep.type")}</h5>
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
                {
                  value: "amazon",
                  label: `${t("firstStep.amazon")}`,
                },
                {
                  value: "harbor",
                  label: `${t("firstStep.harbor")}`,
                },
                {
                  value: "airport",
                  label: `${t("firstStep.airport")}`,
                },
              ]}
            />
          </div>
        </div>
        <div className="flex justify-end w-full mt-[30px]">
          <button className="nextBtn ">Preview</button>
          <button
            className="nextBtn mx-[30px]"
            // onClick={() => {
            //   setSteps(2);
            // }}
            onClick={nextStep}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default FirstStep;
