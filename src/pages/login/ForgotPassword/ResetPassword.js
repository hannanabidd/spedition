import { Input } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import validator from "validator";
import Header from "../../../components/Common/Header";
import "../login.css";

const ResetPassword = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  const validate = (value) => {
    if (
      validator.isStrongPassword(value, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
    ) {
      setErrorMessage(" ");
    } else {
      setErrorMessage(
        "Password must be Uppecase Lowercase and Special characters  (min 8)  "
      );
    }
  };

  return (
    <>
      <Header />
      <div className="pt-9 pb-24 md:w-[45%] mx-auto">
        <div>
          <div className="card-shadow bg-transparent rounded px-[40px] pt-[30px]">
            <div className="flex justify-center">
              <div className="w-[80%]">
                <h1 className="text-[#002fa7] text-center md:text-[40px] leading-[64px] font-semibold ">
                  Reset password
                </h1>
              </div>
            </div>

            <div>
              <form
                onChange={({ target: { value, id } }) =>
                  setData({ ...data, ...(id && { [id]: value }) })
                }
              >
                <div className=" ">
                  <input style={{ borderRadius: "15px" }} />
                  <Input
                    type="password"
                    value={data?.email}
                    id="password"
                    placeholder="Enter new password"
                    required
                    style={{
                      marginTop: "30px",
                      width: "100%",
                      height: "42px",
                      borderRadius: "10px",
                    }}
                  />
                </div>

                <div className=" pt-[15px]">
                  <Input
                    type="password"
                    value={data?.email}
                    id="confirmPassword"
                    placeholder="Confrim password"
                    required
                    style={{
                      marginTop: "30px",
                      width: "100%",
                      height: "42px",
                      borderRadius: "10px",
                    }}
                  />
                </div>

                {/* <span
                  style={{
                    fontWeight: "bold",
                    color: "red",
                  }}
                >
                  {errorMessage}
                </span> */}

                <div className=" pt-12 pb-8 flex justify-center pb-7 ">
                  {" "}
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                    }}
                    type="submit"
                    className="text-white my-6  bg-[#002fa7]   outline-0  font-medium rounded-xl text-sm px-12 h-[55px] text-center  "
                  >
                    Update password
                  </button>{" "}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
