import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import FirstStep from "../../components/BookingFormSteps/FirstStep";
import FiveStep from "../../components/BookingFormSteps/FiveStep";
import FourthStep from "../../components/BookingFormSteps/FourthStep";
import SecondStep from "../../components/BookingFormSteps/SecondStep";
import ThirdStep from "../../components/BookingFormSteps/ThirdStep";
import "./BookingForm.css";

const BookingForm = () => {
  const [steps, setSteps] = useState(1);
  console.log(steps);
  const { t } = useTranslation();

  return (
    <>
      <div className="dashBoardMainPage">
        <div className="row mb-[20px]">
          <div className="col-lg-6">
            <h1 className="font-[600] text-[#a8a69d]">
              {t("booking.booking")}
            </h1>
          </div>
          <div className="col-lg-6 flex justify-end">
            <button className="btn-reset mr-[30px]">
              {t("booking.resetBtn")}
            </button>

            <button className="sidebar-book  ">{t("booking.totalBtn")}</button>
          </div>
        </div>
        <div className="borderDash"></div>
        <div className="row">
          <div className="col-lg-12 ">
            <div className="table-box ">
              <div className="md:flex justify-between w-full ">
                <div className="md:w-[19%]">
                  <div
                    className={` ${
                      steps === 1 ? `active-step-box` : `steps-box`
                    }  `}
                  >
                    <div
                      className={` ${
                        steps === 1 ? `active-circle` : `circle`
                      }  `}
                    >
                      <h1 className="count">1.</h1>
                    </div>
                    <p className="">Collection & Delivery</p>
                  </div>
                </div>
                <div className="md:w-[19%]">
                  <div
                    className={` ${
                      steps === 2 ? `active-step-box` : `steps-box`
                    }  `}
                  >
                    <div
                      className={` ${
                        steps === 2 ? `active-circle` : `circle`
                      }  `}
                    >
                      <h1 className="count">2.</h1>
                    </div>
                    <p className="">Charge</p>
                  </div>
                </div>
                <div className="md:w-[19%]">
                  <div
                    className={` ${
                      steps === 3 ? `active-step-box` : `steps-box`
                    }  `}
                  >
                    <div
                      className={` ${
                        steps === 3 ? `active-circle` : `circle`
                      }  `}
                    >
                      <h1 className="count">3.</h1>
                    </div>
                    <p className="">Offers</p>
                  </div>
                </div>
                <div className="md:w-[19%]">
                  <div
                    className={` ${
                      steps === 4 ? `active-step-box` : `steps-box`
                    }  `}
                  >
                    <div
                      className={` ${
                        steps === 4 ? `active-circle` : `circle`
                      }  `}
                    >
                      <h1 className="count">4.</h1>
                    </div>
                    <p className="">Address</p>
                  </div>
                </div>
                <div className="md:w-[19%]">
                  <div
                    className={` ${
                      steps === 5 ? `active-step-box` : `steps-box`
                    }  `}
                  >
                    <div
                      className={` ${
                        steps === 5 ? `active-circle` : `circle`
                      }  `}
                    >
                      <h1 className="count">5.</h1>
                    </div>
                    <p className="">Payment </p>
                  </div>
                </div>
              </div>
              <div>
                {steps === 1 && <FirstStep setSteps={setSteps} />}
                {steps === 2 && <SecondStep setSteps={setSteps} />}
                {steps === 3 && <ThirdStep setSteps={setSteps} />}
                {steps === 4 && <FourthStep setSteps={setSteps} />}
                {steps === 5 && <FiveStep setSteps={setSteps} />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingForm;
