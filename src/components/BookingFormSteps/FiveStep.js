import { Input, Radio } from "antd";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import BillingAddressModal from "../Modals/BillingAddressModal";
const { TextArea } = Input;

const FiveStep = ({ setSteps }) => {
  const [show, setShow] = useState(false);
  const [value, setValue] = useState(1);
  const { t } = useTranslation();
  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  const nextStep = () => {
    setSteps(5);
  };
  const previousStep = () => {
    setSteps(4);
  };
  return (
    <>
      <div className="flex justify-center flex-col w-full">
        <div className="row mt-[50px]">
          <div className="col-lg-6 ">
            <h5 className="label-headings ">{t("fifthStep.payment")}</h5>
            <div className="payment-box  w-[70%]">
              <div className="flex">
                <div className="blue-dot"></div>
                <div className="flex justify-between w-full">
                  <p className="font-[500]">{t("fifthStep.invoice")}</p>
                  <div
                    className="flex cursor-pointer"
                    onClick={() => {
                      setShow(!show);
                    }}
                  >
                    <p className="text-[grey]">{t("fifthStep.more")}</p>
                    {show ? (
                      <>
                        <i className="fa-solid fa-chevron-up pl-[5px] pt-[5px] text-[var(--primaryColor)]"></i>
                      </>
                    ) : (
                      <>
                        <i className="fa-solid fa-chevron-down pl-[5px] pt-[4px] text-[var(--primaryColor)]"></i>
                      </>
                    )}
                  </div>
                </div>
              </div>

              {show && (
                <>
                  <p className="mt-[10px]">{t("fifthStep.add")}</p>
                </>
              )}
            </div>
          </div>
          <div className="col-lg-6 mb-[10px]">
            <h5 className="label-headings ">{t("fifthStep.billing")}</h5>
            <BillingAddressModal />
          </div>
        </div>
        <div className="row mt-[20px]">
          <div className="col-lg-6 mb-[10px]">
            <h5 className="label-headings ">{t("fifthStep.transport")}</h5>
            <Input
              placeholder={t("fifthStep.value")}
              className="h-[50px] success"
              style={{ borderRadius: "5px" }}
              suffix="€"
            />
          </div>
          <div className="col-lg-4 col-md-6 mb-[10px]">
            <h5 className="mt-[20px] text-[grey]">{t("fifthStep.no")}</h5>
          </div>

          <div className="col-lg-6 mb-[10px]">
            <Radio.Group onChange={onChange} value={value}>
              <Radio value={1}>{t("fifthStep.additionally")}</Radio>
              <Radio value={2}>{t("fifthStep.additional")}</Radio>
            </Radio.Group>
          </div>
        </div>
        <div className="row mt-[20px]">
          <div className="col-lg-6 mb-[10px]">
            <h5 className="label-headings ">{t("fifthStep.cargo")}</h5>
            <TextArea
              placeholder={t("fifthStep.description")}
              className="h-[50px] success "
              style={{ borderRadius: "5px" }}
              allowClear
              showCount
              maxLength={200}
              rows={5}
            />
          </div>
          <div className="col-lg-4 col-md-6 mb-[10px]">
            <h5 className="mt-[20px] text-[grey]">{t("fifthStep.tell")}</h5>
          </div>
          <div className="col-lg-6 mb-[10px]">
            <h5 className="label-headings ">{t("fifthStep.message")}</h5>
            <TextArea
              placeholder={t("fifthStep.special")}
              className="h-[50px] success "
              style={{ borderRadius: "5px" }}
              allowClear
              showCount
              maxLength={200}
              rows={5}
            />
          </div>
          <div className="col-lg-4 col-md-6 mb-[10px]">
            <h5 className="mt-[20px] text-[grey]">{t("fifthStep.printed")}</h5>
          </div>
          <div className="col-lg-6 mb-[10px]">
            <h5 className="label-headings ">{t("fifthStep.internal")}</h5>
            <TextArea
              placeholder={t("fifthStep.attention")}
              className="h-[50px] success "
              style={{ borderRadius: "5px" }}
              allowClear
              showCount
              maxLength={200}
              rows={5}
            />
          </div>
          <div className="col-lg-4 col-md-6 mb-[10px]">
            <h5 className="mt-[20px] text-[grey]">
              {t("fifthStep.transaction")}
            </h5>
          </div>
        </div>
        <div className="flex justify-end w-full mt-[30px]">
          <button className="nextBtn" onClick={previousStep}>
            Preview
          </button>
          <button className="nextBtn mx-[30px]" onClick={nextStep}>
            Book
          </button>
        </div>
      </div>
    </>
  );
};

export default FiveStep;
