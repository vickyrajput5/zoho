import { useState, useEffect } from "react";

// react-router components
import { Link, useLocation, useNavigate } from "react-router-dom";
import team4 from "../../../assets/images/ivana-square.jpg";
// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// @material-ui core components
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDInput from "components/MDInput";

// Material Dashboard 2 React example components
import Breadcrumbs from "examples/Breadcrumbs";
import NotificationItem from "examples/Items/NotificationItem";

// Custom styles for DashboardNavbar
import {
  navbar,
  navbarContainer,
  navbarRow,
  navbarIconButton,
  navbarMobileMenu,
} from "examples/Navbars/DashboardNavbar/styles";

// React context
import { useDispatch, useSelector } from "react-redux"; // Import useDispatch and useSelector from React Redux
import {
  setTransparentNavbar,
  setMiniSidenav,
  setOpenConfigurator,
} from "context"; // Import your actions and slice
import ProDropdown from "./ProDropdown";
import MDAvatar from "components/MDAvatar";
import MDTypography from "components/MDTypography";
import { setAuthenticated, setUser } from "context/reducer/authSlice";

function DashboardNavbar({ absolute, light, isMini }) {
  const [navbarType, setNavbarType] = useState();
  // const [controller, dispatch] = useMaterialUIController();

  // const {
  //   miniSidenav,
  //   transparentNavbar,
  //   fixedNavbar,
  //   openConfigurator,
  //   darkMode,
  // } = controller;\

  const dispatch = useDispatch();
  const materialUI = useSelector((state) => state.materialUI);
  const {
    miniSidenav,
    transparentNavbar,
    fixedNavbar,
    openConfigurator,
    darkMode,
  } = materialUI;
  const [openMenu, setOpenMenu] = useState(false);
  const route = useLocation().pathname.split("/").slice(1);

  useEffect(() => {
    // Setting the navbar type
    if (fixedNavbar) {
      setNavbarType("sticky");
    } else {
      setNavbarType("static");
    }

    // A function that sets the transparent state of the navbar.
    function handleTransparentNavbar() {
      dispatch(
        setTransparentNavbar(
          (fixedNavbar && window.scrollY === 0) || !fixedNavbar
        )
      );
    }

    /** 
     The event listener that's calling the handleTransparentNavbar function when 
     scrolling the window.
    */
    window.addEventListener("scroll", handleTransparentNavbar);

    // Call the handleTransparentNavbar function to set the state with the initial value.
    handleTransparentNavbar();

    // Remove event listener on cleanup
    return () => window.removeEventListener("scroll", handleTransparentNavbar);
  }, [dispatch, fixedNavbar]);

  const handleMiniSidenav = () => setMiniSidenav(dispatch, !miniSidenav);
  const handleConfiguratorOpen = () => {
    dispatch(setOpenConfigurator(!openConfigurator));
  };
  const handleOpenMenu = (event) => setOpenMenu(event.currentTarget);
  const handleCloseMenu = () => setOpenMenu(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear user data and set isAuthenticated to false in Redux
    dispatch(setAuthenticated(false));
    dispatch(setUser(null));
    // Remove the token from localStorage
    localStorage.removeItem("token");
    // Redirect to the login page or any other page after logout
    navigate("/signin");
  };
  // Render the notifications menu
  const renderMenu = () => (
    <Menu
      anchorEl={openMenu}
      anchorReference={null}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      open={Boolean(openMenu)}
      onClose={handleCloseMenu}
      sx={{ mt: 2, left: "-30px" }}
    >
      {/* <NotificationItem icon={<Icon>email</Icon>} title="Inbox" />
      <NotificationItem
        icon={<Icon>chat_bubble</Icon>}
        title="Message"
      />
      <NotificationItem
        icon={<Icon>help</Icon>}
        title="Need Help?"
      />
      <NotificationItem
      icon={<Icon>logout</Icon>}
      title="Log Out"
      >
        <ProDropdown/>
      </NotificationItem> */}
      <MDBox px={2} py={1}>
        <Link to="/profile" style={{ display: "flex", alignItems: "center" }}>
          <MDTypography variant="button" pr={1.5}>
            <Icon fontSize="medium" color="inherit">
              account_circle
            </Icon>
          </MDTypography>
          <MDTypography variant="button" fontWeight="medium" color="text">
            Profile
          </MDTypography>
        </Link>
      </MDBox>
      <MDBox px={2} py={1}>
        <Link
          to="mailto:someone@example.com"
          style={{ display: "flex", alignItems: "center" }}
        >
          <MDTypography variant="button" pr={1.5}>
            <Icon fontSize="medium" color="inherit">
              email
            </Icon>
          </MDTypography>
          <MDTypography variant="button" fontWeight="medium" color="text">
            Inbox
          </MDTypography>
        </Link>
      </MDBox>
      <MDBox px={2} py={1}>
        <Link to="#" style={{ display: "flex", alignItems: "center" }}>
          <MDTypography variant="button" pr={1.5}>
            <Icon fontSize="medium" color="inherit">
              chat_bubble
            </Icon>
          </MDTypography>
          <MDTypography variant="button" fontWeight="medium" color="text">
            Message
          </MDTypography>
        </Link>
      </MDBox>
      <MDBox px={2} py={1}>
        <Link to="0" style={{ display: "flex", alignItems: "center" }}>
          <MDTypography variant="button" pr={1.5}>
            <Icon fontSize="medium" color="inherit">
              help
            </Icon>
          </MDTypography>
          <MDTypography variant="button" fontWeight="medium" color="text">
            Need Help?
          </MDTypography>
        </Link>
      </MDBox>
      <MDBox px={2} py={1}>
        <Link
          onClick={handleLogout}
          style={{ display: "flex", alignItems: "center" }}
        >
          <MDTypography variant="button" pr={1.5}>
            <Icon fontSize="medium" color="inherit">
              logout
            </Icon>
          </MDTypography>
          <MDTypography variant="button" fontWeight="medium" color="text">
            Logout
          </MDTypography>
        </Link>
      </MDBox>
    </Menu>
  );

  // Styles for the navbar icons
  const iconsStyle = ({
    palette: { dark, white, text },
    functions: { rgba },
  }) => ({
    color: () => {
      let colorValue = light || darkMode ? white.main : dark.main;

      if (transparentNavbar && !light) {
        colorValue = darkMode ? rgba(text.main, 0.6) : text.main;
      }

      return colorValue;
    },
  });

  return (
    <AppBar
      position={absolute ? "absolute" : navbarType}
      color="inherit"
      sx={(theme) =>
        navbar(theme, { transparentNavbar, absolute, light, darkMode })
      }
    >
      <Toolbar sx={(theme) => navbarContainer(theme)}>
        <MDBox
          color="inherit"
          mb={{ xs: 1, md: 0 }}
          sx={(theme) => navbarRow(theme, { isMini })}
        >
          <Breadcrumbs
            icon="home"
            title={route[route.length - 1]}
            route={route}
            light={light}
          />
        </MDBox>
        {isMini ? null : (
          <MDBox sx={(theme) => navbarRow(theme, { isMini })}>
            <MDBox pr={1}>
              <MDInput label="Search here" />
            </MDBox>
            <MDBox color={light ? "white" : "inherit"}>
              {/* <IconButton>
                <ProDropdown/>
              </IconButton> */}
              <IconButton
                size="small"
                disableRipple
                color="inherit"
                sx={navbarMobileMenu}
                onClick={handleMiniSidenav}
              >
                <Icon sx={iconsStyle} fontSize="medium">
                  {miniSidenav ? "menu_open" : "menu"}
                </Icon>
              </IconButton>
              <IconButton
                size="small"
                disableRipple
                color="inherit"
                sx={navbarIconButton}
                onClick={handleConfiguratorOpen}
              >
                <Icon sx={iconsStyle}>settings</Icon>
              </IconButton>
              <IconButton
                disableRipple
                color="inherit"
                aria-controls="notification-menu"
                aria-haspopup="true"
                variant="contained"
                onClick={handleOpenMenu}
              >
                <Icon sx={{ width: "40px", height: "40px" }}>
                  <MDAvatar
                    src={team4}
                    alt="profile-image"
                    size="sm"
                    shadow="sm"
                  />
                </Icon>
              </IconButton>
              {renderMenu()}
            </MDBox>
          </MDBox>
        )}
      </Toolbar>
    </AppBar>
  );
}

// Setting default values for the props of DashboardNavbar
DashboardNavbar.defaultProps = {
  absolute: false,
  light: false,
  isMini: false,
};

// Typechecking props for the DashboardNavbar
DashboardNavbar.propTypes = {
  absolute: PropTypes.bool,
  light: PropTypes.bool,
  isMini: PropTypes.bool,
};

export default DashboardNavbar;
