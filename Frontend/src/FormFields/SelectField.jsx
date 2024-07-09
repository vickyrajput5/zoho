import React from 'react';
import PropTypes from 'prop-types';
import { at } from 'lodash';
import { useField } from 'formik';
import { FormControl, FormHelperText, InputLabel, MenuItem, Select } from '@mui/material';
import MDSelect from 'components/MDSelect';


function SelectField(props) {
  const { label, data, ...rest } = props;
  const [field, meta] = useField(props);
  const { value: selectedValue } = field;
  const [touched, error] = at(meta, 'touched', 'error');
  const isError = touched && error && true;
  function _renderHelperText() {
    if (isError) {
      return <FormHelperText>{error}</FormHelperText>;
    }
  }

  return (
    <FormControl {...rest} error={isError}>
      <InputLabel>{label}</InputLabel>
      <MDSelect {...field} value={selectedValue ? selectedValue : ''}  variant="standard">
        {data.map((item, index) => (
          <MenuItem key={index} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </MDSelect>
      {_renderHelperText()}
    </FormControl>
  );
}

SelectField.defaultProps = {
  data: []
};

SelectField.propTypes = {
  data: PropTypes.array.isRequired
};

export default SelectField;
