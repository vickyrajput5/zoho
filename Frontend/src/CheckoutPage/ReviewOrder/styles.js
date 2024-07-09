import { makeStyles } from "@mui/styles";

export default makeStyles(theme => ({
    listItem: {
      padding: theme.spacing(1, 0)
    },
    gridBox:{
      height:"400px",
      overflow:"auto"
    },
    total: {
      fontWeight: '700'
    },
    title: {
      marginRight: theme.spacing(2)
    }
  }));
  