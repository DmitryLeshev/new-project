import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: "none",
    transition: theme.drawer.transition,
    width: "100%",
  },

  brend: {
    marginLeft: theme.spacing(1),
    fontWeight: 700,
    color: theme.palette.common.white,
  },
}));

export default useStyles;
