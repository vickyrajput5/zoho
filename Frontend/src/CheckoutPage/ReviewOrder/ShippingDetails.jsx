import { Grid, Typography } from '@mui/material';
import React from 'react'
import useStyles from './styles';
export const ShippingDetails = (props) => {
    const { formValues } = props;
    const classes = useStyles();
    const { salutation, firstName, lastName, address1 } = formValues;
    return (
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Shipping
          </Typography>
          <Typography gutterBottom>{`${salutation} ${firstName} ${lastName}`}</Typography>
          <Typography gutterBottom>{`${address1}`}</Typography>
        </Grid>
      );
}
