import React, { useState, useEffect } from 'react';
import { useField } from 'formik';
// import {
//   MuiPickersUtilsProvider,
//   KeyboardDatePicker
// } from '@material-ui/pickers';
import { Grid } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

export default function DatePickerField(props) {
  const [field, meta, helper] = useField(props);
  const { touched, error } = meta;
  const { setValue } = helper;
  const isError = touched && error && true;
  const { value } = field;
  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    if (value) {
      const date = new Date(value);
      setSelectedDate(date);
    }
  }, [value]);

  function _onChange(date) {
    if (date) {
      setSelectedDate(date);
      try {
        const ISODateString = date.toISOString();
        setValue(ISODateString);
      } catch (error) {
        setValue(date);
      }
    } else {
      setValue(date);
    }
  }

  return (
    <Grid container>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          {...field}
          {...props}
          value={selectedDate}
          onChange={_onChange}
          error={isError}
          invalidDateMessage={isError && error}
          helperText={isError && error}
        />
      </LocalizationProvider>
    </Grid>
  );
}
