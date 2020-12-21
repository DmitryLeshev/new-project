import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginBottom: theme.spacing(1),
    padding: theme.spacing(4, 3),
    // backgroundColor: theme.palette.background.paper,
    // boxShadow: theme.shadows[3],
  },
  formControl: {
    minWidth: 320,
  },
  dateContainer: {
    "& > div": {
      marginLeft: theme.spacing(3),
    },
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

export default useStyles;
