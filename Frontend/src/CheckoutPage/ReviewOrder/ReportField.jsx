// ReportField.jsx

import React from 'react';
import { Grid, Typography } from '@mui/material';
import useStyles from './styles';
import Thumb from 'CheckoutPage/common/Thumb';

const RenderData = (props) => {
  const { field, value } = props;

  if (typeof field.type === 'undefined') {
    // Handle the case where `field.type` is undefined or falsy
    return <Typography gutterBottom>{`${value}`}</Typography>;
  }

  switch (field.type) {
    case 'select':
      const selectedOption = field.options.find((option) => option.value === value);
      return (
        <Typography variant="h6" gutterBottom>
          {selectedOption ? selectedOption.label : ''}
        </Typography>
      );
    case 'text':
      return <Typography variant="h6" gutterBottom>{`${value}`}</Typography>;
    case 'image':
      return <Thumb file={value.file} src={value.src} variant={'small'} />;
    default:
      return null;
  }
};


function ReportField(props) {
  const { formValues, formField } = props;
  
  const classes = useStyles();

  return Object.values(formField).map((field) => {
    return (
      <Grid item  xs={12} display={'flex'} alignItems={"center"} sm={`${field.type === 'image' ? 12 : 6}`} key={field.name}>
        <Typography variant="h5" gutterBottom className={classes.title}>
          {field.label}
        </Typography>
        <RenderData  field={field} value={formValues[field.name]} />
      </Grid>
    );
  });
}

export default ReportField;
