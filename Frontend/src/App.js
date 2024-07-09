import { useEffect } from "react";

// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Icon from "@mui/material/Icon";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// components
import MDBox from "components/MDBox";

import Configurator from "examples/Configurator";

// React themes
import theme from "assets/theme";

// React Dark Mode themes
import themeDark from "assets/theme-dark";

// React contexts
// import {
//   // useMaterialUIController,

//   setOpenConfigurator,
// } from "context";

import { AppRoutes } from "Routes/Routes";
import { useLocation } from "react-router-dom";
import Sidebar from "examples/Sidebar/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { setOpenConfigurator } from "context";
import EmployeeRegisterPopup from "examples/Popup/EmployeeRegisterPopup";
import EmpEditPopup from "examples/Popup/EmpEditPopup";
import EmpViewPopup from "examples/Popup/EmpViewPopup";

export default function App() {
  // const [controller, dispatch] = useMaterialUIController();
  // const {
  //   direction,
  //   openConfigurator,
  //   darkMode,
  // } = controller;v

  const dispatch = useDispatch();
  const direction = useSelector((state) => state.materialUI.direction);
  const openConfigurator = useSelector(
    (state) => state.materialUI.openConfigurator
  );
  const darkMode = useSelector((state) => state.materialUI.darkMode);
  const { pathname } = useLocation();

  const location = useLocation();

  // Change the openConfigurator state
  // const handleConfiguratorOpen = () =>
  //   setOpenConfigurator(dispatch, !openConfigurator);
  const handleConfiguratorOpen = () => {
    dispatch(setOpenConfigurator(!openConfigurator));
  };
  // Setting the dir attribute for the body element
  // useEffect(() => {
  //   document.body.setAttribute("dir", direction);
  // }, [direction]);
  useEffect(() => {
    document.body.setAttribute("dir", direction);
  }, [direction]);
  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);
  const modalType = useSelector((state) => state.popover.modalType);

  const configsButton = (
    <MDBox
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="3.25rem"
      height="3.25rem"
      bgColor="white"
      shadow="sm"
      borderRadius="50%"
      position="fixed"
      right="2rem"
      bottom="2rem"
      zIndex={99}
      color="dark"
      sx={{ cursor: "pointer" }}
      onClick={handleConfiguratorOpen}
    >
      <Icon fontSize="small" color="inherit">
        settings
      </Icon>
    </MDBox>
  );

  return (
    <ThemeProvider theme={darkMode ? themeDark : theme}>
      {modalType === "employeeRegister" && <EmployeeRegisterPopup />}
      {modalType === "empEdit" && <EmpEditPopup />}

      <CssBaseline />
      {location.pathname !== "/signin" && location.pathname !== "/signup" && (
        <Sidebar />
      )}
      <AppRoutes />
      <Configurator />
      {configsButton}
      <ToastContainer />
    </ThemeProvider>
  );
}
