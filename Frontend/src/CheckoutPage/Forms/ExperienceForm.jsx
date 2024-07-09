import React from 'react';
import { Grid, Typography } from '@mui/material';
import InputField from 'FormFields/InputField';

export default function ExperienceForm(props) {
  const {
    formField: { employer, position}
  } = props;

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <InputField
            name={employer.name}
            label={employer.label}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <InputField
            name={position.name}
            label={position.label}
            fullWidth
          />
        </Grid>
        {/* <Grid item xs={12} md={6}>
          <DatePickerField
            name={expiryDate.name}
            label={expiryDate.label}
            format="MM/yy"
            views={['year', 'month']}
            minDate={new Date()}
            maxDate={new Date('2050/12/31')}
            fullWidth
          />
        </Grid> */}
        {/* <Grid item xs={12} md={6}>
          <InputField name={cvv.name} label={cvv.label} fullWidth />
        </Grid> */}
      </Grid>
    </React.Fragment>
  );
}
