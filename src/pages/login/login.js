import { useState } from "react";
import { Link } from "react-router-dom";
import Circle from "../../components/Circle/Circle";
import "./login.css";
import Logo from "../../assets/Logo.svg";

const Login = () => {
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
        <div className="loginSecondWelcome">
          {/* <img src={Logo} alt="icon" /> */}
        </div>
      </div>
      <div className="loginForm">
        <div className="logLogin">
          <img src="/images/iconBlue.svg" alt="icon" />
        </div>
        <form
          onChange={({ target: { id, value } }) => {
            setData({ ...data, [id]: value });
          }}
          className="loginFormInputs"
        >
          <h2>Login</h2>
          <div className="loginEmail">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Email" required />
          </div>
          <div className="loginPassword">
            <label htmlFor="password">Password</label>
            <input
              required
              type="password"
              id="password"
              placeholder="Password"
            />
          </div>
          <Link to={"/"}>
            <button>{false ? <Circle height="0px" /> : "Log in"}</button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
