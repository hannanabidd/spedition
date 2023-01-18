import React, { useState } from "react";
import { Input, Modal, Select } from "antd";
import { useTranslation } from "react-i18next";

const BillingAddressModal = () => {
  const { t } = useTranslation();
  const [value, setValue] = useState("");
  const [modal, setModal] = useState(false);

  const handleChange = (e) => {
    setValue(e.target.value);
    console.log(`selected ${e.target.value}`);
  };

  return (
    <>
      <button className="nextBtn" onClick={() => setModal(true)}>
        {t("fifthStep.addAddress")}
      </button>
      <Modal
        title={t("fifthStep.title")}
        open={modal}
        onOk={() => setModal(false)}
        onCancel={() => setModal(false)}
        width={800}
      >
        <>
          <div className="row px-[20px] ">
            <div className="col-lg-12 mb-[10px]">
              {/* <h5 className="label-headings">{t("fourthStep.business")}</h5> */}
              <Input
                placeholder={t("fourthStep.business")}
                className="h-[50px] success"
                style={{ borderRadius: "5px" }}
              />
            </div>
            <div className="col-lg-4 mb-[10px]">
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
            <div className="col-lg-4 mb-[10px]">
              <Input
                placeholder={t("signUp.first")}
                className="h-[50px] success"
                style={{ borderRadius: "5px" }}
              />
            </div>
            <div className="col-lg-4 mb-[10px]">
              <Input
                placeholder={t("signUp.sur")}
                className="h-[50px] success"
                style={{ borderRadius: "5px" }}
              />
            </div>
            <div className="col-lg-8 mb-[10px]">
              {/* <h5 className="label-headings">{t("fourthStep.street")}</h5> */}
              <Input
                placeholder={t("fourthStep.street")}
                className="h-[50px] success"
                style={{ borderRadius: "5px" }}
              />
            </div>
            <div className="col-lg-4 mb-[10px]">
              {/* <h5 className="label-headings">{t("fourthStep.post")}</h5> */}
              <Input
                placeholder={t("fourthStep.address")}
                className="h-[50px] success"
                style={{ borderRadius: "5px" }}
              />
            </div>
            <div className="col-lg-4 mb-[10px]">
              <Input
                placeholder={t("fifthStep.plz")}
                className="h-[50px] success"
                style={{ borderRadius: "5px" }}
              />
            </div>
            <div className="col-lg-4 mb-[10px]">
              <Input
                placeholder={t("fifthStep.ort")}
                className="h-[50px] success"
                style={{ borderRadius: "5px" }}
              />
            </div>
            <div className="col-lg-4 mb-[10px]">
              <Select
                placeholder={t("signUp.country")}
                style={{
                  borderRadius: "5px",
                  height: "45px",
                  border: "none",
                }}
                className="h-[50px] success w-full border-none"
                onChange={handleChange}
                options={[
                  {
                    value: "germany",
                    label: `Germany`,
                  },
                  {
                    value: "france",
                    label: `France`,
                  },
                  {
                    value: "italy",
                    label: `Italy`,
                  },
                  {
                    value: "canada",
                    label: `Canada`,
                  },
                  {
                    value: "japan",
                    label: `Japan`,
                  },
                  {
                    value: "china",
                    label: `China`,
                  },
                ]}
              />
            </div>
            <div className="col-lg-6 mb-[10px]">
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
            <div className="col-lg-6 mb-[10px]">
              <Input
                placeholder={t("signUp.tax")}
                className="h-[50px] success"
                style={{ borderRadius: "5px" }}
              />
            </div>
            <div className="col-lg-6 mb-[10px]">
              <Input
                placeholder={t("signUp.number")}
                className="h-[50px] success"
                style={{ borderRadius: "5px" }}
              />
            </div>
            <div className="col-lg-6 mb-[10px]">
              <Input
                name="email"
                placeholder={t("signUp.email")}
                className="h-[50px] success"
                style={{ borderRadius: "5px" }}
              />
            </div>
            <center>
              <button className="nextBtn">{t("fifthStep.save")}</button>
            </center>
          </div>
        </>
      </Modal>
    </>
  );
};

export default BillingAddressModal;
