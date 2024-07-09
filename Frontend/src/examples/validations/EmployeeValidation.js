import * as Yup from 'yup'

export const EmployeeValidation = Yup.object().shape({
    salutation: Yup.string().required('Salutation is required'),
    fname: Yup.string().required("First Name is required"),
    lname: Yup.string().required("Last Name is required"),
    gender: Yup.string().required("Gender is required"),
    fathername: Yup.string().required("Father Name is required"),
    email: Yup.string().email().required("Please enter your email"),
    password: Yup.string().min(6).required("Please enter your password"),
    cnic: Yup.number()
    .typeError("Please enter a valid number")
    .min(14)
    .required("Please enter your CNIC"),
    Phonenumber: Yup.number()
    .typeError("Please enter a valid number")
    .min(10)
    .required("Please enter your contact number"),
    addressI: Yup.string().required("AddressI is required"),
    city: Yup.string().required("City is required"),
    country: Yup.string().required("Country is required"),
    marital: Yup.string().required('Marital is required'),
    religion: Yup.string().required("Religion is required"),
    Employeetype: Yup.string().required("Employee type is required"),
    addresscountry: Yup.string().required("Address Country is required"),
    department_name: Yup.string().required("Department name is required"),
    designation_name: Yup.string().required("Designation name is required"),
    grade: Yup.string().required("Grade is required"),
    workphone: Yup.number()
    .typeError("please enter a valid number")
    .min(10)
    .required("please enter work phone number"),
    reporting:Yup.string().required("Reporting to is required"),
    Employeetype: Yup.string().required("Employeetype is required"),
    role: Yup.string().required("role is required"),
    dateOfJoining: Yup.string().required("dateOfJoining is required"),
    qualifications: Yup.array().of(
        Yup.object().shape({
          qualificationname: Yup.string().required('Qualification Name is required'),
          institute: Yup.string().required("institute name is required"),
          completionYear: Yup.string().required("completionYear is required"),
          qualificationcountry:Yup.string().required("qualificationcountry is required")
        })
      ),
      experiences: Yup.array().of(
        Yup.object().shape({
            employer: Yup.string().required('Employer is required'),
            start: Yup.string().required("start date is required"),
            position: Yup.string().required("position name is required")
        })
      )
})