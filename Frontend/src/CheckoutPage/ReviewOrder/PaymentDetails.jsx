import { Grid } from '@mui/material';
import MDTypography from 'components/MDTypography';
// import moment from 'moment';
import React from 'react'

export const EmployeeDetails = (props) => {
    const { formValues } = props;
    
    const { 
      firstName,
      lastName,
      email,
      password,
      fathername,
      cnic,
      Phonenumber,
      addressI,
      city,
      state,
      zipcode,
      country,
    } = formValues;
    return (
        <Grid item container direction="column" xs={12} sm={6}>
          <MDTypography variant="h6" gutterBottom >
            Employeee Info
          </MDTypography>
          <Grid container>
            <React.Fragment>
              <Grid item xs={6}>
                <MDTypography gutterBottom>Full Name</MDTypography>
              </Grid>
              <Grid item xs={6}>
                <MDTypography gutterBottom>{firstName} {lastName}</MDTypography>
              </Grid>
            </React.Fragment>
            <React.Fragment>
              <Grid item xs={6}>
                <MDTypography gutterBottom>Email</MDTypography>
              </Grid>
              <Grid item xs={6}>
                <MDTypography gutterBottom>{email}</MDTypography>
              </Grid>
            </React.Fragment>
            <React.Fragment>
              <Grid item xs={6}>
                <MDTypography gutterBottom>Password</MDTypography>
              </Grid>
              <Grid item xs={6}>
                <MDTypography gutterBottom>{password}</MDTypography>
              </Grid>
            </React.Fragment>
            <React.Fragment>
              <Grid item xs={6}>
                <MDTypography gutterBottom>Father Name</MDTypography>
              </Grid>
              <Grid item xs={6}>
                <MDTypography gutterBottom>
                  {fathername}
                </MDTypography>
              </Grid>
            </React.Fragment>
            <React.Fragment>
              <Grid item xs={6}>
                <MDTypography gutterBottom>CNIC Number</MDTypography>
              </Grid>
              <Grid item xs={6}>
                <MDTypography gutterBottom>
                  {cnic}
                </MDTypography>
              </Grid>
            </React.Fragment>
            <React.Fragment>
              <Grid item xs={6}>
                <MDTypography gutterBottom>Phone Number</MDTypography>
              </Grid>
              <Grid item xs={6}>
                <MDTypography gutterBottom>
                  {Phonenumber}
                </MDTypography>
              </Grid>
            </React.Fragment>
            <React.Fragment>
              <Grid item xs={6}>
                <MDTypography gutterBottom>Address</MDTypography>
              </Grid>
              <Grid item xs={6}>
                <MDTypography gutterBottom>
                  {addressI}
                </MDTypography>
              </Grid>
            </React.Fragment>
            <React.Fragment>
              <Grid item xs={6}>
                <MDTypography gutterBottom>City Name</MDTypography>
              </Grid>
              <Grid item xs={6}>
                <MDTypography gutterBottom>
                  {city}
                </MDTypography>
              </Grid>
            </React.Fragment>
            <React.Fragment>
              <Grid item xs={6}>
                <MDTypography gutterBottom>Satate </MDTypography>
              </Grid>
              <Grid item xs={6}>
                <MDTypography gutterBottom>
                  {state}
                </MDTypography>
              </Grid>
            </React.Fragment>
            <React.Fragment>
              <Grid item xs={6}>
                <MDTypography gutterBottom>Zip Code</MDTypography>
              </Grid>
              <Grid item xs={6}>
                <MDTypography gutterBottom>
                  {zipcode}
                </MDTypography>
              </Grid>
            </React.Fragment>
            <React.Fragment>
              <Grid item xs={6}>
                <MDTypography gutterBottom>Country Name</MDTypography>
              </Grid>
              <Grid item xs={6}>
                <MDTypography gutterBottom>
                  {country}
                </MDTypography>
              </Grid>
            </React.Fragment>
          </Grid>
        </Grid>
      );
}
