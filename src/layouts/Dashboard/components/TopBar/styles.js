import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: "none",
    transition: theme.drawer.transition,
  },
  topBarShift: {
    width: `calc(100% - ${theme.drawer.width}px)`,
    marginLeft: theme.drawer.width,
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      marginLeft: 0,
    },
  },
  brend: {
    marginLeft: theme.spacing(1),
    fontWeight: 700,
    color: theme.palette.common.white,
  },
  rightContent: {
    marginLeft: "auto",
    marginRight: theme.spacing(1),
  },
  menuIcon: {
    width: 30,
    height: 30,
    color: theme.palette.common.white,
  },
  settingsIcon: {
    width: 30,
    height: 30,
    color: theme.palette.common.white,
  },
  notificationsIcon: {
    width: 30,
    height: 30,
    color: theme.palette.common.white,
  },
}));

export default useStyles;
