import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEmployeeById } from "context/reducer/employeeSlice";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";

const EmpViewPopup = ({ employeeId, onClose }) => {
  const dispatch = useDispatch();
  const { selectedEmployee, loading, error } = useSelector(
    (state) => state.employee.employees
  );

  useEffect(() => {
    if (employeeId) {
      dispatch(fetchEmployeeById(employeeId));
    }
  }, [dispatch, employeeId]);

  // Handle loading state
  if (loading) return <div>Loading...</div>;

  // Handle error state
  if (error) return <div>Error: {error}</div>;

  return (
    <MDBox
      display="flex"
      flexDirection="column"
      p={3}
      bgcolor="background.paper"
    >
      <MDTypography variant="h4" mb={2}>
        Employee Details
      </MDTypography>
      {selectedEmployee && (
        <div>
          <MDTypography variant="h6">
            {selectedEmployee.firstName} {selectedEmployee.lastName}
          </MDTypography>
          <MDTypography>ID: {selectedEmployee.id}</MDTypography>
          <MDTypography>Email: {selectedEmployee.email}</MDTypography>
          <MDTypography>Phone: {selectedEmployee.Phonenumber}</MDTypography>
          <MDTypography>
            Joining Date: {selectedEmployee.joiningDate}
          </MDTypography>
          {/* Add more fields as needed */}
        </div>
      )}
      <MDButton variant="contained" color="primary" onClick={onClose} mt={2}>
        Close
      </MDButton>
    </MDBox>
  );
};

export default EmpViewPopup;
