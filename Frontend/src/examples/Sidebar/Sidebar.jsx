import React, { useEffect } from "react";
import "./sidebar.css";
import {
  Icon,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Link, NavLink, useLocation } from "react-router-dom";
import SidenavRoot from "examples/Sidenav/SidenavRoot";
// import { setMiniSidenav, setTransparentSidenav, setWhiteSidenav, useMaterialUIController } from "context";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import sidenavLogoLabel from "examples/Sidenav/styles/sidenav";
import {
  collapseIcon,
  collapseIconBox,
  collapseItem,
  collapseText,
} from "examples/Sidenav/styles/sidenavCollapse";
import {
  AccountCircle,
  CalendarMonth,
  Dashboard,
  Group,
  InsertInvitation,
  Login,
  Logout,
  TableView,
} from "@mui/icons-material";
// import icon from "assets/theme/components/icon";
import { useSelector, useDispatch } from "react-redux"; // Import useSelector and useDispatch from React Redux
import {
  setMiniSidenav,
  setTransparentSidenav,
  setWhiteSidenav,
} from "context";
import BadgeIcon from "@mui/icons-material/Badge";

const Sidebar = ({ color, brand, brandName, name, active, ...rest }) => {
  // const [controller, dispatch] = useMaterialUIController();
  // const {
  //   miniSidenav,
  //   transparentSidenav,
  //   whiteSidenav,
  //   sidenavColor,
  //   darkMode,
  // } = controller;
  const dispatch = useDispatch();
  const materialUI = useSelector((state) => state.materialUI);
  const {
    miniSidenav,
    transparentSidenav,
    whiteSidenav,
    sidenavColor,
    darkMode,
  } = materialUI;
  const location = useLocation();
  const isMenuItemActive = (to) => {
    return location.pathname === to;
  };

  let textColor = "white";

  if (transparentSidenav || (whiteSidenav && !darkMode)) {
    textColor = "dark";
  } else if (whiteSidenav && darkMode) {
    textColor = "inherit";
  }

  const closeSidenav = () => setMiniSidenav(dispatch, true);

  useEffect(() => {
    function handleMiniSidenav() {
      setMiniSidenav(dispatch, window.innerWidth < 1200);
      setTransparentSidenav(
        dispatch,
        window.innerWidth < 1200 ? false : transparentSidenav
      );
      setWhiteSidenav(
        dispatch,
        window.innerWidth < 1200 ? false : whiteSidenav
      );
    }

    window.addEventListener("resize", handleMiniSidenav);

    handleMiniSidenav();

    return () => window.removeEventListener("resize", handleMiniSidenav);
  }, [dispatch, transparentSidenav, whiteSidenav]);

  return (
    <SidenavRoot
      {...rest}
      variant="permanent"
      ownerState={{ transparentSidenav, whiteSidenav, miniSidenav, darkMode }}
    >
      <MDBox pt={3} pb={1} px={4} textAlign="center">
        <MDBox
          display={{ xs: "block", xl: "none" }}
          position="absolute"
          top={0}
          right={0}
          p={1.625}
          onClick={closeSidenav}
          sx={{ cursor: "pointer" }}
        >
          <MDTypography variant="h6" color="secondary">
            <Icon sx={{ fontWeight: "bold" }}>close</Icon>
          </MDTypography>
        </MDBox>
        <MDBox component={NavLink} to="/" display="flex" alignItems="center">
          {brand && (
            <MDBox component="img" src={brand} alt="Brand" width="2rem" />
          )}
          <MDBox
            width={!brandName && "100%"}
            sx={(theme) => sidenavLogoLabel(theme, { miniSidenav })}
          >
            <MDTypography
              component="h6"
              variant="button"
              fontWeight="medium"
              color={textColor}
            >
              {brandName}
            </MDTypography>
          </MDBox>
        </MDBox>
      </MDBox>

      <List>
        <ListItem component="li">
          <Link
            to="/dashboard"
            style={{ textDecoration: "none", display: "flex", width: "100%" }}
          >
            <MDBox
              {...rest}
              sx={(theme) =>
                collapseItem(theme, {
                  active: isMenuItemActive("/dashboard"),
                  transparentSidenav,
                  whiteSidenav,
                  darkMode,
                  sidenavColor,
                })
              }
            >
              <ListItemIcon
                sx={(theme) =>
                  collapseIconBox(theme, {
                    transparentSidenav,
                    whiteSidenav,
                    darkMode,
                    active,
                  })
                }
              >
                <Dashboard sx={(theme) => collapseIcon(theme, { active })} />
              </ListItemIcon>

              <ListItemText
                primary={name}
                sx={(theme) =>
                  collapseText(theme, {
                    miniSidenav,
                    transparentSidenav,
                    whiteSidenav,
                    active,
                  })
                }
              >
                Dashboard
              </ListItemText>
            </MDBox>
          </Link>
        </ListItem>
        <ListItem component="li">
          <Link
            to="/profile"
            style={{ textDecoration: "none", display: "flex", width: "100%" }}
          >
            <MDBox
              {...rest}
              sx={(theme) =>
                collapseItem(theme, {
                  active: isMenuItemActive("/profile"),
                  transparentSidenav,
                  whiteSidenav,
                  darkMode,
                  sidenavColor,
                })
              }
            >
              <ListItemIcon
                sx={(theme) =>
                  collapseIconBox(theme, {
                    transparentSidenav,
                    whiteSidenav,
                    darkMode,
                    active,
                  })
                }
              >
                <AccountCircle
                  sx={(theme) => collapseIcon(theme, { active })}
                />
              </ListItemIcon>

              <ListItemText
                primary={name}
                sx={(theme) =>
                  collapseText(theme, {
                    miniSidenav,
                    transparentSidenav,
                    whiteSidenav,
                    active,
                  })
                }
              >
                Profile
              </ListItemText>
            </MDBox>
          </Link>
        </ListItem>
        <ListItem component="li">
          <Link
            to="/users"
            style={{ textDecoration: "none", display: "flex", width: "100%" }}
          >
            <MDBox
              {...rest}
              sx={(theme) =>
                collapseItem(theme, {
                  active: isMenuItemActive("/users"),
                  transparentSidenav,
                  whiteSidenav,
                  darkMode,
                  sidenavColor,
                })
              }
            >
              <ListItemIcon
                sx={(theme) =>
                  collapseIconBox(theme, {
                    transparentSidenav,
                    whiteSidenav,
                    darkMode,
                    active,
                  })
                }
              >
                <TableView sx={(theme) => collapseIcon(theme, { active })} />
              </ListItemIcon>

              <ListItemText
                primary={name}
                sx={(theme) =>
                  collapseText(theme, {
                    miniSidenav,
                    transparentSidenav,
                    whiteSidenav,
                    active,
                  })
                }
              >
                Users
              </ListItemText>
            </MDBox>
          </Link>
        </ListItem>
        <ListItem component="li">
          <Link
            to="/employee"
            style={{ textDecoration: "none", display: "flex", width: "100%" }}
          >
            <MDBox
              {...rest}
              sx={(theme) =>
                collapseItem(theme, {
                  active: isMenuItemActive("/employee"),
                  transparentSidenav,
                  whiteSidenav,
                  darkMode,
                  sidenavColor,
                })
              }
            >
              <ListItemIcon
                sx={(theme) =>
                  collapseIconBox(theme, {
                    transparentSidenav,
                    whiteSidenav,
                    darkMode,
                    active,
                  })
                }
              >
                <BadgeIcon sx={(theme) => collapseIcon(theme, { active })} />
              </ListItemIcon>

              <ListItemText
                primary={name}
                sx={(theme) =>
                  collapseText(theme, {
                    miniSidenav,
                    transparentSidenav,
                    whiteSidenav,
                    active,
                  })
                }
              >
                Employees
              </ListItemText>
            </MDBox>
          </Link>
        </ListItem>
        <ListItem component="li">
          <Link
            to="/team"
            style={{ textDecoration: "none", display: "flex", width: "100%" }}
          >
            <MDBox
              {...rest}
              sx={(theme) =>
                collapseItem(theme, {
                  active: isMenuItemActive("/team"),
                  transparentSidenav,
                  whiteSidenav,
                  darkMode,
                  sidenavColor,
                })
              }
            >
              <ListItemIcon
                sx={(theme) =>
                  collapseIconBox(theme, {
                    transparentSidenav,
                    whiteSidenav,
                    darkMode,
                    active,
                  })
                }
              >
                <Group sx={(theme) => collapseIcon(theme, { active })} />
              </ListItemIcon>

              <ListItemText
                primary={name}
                sx={(theme) =>
                  collapseText(theme, {
                    miniSidenav,
                    transparentSidenav,
                    whiteSidenav,
                    active,
                  })
                }
              >
                Team
              </ListItemText>
            </MDBox>
          </Link>
        </ListItem>
        <ListItem component="li">
          <Link
            to="/attendance"
            style={{ textDecoration: "none", display: "flex", width: "100%" }}
          >
            <MDBox
              {...rest}
              sx={(theme) =>
                collapseItem(theme, {
                  active: isMenuItemActive("/attendance"),
                  transparentSidenav,
                  whiteSidenav,
                  darkMode,
                  sidenavColor,
                })
              }
            >
              <ListItemIcon
                sx={(theme) =>
                  collapseIconBox(theme, {
                    transparentSidenav,
                    whiteSidenav,
                    darkMode,
                    active,
                  })
                }
              >
                <CalendarMonth
                  sx={(theme) => collapseIcon(theme, { active })}
                />
              </ListItemIcon>

              <ListItemText
                primary={name}
                sx={(theme) =>
                  collapseText(theme, {
                    miniSidenav,
                    transparentSidenav,
                    whiteSidenav,
                    active,
                  })
                }
              >
                Attendance
              </ListItemText>
            </MDBox>
          </Link>
        </ListItem>
        <ListItem component="li">
          <Link
            to="/leavetracker"
            style={{ textDecoration: "none", display: "flex", width: "100%" }}
          >
            <MDBox
              {...rest}
              sx={(theme) =>
                collapseItem(theme, {
                  active: isMenuItemActive("/leavetracker"),
                  transparentSidenav,
                  whiteSidenav,
                  darkMode,
                  sidenavColor,
                })
              }
            >
              <ListItemIcon
                sx={(theme) =>
                  collapseIconBox(theme, {
                    transparentSidenav,
                    whiteSidenav,
                    darkMode,
                    active,
                  })
                }
              >
                <InsertInvitation
                  sx={(theme) => collapseIcon(theme, { active })}
                />
              </ListItemIcon>

              <ListItemText
                primary={name}
                sx={(theme) =>
                  collapseText(theme, {
                    miniSidenav,
                    transparentSidenav,
                    whiteSidenav,
                    active,
                  })
                }
              >
                Leave Tracker
              </ListItemText>
            </MDBox>
          </Link>
        </ListItem>
        {/* <ListItem component="li">
                <Link
                  to="/signin"
                  style={{ textDecoration: "none", display:"flex", width:"100%" }}
                >
                      <MDBox
                        {...rest}
                        sx={(theme) =>
                          collapseItem(theme, {
                            active: isMenuItemActive('/signin'),
                            transparentSidenav,
                            whiteSidenav,
                            darkMode,
                            sidenavColor,
                          })
                        }
                      >
                        <ListItemIcon
                          sx={(theme) =>
                            collapseIconBox(theme, {
                              transparentSidenav,
                              whiteSidenav,
                              darkMode,
                              active,
                            })
                          }
                        >
                          <Login sx={(theme) => collapseIcon(theme, { active })}/>
                        </ListItemIcon>

                        <ListItemText
                          primary={name}
                          sx={(theme) =>
                            collapseText(theme, {
                              miniSidenav,
                              transparentSidenav,
                              whiteSidenav,
                              active,
                            })
                          }
                          >
                          Sign In
                        </ListItemText>
                    </MDBox>
                </Link>
          </ListItem>
          <ListItem component="li">
                <Link
                  to="/signup"
                  style={{ textDecoration: "none", display:"flex", width:"100%" }}
                >
                      <MDBox
                        {...rest}
                        sx={(theme) =>
                          collapseItem(theme, {
                            active,
                            transparentSidenav,
                            whiteSidenav,
                            darkMode,
                            sidenavColor,
                          })
                        }
                      >
                        <ListItemIcon
                          sx={(theme) =>
                            collapseIconBox(theme, {
                              transparentSidenav,
                              whiteSidenav,
                              darkMode,
                              active,
                            })
                          }
                        >
                          <Logout sx={(theme) => collapseIcon(theme, { active })}/>
                        </ListItemIcon>

                        <ListItemText
                          primary={name}
                          sx={(theme) =>
                            collapseText(theme, {
                              miniSidenav,
                              transparentSidenav,
                              whiteSidenav,
                              active,
                            })
                          }
                          >
                          Sign Up
                        </ListItemText>
                    </MDBox>
                </Link>
          </ListItem> */}
      </List>
    </SidenavRoot>
  );
};

export default Sidebar;

// <div className="sidebar">
// <div className="side-logo">
//   <h3>HRM</h3>
// </div>
// <Box className="side-menu">
//   <List className="side-ul">
//     <ListItem className="side-li">
//       <Link to="/dashboard">Dashboard</Link>
//     </ListItem>
//     <ListItem className="side-li">
//       <Link to="/profile">Profile</Link>
//     </ListItem>
//     <ListItem className="side-li">
//       <Link to="/table">Table</Link>
//     </ListItem>
//     <ListItem className="side-li">
//       <Link to="/team">Team</Link>
//     </ListItem>
//     <ListItem className="side-li">
//       <Link to="/leavetracker">Leave Tracker</Link>
//     </ListItem>
//     <ListItem className="side-li">
//       <Link to="/attendance">Attendance</Link>
//     </ListItem>
//     <ListItem className="side-li">
//       <Link to="#">User</Link>
//     </ListItem>
//   </List>
// </Box>
// </div>
