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
  const [value, setValue] = useState("private");

  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  const handleChange = (e) => {
    setValue(e.target.value);
    console.log(`selected ${e.target.value}`);
  };

  /* Login data state */
  const [data, setData] = useState({ email: "", password: "" });

  console.log(data);
  return (
    <div className='loginPage'>
      {/* {isAuthenticated && <Navigate to={"/"} />} */}
      <div className='loginWelcome'>
        <div className='loginFirstWelcome flex items-center h-[100%]'>
          <img src={Logo} alt='icon' />
          <h1>Welcome! Let’s get started where you left.</h1>
        </div>
        <div className='loginSecondWelcome'></div>
      </div>
      <div className='loginForm flex justify-center'>
        <div className='logLogin'>
          <img src={Logo} alt='icon' />
        </div>
        <form
          onChange={({ target: { id, value } }) => {
            console.log(id);
            setData({ ...data, [id]: value });
          }}
          className='loginFormInputs'>
          <h2>{t("signUp.sign")}</h2>
          <p className='para'>
            {t("signUp.already")}
            <Link to='/login'>
              <span className='ml-[5px] '>Login</span>
            </Link>
          </p>
          <div className='radio-btn mt-[15px]'>
            <Radio.Group onChange={onChange} value={value}>
              <Radio value='private' defaultChecked={true}>
                {t("signUp.private")}
              </Radio>
              <Radio value='commercial'>{t("signUp.commercial")}</Radio>
            </Radio.Group>
          </div>

          <div className='row w-full mt-[30px]'>
            {value === "commercial" && (
              <div>
                <div className='col-lg-12 mb-[20px]'>
                  <Input
                    placeholder={t("signUp.company")}
                    className='h-[50px] success'
                    style={{ borderRadius: "5px" }}
                  />
                </div>
                <div className='col-lg-12 mb-[20px]'>
                  <Select
                    placeholder={t("signUp.type")}
                    style={{
                      borderRadius: "5px",
                      height: "45px",
                      border: "none",
                    }}
                    className='h-[50px] success w-full border-none'
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
                <div className='col-lg-12 mb-[20px]'>
                  <Input
                    placeholder={t("signUp.tax")}
                    className='h-[50px] success'
                    style={{ borderRadius: "5px" }}
                  />
                </div>
              </div>
            )}
            <div className='col-lg-4 mb-[20px]'>
              <Select
                placeholder={t("signUp.salutation")}
                style={{
                  borderRadius: "5px",
                  height: "45px",
                  border: "none",
                }}
                className='h-[50px] success w-full border-none'
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
            <div className='col-lg-4 mb-[20px]'>
              <Input
                placeholder={t("signUp.first")}
                className='h-[50px] success'
                style={{ borderRadius: "5px" }}
              />
            </div>
            <div className='col-lg-4 mb-[20px]'>
              <Input
                placeholder={t("signUp.sur")}
                className='h-[50px] success'
                style={{ borderRadius: "5px" }}
              />
            </div>
            <div className='col-lg-8 mb-[20px]'>
              <Input
                placeholder={t("signUp.address")}
                className='h-[50px] success'
                style={{ borderRadius: "5px" }}
              />
            </div>
            <div className='col-lg-4 mb-[20px]'>
              <Input
                placeholder={t("signUp.supp")}
                className='h-[50px] success'
                style={{ borderRadius: "5px" }}
              />
            </div>
            <div className='col-lg-4 mb-[20px]'>
              <Input
                placeholder={t("signUp.post_code")}
                className='h-[50px] success'
                style={{ borderRadius: "5px" }}
              />
            </div>
            <div className='col-lg-8 mb-[20px]'>
              <Input
                placeholder={t("signUp.location")}
                className='h-[50px] success'
                style={{ borderRadius: "5px" }}
              />
            </div>
            <div className='col-lg-12 mb-[20px]'>
              <Select
                placeholder={t("signUp.country")}
                style={{
                  borderRadius: "5px",
                  height: "45px",
                  border: "none",
                }}
                className='h-[50px] success w-full border-none'
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
            <div className='col-lg-12 mb-[20px]'>
              <Input
                placeholder={t("signUp.number")}
                className='h-[50px] success'
                style={{ borderRadius: "5px" }}
              />
            </div>
            <div className='col-lg-12 mb-[20px]'>
              <Input
                name='email'
                placeholder={t("signUp.email")}
                className='h-[50px] success'
                style={{ borderRadius: "5px" }}
              />
            </div>
            <div className='col-lg-6 mb-[20px]'>
              <Input
                placeholder={t("signUp.password")}
                className='h-[50px] success'
                style={{ borderRadius: "5px" }}
              />
            </div>
            <div className='col-lg-6 mb-[20px]'>
              <Input
                placeholder={t("signUp.passwordR")}
                className='h-[50px] success'
                style={{ borderRadius: "5px" }}
              />
            </div>
          </div>
          <Link to={"/"}>
            <button className='login-btn'>
              {false ? <Circle height='0px' /> : "Sign Up"}
            </button>
          </Link>
          <div className='line mt-[30px] '></div>
        </form>
      </div>
    </div>
  );
};

export default Login;
