import { makeStyles } from "@mui/styles";


export default makeStyles(theme => ({
  stepper: {
    padding: theme.spacing(3, 0, 5)
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1)
  },
  wrapper: {
    margin: theme.spacing(1),
    position: 'relative'
  },
  buttonProgress: {
    position: 'absolute',
    top: '50%',
    left: '50%'
  },
  formStepper: {
    height: "400px !important",
    overflow: "auto",
    scrollbarWidth: "thin", // For Firefox
    '&::-webkit-scrollbar': {
      width: "0.4em" // For Chrome, Safari, and Opera
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: "transparent"
    }
  }
}));
