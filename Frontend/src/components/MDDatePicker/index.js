
import { forwardRef } from "react";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";
import MDDatePicker from "./MDDatePicker";


const MDDateRangePicker = forwardRef(({ success, disabled, ...rest }, ref) => (
  <MDDatePicker {...rest} ref={ref} ownerState={{  success, disabled }} />
));

// Setting default values for the props of MDInput
MDDateRangePicker.defaultProps = {
  success: false,
  disabled: false,
};

// Typechecking props for the MDDateRangePicker
MDDateRangePicker.propTypes = {
 
  success: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default MDDateRangePicker;
