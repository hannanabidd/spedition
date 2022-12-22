import { useState } from "react";
import { Link } from "react-router-dom";
import Circle from "../../components/Circle/Circle";
import "./login.css";
import Logo from "../../assets/Logo.svg";
import { Input, Select } from "antd";
import { useTranslation } from "react-i18next";
import { Radio } from "antd";

const Login = () => {
  const { t } = useTranslation();
  const [value, setValue] = useState(1);

  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  /* Login data state */
  const [data, setData] = useState({ email: "", password: "" });
  return (
    <div className="loginPage">
      {/* {isAuthenticated && <Navigate to={"/"} />} */}
      <div className="loginWelcome">
        <div className="loginFirstWelcome flex items-center h-[100%]">
          <img src={Logo} alt="icon" />
          <h1>Welcome! Let’s get started where you left.</h1>
        </div>
        <div className="loginSecondWelcome"></div>
      </div>
      <div className="loginForm flex justify-center">
        <div className="logLogin">
          <img src={Logo} alt="icon" />
        </div>
        <form
          onChange={({ target: { id, value } }) => {
            setData({ ...data, [id]: value });
          }}
          className="loginFormInputs"
        >
          <h2>{t("signUp.sign")}</h2>
          <p className="para">
            {t("signUp.already")}
            <Link to="/login">
              <span className="ml-[5px] ">Login</span>
            </Link>
          </p>
          <div className="radio-btn mt-[15px]">
            <Radio.Group onChange={onChange} value={value}>
              <Radio value="commercial">{t("signUp.commercial")}</Radio>
              <Radio value="private">{t("signUp.private")}</Radio>
            </Radio.Group>
          </div>

          <div className="row w-full mt-[30px]">
            <div className="col-lg-12 mb-[20px]">
              <Input
                placeholder={t("signUp.business")}
                className="h-[50px] success"
                style={{ borderRadius: "5px" }}
              />
            </div>
            <div className="col-lg-12 mb-[20px]">
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
            <div className="col-lg-12 mb-[20px]">
              <Input
                placeholder={t("signUp.tax")}
                className="h-[50px] success"
                style={{ borderRadius: "5px" }}
              />
            </div>
            <div className="col-lg-4 mb-[20px]">
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
            <div className="col-lg-4 mb-[20px]">
              <Input
                placeholder={t("signUp.first")}
                className="h-[50px] success"
                style={{ borderRadius: "5px" }}
              />
            </div>
            <div className="col-lg-4 mb-[20px]">
              <Input
                placeholder={t("signUp.sur")}
                className="h-[50px] success"
                style={{ borderRadius: "5px" }}
              />
            </div>
            <div className="col-lg-8 mb-[20px]">
              <Input
                placeholder={t("signUp.address")}
                className="h-[50px] success"
                style={{ borderRadius: "5px" }}
              />
            </div>
            <div className="col-lg-4 mb-[20px]">
              <Input
                placeholder={t("signUp.supp")}
                className="h-[50px] success"
                style={{ borderRadius: "5px" }}
              />
            </div>
            <div className="col-lg-4 mb-[20px]">
              <Input
                placeholder={t("signUp.plz")}
                className="h-[50px] success"
                style={{ borderRadius: "5px" }}
              />
            </div>
            <div className="col-lg-8 mb-[20px]">
              <Input
                placeholder={t("signUp.ort")}
                className="h-[50px] success"
                style={{ borderRadius: "5px" }}
              />
            </div>
            <div className="col-lg-12 mb-[20px]">
              <Select
                placeholder={t("signUp.land")}
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
                    label: `Germany`,
                  },
                  {
                    value: "lucy",
                    label: `France`,
                  },
                  {
                    value: "lucy",
                    label: `Italy`,
                  },
                  {
                    value: "lucy",
                    label: `Canada`,
                  },
                  {
                    value: "lucy",
                    label: `Japan`,
                  },
                  {
                    value: "lucy",
                    label: `China`,
                  },
                ]}
              />
            </div>
            <div className="col-lg-12 mb-[20px]">
              <Input
                placeholder={t("signUp.number")}
                className="h-[50px] success"
                style={{ borderRadius: "5px" }}
              />
            </div>
            <div className="col-lg-12 mb-[20px]">
              <Input
                placeholder={t("signUp.email")}
                className="h-[50px] success"
                style={{ borderRadius: "5px" }}
              />
            </div>
            <div className="col-lg-6 mb-[20px]">
              <Input
                placeholder={t("signUp.password")}
                className="h-[50px] success"
                style={{ borderRadius: "5px" }}
              />
            </div>
            <div className="col-lg-6 mb-[20px]">
              <Input
                placeholder={t("signUp.passwordR")}
                className="h-[50px] success"
                style={{ borderRadius: "5px" }}
              />
            </div>
          </div>
          <Link to={"/"}>
            <button className="login-btn">
              {false ? <Circle height="0px" /> : "Sign Up"}
            </button>
          </Link>
          <div className="line mt-[30px] "></div>
        </form>
      </div>
    </div>
  );
};

export default Login;
