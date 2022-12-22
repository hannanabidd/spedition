import React, { useState } from "react";
import OtpInput from "react-otp-input";
import { useNavigate } from "react-router-dom";

const Otp = ({ setOtpform, email }) => {
  const navigate = useNavigate();
  const [verification_code, setverification_code] = useState("");
  const handleChange = (verification_code) =>
    setverification_code(verification_code);
  // const handleSubmitOtp = async () => {
  //   try {
  //     const res = await ApiCall({
  //       route: `app_api/code_verification`,
  //       verb: "post",
  //       params: { verification_code, email },
  //     });

  //     if (res?.status == "200") {
  //       Swal.fire({
  //         position: "center",
  //         icon: "success",
  //         title: "OTP verified  ",
  //         showConfirmButton: true,
  //         timer: 30000,
  //       });
  //       navigate("/reset-password");
  //     } else {
  //       Swal.fire("OTP not match ", "Try again", "error");
  //     }
  //   } catch (e) {
  //     Swal.fire("invalid OTP  ", "Try again", "error");
  //   }
  // };

  // const handleSubmit = async (e) => {
  //   try {
  //     const res = await ApiCall({
  //       route: `app_api/email_verification`,
  //       verb: "post",
  //       params: { email: email },
  //     });

  //     if (res?.status == "200") {
  //       Swal.fire({
  //         position: "center",
  //         icon: "success",
  //         title: "OTP sent",
  //         showConfirmButton: true,
  //         timer: 3000,
  //       });
  //     } else {
  //       Swal.fire(res?.response?.message, "Try again", "error");
  //     }
  //   } catch (e) {
  //     Swal.fire("Network Error ", "Try again", "error");
  //   }
  // };

  return (
    <>
      {" "}
      <>
        <div>
          <div className="flex justify-center">
            <div className="w-[80%]">
              <h1 className="text-[#2F2E2E] text-center text-[45px] leading-[64px] font-semibold ">
                Enter OTP
              </h1>
              <h2 className="text-[#2F2E2E] py-[10px] text-center text-[14px] leadind-[200%]  ">
                We sent OTP to the email address . Please check your email.
              </h2>
            </div>
          </div>
          <div>
            <form>
              <div className="mb-3 pt-[40px]">
                <div className="flex justify-center">
                  <OtpInput
                    value={verification_code}
                    onChange={handleChange}
                    numInputs={6}
                    separator={<span style={{ width: "8px" }}></span>}
                    isInputNum={true}
                    shouldAutoFocus={true}
                    inputStyle={{
                      border: "2px solid #000",
                      borderRadius: "8px",
                      width: "54px",
                      height: "54px",
                      fontSize: "18px",
                      color: "#000",
                      fontWeight: "400",
                      background: "#ffff",
                      caretColor: "blue",
                    }}
                    focusStyle={{
                      border: "3px solid #002fa7",
                      outline: "none",
                    }}
                  />
                </div>
              </div>
              <div className="flex justify-center mt-[20px] cursor-pointer ">
                <div onClick={() => setOtpform(true)}>
                  {" "}
                  <h2 className="text-sm text-[#002fa7] ">Change Email</h2>{" "}
                </div>
              </div>

              <div className="flex justify-center mt-[10px] cursor-pointer ">
                {" "}
                <h2
                  onClick={(e) => {
                    e.preventDefault();
                    // handleSubmit(e);
                  }}
                  className="text-sm text-[#002fa7] "
                >
                  Resend OTP
                </h2>{" "}
              </div>

              <div className=" py-8 flex justify-center   ">
                {/* <Link to='/ResetPassword' > */}{" "}
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    // handleSubmitOtp({ e, verification_code });
                  }}
                  type="submit"
                  className="text-white my-6  bg-[#002fa7]   outline-0  font-medium rounded-xl text-sm px-12 h-[50px] text-center  "
                >
                  Reset password
                </button>{" "}
                {/* </Link> */}
              </div>
            </form>
          </div>
        </div>
      </>
    </>
  );
};

export default Otp;
