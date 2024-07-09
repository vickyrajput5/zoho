import Icon from "@mui/material/Icon";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDProgress from "components/MDProgress";
import LogoAsana from "assets/images/team-1.jpg";
import MDInput from "components/MDInput";
import { useDispatch, useSelector } from "react-redux";
import { fetchEmployees } from "context/reducer/employeeSlice";
import {
  // updateEmployee,
  deleteEmployee,
} from "context/reducer/employeeUpdateDeleteSlice";
import { useEffect, useState, useCallback } from "react";
import { openPopover } from "context/reducer/PopoverSlice";
import EmpViewPopup from "examples/Popup/EmpViewPopup";
import show_Toast from "helper/toast.helper";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  Slide,
} from "@mui/material";
import MDButton from "components/MDButton";
// import { LocalizationProvider } from "@mui/x-date-pickers";
// import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

export default function Data() {
  const dispatch = useDispatch();
  const employeesData = useSelector((state) => state.employee.employees);
  const employees = employeesData?.data || [];
  const keyForRerender = employeesData?.status;
  const [selectedEmployeeId, setSelectedEmployeeId] = useState(null);
  const modalType = useSelector((state) => state.popover.modalType);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [deleteEmployeeId, setDeleteEmployeeId] = useState(null);

  useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch, keyForRerender]);

  // Memoize the event handler using useCallback
  const handleOpenPop = useCallback(
    (id) => {
      setSelectedEmployeeId(id);
      dispatch(openPopover("empView"));
    },
    [dispatch]
  );

  const Project = ({ image, name }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <Dialog
        open={deleteDialogOpen}
        onClose={handleDeleteCancel}
        TransitionComponent={Slide}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{
          "& .MuiModal-backdrop": {
            backgroundColor: "rgba(0, 0, 0, 0.11)",
          },
        }}
      >
        <DialogTitle id="alert-dialog-title">Confirm Delete</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete this employee permanently?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <MDButton
            onClick={handleDeleteCancel}
            variant="contained"
            color="info"
          >
            Cancel
          </MDButton>
          <MDButton
            onClick={handleDeleteConfirm}
            variant="contained"
            color="primary"
            autoFocus
          >
            Confirm
          </MDButton>
        </DialogActions>
      </Dialog>
      {modalType === "empView" && (
        <EmpViewPopup selectedEmployeeId={selectedEmployeeId} />
      )}
      <MDAvatar src={image} name={name} size="sm" shadow="sm" />
      <MDTypography
        display="block"
        variant="button"
        fontWeight="medium"
        ml={1}
        lineHeight={1}
      >
        {name}
      </MDTypography>
    </MDBox>
  );

  const handleDeleteClick = (id) => {
    setDeleteEmployeeId(id);
    setDeleteDialogOpen(true);
  };

  const handleDeleteConfirm = () => {
    dispatch(deleteEmployee(deleteEmployeeId))
      .unwrap()
      .then((response) => {
        console.log("Delete Response:", response?.data);
        // Display toast message based on the status
        show_Toast({
          message: response?.message || "Employee deleted successfully!",
        });
        dispatch(fetchEmployees());
      });
    setDeleteDialogOpen(false);
  };

  const handleDeleteCancel = () => {
    setDeleteDialogOpen(false);
    setDeleteEmployeeId(null);
  };

  // const handleDelete = (id) => {
  //   dispatch(deleteEmployee(id))
  //     .unwrap()
  //     .then((response) => {
  //       console.log("Delete Response:", response?.data);
  //       // Display toast message based on the status
  //       show_Toast({
  //         message: response?.message || "Employee deleted successfully!",
  //       });
  //       dispatch(fetchEmployees());
  //     });
  // };
  // const handleDelete = async (id) => {
  //   try {
  //     const response = await dispatch(deleteEmployee(id)).unwrap();
  //     console.log("Delete Response:", response);
  //     if (response) {
  //       show_Toast(response.message || "Employee deleted successfully!");
  //     }
  //     dispatch(fetchEmployees()); // Refresh employee data
  //   } catch (error) {
  //     show_Toast("Failed to delete employee.");
  //   }
  // };

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "numeric", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const rows = Array.isArray(employees)
    ? employees.map((employee, index) => ({
        items: (
          <MDTypography key={`item-${index}`}>
            <MDInput
              type="checkbox"
              variant="standard"
              fullWidth
              name="password"
            />
          </MDTypography>
        ),
        project: (
          <Project
            key={`project-${index}`}
            image={LogoAsana}
            name={`${employee.firstName} ${employee.lastName}`}
          />
        ),
        emp_id: (
          <MDTypography
            key={`emp_id-${index}`}
            component="a"
            variant="caption"
            color="text"
            fontWeight="medium"
          >
            {employee.id}
          </MDTypography>
        ),
        phone: (
          <MDTypography
            key={`phone-${index}`}
            component="a"
            variant="caption"
            color="text"
            fontWeight="medium"
          >
            {employee.Phonenumber}
          </MDTypography>
        ),
        JoinDate: (
          <MDTypography
            key={`JoinDate-${index}`}
            component="a"
            variant="caption"
            color="text"
            fontWeight="medium"
          >
            {formatDate(employee.joiningDate)}
          </MDTypography>
        ),
        role: (
          <MDTypography
            key={`role-${index}`}
            component="a"
            variant="caption"
            color="text"
            fontWeight="medium"
          >
            {employee.position}
          </MDTypography>
        ),
        action: (
          <MDBox key={`action-${index}`}>
            <MDTypography
              component="a"
              color="text"
              sx={{ cursor: "pointer" }}
              px={2}
              onClick={() => handleOpenPop(employee.id)}
            >
              <Icon>visibility</Icon>
            </MDTypography>

            <MDTypography
              component="a"
              color="text"
              // onClick={() => handleDelete(employee.id)}
              onClick={() => handleDeleteClick(employee.id)}
            >
              <Icon>delete</Icon>
            </MDTypography>
          </MDBox>
        ),
      }))
    : [];

  return {
    columns: [
      // { Header: "No#", accessor: "items", align: "left" },
      { Header: "Full Name", accessor: "project", width: "30%", align: "left" },
      { Header: "Emp_ID", accessor: "emp_id", align: "left" },
      { Header: "Phone", accessor: "phone", align: "center" },
      { Header: "Join Date", accessor: "JoinDate", align: "center" },
      { Header: "Role", accessor: "role", align: "center" },
      { Header: "Action", accessor: "action", align: "center" },
    ],
    rows: rows,
  };
}
