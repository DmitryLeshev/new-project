import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  contentsTitle: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: theme.spacing(3),
  },
  brushIcon: {
    width: 80,
    height: 80,
    margin: "auto",
    marginBottom: theme.spacing(2),
  },
  title: {
    textAlign: "center",
  },
}));

export default useStyles;
