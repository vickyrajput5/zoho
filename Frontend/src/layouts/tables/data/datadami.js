// @mui material components
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDInput from "components/MDInput";
import { useDispatch, useSelector } from "react-redux";
import { fetchEmployees } from "context/reducer/employeeSlice";
import {
  updateEmployee,
  deleteEmployee,
} from "context/reducer/employeeUpdateDeleteSlice";
import { useEffect, useState } from "react";
import { openPopover, closePopover } from "context/reducer/PopoverSlice";
import EmpViewPopup from "examples/Popup/EmpViewPopup";

export default function data() {
  const dispatch = useDispatch();
  const employeesData = useSelector((state) => state.employee.employees);
  const employees = employeesData.data || [];
  const open = useSelector((state) => state.popover.open);
  const keyForRerender = employeesData.status;
  const [selectedEmployeeId, setSelectedEmployeeId] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);
  const handleOpenMenu = (event) => setOpenMenu(event.currentTarget);
  const handleCloseMenu = () => setOpenMenu(false);

  useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch, keyForRerender]);

  const handleOpenPop = (employeeId) => {
    setSelectedEmployeeId(employeeId);
    dispatch(openPopover("empView"));
  };

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "numeric", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const Project = ({ image, name }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
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

  const handleUpdate = (id) => {
    // Dispatch the updateEmployee action here
    dispatch(updateEmployee({ id, data: updateData }));
  };

  const handleDelete = (id) => {
    // Dispatch the deleteEmployee action here
    dispatch(deleteEmployee(id));
  };

  const rows = Array.isArray(employees)
    ? employees.map((employee, index) => ({
        items: (
          <MDTypography>
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
            image={LogoAsana}
            name={`${employee.firstName} ${employee.lastName}`}
          />
        ),
        emp_id: (
          <MDTypography
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
            component="a"
            variant="caption"
            color="text"
            fontWeight="medium"
          >
            {employee.position}
          </MDTypography>
        ),
        action: (
          <MDBox>
            <EmpViewPopup
              employeeId={selectedEmployeeId}
              onClose={() => dispatch(closePopover())}
            />
            <MDTypography
              component="a"
              color="text"
              px={2}
              onClick={() => handleOpenPop(employee.id)}
            >
              <Icon>visibility</Icon>
            </MDTypography>
            <MDTypography
              component="a"
              color="text"
              px={2}
              onClick={() => handleOpenPop(employee.id)}
            >
              <Icon>edit_square</Icon>
            </MDTypography>
            <MDTypography
              component="a"
              color="text"
              onClick={() => handleDelete(employee.id)}
            >
              <Icon>delete</Icon>
            </MDTypography>
          </MDBox>
        ),
      }))
    : [];

  return {
    columns: [
      { Header: "No#", accessor: "items", align: "left" },
      { Header: "Full Name", accessor: "project", width: "30%", align: "left" },
      { Header: "Emp_ID", accessor: "emp_id", align: "left" },
      { Header: "Phone", accessor: "phone", align: "center" },
      { Header: "Join Date", accessor: "JoinDate", align: "center" },
      { Header: "Role", accessor: "role", align: "center" },
      { Header: "action", accessor: "action", align: "center" },
    ],
    rows: rows,
  };
}
