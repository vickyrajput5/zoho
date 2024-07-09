import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  IconButton,
  Dialog,
  AppBar,
  Toolbar,
  Typography,
  Icon,
  Slide,
  Modal,
  Grid,
  Card,
  Backdrop,
  CircularProgress,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import {
  fetchEmployeeById,
  updateEmployeeById,
} from "context/reducer/employeeSlice";
import { closePopover } from "context/reducer/PopoverSlice";
import MDInput from "components/MDInput";
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import show_Toast from "helper/toast.helper";
import MDTypography from "components/MDTypography";
// import { DatePicker } from "@mui/x-date-pickers";
// import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  background: "transparent",

  width: "950px",
};
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const EmpViewPopup = ({ selectedEmployeeId }) => {
  const dispatch = useDispatch();
  const { selectedEmployee, loading, error } = useSelector(
    (state) => state.employee
  );
  const open = useSelector((state) => state.popover.open);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    Phonenumber: "",
    joiningDate: "",
    position: "",
    email: "",
    fathername: "",
    cnic: "",
    address1: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    employer: "",
    qualificationname: "",
    institute: "",
    departmentName: "",
    designationName: "",
    grade: "",
    workphone: "",
    reporting: "",
    // sourceofhire: "",
    Employeetype: "",
    role: "",
  });

  useEffect(() => {
    console.log("Employee ID received:", selectedEmployeeId);
    if (selectedEmployeeId) {
      dispatch(fetchEmployeeById(selectedEmployeeId))
        .then((response) => {
          console.log("Fetch Employee Response:", response);
        })
        .catch((error) => {
          console.error("Fetch Employee Error:", error);
        });
    }
  }, [dispatch, selectedEmployeeId]);

  useEffect(() => {
    if (selectedEmployee) {
      setFormData({
        firstName: selectedEmployee?.data?.firstName || "",
        lastName: selectedEmployee?.data?.lastName || "",
        Phonenumber: selectedEmployee?.data?.Phonenumber || "",
        joiningDate: selectedEmployee?.data?.joiningDate
          ? selectedEmployee.data.joiningDate.split("T")[0]
          : "",
        position: selectedEmployee?.data?.position || "",
        email: selectedEmployee?.data?.email || "",
        fathername: selectedEmployee?.data?.fathername || "",
        cnic: selectedEmployee?.data?.cnic || "",
        address1: selectedEmployee?.data?.address1 || "",
        city: selectedEmployee?.data?.city || "",
        state: selectedEmployee?.data?.state || "",
        zipcode: selectedEmployee?.data?.zipcode || "",
        country: selectedEmployee?.data?.country || "",
        employer: selectedEmployee?.data?.employer || "",
        qualificationname: selectedEmployee?.data?.qualificationname || "",
        institute: selectedEmployee?.data?.institute || "",
        departmentName: selectedEmployee?.data?.department_name || "",
        designationName: selectedEmployee?.data?.designation_name || "",
        grade: selectedEmployee?.data?.grade || "",
        workphone: selectedEmployee?.data?.workphone || "",
        reporting: selectedEmployee?.data?.reporting || "",
        // sourceofhire: selectedEmployee?.data?.sourceofhire || "",
        Employeetype: selectedEmployee?.data?.Employeetype || "",
        role: selectedEmployee?.data?.role || "",
      });
    }
  }, [selectedEmployee]);

  const handleClose = () => {
    dispatch(closePopover());
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleUpdateClick = () => {
    console.log("Updating employee with data:", formData);
    dispatch(
      updateEmployeeById({ id: selectedEmployeeId, updatedData: formData })
    )
      .unwrap()
      .then((response) => {
        console.log("update Response:", response);
        // Display toast message based on the status
        show_Toast({
          message: response?.message || "Success",
        });
      });

    setIsEditing(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  if (loading)
    return (
      <div>
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={loading}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      </div>
    );
  if (error) return <div>Error: {error.message}</div>; // Display error message

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      TransitionComponent={Transition}
      sx={{
        "& .MuiModal-backdrop": {
          backgroundColor: "rgba(0, 0, 0, 0.11)",
        },
      }}
      className="Waqar"
    >
      <MDBox py={1} px={2} sx={style} className="waqar2">
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
            <MDTypography
              variant="h4"
              fontWeight="medium"
              color="white"
              mt={1}
              mb={1}
            >
              Employee Details
            </MDTypography>
          </MDBox>
          <MDBox p={3}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={3}>
                <MDInput
                  label="First Name"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  disabled={!isEditing}
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <MDInput
                  label="Last Name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  disabled={!isEditing}
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <MDInput
                  label="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={!isEditing}
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <MDInput
                  label="Father Name"
                  name="fathername"
                  value={formData.fathername}
                  onChange={handleChange}
                  disabled={!isEditing}
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <MDInput
                  label="CNIC Number"
                  name="cnic"
                  value={formData.cnic}
                  onChange={handleChange}
                  disabled={!isEditing}
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <MDInput
                  label="Phone Number"
                  name="Phonenumber"
                  value={formData.Phonenumber}
                  onChange={handleChange}
                  disabled={!isEditing}
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <MDInput
                  type="date"
                  label="Joining Date"
                  name="joiningDate"
                  value={formData.joiningDate || "Not Available"}
                  onChange={handleChange}
                  disabled={!isEditing}
                  sx={{ width: "94%" }}
                />
              </Grid>

              <Grid item xs={12} md={3}>
                <MDInput
                  label="Address"
                  name="address1"
                  value={formData.address1}
                  onChange={handleChange}
                  disabled={!isEditing}
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <MDInput
                  label="City"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  disabled={!isEditing}
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <MDInput
                  label="State"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  disabled={!isEditing}
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <MDInput
                  label="Zip Code"
                  name="zipcode"
                  value={formData.zipcode}
                  onChange={handleChange}
                  disabled={!isEditing}
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <MDInput
                  label="Country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  disabled={!isEditing}
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <MDInput
                  label="Company Name"
                  name="employer"
                  value={formData.employer}
                  onChange={handleChange}
                  disabled={!isEditing}
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <MDInput
                  label="Position"
                  name="position"
                  value={formData.position}
                  onChange={handleChange}
                  disabled={!isEditing}
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <MDInput
                  label="Education"
                  name="qualificationname"
                  value={formData.qualificationname}
                  onChange={handleChange}
                  disabled={!isEditing}
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <MDInput
                  label="Institute"
                  name="institute"
                  value={formData.institute}
                  onChange={handleChange}
                  disabled={!isEditing}
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <MDInput
                  label="Department"
                  name="departmentName"
                  value={formData.departmentName}
                  onChange={handleChange}
                  disabled={!isEditing}
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <MDInput
                  label="Designation"
                  name="designationName"
                  value={formData.designationName}
                  onChange={handleChange}
                  disabled={!isEditing}
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <MDInput
                  label="Grade"
                  name="grade"
                  value={formData.grade}
                  onChange={handleChange}
                  disabled={!isEditing}
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <MDInput
                  label="Work Phone"
                  name="workphone"
                  value={formData.workphone}
                  onChange={handleChange}
                  disabled={!isEditing}
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <MDInput
                  label="Reporting"
                  name="reporting"
                  value={formData.reporting}
                  onChange={handleChange}
                  disabled={!isEditing}
                />
              </Grid>
              {/* <Grid item xs={12} md={3}>
                <MDInput
                  label="Source of hire"
                  name="sourceofhire"
                  value={formData.sourceofhire}
                  onChange={handleChange}
                  disabled={!isEditing}
                />
              </Grid> */}
              <Grid item xs={12} md={3}>
                <MDInput
                  label="Employee type"
                  name="Employeetype"
                  value={formData.Employeetype}
                  onChange={handleChange}
                  disabled={!isEditing}
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <MDInput
                  label="Role"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  disabled={!isEditing}
                />
              </Grid>
            </Grid>
            <MDBox mt={2}>
              {isEditing ? (
                <MDButton
                  variant="contained"
                  color="primary"
                  onClick={handleUpdateClick}
                >
                  Update
                </MDButton>
              ) : (
                <MDButton
                  variant="contained"
                  color="info"
                  onClick={handleEditClick}
                  startIcon={<Icon>edit</Icon>}
                >
                  Edit
                </MDButton>
              )}
            </MDBox>
          </MDBox>
        </Card>
      </MDBox>
    </Modal>
  );
};

export default EmpViewPopup;
