import { useEffect } from "react";

// react-router-dom components
import { useLocation } from "react-router-dom";

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React context
import {  setLayout } from "context";
import { useDispatch, useSelector } from "react-redux";

function DashboardLayout({ children }) {
  // const [controller, dispatch] = useMaterialUIController();
  // const { miniSidenav } = controller;
  const dispatch = useDispatch();
  const { miniSidenav } = useSelector((state) => state.materialUI);
  const { pathname } = useLocation();


  useEffect(() => {
    dispatch(setLayout('dashboard'));
  }, [dispatch, pathname]);

  return (
    <MDBox
      sx={({ breakpoints, transitions, functions: { pxToRem } }) => ({
        p: 3,
        position: "relative",

        [breakpoints.up("xl")]: {
          marginLeft: miniSidenav ? pxToRem(120) : pxToRem(274),
          transition: transitions.create(["margin-left", "margin-right"], {
            easing: transitions.easing.easeInOut,
            duration: transitions.duration.standard,
          }),
        },
      })}
    >
      {children}
    </MDBox>
  );
}

// Typechecking props for the DashboardLayout
DashboardLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DashboardLayout;
