import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router";
import { redirectActions } from "../redux/slices";

const Redirect = ({ to = "/" }) => {
  const { isAuthenticated, loading } = useSelector((state) => state.auth);
  const { redirecturl, redirect } = useSelector((state) => state.redirect);
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    if (location.pathname !== "/login" && !isAuthenticated && !loading) {
      dispatch(redirectActions.actions.changeURL(location.pathname));
      dispatch(redirectActions.actions.redirectTo());
    }
  }, [location, isAuthenticated, loading, dispatch]);

  useEffect(() => {
    if (!loading) {
      if (!isAuthenticated) navigate("/login");
      else if (isAuthenticated) navigate(redirect ? redirecturl : to);
    }
  }, [isAuthenticated, loading]);

  return null;
};

export default Redirect;
