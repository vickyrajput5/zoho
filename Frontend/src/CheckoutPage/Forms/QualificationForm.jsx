import React from 'react';
import { Grid, Typography } from '@mui/material';
import InputField from 'FormFields/InputField';
import SelectField from 'FormFields/SelectField';
const countries = [
  {
    value: null,
    label: 'None'
  },
  {
    value: 'United States',
    label: 'United States'
  },
  {
    value: 'Italy',
    label: 'Italy'
  },
  {
    value: 'Vietnam',
    label: 'Vietnam'
  }
];
export default function QualificationForm(props) {
  const {
    formField: { qualificationname, institute,  qualificationCountry }
  } = props;

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <InputField
            name={qualificationname.name}
            label={qualificationname.label}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <InputField
            name={institute.name}
            label={institute.label}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <SelectField
            name={qualificationCountry.name}
            label={qualificationCountry.label}
            data={countries}
            fullWidth
          />
        </Grid>
        {/* <Grid item xs={12} md={6}>
          <InputField name={cvv.name} label={cvv.label} fullWidth />
        </Grid> */}
        
      </Grid>
    </React.Fragment>
  );
}
