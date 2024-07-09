import React, { useState } from "react";
import {
  Button,
  CircularProgress,
  Step,
  StepLabel,
  Stepper,
} from "@mui/material";
import { Form, Formik } from "formik";
import AddressForm from "./Forms/AddressForm";
import validationSchema from "./FormModel/validationSchema";
import checkoutFormModel from "./FormModel/checkoutFormModel";
import formInitialValues from "./FormModel/formInitialValues";
import useStyles from "./styles";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import { useDispatch } from "react-redux";
import { addEmployee, fetchEmployees } from "context/reducer/employeeSlice";
import show_Toast from "../helper/toast.helper"; // Update this path
import { closePopover } from "context/reducer/PopoverSlice";
import QualificationForm from "./Forms/QualificationForm";
import ExperienceForm from "./Forms/ExperienceForm";
import WorkForm from "./Forms/WorkForm";
import { ReviewOrder } from "./ReviewOrder/ReviewOrder";

const steps = [
  "Employee Info",
  "Qualifications",
  "Experiences",
  "Work Details",
  "Review",
];
const { formId, formField } = checkoutFormModel;

const CheckoutPage = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState(null);

  const dispatch = useDispatch();

  const _sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const validateEmail = async (values, actions) => {
    try {
      const response = await dispatch(addEmployee({ email: values.email }));
      if (response?.payload?.status === "error") {
        setEmailError(response?.payload?.message);
      } else {
        setEmailError(null);
        setActiveStep(activeStep + 1);
      }
    } catch (error) {
      setEmailError("Error checking email uniqueness.");
    }
    actions.setSubmitting(false);
  };

  const _handleSubmit = async (values, actions) => {
    try {
      setFormData((prevData) => ({ ...prevData, ...values }));

      if (activeStep === steps.length - 1) {
        await _submitForm(values, actions);
      } else if (activeStep === 0) {
        // Validate email uniqueness before moving to the next step
        validateEmail(values, actions);
      } else {
        setActiveStep(activeStep + 1);
        actions.setTouched({});
        actions.setSubmitting(false);
      }
    } catch (error) {
      actions.setSubmitting(false);
    }
  };

  const _submitForm = async (values, actions) => {
    try {
      setLoading(true);
      await _sleep(1000);

      const response = await dispatch(addEmployee(formData));

      setFormData({});
      setLoading(false);
      dispatch(fetchEmployees());
      // Display toast message based on the status
      show_Toast({
        status: response?.payload?.status === "success",
        message: response?.payload?.message || "Success",
      });
      if (response?.payload?.status === "success") {
        handleClose(); // Replace this with your actual modal close logic
      }

      setActiveStep(activeStep + 1);
      actions.setSubmitting(false);
    } catch (error) {
      setLoading(false);
      actions.setSubmitting(false);
    }
  };

  const _renderStepContent = (step) => {
    switch (step) {
      case 0:
        return <AddressForm formField={formField} />;
      case 1:
        return <QualificationForm formField={formField} />;
      case 2:
        return <ExperienceForm formField={formField} />;
      case 3:
        return <WorkForm formField={formField} />;
      case 4:
        return <ReviewOrder />;
      default:
        return <div>Not Found</div>;
    }
  };

  const _handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleClose = () => {
    dispatch(closePopover());
  };

  return (
    <React.Fragment>
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
        <MDTypography
          variant="h4"
          fontWeight="medium"
          color="white"
          mt={1}
          mb={1}
        >
          Employee Registration
        </MDTypography>
        <Stepper activeStep={activeStep} className={classes.stepper}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </MDBox>

      <React.Fragment>
        {activeStep === steps.length ? null : (
          <Formik
            initialValues={formInitialValues}
            validationSchema={validationSchema[activeStep]}
            onSubmit={_handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form id={formId}>
                {_renderStepContent(activeStep)}

                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button onClick={_handleBack} className={classes.button}>
                      Back
                    </Button>
                  )}
                  <div className={classes.wrapper}>
                    <Button
                      disabled={
                        isSubmitting ||
                        loading ||
                        (activeStep === 0 && emailError)
                      }
                      type="submit"
                      variant="contained"
                      color="primary"
                      className={classes.button}
                    >
                      {activeStep === steps.length - 1 ? "Register" : "Next"}
                    </Button>
                    {loading && (
                      <CircularProgress
                        size={24}
                        className={classes.buttonProgress}
                      />
                    )}
                  </div>
                  {activeStep === 0 && emailError && (
                    <div className={classes.errorText}>{emailError}</div>
                  )}
                </div>
              </Form>
            )}
          </Formik>
        )}
      </React.Fragment>
    </React.Fragment>
  );
};

export default CheckoutPage;
