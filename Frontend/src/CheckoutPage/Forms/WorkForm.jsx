import React from 'react';
import { Grid, Typography } from '@mui/material';
import InputField from 'FormFields/InputField';
import SelectField from 'FormFields/SelectField';

const employeetype = [
  {
    value: "Parmanent",
    label: "Parmanent"
  },
  {
    value: "Probations",
    label:"Probations"
  }
]

export default function WorkForm(props) {
  const {
    formField: { departmentName , designationName,  grade , workphone, reporting, sourceofhire, Employeetype, role, joiningDate}
  } = props;

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <InputField
            name={departmentName.name}
            label={departmentName.label}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <InputField
            name={designationName.name}
            label={designationName.label}
            fullWidth
          />
        </Grid>
       
        <Grid item xs={12} md={6}>
          <InputField name={grade.name} label={grade.label} fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <InputField name={workphone.name} label={workphone.label} fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <InputField name={reporting.name} label={reporting.label} fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <InputField name={sourceofhire.name} label={sourceofhire.label} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
        <SelectField
            name={Employeetype.name}
            label={Employeetype.label}
            data={employeetype}
            fullWidth
          />
          </Grid>
          <Grid item xs={12} md={6}>
          <InputField name={role.name} label={role.label} fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <InputField name={joiningDate.name} label={joiningDate.label} fullWidth />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
