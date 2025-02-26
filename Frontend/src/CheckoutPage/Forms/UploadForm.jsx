import React, { useState, useEffect } from "react";
import { Field, useField } from "formik";
import { FormHelperText, Grid } from "@mui/material";
import Thumb from "CheckoutPage/common/Thumb";
import UploadField from "FormFields/UploadField";

const UploadForm = (props) => {
  const {
    formField: { image }
  } = props;

  const [field, meta, helper] = useField(image.name);
  const { touched, error } = meta;
  const { setValue } = helper;
  const isError = touched && error && true;
  const { value } = field;

  const [fileName, setFileName] = useState(value.name);
  const [file, setFile] = useState(value.file);
  const [src, setSrc] = useState(value.src);
  const _onChange = (e) => {
    let reader = new FileReader();
    let file = e.target.files[0];
    if (file) {
      reader.onloadend = () => setFileName(file.name);
      if (file.name !== fileName) {
        reader.readAsDataURL(file);
        setSrc(reader);
        setFile(file);
      }
    }
  };

  useEffect(() => {
    if (file && fileName && src) {
      setValue({ file: file, src: src, name: fileName });
      console.log(fileName);
    }
  }, [src, fileName, file]);

  return (
    <React.Fragment>
      <Grid container spacing={3} justify="center" alignItems="center">
        <Grid item xs={12}>
          <label style={{ color: `${isError ? "red" : "var(--main-color)"}` }}>
            {image.label}
          </label>
          <br />
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              fontSize: "1.2em"
            }}
          >
            <Field
              variant="outlined"
              field={field}
              component={UploadField}
              onChange={_onChange}
              isError={isError}
            />
            {isError && <FormHelperText color={"red"}>{error}</FormHelperText>}
          </div>
        </Grid>
        <Grid item>{file && src && <Thumb file={file} src={src}></Thumb>}</Grid>
      </Grid>
    </React.Fragment>
  );
};

export default UploadForm;
