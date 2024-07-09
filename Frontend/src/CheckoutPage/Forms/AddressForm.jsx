import { Avatar, FormControl, Grid, InputLabel } from '@mui/material';
import CheckboxField from 'FormFields/CheckboxField';
import InputField from 'FormFields/InputField';
import SelectField from 'FormFields/SelectField';
import React, { useEffect, useState } from 'react';

import useStyles from '../styles';
import Dropzone from 'react-dropzone';
import { ErrorMessage, useField } from 'formik';
const sex = [
  {
    value: undefined,
    label: 'None'
  },
  {
    value: 'Ms',
    label: 'Ms.'
  },
  {
    value: 'Mr',
    label: 'Mr.'
  },
]

const cities = [
  {
    value: undefined,
    label: 'None'
  },
  {
    value: 'New York',
    label: 'New York'
  },
  {
    value: 'Chicago',
    label: 'Chicago'
  },
  {
    value: 'Saigon',
    label: 'Saigon'
  }
];

const states = [
  {
    value: undefined,
    label: 'None'
  },
  {
    value: 'Florida',
    label: 'Florida'
  },
  {
    value: 'Michigan',
    label: 'Michigan'
  },
  {
    value: 'Texas',
    label: 'Texas'
  }
];

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

export default function AddressForm(props) {
  const classes = useStyles();
  const {
    formField: {
      salutation,
      firstName,
      lastName,
      email,
      password,
      fathername,
      cnic,
      Phonenumber,
      addressI,
      addressII,
      city,
      state,
      zipcode,
      country,
      useAddressForPaymentDetails,
      profileImage,
    }
  } = props;

 

  return (
    <React.Fragment>
     
      <Grid container spacing={3} className={classes.formStepper}>
        <Grid item xs={12} sm={2}>
          <SelectField
            name={salutation.name}
            label={salutation.label}
            data={sex}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={5}>
          <InputField name={firstName.name} label={firstName.label} fullWidth />
        </Grid>
        <Grid item xs={12} sm={5}>
          <InputField name={lastName.name} label={lastName.label} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField name={email.name} label={email.label} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField name={password.name} label={password.label} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField name={fathername.name} label={fathername.label} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField name={cnic.name} label={cnic.label} fullWidth />
        </Grid>
        {/* <Grid item xs={12} sm={6}>
          <InputField name={email.name} label={email.label} fullWidth />
        </Grid> */}
        <Grid item xs={12} sm={6}>
          <InputField name={Phonenumber.name} label={Phonenumber.label} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField name={addressI.name} label={addressI.label} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField name={addressII.name} label={addressII.label} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <SelectField
            name={city.name}
            label={city.label}
            data={cities}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <SelectField
            name={state.name}
            label={state.label}
            data={states}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField name={zipcode.name} label={zipcode.label} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <SelectField
            name={country.name}
            label={country.label}
            data={countries}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <CheckboxField
            name={useAddressForPaymentDetails.name}
            label={useAddressForPaymentDetails.label}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
