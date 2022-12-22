import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import validator from "validator";
import Otp from "./Otp";
import { Input } from "antd";
// import "../Login.css";
import Header from "../../../components/Common/Header";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [otpform, setOtpform] = useState(true);
  const [data, setData] = useState({});
  const [emailError, setEmailError] = useState("");
  const emailvalidation = () => {
    if (validator.isEmail(data.email)) {
      setEmailError("");
    } else {
      setEmailError("Invalid Email");
    }
  };

  const email = data.email;
  return (
    <>
      <Header />
      <div className="pt-9 pb-24 md:w-[45%] mx-auto">
        <div>
          <div className="card-shadow bg-transparent rounded px-[40px] pt-[30px]">
            {otpform ? (
              <div>
                {" "}
                <div className="flex justify-center">
                  <div className="w-[100%]">
                    <h1 className="text-[#002fa7] text-center md:text-[38px] leading-[54px] font-semibold line-hei">
                      Forgot password?
                    </h1>
                    <h2
                      className="text-[#2F2E2E] py-[10px] text-center text-[16px] leading-[20px] mt-[20px]"
                      style={{ lineHeight: "24px" }}
                    >
                      We will send a password reset code to the email address
                      given below. Please check you email to reset your password
                    </h2>
                  </div>
                </div>
                <div>
                  <form
                    onChange={({ target: { value, id } }) =>
                      setData({
                        ...data,
                        ...(id && { [id]: value }),
                      })
                    }
                  >
                    <div className="mb-3 pt-[10px]">
                      <Input
                        type="email"
                        value={data?.email}
                        id="email"
                        onChange={(e) => emailvalidation(e.target.value)}
                        placeholder="Email address"
                        required
                        style={{
                          marginTop: "30px",
                          width: "100%",
                          height: "42px",
                          borderRadius: "10px",
                        }}
                      />
                      <span
                        style={{
                          fontWeight: "light",
                          color: "red",
                        }}
                      >
                        {emailError}
                      </span>
                    </div>

                    <div className=" pt-4 pb-8 flex justify-center pb-7 ">
                      {/* <Link to='/ResetPassword' > */}{" "}
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          setOtpform(!otpform);
                        }}
                        type="submit"
                        className="text-white my-2  bg-[#002fa7]   outline-0  font-medium rounded-xl text-sm px-12 h-[50px] text-center  "
                      >
                        Send OTP
                      </button>{" "}
                      {/* </Link> */}
                    </div>
                  </form>
                </div>
              </div>
            ) : (
              <div>
                <Otp
                  setOtpform={setOtpform}
                  // handleSubmitOtp={handleSubmitOtp}
                  // email={data.email}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
