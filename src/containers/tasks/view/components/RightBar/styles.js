import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {},
  content: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(3),
    width: "100%",
    height: "100%",
  },
}));

export default useStyles;
