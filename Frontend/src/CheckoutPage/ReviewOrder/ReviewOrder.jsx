import React from "react";
import { Grid, Typography } from "@mui/material";
import { useFormikContext } from "formik";
import ReportField from "./ReportField";
import checkoutFormModel from "CheckoutPage/FormModel/checkoutFormModel";
import useStyles from "./styles";
export const ReviewOrder = () => {
  const { formField } = checkoutFormModel;
  const classes = useStyles();
  const { values: formValues } = useFormikContext();
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Employee Data
      </Typography>
      <Grid container spacing={2} className={classes.gridBox}>
        <ReportField formValues={formValues} formField={formField} />
      </Grid>
    </React.Fragment>
  );
};
