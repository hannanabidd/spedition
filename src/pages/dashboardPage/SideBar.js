import { default as React, useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";
import Icons from "../../assets/Icons";
import { authSlice } from "../../redux/slices";
import { useTranslation } from "react-i18next";
import Logo from "../../assets/Logo.svg";

const SideBar = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [showItems, setShowItems] = useState(false);
  const [showReportsItem, setShowReportItem] = useState(false);
  const [showUtilityItem, setShowUtilityItem] = useState(false);
  const [showSideBar, setShowSideBar] = useState(false);
  const [translateNav, setTranslateNav] = useState(false);
  const [activeReport, setActiveReport] = useState(false);
  const [rendering, setRendering] = useState(false);
  const [activeUtils, setActiveUtils] = useState(false);
  const [activePatient, setActivePatient] = useState(false);
  const ref = useRef();

  useEffect(() => {
    document.addEventListener("click", handleClickOutSide, true);
    return () => {
      document.removeEventListener("click", handleClickOutSide, true);
    };
  }, [ref]);

  const handleClickOutSide = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setTranslateNav(false);
    }
  };

  const showClassHandler = () => {
    setShowItems(!showItems);
    setShowReportItem(false);
    setShowUtilityItem(false);
  };
  const showNavBarHam = () => {
    setShowSideBar(!showSideBar);
  };
  const showReports = () => {
    setShowReportItem(!showReportsItem);
    setShowUtilityItem(false);
    setShowItems(false);
  };
  const showResponsivenavBar = () => {
    setTranslateNav(!translateNav);
  };
  const showUtility = () => {
    setShowUtilityItem(!showUtilityItem);
    setShowItems(false);
    setShowReportItem(false);
  };
  const showPateintItems = () => {
    setTranslateNav(true);
    setShowItems(true);
  };
  const onlyForRendering = () => {
    setRendering(!rendering);
  };
  useEffect(() => {
    if (window.location.pathname.match("/repor")) {
      setActiveReport(true);
    } else {
      setActiveReport(false);
    }
    if (window.location.pathname.match("/patient")) {
      setActivePatient(true);
    } else {
      setActivePatient(false);
    }
    if (window.location.pathname.match("/utility")) {
      setActiveUtils(true);
    } else {
      setActiveUtils(false);
    }
  }, [
    showResponsivenavBar,
    showResponsivenavBar,
    handleClickOutSide,
    onlyForRendering,
  ]);

  return (
    <>
      <div
        className={translateNav ? "sideBar showSideBar" : "sideBar"}
        ref={ref}
      >
        <img src={Logo} alt="icon" className="" width="200px" />
        <Icons.Ham className="hmburger" onClick={showResponsivenavBar} />
        <ul className="sideBarItems">
          <button className="sidebar-book">Book Transportation</button>
          <NavLink to={"/"}>
            <div className="onlyBorderLeft"></div>{" "}
            <li>
              <div className="sideBarItemsCon">
                <Icons.dashIcon />
                <p>{t("sidebar.dashboard")} </p>
              </div>
            </li>
          </NavLink>
          <NavLink to={"/myOrders"}>
            <div className="onlyBorderLeftSet"></div>{" "}
            <li onClick={showClassHandler}>
              <div className="sideBarItemsCon">
                <Icons.Patient />
                <p>{t("sidebar.orders")} </p>
              </div>
              {/* <img
              className={showItems ? "arrow arrowRotate " : "arrow"}
              src="/images/downArrow.svg"
              alt="arrow"
            /> */}
            </li>
          </NavLink>

          <NavLink to={"/orderTemplates"}>
            <div className="onlyBorderLeftSet"></div>{" "}
            <li>
              <div className="sideBarItemsCon">
                <Icons.appointIcon className="h-[20px]" />
                <p>{t("sidebar.templates")} </p>
              </div>
            </li>
          </NavLink>
          <NavLink to={"/directory"}>
            <div className="onlyBorderLeftSet"></div>{" "}
            <li>
              <div className="sideBarItemsCon">
                <Icons.appointIcon />
                <p>{t("sidebar.directory")} </p>
              </div>
            </li>
          </NavLink>
          <NavLink to={"/settings"}>
            <div className="onlyBorderLeftSet"></div>{" "}
            <li>
              <div className="sideBarItemsCon">
                <img src="/images/utils.svg" alt="icon" />
                <p>{t("sidebar.settings")} </p>
              </div>
            </li>
          </NavLink>
          {/* <li onClick={showReports}>
            <div className="sideBarItemsCon">
              <img src="/images/report.svg" alt="icon" />
              <p>Reports</p>
            </div>
            <img
              className={showReportsItem ? "arrow arrowRotate " : "arrow"}
              src="/images/downArrow.svg"
              alt="arrow"
            />
          </li>
          <div
            className={showReportsItem ? "extraItems  showLi" : "extraItems"}
          >
            <div className="onlyBorderSubMenu"></div>

            <NavLink to={"/report/flaganalysis"} activeClassName="active">
              {" "}
              <div className="onlyBorderSubMenu"></div>
              <li>Flag Analysis</li>
            </NavLink>
          </div>
          <li onClick={showUtility}>
            <div className="sideBarItemsCon">
              <img src="/images/utils.svg" alt="icon" />
              <p>Utilites</p>
            </div>
            <img
              className={showUtilityItem ? "arrow arrowRotate " : "arrow"}
              src="/images/downArrow.svg"
              alt="arrow"
            />
          </li> */}
          <div
            className={showUtilityItem ? "extraItems  showLi" : "extraItems"}
          >
            <NavLink
              to={"/utility/attorneyoffice"}
              style={{ marginTop: "10px" }}
              activeClassName="active"
            >
              {" "}
              <div className="onlyBorderSubMenu"></div>
              <li>Attorney Office</li>
            </NavLink>
            <NavLink to={"/utility/mrifacility"} activeClassName="active">
              {" "}
              <div className="onlyBorderSubMenu"></div>
              <li>MRI Facility </li>
            </NavLink>
            <NavLink to={"/utility/specilist"} activeClassName="active">
              {" "}
              <div className="onlyBorderSubMenu"></div>
              <li>Specialist</li>
            </NavLink>
          </div>
        </ul>
        <div
          onClick={() => {
            localStorage.removeItem("token");
            dispatch(authSlice.actions.logout());
            window.location.pathname = "/login";
          }}
          className="logoutBtn"
        >
          <div>
            <img src="/images/logout.svg" alt="logout" />
            <button>Logout</button>
          </div>
        </div>
      </div>

      <div className="showOnResponsive">
        <Icons.Ham onClick={showResponsivenavBar} />
        <ul>
          <NavLink
            to={"/"}
            activeClassName={({ isActive }) => (isActive ? "iconActive" : "")}
            onClick={onlyForRendering}
          >
            <li>
              <Icons.dashIcon />
            </li>
          </NavLink>

          <NavLink to={"/patient/allpatient"} onClick={onlyForRendering}>
            <li className={activePatient ? "iconActive" : ""}>
              <Icons.Patient />
            </li>
          </NavLink>
          <NavLink to={"/appointment"} onClick={onlyForRendering}>
            <li>
              <Icons.appointIcon />
            </li>
          </NavLink>

          {/* <div className="iconPatientItems">
            <li>All Pateint</li>
            <li>Add NewPateint</li>
            <li>inactive patient</li>
            <li>Discharged patient</li>
          </div> */}
          <li
            onClick={showResponsivenavBar}
            className={activeReport ? "iconActive" : ""}
          >
            <Icons.Report />
          </li>
          <li
            onClick={showResponsivenavBar}
            className={activeUtils ? "iconActive" : ""}
          >
            <Icons.Utils />
          </li>
          {/* <li onClick={showResponsivenavBar}>
            <Icons.Print />
          </li> */}
          <li
            onClick={() => {
              localStorage.removeItem("token");
              dispatch(authSlice.actions.logout());
              window.location.pathname = "/login";
            }}
            className="logOutSvg"
          >
            <Icons.Logout />
          </li>
        </ul>
      </div>
    </>
  );
};

export default SideBar;
