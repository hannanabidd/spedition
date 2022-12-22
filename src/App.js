import "./i18n";
import SideBar from "./pages/dashboardPage/SideBar";
import Spinner from "./components/Spinner/Spinner";
import Login from "./pages/login/login";
import ForgotPassword from "./pages/login/ForgotPassword/ForgotPassword";
import ResetPassword from "./pages/login/ForgotPassword/ResetPassword";
import "react-datepicker/dist/react-datepicker.css";
import "./pages/dashboardPage/dashboard.css";
import { Route, Routes, useLocation } from "react-router";
import Nav from "./components/Nav/Nav";
import DashboardPage from "./pages/DashbaordMain/DashboardPage";
import MyOrders from "./pages/MyOrders/MyOrders";
import Settings from "./pages/Settings/Settings";
import Directory from "./pages/Directory/Directory";
import OrderTemplates from "./pages/OrderTemplates/OrderTemplates";
import SenderSignup from "./pages/login/SenderSignup";
import LandingPage from "./pages/LandingPage/LandingPage";
function App() {
  const location = useLocation();

  return (
    <>
      {false ? (
        <Spinner />
      ) : (
        <div className="App">
          <Routes>
            <Route path="login" element={<Login />} />
            <Route path="/sender-signup" element={<SenderSignup />} />
          </Routes>
          {/* {location.pathname === "/login" ? null : <SideBar />} */}
          {location.pathname === "/" && "/login" ? null : <SideBar />}
          {/* {location.pathname === "sender-signup" ? null : <SideBar />} */}
          <div>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route
                path="/forgot-password"
                exact
                element={<ForgotPassword />}
              />
              <Route path="/reset-password" exact element={<ResetPassword />} />
            </Routes>
          </div>
          <div className="MainPage">
            {/* <Login /> */}

            {/* {location.pathname === "/login" ? null : <SideBar />} */}
            {/* <SideBar /> */}

            <div className="RoutesMain">
              <Routes>
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="/myOrders" element={<MyOrders />} />
                <Route path="/orderTemplates" element={<OrderTemplates />} />
                <Route path="/directory" element={<Directory />} />
                <Route path="/settings" element={<Settings />} />
              </Routes>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
