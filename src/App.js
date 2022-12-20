import "./i18n";
import SideBar from "./pages/dashboardPage/SideBar";
import Spinner from "./components/Spinner/Spinner";
import Login from "./pages/login/login";
import "react-datepicker/dist/react-datepicker.css";
import "./pages/dashboardPage/dashboard.css";
import { Route, Routes, useLocation } from "react-router";
import Nav from "./components/Nav/Nav";
import DashboardPage from "./pages/DashbaordMain/DashboardPage";
import MyOrders from "./pages/MyOrders/MyOrders";
import Settings from "./pages/Settings/Settings";
import Directory from "./pages/Directory/Directory";
import OrderTemplates from "./pages/OrderTemplates/OrderTemplates";
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
          </Routes>
          {location.pathname === "/login" ? null : <Nav />}

          <div className="MainPage">
            {/* <Login /> */}
            {location.pathname === "/login" ? null : <SideBar />}
            {/* {location.pathname === "/login" ? null : <SideBar />} */}

            <div className="RoutesMain">
              <Routes>
                <Route path="/" element={<DashboardPage />} />
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
