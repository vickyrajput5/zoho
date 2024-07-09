
// react-router-dom components
import { Link,  useNavigate } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";


// Images
import bgImage from "assets/images/bg-sign-up-cover.jpeg";
import { useDispatch} from "react-redux";

import { toast } from "react-toastify";
import axios from "axios";
import { useState } from "react";
import show_Toast from "helper/toast.helper";
import { setAuthenticated, setUser } from "context/reducer/authSlice";

function Cover() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:4000/auth/register', formData);
      const { status, token } = response.data;
      console.log(`this is status : ${response.data.message}` )
      if (status === 'success') {
        // Registration successful
        // toast.success( response.data.message || 'Registration successful!', {
        //   position: 'top-right',
        //   autoClose: 3000,
        //   hideProgressBar: false,
        //   closeOnClick: true,
        //   pauseOnHover: true,
        //   draggable: true,
        // });
        show_Toast({
          status: true,
          message: response?.data?.message || "Success",
        });
       
        dispatch(setAuthenticated(true));
        dispatch(setUser({ name: formData.name, email: formData.email, token }));
        // eslint-disable-next-line no-const-assign
        navigate("/signin")
      } else {
        // Registration failed
        toast.error(`Error`, {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
    } catch (error) {
      console.error('Error registering user:', error);
      show_Toast({
        status: false,
        message: error?.response?.data?.message || "Something went wrong",
      });
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <CoverLayout image={bgImage}>
      <div className="register-container">
        <Card>
          <MDBox
            variant="gradient"
            bgColor="info"
            borderRadius="lg"
            coloredShadow="success"
            mx={2}
            mt={-3}
            p={3}
            mb={1}
            textAlign="center"
          >
            <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
              Join us today
            </MDTypography>
            <MDTypography display="block" variant="button" color="white" my={1}>
              Enter your email and password to register
            </MDTypography>
          </MDBox>
          <MDBox pt={4} pb={3} px={3}>
            <MDBox component="form"  role="form" onSubmit={handleSubmit}>
              <MDBox mb={2}>
                <MDInput type="text"  required   value={formData.name} onChange={handleChange} name="name" label="Name" variant="standard" fullWidth />
              </MDBox>
              <MDBox mb={2}>
                <MDInput
                  type="email"
                  label="Email"
                  variant="standard"
                  fullWidth
                  name="email"
                  value={formData.email} onChange={handleChange}
                  required 
                />
              </MDBox>
              <MDBox mb={2}>
                <MDInput
                  type="password"
                  label="Password"
                  variant="standard"
                  fullWidth
                  name="password"
                  value={formData.password} onChange={handleChange}
                  required 
                />
              </MDBox>
              <MDBox display="flex" alignItems="center" ml={-1}>
                <Checkbox />
                <MDTypography
                  variant="button"
                  fontWeight="regular"
                  color="text"
                  sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
                >
                  &nbsp;&nbsp;I agree the&nbsp;
                </MDTypography>
                <MDTypography
                  component="a"
                  href="#"
                  variant="button"
                  fontWeight="bold"
                  color="info"
                  textGradient
                >
                  Terms and Conditions
                </MDTypography>
              </MDBox>
              <MDBox mt={4} mb={1}>
                <MDButton variant="gradient" color="info" type="submit" fullWidth>
                  sign up
                </MDButton>
              </MDBox>
              <MDBox mt={3} mb={1} textAlign="center">
                <MDTypography variant="button" color="text">
                  Already have an account?{" "}
                  <MDTypography
                    component={Link}
                    to="/signin"
                    variant="button"
                    color="info"
                    fontWeight="medium"
                    textGradient
                  >
                    Sign In
                  </MDTypography>
                </MDTypography>
              </MDBox>
            </MDBox>
          </MDBox>
        </Card>
      </div>
      
    </CoverLayout>
  );
}

export default Cover;
