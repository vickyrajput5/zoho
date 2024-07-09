import { useState } from "react";

// react-router-dom components
import { Link, useNavigate } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";
import Grid from "@mui/material/Grid";
import MuiLink from "@mui/material/Link";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

// Authentication layout components
import BasicLayout from "layouts/authentication/components/BasicLayout";

// Images
import bgImage from "assets/images/bg-sign-in-basic.jpeg";
import { useDispatch } from "react-redux";
import axiosInstance from "context/reducer/axiosInstance";
import show_Toast from "helper/toast.helper";
import { setAuthenticated, setUser } from "context/reducer/authSlice";
import { toast } from "react-toastify";
import axios from "axios";

function Basic() {
  const [rememberMe, setRememberMe] = useState(false);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axiosInstance.post('/auth/login', formData);
      const { status, message, token } = response.data;
      console.log(`token is : ${token}`);
      if (status === 'success') {
        // Login successful
  
        // Store the token in localStorage
        localStorage.setItem('token', token);
        const rememberMe = localStorage.getItem('rememberMe') === 'true';
  
        // Check if the user is authenticated
        const isAuthenticated = token !== undefined && token !== '';
  
        // Set authentication status and user data in Redux
        dispatch(setAuthenticated(isAuthenticated));
        if (isAuthenticated) {
          dispatch(setUser({ email: formData.email, token }));
        }
  
        show_Toast({
          status: true,
          message: response?.data?.message || 'Success',
        });
  
        navigate('/dashboard');
      } else {
        // Login failed
        toast.error(message);
      }
    } catch (error) {
      console.error('Error logging in:', error);
      show_Toast({
        status: false,
        message: error?.response?.data?.message || 'Something went wrong',
      });
    }
  };
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const handleSetRememberMe = () => setRememberMe(!rememberMe);


  return (
    <BasicLayout image={bgImage}>
      <Card>
        <MDBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="info"
          mx={2}
          mt={-3}
          p={2}
          mb={1}
          textAlign="center"
        >
          <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            Sign in
          </MDTypography>
          <Grid
            container
            spacing={3}
            justifyContent="center"
            sx={{ mt: 1, mb: 2 }}
          >
            <Grid item xs={2}>
              <MDTypography
                component={MuiLink}
                href="#"
                variant="body1"
                color="white"
              >
                <FacebookIcon color="inherit" />
              </MDTypography>
            </Grid>
            <Grid item xs={2}>
              <MDTypography
                component={MuiLink}
                href="#"
                variant="body1"
                color="white"
              >
                <GitHubIcon color="inherit" />
              </MDTypography>
            </Grid>
            <Grid item xs={2}>
              <MDTypography
                component={MuiLink}
                href="#"
                variant="body1"
                color="white"
              >
                <GoogleIcon color="inherit" />
              </MDTypography>
            </Grid>
          </Grid>
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form" onSubmit={handleSubmit}>
            <MDBox mb={2}>
              
              <MDInput type="email" label="Email" name="email" fullWidth value={formData.email} onChange={handleChange}/>
            </MDBox>
            <MDBox mb={2}>
              <MDInput type="password" label="Password" name="password" value={formData.password} onChange={handleChange} fullWidth />
            </MDBox>
            <MDBox display="flex" alignItems="center" ml={-1}>
              <Switch checked={rememberMe} onChange={handleSetRememberMe} />
              <MDTypography
                variant="button"
                fontWeight="regular"
                color="text"
                onClick={handleSetRememberMe}
                sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
              >
                &nbsp;&nbsp;Remember me
              </MDTypography>
            </MDBox>
            <MDBox mt={4} mb={1}>
              <MDButton variant="gradient" color="info" fullWidth type="submit">
                sign in
              </MDButton>
            </MDBox>
            <MDBox mt={3} mb={1} textAlign="center">
              <MDTypography variant="button" color="text">
                Don&apos;t have an account?{" "}
                <MDTypography
                  component={Link}
                  to="/signup"
                  variant="button"
                  color="info"
                  fontWeight="medium"
                  textGradient
                >
                  Sign up
                </MDTypography>
              </MDTypography>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
    </BasicLayout>
  );
}

export default Basic;
