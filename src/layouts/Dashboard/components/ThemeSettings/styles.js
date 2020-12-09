import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: theme.drawer.width,
    height: "100%",
    transition: theme.drawer.transition,
  },
  content: {
    display: "flex",
    flexDirection: "column",
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
  },
}));

export default useStyles;
