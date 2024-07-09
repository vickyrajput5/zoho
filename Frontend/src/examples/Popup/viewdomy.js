import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  IconButton,
  List,
  ListItem,
  ListItemText,
  Divider,
  Slide,
  Dialog,
  AppBar,
  Toolbar,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { fetchEmployeeById } from "context/reducer/employeeSlice";
import { closePopover } from "context/reducer/PopoverSlice";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const EmpViewPopup = ({ selectedEmployeeId }) => {
  const dispatch = useDispatch();
  const { selectedEmployee, loading, error } = useSelector(
    (state) => state.employee
  );
  const open = useSelector((state) => state.popover.open);

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

  const handleClose = () => {
    dispatch(closePopover());
  };
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "numeric", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>; // Display error message

  return (
    <Dialog
      fullScreen
      open={open}
      onClose={handleClose}
      TransitionComponent={Transition}
    >
      <AppBar sx={{ position: "relative" }}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
          <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
            Employee Details
          </Typography>
        </Toolbar>
      </AppBar>
      <List>
        <ListItem>
          <ListItemText
            primary="First Name"
            secondary={selectedEmployee?.data?.firstName || "Not available"}
          />
          <ListItemText
            primary="Last Name"
            secondary={selectedEmployee?.data?.lastName || "Not available"}
          />
          <ListItemText
            primary="Father Name"
            secondary={selectedEmployee?.data?.fathername || "Not available"}
          />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText
            primary="Email"
            secondary={selectedEmployee?.data?.email || "Not available"}
          />
          <ListItemText
            primary="Phone"
            secondary={selectedEmployee?.data?.Phonenumber || "Not available"}
          />
          <ListItemText
            primary="CNIC Number"
            secondary={selectedEmployee?.data?.cnic || "Not available"}
          />
        </ListItem>
        <Divider />
        <ListItem></ListItem>
        <Divider />
        <ListItem>
          <ListItemText
            primary="Join Date"
            secondary={
              selectedEmployee?.data?.joiningDate
                ? new Date(
                    selectedEmployee.data.joiningDate
                  ).toLocaleDateString(undefined, {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })
                : "Not available"
            }
          />
        </ListItem>

        <Divider />
        <ListItem>
          <ListItemText
            primary="Role"
            secondary={selectedEmployee?.data?.position || "Not available"}
          />
        </ListItem>
      </List>
    </Dialog>
  );
};

export default EmpViewPopup;
