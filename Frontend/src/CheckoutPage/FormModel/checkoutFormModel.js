const checkoutFormModel =  {
  formId: 'checkoutForm',
  formField: {
    salutation:{
      name: 'salutation',
      label: 'Salutation*',
      requiredErrorMsg: 'Salutation is required'
    },
    firstName: {
      name: 'firstName',
      label: 'First name*',
      requiredErrorMsg: 'First name is required'
    },
    lastName: {
      name: 'lastName',
      label: 'Last name*',
      requiredErrorMsg: 'Last name is required'
      
    },
    email:{
      name: 'email',
      label: 'Email*',
      requiredErrorMsg: 'Email is required',
      invalidErrorMsg: 'Invalid email'
    },
    password:{
      name: 'password',
      label: 'Password*',
      requiredErrorMsg: 'Password is required'
    },
    fathername:{
      name: 'fathername',
      label: 'Father Name*',
      requiredErrorMsg: 'Father name is required'
    },
    cnic:{
      name: 'cnic',
      label: 'CNIC Number*',
      requiredErrorMsg: 'CNIC Number is required',
      invalidErrorMsg: 'Please enter a valid number'
    },
    Phonenumber:{
      name: 'Phonenumber',
      label: 'Phone Number*',
      requiredErrorMsg: 'Phone Number is required',
      invalidErrorMsg: 'Please enter a valid number'
    },
    addressI: {
      name: 'address1',
      label: 'Address Line 1*',
      requiredErrorMsg: 'Address Line 1 is required'
    },
    addressII: {
      name: 'address2',
      label: 'Address Line 2'
    },
    city: {
      name: 'city',
      label: 'City*',
      requiredErrorMsg: 'City is required'
    },
    state: {
      name: 'state',
      label: 'State/Province/Region'
    },
    zipcode: {
      name: 'zipcode',
      label: 'Zipcode*',
      requiredErrorMsg: 'Zipcode is required',
      invalidErrorMsg: 'Zipcode is not valid (e.g. 70000)'
    },
    country: {
      name: 'country',
      label: 'Country*',
      requiredErrorMsg: 'Country is required'
    },
    useAddressForPaymentDetails: {
      name: 'useAddressForPaymentDetails',
      label: 'Use this address for payment details'
    },
    qualificationname: {
      name: 'qualificationname',
      label: 'qualification name*',
      requiredErrorMsg: 'qualification name is required'
    },
    institute: {
      name: 'institute',
      label: 'institute*',
      requiredErrorMsg: 'institute is required'
    },
    employer: {
      name: "employer",
      label: "Employer Name",
      requiredErrorMsg: "Employer is Required"
    },
    position: {
      name: 'position',
      label: 'Position*',
      requiredErrorMsg: 'Position is required',
    },
    qualificationCountry: {
      name: 'qualificationCountry',
      label: 'Qualification Country',
      requiredErrorMsg: 'Qualification Country is required'
    },
    departmentName: {
      name: 'department_name',
      label: 'Department Name',
      requiredErrorMsg: 'Department Name is required'
    },
    designationName: {
      name: 'designation_name',
      label: 'Designation Name',
      requiredErrorMsg: "Designation name is required"
    },
    grade: {
      name: 'grade',
      label: 'grade',
      requiredErrorMsg: "grade is required"
    },
    workphone:{
      name: 'workphone',
      label: 'workphone',
      requiredErrorMsg:'workphone is required'
    },
    reporting:{
      name:'reporting',
      label:'reporting',
      requiredErrorMsg: 'reporting is required'
    },
    sourceofhire:{
      name:'sourceofhire',
      label:'Source of hire',
    },
    Employeetype:{
      name:"Employeetype",
      label:'Employeetype',
      requiredErrorMsg:'Employeetype is required'
    },
    role:{
      name:'role',
      label:'role',
      requiredErrorMsg:'role is required'
    },
    joiningDate:{
      name:'joiningDate',
      label:'Joining date',
      requiredErrorMsg:'Joining date is required'
    },
    profileImage:{
      name:'profileImage',
      label:'Profile Image'
    }
  }
};

export default checkoutFormModel;