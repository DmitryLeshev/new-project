import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginTop: theme.spacing(6),
    padding: theme.spacing(0.5, 1),
  },
}));

export default useStyles;
