import { DatePicker, Select, Tooltip } from "antd";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Contract from "../../assets/contract.svg";

const ThirdStep = ({ setSteps }) => {
  const [value, setValue] = useState("");
  const [delivery, setDelivery] = useState("");
  const [pickup, setPickup] = useState("");
  const { t } = useTranslation();

  const options = [
    {
      label: `${t("thirdStep.drawer")}`,
      value: `${t("thirdStep.drawer")}`,
    },
    {
      label: `${t("thirdStep.pallet")}`,
      value: `${t("thirdStep.pallet")}`,
    },
    {
      label: `${t("thirdStep.forklift")}`,
      value: `${t("thirdStep.forklift")}`,
    },
    {
      label: `${t("thirdStep.unloading")}`,
      value: `${t("thirdStep.unloading")}`,
    },
    {
      label: `${t("thirdStep.person")}`,
      value: `${t("thirdStep.person")}`,
    },
    {
      label: `${t("thirdStep.personDelivery")}`,
      value: `${t("thirdStep.personDelivery")}`,
    },
    {
      label: `${t("thirdStep.kinderkran")}`,
      value: `${t("thirdStep.kinderkran")}`,
    },
    {
      label: `${t("thirdStep.a-bock")}`,
      value: `${t("thirdStep.a-bock")}`,
    },
    {
      label: `${t("thirdStep.side")}`,
      value: `${t("thirdStep.side")}`,
    },
    {
      label: `${t("thirdStep.above")}`,
      value: `${t("thirdStep.above")}`,
    },
  ];
  const trackingOptions = [
    {
      label: `${t("thirdStep.trackingOne")}`,
      value: `${t("thirdStep.trackingOne")}`,
    },
    {
      label: `${t("thirdStep.trackingTwo")}`,
      value: `${t("thirdStep.trackingTwo")}`,
    },
    {
      label: `${t("thirdStep.trackingThree")}`,
      value: `${t("thirdStep.trackingThree")}`,
    },
    {
      label: `${t("thirdStep.trackingFour")}`,
      value: `${t("thirdStep.trackingFour")}`,
    },
    {
      label: `${t("thirdStep.trackingFive")}`,
      value: `${t("thirdStep.trackingFive")}`,
    },
    {
      label: `${t("thirdStep.trackingSix")}`,
      value: `${t("thirdStep.trackingSix")}`,
    },
    {
      label: `${t("thirdStep.trackingSeven")}`,
      value: `${t("thirdStep.trackingSeven")}`,
    },
    {
      label: `${t("thirdStep.trackingEight")}`,
      value: `${t("thirdStep.trackingEight")}`,
    },
    {
      label: `${t("thirdStep.trackingNine")}`,
      value: `${t("thirdStep.trackingNine")}`,
    },
    {
      label: `${t("thirdStep.trackingTen")}`,
      value: `${t("thirdStep.trackingTen")}`,
    },
  ];
  const equipmentOptions = [
    {
      label: `${t("thirdStep.loadingOne")}`,
      value: `${t("thirdStep.loadingOne")}`,
    },
    {
      label: `${t("thirdStep.loadingTwo")}`,
      value: `${t("thirdStep.loadingTwo")}`,
    },
    {
      label: `${t("thirdStep.loadingThree")}`,
      value: `${t("thirdStep.loadingThree")}`,
    },
  ];
  const customOptions = [
    {
      label: `${t("thirdStep.customOne")}`,
      value: `${t("thirdStep.customOne")}`,
    },
    {
      label: `${t("thirdStep.customTwo")}`,
      value: `${t("thirdStep.customTwo")}`,
    },
    {
      label: `${t("thirdStep.customThree")}`,
      value: `${t("thirdStep.customThree")}`,
    },
    {
      label: `${t("thirdStep.customFour")}`,
      value: `${t("thirdStep.customFour")}`,
    },
  ];

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  const pickupDate = (date, dateString) => {
    setPickup(dateString);
  };
  const deliveryDate = (date, dateString) => {
    setDelivery(dateString);
  };
  const nextStep = () => {
    setSteps(4);
  };
  const previousStep = () => {
    setSteps(2);
  };

  return (
    <>
      <div className="flex justify-center flex-col w-full">
        <div className="row mt-[50px]">
          <div className="col-lg-6 mb-[20px]">
            <h5 className="label-headings">{t("thirdStep.pickup")}</h5>
            <DatePicker onChange={pickupDate} className="w-[50%] h-[35px]" />
          </div>
          <div className="col-lg-6 mb-[20px]">
            <h5 className="label-headings">{t("thirdStep.delivery")}</h5>
            <DatePicker onChange={deliveryDate} className="w-[50%] h-[35px]" />
          </div>
        </div>
        <div className="row mt-[10px]">
          <h5 className="label-headings"> {t("thirdStep.options")}</h5>
          <div className="col-lg-6 mb-[20px]">
            <Select
              mode="multiple"
              allowClear
              style={{
                width: "100%",
              }}
              placeholder={t("thirdStep.loading")}
              //   defaultValue={["a10", "c12"]}
              onChange={handleChange}
              options={options}
              className="overflow-x-scroll"
            />
          </div>
          <div className="col-lg-6 mb-[20px]">
            <Select
              mode="multiple"
              allowClear
              style={{
                width: "100%",
              }}
              placeholder={t("thirdStep.tracking")}
              //   defaultValue={["a10", "c12"]}
              onChange={handleChange}
              options={trackingOptions}
            />
          </div>
          <div className="col-lg-6 mb-[20px]">
            <Select
              mode="multiple"
              allowClear
              style={{
                width: "100%",
              }}
              placeholder={t("thirdStep.equipment")}
              //   defaultValue={["a10", "c12"]}
              onChange={handleChange}
              options={equipmentOptions}
            />
          </div>
          <div className="col-lg-6 mb-[20px]">
            <Select
              mode="multiple"
              allowClear
              style={{
                width: "100%",
              }}
              placeholder={t("thirdStep.custom")}
              //   defaultValue={["a10", "c12"]}
              onChange={handleChange}
              options={customOptions}
            />
          </div>
        </div>
        <div className="row mt-[10px]">
          <h5 className="label-headings"> {t("thirdStep.offerFound")}</h5>
          <div className="col-md-8 col-sm-12">
            <div className="offer-box md:flex">
              <div className="img w-[15%]  flex items-center justify-center">
                <img src={Contract} alt="image" className="h-[50px]" />
              </div>
              <div className="detail w-[55%]">
                <h2
                  className="font-bold"
                  style={{ fontSize: "22px", marginLeft: "0px" }}
                >
                  isg Express Logistik GmbH
                </h2>
                <p
                  className="font-[12px] mt-[5px]"
                  style={{
                    fontSize: "14px",
                    marginLeft: "0px",
                    fontStyle: "italic",
                  }}
                >
                  Bus/Suitcase (Express)
                </p>
                <div className="ml-[20px] mt-[10px]">
                  <ul style={{ listStyleType: "disc", color: "#a8a69d" }}>
                    <li>Duration 0 -2 days</li>
                    <li>Earliest possible pick-up date: 01/12/2023</li>
                    <li>Palette not necessary</li>
                  </ul>
                </div>
              </div>
              <div className="price w-[30%] pl-[15px] justify-between flex flex-col">
                <div>
                  <h2
                    className="font-bold"
                    style={{ fontSize: "22px", marginLeft: "0px" }}
                  >
                    577,10 €
                  </h2>
                  <p
                    className="font-[12px] mt-[2px]"
                    style={{
                      fontSize: "12px",
                      marginLeft: "0px",
                      fontStyle: "italic",
                      color: "#a8a69d",
                    }}
                  >
                    including additional services (excl. 19% VAT)
                  </p>
                </div>
                <div>
                  <center>
                    <button className="btn-select">Select</button>
                  </center>
                  <center>
                    <Tooltip
                      title="Client must act commercially"
                      placement="bottom"
                    >
                      <span
                        style={{
                          fontSize: "12px",
                          color: "grey",
                        }}
                      >
                        Show hints!
                      </span>
                    </Tooltip>
                  </center>
                </div>
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

export default ThirdStep;
