import * as Yup from "yup";
import moment from "moment";
import checkoutFormModel from "./checkoutFormModel";

const {
  formField: {
    salutation,
    firstName,
    lastName,
    email,
    password,
    fathername,
    cnic,
    // image,
    Phonenumber,
    addressI,
    city,
    zipcode,
    country,
    qualificationname,
    institute,
    // expiryDate,
    qualificationCountry,
    position,
    employer,
    departmentName,
    designationName,
    grade,
    workphone,
    reporting,
    sourceofhire,
    Employeetype,
    role,
    joiningDate,
    profileImage,
  },
} = checkoutFormModel;

const visaRegEx = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
const FILE_SIZE = 10 * 1024 * 1024; // = 10 MB
const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/gif", "image/png"];
const validationSchema = [
  Yup.object().shape({
    [profileImage.name]: Yup.mixed().test(
      "fileSize",
      "File size is too large",
      (value) => {
        if (!value) return true; // Allow empty files
        return value.size <= 5242880; // 5 MB
      }
    ),
    [salutation.name]: Yup.string().required(`${salutation.requiredErrorMsg}`),
    [firstName.name]: Yup.string()
      .required(`${firstName.requiredErrorMsg}`)
      .min(2, "First Name must be at least 2 characters"),
    [lastName.name]: Yup.string()
      .required(`${lastName.requiredErrorMsg}`)
      .min(2, "Last Name must be at least 2 characters"),
    [addressI.name]: Yup.string().required(`${addressI.requiredErrorMsg}`),
    [email.name]: Yup.string()
      .email(`${email.invalidErrorMsg}`)
      .required(`${email.requiredErrorMsg}`),
    [password.name]: Yup.string()
      .required(`${password.requiredErrorMsg}`)
      .min(8, "Password must be at least 8 characters")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
        "at least one uppercase & lowercase & number & special character"
      ),
    [fathername.name]: Yup.string()
      .required(`${fathername.requiredErrorMsg}`)
      .min(3, "Father Name must be at least 3 characters"),
    [cnic.name]: Yup.string()
      .required("Phone number is required")
      .matches(/^\d{13}$/, "Phone number must be exactly 13 digits"),
    Phonenumber: Yup.string()
      .required(`${Phonenumber.requiredErrorMsg}`)
      .matches(/^\d{11}$/, "Phone number must be exactly 10 digits"),
    [city.name]: Yup.string().nullable().required(`${city.requiredErrorMsg}`),
    [zipcode.name]: Yup.string()
      .required(`${zipcode.requiredErrorMsg}`)
      .test(
        "len",
        `${zipcode.invalidErrorMsg}`,
        (val) => val && val.length === 5
      ),
    [country.name]: Yup.string()
      .nullable()
      .required(`${country.requiredErrorMsg}`),
  }),

  Yup.object().shape({
    [qualificationname.name]: Yup.string().required(
      `${qualificationname.requiredErrorMsg}`
    ),
    [institute.name]: Yup.string().required(`${institute.requiredErrorMsg}`),
    // [expiryDate.name]: Yup.string()
    //   .nullable()
    //   .required(`${expiryDate.requiredErrorMsg}`)
    //   .test('expDate', expiryDate.invalidErrorMsg, val => {
    //     if (val) {
    //       const startDate = new Date();
    //       const endDate = new Date(2050, 12, 31);
    //       if (moment(val, moment.ISO_8601).isValid()) {
    //         return moment(val).isBetween(startDate, endDate);
    //       }
    //       return false;
    //     }
    //     return false;
    //   }),
    [qualificationCountry.name]: Yup.string().required(
      `${qualificationCountry.requiredErrorMsg}`
    ),
  }),
  Yup.object().shape({
    [employer.name]: Yup.string().required(`${employer.requiredErrorMsg}`),
    [position.name]: Yup.string().required(`${position.requiredErrorMsg}`),
  }),
  Yup.object().shape({
    [departmentName.name]: Yup.string().required(
      `${departmentName.requiredErrorMsg}`
    ),
    [designationName.name]: Yup.string().required(
      `${designationName.requiredErrorMsg}`
    ),
    [grade.name]: Yup.string().required(`${grade.requiredErrorMsg}`),
    [workphone.name]: Yup.string()
      .required(`${workphone.requiredErrorMsg}`)
      .matches(/^\d{11}$/, "Phone number must be exactly 10 digits"),
    [sourceofhire.name]: Yup.string(),
    [reporting.name]: Yup.string().required(`${reporting.requiredErrorMsg}`),
    [Employeetype.name]: Yup.string().required(
      `${Employeetype.requiredErrorMsg}`
    ),

    [role.name]: Yup.string().required(`${role.requiredErrorMsg}`),
    [joiningDate.name]: Yup.string()
      .required(`${joiningDate.requiredErrorMsg}`)
      .matches(
        /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/,
        "Invalid date format. Use dd/mm/yyyy"
      ),
  }),
  //  // Upload
  //  Yup.object().shape({
  //   [image.name]: Yup.mixed()
  //     .required("A file is required")
  //     .test(
  //       "isEmpty",
  //       `${image.requiredErrorMsg}`,
  //       (value) => value && value.file
  //     )
  //     .test(
  //       "fileSize",
  //       "File too large",
  //       (value) => value && value.file && value.file.size <= FILE_SIZE
  //     )
  //     .test(
  //       "fileFormat",
  //       "Unsupported Format",
  //       (value) =>
  //         value && value.file && SUPPORTED_FORMATS.includes(value.file.type)
  //     )
  //   // .required("A file is required"),
  // }),
];

export default validationSchema;
