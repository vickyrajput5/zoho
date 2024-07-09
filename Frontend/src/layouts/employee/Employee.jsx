import { Card, Grid, Icon, Menu } from "@mui/material";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import DataTable from "examples/Tables/DataTable";
import React, { useEffect, useState } from "react";
import employeetabledata from 'layouts/tables/data/employeetabledata' 
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";
import './employee.css'
import EmployeeCards from "examples/Cards/EmployeeCards/EmployeeCards";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { openPopover } from "context/reducer/PopoverSlice";
import { fetchEmployees, setSelectedEmployee } from "context/reducer/employeeSlice";
export const Employee = () => {
    const { columns, rows } = employeetabledata();
    const [openMenu, setOpenMenu] = useState(false);
    const handleOpenMenu = (event) => setOpenMenu(event.currentTarget);
    const handleCloseMenu = () => setOpenMenu(false);

    const open = useSelector((state)=> state.popover.open)
    const dispatch = useDispatch()
    
    const handleOpenPop = () => {
      dispatch(openPopover("employeeRegister"));
    };

  //   const employees = useSelector((state) => state.employee.employees);
  //   console.log('employees  data :' , employees)
  //  useEffect(() => {
  //     dispatch(fetchEmployees());
  //   }, [dispatch]);

  
    
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox
       width="6rem"
       textAlign="center"
       cursor="pointer"
       py={1}
       px={2}
       variant="gradient"
       bgColor="info"
       borderRadius="lg"
       coloredShadow="info"
       className="addBtn"
       onClick={handleOpenPop}
      >
        <MDTypography variant="button" cursor="pointer" fontWeight="medium" bgColor="success" color="light" >
          Add +
        </MDTypography>
      </MDBox>
   
      <MDBox py={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox>
              <EmployeeCards
                color="dark"
                icon="groups"
                title="total employee"
                count={`365+`}
           
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox>
              <EmployeeCards
              
                icon="diversity_3"
                title="New employee"
                count={32}
           
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox>
              <EmployeeCards
                color="success"
                icon="man"
                title="Male"
                count={280}
           
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox >
              <EmployeeCards
                color="secondary"
                icon="woman"
                title="Female"
                count={120}
           
              />
            </MDBox>
          </Grid>
        </Grid>
        </MDBox>
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                Employee List
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
              <DataTable
                  table={{ columns, rows }}
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  noEndBorder
                />
              </MDBox>
            </Card>
          </Grid>
         
        </Grid>
      </MDBox>
       
    </DashboardLayout>
  );
};
