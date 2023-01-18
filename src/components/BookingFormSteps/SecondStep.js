import { Input, Select, Switch, Checkbox } from "antd";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const SecondStep = ({ setSteps }) => {
  const [value, setValue] = useState("");
  const [check, setCheck] = useState([]);
  const [switched, setSwitched] = useState(false);
  const { t } = useTranslation();

  const nextStep = () => {
    setSteps(3);
  };
  const previousStep = () => {
    setSteps(1);
  };
  const options = [
    {
      label: `${t("secondStep.stackable")}`,
      value: "stackable",
    },
    {
      label: `${t("secondStep.dangerous")}`,
      value: "dangerous",
    },
  ];

  const onChange = (checkedValues) => {
    setCheck(checkedValues);
  };

  const handleChange = (value) => {
    setValue(value);
    console.log(`selected ${value}`);
  };
  const onSwitch = (checked) => {
    setSwitched(checked);
    // console.log(`switch to ${checked}`);
  };
  return (
    <>
      <div className="flex justify-center flex-col w-full">
        <div className="mt-[20px] flex ">
          <h5 className="label-headings mr-[10px] pt-[3px]">
            {t("secondStep.package")}
          </h5>
          <Switch defaultChecked onChange={onSwitch} />
          <h6 className="label-headings ml-[10px] pt-[3px]">
            {t("secondStep.lademeter")}
          </h6>
        </div>
        {switched ? (
          <>
            <div className="row mt-[20px]">
              <div className="col-lg-4 mb-[20px]">
                <h5 className="label-headings">{t("secondStep.lademeter*")}</h5>
                <Input
                  placeholder={t("secondStep.lademeter*")}
                  className="h-[50px] success"
                  style={{ borderRadius: "5px" }}
                />
              </div>
              <div className="col-lg-4 mb-[20px]">
                <h5 className="label-headings">{t("secondStep.weight*")}</h5>
                <Input
                  placeholder={t("secondStep.weight*")}
                  className="h-[50px] success"
                  style={{ borderRadius: "5px" }}
                />
              </div>
              <div className="col-lg-4 mb-[20px]">
                <h5 className="label-headings">{t("secondStep.height*")}</h5>
                <Input
                  placeholder={t("secondStep.height*")}
                  className="h-[50px] success"
                  style={{ borderRadius: "5px" }}
                />
              </div>
              <div className="line-form mx-auto"></div>
              <div>
                <p className="text-[16px] font-500 text-[#111]">
                  {t("secondStep.detail")}
                </p>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="row mt-[20px]">
              <div className="col-lg-6 mb-[20px]">
                <h5 className="label-headings">{t("secondStep.number")}</h5>
                <Input
                  placeholder={t("secondStep.number")}
                  className="h-[50px] success"
                  style={{ borderRadius: "5px" }}
                />
              </div>
              <div className="col-lg-6 mb-[20px]">
                <h5 className="label-headings">{t("secondStep.charge")}</h5>
                <Select
                  placeholder={t("secondStep.charge")}
                  style={{
                    borderRadius: "5px",
                    height: "45px",
                    border: "none",
                  }}
                  className="h-[50px] success w-full border-none"
                  onChange={handleChange}
                  options={[
                    {
                      label: `${t("secondStep.pallets")}`,
                      options: [
                        {
                          label: `${t("secondStep.pallet")}`,
                          value: `pallet`,
                        },
                        {
                          label: `${t("secondStep.overhang")}`,
                          value: `${t("secondStep.overhang")}`,
                        },
                        {
                          label: `${t("secondStep.mesh")}`,
                          value: `${t("secondStep.mesh")}`,
                        },
                        {
                          label: `${t("secondStep.disposable")}`,
                          value: `${t("secondStep.disposable")}`,
                        },
                        {
                          label: `${t("secondStep.half")}`,
                          value: `${t("secondStep.half")}`,
                        },
                        {
                          label: `${t("secondStep.industry")}`,
                          value: `${t("secondStep.industry")}`,
                        },
                      ],
                    },
                    {
                      label: `${t("secondStep.vehicles")}`,
                      options: [
                        {
                          label: `${t("secondStep.bike")}`,
                          value: `${t("secondStep.bike")}`,
                        },
                        {
                          label: `${t("secondStep.E-Bike")}`,
                          value: `${t("secondStep.E-Bike")}`,
                        },
                        {
                          label: `${t("secondStep.motorbike")}`,
                          value: `${t("secondStep.motorbike")}`,
                        },
                      ],
                    },
                    {
                      label: `${t("secondStep.furniture")}`,
                      options: [
                        {
                          label: `${t("secondStep.packaged")}`,
                          value: `${t("secondStep.packaged")}`,
                        },
                        {
                          label: `${t("secondStep.individual")}`,
                          value: `${t("secondStep.individual")}`,
                        },
                        {
                          label: `${t("secondStep.whole")}`,
                          value: `${t("secondStep.whole")}`,
                        },
                        {
                          label: `${t("secondStep.complete")}`,
                          value: `${t("secondStep.complete")}`,
                        },
                      ],
                    },
                    {
                      label: `${t("secondStep.other")}`,
                      options: [
                        {
                          label: `${t("secondStep.palletized")}`,
                          value: `${t("secondStep.palletized")}`,
                        },
                        {
                          label: `${t("secondStep.nonPalletized")}`,
                          value: `${t("secondStep.nonPalletized")}`,
                        },
                        {
                          label: `${t("secondStep.otherPackages")}`,
                          value: `${t("secondStep.otherPackages")}`,
                        },
                      ],
                    },
                  ]}
                />
              </div>
            </div>
            <div className="row mt-[10px]">
              <div className="col-lg-3 mb-[20px]">
                <h5 className="label-headings">{t("secondStep.length")}</h5>
                <Input
                  placeholder={t("secondStep.length")}
                  className="h-[50px] success"
                  style={{ borderRadius: "5px" }}
                />
              </div>
              <div className="col-lg-3 mb-[20px]">
                <h5 className="label-headings">{t("secondStep.width")}</h5>
                <Input
                  placeholder={t("secondStep.width")}
                  className="h-[50px] success"
                  style={{ borderRadius: "5px" }}
                />
              </div>
              <div className="col-lg-3 mb-[20px]">
                <h5 className="label-headings">{t("secondStep.height")}</h5>
                <Input
                  placeholder={t("secondStep.height")}
                  className="h-[50px] success"
                  style={{ borderRadius: "5px" }}
                />
              </div>
              <div className="col-lg-3 mb-[20px]">
                <h5 className="label-headings">{t("secondStep.weight")}</h5>
                <Input
                  placeholder={t("secondStep.weight")}
                  className="h-[50px] success"
                  style={{ borderRadius: "5px" }}
                />
              </div>
            </div>
            <div>
              <Checkbox.Group
                options={options}
                defaultValue={["Pear"]}
                onChange={onChange}
              />
            </div>
            <div className="flex mt-[20px]">
              <i className="fa-solid fa-circle-plus pr-[5px] text-[#1b5ada] pt-[5px]"></i>
              <button className="btn-addPackage ">
                {t("secondStep.addPackage")}
              </button>
            </div>
          </>
        )}

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

export default SecondStep;
