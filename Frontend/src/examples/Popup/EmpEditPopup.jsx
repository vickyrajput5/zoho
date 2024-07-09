
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { closePopover, openPopover } from 'context/reducer/PopoverSlice';
import MDBox from 'components/MDBox';
import { Link } from 'react-router-dom';
import MDTypography from 'components/MDTypography';
import { Card, Checkbox, FormControl, Grid, Icon, InputLabel, MenuItem, Step, StepLabel, Stepper } from '@mui/material';
import './pop.css'
import MDInput from 'components/MDInput';
import MDButton from 'components/MDButton';
import MDSelect from 'components/MDSelect';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import MDDateRangePicker from 'components/MDDatePicker';
import dayjs from 'dayjs';
import show_Toast from 'helper/toast.helper';
import { EmployeeValidation } from 'examples/validations/EmployeeValidation';
import {  Formik, useFormik } from 'formik';
import  CheckoutPage  from 'CheckoutPage/CheckoutPage';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  background:"transparent",

  width:"850px"
};
// Define the steps for your form



export default function EmpEditPopup() {
    const open = useSelector((state) => state.popover.open);
    const dispatch = useDispatch();
 


    const handleClose = () => {
      dispatch(closePopover());
    };
 
  
  return (
    <div>
      {/* <Button onClick={handleOpenPop}>Open modal</Button> */}
      <Modal
        open={open}
        onClose={() => handleClose(Formik)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        
      >
       <MDBox
       py={1}
       px={2}
    
      
       sx={style}
       >
           <Card>
          
          <MDBox>
            <MDBox pt={4} pb={3} px={3}>
              <h1>Waqar</h1>
            </MDBox>
          </MDBox>
          
           
        </Card>
       </MDBox>
      </Modal>
    </div>
  );
}
