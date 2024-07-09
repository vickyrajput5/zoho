import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ProfileInfoCard from "examples/Cards/InfoCards/ProfileInfoCard";
import ProfilesList from "examples/Lists/ProfilesList";
import DefaultProjectCard from "examples/Cards/ProjectCards/DefaultProjectCard";

// Overview page components
import Header from "layouts/profile/components/Header";
import PlatformSettings from "layouts/profile/components/PlatformSettings";

// Data
import profilesListData from "layouts/profile/data/profilesListData";

// Images
import homeDecor1 from "assets/images/home-decor-1.jpg";
import homeDecor2 from "assets/images/home-decor-2.jpg";
import homeDecor3 from "assets/images/home-decor-3.jpg";
import homeDecor4 from "assets/images/home-decor-4.jpeg";
import team1 from "assets/images/team-1.jpg";
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";
import { Box, Icon, List, ListItem, Typography } from "@mui/material";
import MDAvatar from "components/MDAvatar";
import './profile.css'
import { useDispatch, useSelector } from "react-redux";
import { getUserProfile } from "context/reducer/authActions";
import { useEffect } from "react";
function Overview() {
  const commonListItemStyle = {
    marginBottom: '20px',
  };
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  console.log(`User profile data is : ${user}`)
  useEffect(() => {
    // Fetch user profile when the component mounts
    dispatch(getUserProfile());
  }, [dispatch]);
  
 

  return (
    <DashboardLayout>
      <DashboardNavbar />
      {/* <MDBox mb={1} /> */}
      { user ?(
      <Header user={user}>
        <MDBox mt={5} mb={3}>
          <Grid container spacing={1}>
            {/* <Grid item xs={12} md={6} xl={4}>
              <PlatformSettings />
            </Grid> */}
            <Grid item xs={12} md={6} xl={6} >
            <MDBox p={2}>
              <MDTypography
                variant="h5"
                fontWeight="medium"
                textTransform="capitalize"
              >
                About me
              </MDTypography>
            </MDBox>
            <Grid p={2}>
              <List>
              <ListItem>
                <Grid container>
                  <Grid item md={6} xl={6}>
                    <Box sx={{ display: "flex", alignItems: "center" }} pr={2}>
                      <Box sx={{ width: "50px", height: "50px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <MDTypography variant="button">
                        <Icon fontSize="medium" color="inherit">
                          lan
                        </Icon>
                        </MDTypography>
                      </Box>
                      <MDTypography variant="button" fontWeight="regular" color="text">
                        {user.department_name}
                      </MDTypography>
                    </Box>
                  </Grid>
                  <Grid item md={6} xl={6}>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <Box sx={{ width: "50px", height: "50px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <MDTypography variant="button">
                        <Icon fontSize="medium" color="inherit">
                          group
                        </Icon>
                        </MDTypography>
                      </Box>
                      <MDTypography variant="button" fontWeight="regular" color="text">
                        {user.designation_name}
                      </MDTypography>
                    </Box>
                  </Grid>
                </Grid>
              </ListItem>
              <ListItem>
                <Grid container>
                  <Grid item md={6} xl={6}>
                    <Box sx={{ display: "flex", alignItems: "center" }} pr={2}>
                      <Box sx={{ width: "50px", height: "50px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <MDTypography variant="button">
                        <Icon fontSize="medium" color="inherit">
                        smartphone
                        </Icon>
                        </MDTypography>
                      </Box>
                      <MDTypography variant="button" fontWeight="regular" color="text">
                       {user.Phonenumber}
                      </MDTypography>
                    </Box>
                  </Grid>
                  <Grid item md={6} xl={6}>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <Box sx={{ width: "50px", height: "50px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <MDTypography variant="button">
                        <Icon fontSize="medium" color="inherit">
                        location_on
                        </Icon>
                        </MDTypography>
                      </Box>
                      <MDTypography variant="button" fontWeight="regular" color="text">
                        {`${user.city} ${user.country}`}
                      </MDTypography>
                    </Box>
                  </Grid>
                </Grid>
              </ListItem>
              <ListItem>
                <Grid container>
                  <Grid item md={6} xl={6}>
                    <Box sx={{ display: "flex", alignItems: "center" }} pr={2}>
                      <Box sx={{ width: "50px", height: "50px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <MDTypography variant="button">
                        <Icon fontSize="medium" color="inherit">
                        schedule
                        </Icon>
                        </MDTypography>
                      </Box>
                      <MDTypography variant="button" fontWeight="regular" color="text">
                        {user.createdAt}
                      </MDTypography>
                    </Box>
                  </Grid>
                  <Grid item md={6} xl={6}>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <Box sx={{ width: "50px", height: "50px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <MDTypography variant="button">
                        <Icon fontSize="medium" color="inherit">
                        grade
                        </Icon>
                        </MDTypography>
                      </Box>
                      <MDTypography variant="button" fontWeight="regular" color="text">
                      {user.grade}
                      </MDTypography>
                    </Box>
                  </Grid>
                </Grid>
              </ListItem>
              </List>
            </Grid>
            <MDBox p={2}>
              <MDTypography
                variant="h5"
                fontWeight="medium"
                textTransform="capitalize"
              >
                Work
              </MDTypography>
            </MDBox>
            <Grid p={2}>
              <List>
              <ListItem sx={commonListItemStyle}>
                <Grid container>
                  <Grid item md={6} xl={6}>
                    <Box sx={{ display: "flex", alignItems: "center" }} pr={2}>
                    
                      <MDTypography variant="button" fontWeight="medium" color="text">
                      Department
                      </MDTypography>
                    </Box>
                  </Grid>
                  <Grid item md={6} xl={6}>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                    <MDTypography variant="button" fontWeight="regular" color="text">
                      {user.department_name}
                    </MDTypography>
                    </Box>
                  </Grid>
                </Grid>
              </ListItem>
              <ListItem sx={commonListItemStyle}>
                <Grid container>
                  <Grid item md={6} xl={6}>
                    <Box sx={{ display: "flex", alignItems: "center" }} pr={2}>
                    
                      <MDTypography variant="button" fontWeight="medium" color="text">
                      Grade
                      </MDTypography>
                    </Box>
                  </Grid>
                  <Grid item md={6} xl={6}>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                    <MDTypography variant="button" fontWeight="regular" color="text">
                    {user.grade}
                    </MDTypography>
                    </Box>
                  </Grid>
                </Grid>
              </ListItem>
              <ListItem sx={commonListItemStyle}>
                <Grid container>
                  <Grid item md={6} xl={6}>
                    <Box sx={{ display: "flex", alignItems: "center" }} pr={2}>
                    
                      <MDTypography variant="button" fontWeight="medium" color="text">
                        Employee Status
                      </MDTypography>
                    </Box>
                  </Grid>
                  <Grid item md={6} xl={6}>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                    <MDTypography variant="button" fontWeight="regular" color="text">
                      Active
                    </MDTypography>
                    </Box>
                  </Grid>
                </Grid>
              </ListItem>
              <ListItem sx={commonListItemStyle}>
                <Grid container>
                  <Grid item md={6} xl={6}>
                    <Box sx={{ display: "flex", alignItems: "center" }} pr={2}>
                    
                      <MDTypography variant="button" fontWeight="medium" color="text">
                       Work phone
                      </MDTypography>
                    </Box>
                  </Grid>
                  <Grid item md={6} xl={6}>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                    <MDTypography variant="button" fontWeight="regular" color="text">
                      {user.workphone}
                    </MDTypography>
                    </Box>
                  </Grid>
                </Grid>
              </ListItem>
              <ListItem sx={commonListItemStyle}>
                <Grid container>
                  <Grid item md={6} xl={6}>
                    <Box sx={{ display: "flex", alignItems: "center" }} pr={2}>
                    
                      <MDTypography variant="button" fontWeight="medium" color="text">
                        Reporting To
                      </MDTypography>
                    </Box>
                  </Grid>
                  <Grid item md={6} xl={6}>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                    <MDTypography variant="button" fontWeight="regular" color="text">
                     {`${user.reporting} ${user.id}`}
                    </MDTypography>
                    </Box>
                  </Grid>
                </Grid>
              </ListItem>
              <ListItem sx={commonListItemStyle}>
                <Grid container>
                  <Grid item md={6} xl={6}>
                    <Box sx={{ display: "flex", alignItems: "center" }} pr={2}>
                    
                      <MDTypography variant="button" fontWeight="medium" color="text">
                      Source of hire
                      </MDTypography>
                    </Box>
                  </Grid>
                  <Grid item md={6} xl={6}>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                    <MDTypography variant="button" fontWeight="regular" color="text">
                      Direct
                    </MDTypography>
                    </Box>
                  </Grid>
                </Grid>
              </ListItem>
              <ListItem sx={commonListItemStyle}>
                <Grid container>
                  <Grid item md={6} xl={6}>
                    <Box sx={{ display: "flex", alignItems: "center" }} pr={2}>
                    
                      <MDTypography variant="button" fontWeight="medium" color="text">
                        Location
                      </MDTypography>
                    </Box>
                  </Grid>
                  <Grid item md={6} xl={6}>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                    <MDTypography variant="button" fontWeight="regular" color="text">
                      {user.city}
                    </MDTypography>
                    </Box>
                  </Grid>
                </Grid>
              </ListItem>
              <ListItem sx={commonListItemStyle}>
                <Grid container>
                  <Grid item md={6} xl={6}>
                    <Box sx={{ display: "flex", alignItems: "center" }} pr={2}>
                    
                      <MDTypography variant="button" fontWeight="medium" color="text">
                       Date of Joining
                      </MDTypography>
                    </Box>
                  </Grid>
                  <Grid item md={6} xl={6}>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                    <MDTypography variant="button" fontWeight="regular" color="text">
                      {user.joiningDate}
                    </MDTypography>
                    </Box>
                  </Grid>
                </Grid>
              </ListItem>
              <ListItem sx={commonListItemStyle}>
                <Grid container>
                  <Grid item md={6} xl={6}>
                    <Box sx={{ display: "flex", alignItems: "center" }} pr={2}>
                    
                      <MDTypography variant="button" fontWeight="medium" color="text">
                       Employee Type
                      </MDTypography>
                    </Box>
                  </Grid>
                  <Grid item md={6} xl={6}>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                    <MDTypography variant="button" fontWeight="regular" color="text">
                      Permanent
                    </MDTypography>
                    </Box>
                  </Grid>
                </Grid>
              </ListItem>
              <ListItem sx={commonListItemStyle}>
                <Grid container>
                  <Grid item md={6} xl={6}>
                    <Box sx={{ display: "flex", alignItems: "center" }} pr={2}>
                    
                      <MDTypography variant="button" fontWeight="medium" color="text">
                       Role
                      </MDTypography>
                    </Box>
                  </Grid>
                  <Grid item md={6} xl={6}>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                    <MDTypography variant="button" fontWeight="regular" color="text">
                     {user.position}
                    </MDTypography>
                    </Box>
                  </Grid>
                </Grid>
              </ListItem>
              </List>
            </Grid>
            </Grid>
            <Grid item xs={12} xl={6}>
            <MDBox p={2}>
              <MDTypography
                variant="h5"
                fontWeight="medium"
                textTransform="capitalize"
              >
                Employee Info
              </MDTypography>
            </MDBox>
            <Grid p={2}>
              <List>
              <ListItem sx={commonListItemStyle}>
                <Grid container>
                  <Grid item md={6} xl={6}>
                    <Box sx={{ display: "flex", alignItems: "center" }} pr={2}>
                    
                      <MDTypography variant="button" fontWeight="medium" color="text">
                        Employee ID
                      </MDTypography>
                    </Box>
                  </Grid>
                  <Grid item md={6} xl={6}>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                    <MDTypography variant="button" fontWeight="regular" color="text">
                     {user.id}
                    </MDTypography>
                    </Box>
                  </Grid>
                </Grid>
              </ListItem>
              <ListItem sx={commonListItemStyle}>
                <Grid container>
                  <Grid item md={6} xl={6}>
                    <Box sx={{ display: "flex", alignItems: "center" }} pr={2}>
                    
                      <MDTypography variant="button" fontWeight="medium" color="text">
                        First Name
                      </MDTypography>
                    </Box>
                  </Grid>
                  <Grid item md={6} xl={6}>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                    <MDTypography variant="button" fontWeight="regular" color="text">
                      {user.firstName}
                    </MDTypography>
                    </Box>
                  </Grid>
                </Grid>
              </ListItem>
              <ListItem sx={commonListItemStyle}>
                <Grid container>
                  <Grid item md={6} xl={6}>
                    <Box sx={{ display: "flex", alignItems: "center" }} pr={2}>
                    
                      <MDTypography variant="button" fontWeight="medium" color="text">
                        Last Name
                      </MDTypography>
                    </Box>
                  </Grid>
                  <Grid item md={6} xl={6}>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                    <MDTypography variant="button" fontWeight="regular" color="text">
                     {user.lastName}
                    </MDTypography>
                    </Box>
                  </Grid>
                </Grid>
              </ListItem>
              <ListItem sx={commonListItemStyle}>
                <Grid container>
                  <Grid item md={6} xl={6}>
                    <Box sx={{ display: "flex", alignItems: "center" }} pr={2}>
                    
                      <MDTypography variant="button" fontWeight="medium" color="text">
                       Added By
                      </MDTypography>
                    </Box>
                  </Grid>
                  <Grid item md={6} xl={6}>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                    <MDTypography variant="button" fontWeight="regular" color="text">
                    brods stone 02103
                    </MDTypography>
                    </Box>
                  </Grid>
                </Grid>
              </ListItem>
              <ListItem sx={commonListItemStyle}>
                <Grid container>
                  <Grid item md={6} xl={6}>
                    <Box sx={{ display: "flex", alignItems: "center" }} pr={2}>
                    
                      <MDTypography variant="button" fontWeight="medium" color="text">
                      Added Time
                      </MDTypography>
                    </Box>
                  </Grid>
                  <Grid item md={6} xl={6}>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                    <MDTypography variant="button" fontWeight="regular" color="text">
                      {user.createdAt}
                    </MDTypography>
                    </Box>
                  </Grid>
                </Grid>
              </ListItem>
              <ListItem sx={commonListItemStyle}>
                <Grid container>
                  <Grid item md={6} xl={6}>
                    <Box sx={{ display: "flex", alignItems: "center" }} pr={2}>
                    
                      <MDTypography variant="button" fontWeight="medium" color="text">
                       Father Name
                      </MDTypography>
                    </Box>
                  </Grid>
                  <Grid item md={6} xl={6}>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                    <MDTypography variant="button" fontWeight="regular" color="text">
                      {user.fathername}
                    </MDTypography>
                    </Box>
                  </Grid>
                </Grid>
              </ListItem>
              <ListItem sx={commonListItemStyle}>
                <Grid container>
                  <Grid item md={6} xl={6}>
                    <Box sx={{ display: "flex", alignItems: "center" }} pr={2}>
                    
                      <MDTypography variant="button" fontWeight="medium" color="text">
                        Email ID
                      </MDTypography>
                    </Box>
                  </Grid>
                  <Grid item md={6} xl={6}>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                    <MDTypography variant="button" fontWeight="regular" color="text">
                      {user.email}
                    </MDTypography>
                    </Box>
                  </Grid>
                </Grid>
              </ListItem>
              <ListItem sx={commonListItemStyle}>
                <Grid container>
                  <Grid item md={6} xl={6}>
                    <Box sx={{ display: "flex", alignItems: "center" }} pr={2}>
                    
                      <MDTypography variant="button" fontWeight="medium" color="text">
                       Modified By
                      </MDTypography>
                    </Box>
                  </Grid>
                  <Grid item md={6} xl={6}>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                    <MDTypography variant="button" fontWeight="regular" color="text">
                      jack bon 200121
                    </MDTypography>
                    </Box>
                  </Grid>
                </Grid>
              </ListItem>
              <ListItem sx={commonListItemStyle}>
                <Grid container>
                  <Grid item md={6} xl={6}>
                    <Box sx={{ display: "flex", alignItems: "center" }} pr={2}>
                    
                      <MDTypography variant="button" fontWeight="medium" color="text">
                       Modified Time
                      </MDTypography>
                    </Box>
                  </Grid>
                  <Grid item md={6} xl={6}>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                    <MDTypography variant="button" fontWeight="regular" color="text">
                      {user.updatedAt}
                    </MDTypography>
                    </Box>
                  </Grid>
                </Grid>
              </ListItem>
              </List>
            </Grid>
            <MDBox p={2}>
              <MDTypography
                variant="h5"
                fontWeight="medium"
                textTransform="capitalize"
              >
                Reporting To
              </MDTypography>
            </MDBox>
            <Grid p={2}>
              <List>
              <ListItem sx={commonListItemStyle}>
                <Grid container>
                  <Grid item md={6} xl={6}>
                    <Box sx={{ display: "flex", alignItems: "center" }} pr={2}>
                    
                    <MDAvatar
                      src={team4}
                      alt="profile-image"
                      size="md"
                      shadow="sm"
                    />
                    <MDBox pl={2}>
                      <MDTypography variant="h6" pb={0}>{user.reporting}</MDTypography>
                      <MDTypography variant="button" className="subHeading">Sr Project Manager </MDTypography>
                    </MDBox>
                    </Box>
                  </Grid>
                  {/* <Grid item md={6} xl={6}>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                    <MDTypography variant="button" fontWeight="regular" color="text">
                      2023-12-1 12:12:20
                    </MDTypography>
                    </Box>
                  </Grid> */}
                </Grid>
              </ListItem>
              </List>
            </Grid>
            </Grid>
          </Grid>
        </MDBox>
      </Header>
      ):(
        <p>Loading</p>
      )
      }
      <Footer />
    </DashboardLayout>
  );
}

export default Overview;
