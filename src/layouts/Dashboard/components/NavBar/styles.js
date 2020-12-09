const { makeStyles } = require("@material-ui/styles");

const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    zIndex: 1000,
    width: theme.drawer.width,
    height: "100%",
    transition: theme.drawer.transition,
    backgroundColor: theme.palette.background.paper,
    overflow: "auto",
    boxShadow: theme.shadows[4],
  },
  rootMobile: {
    width: theme.drawer.width,
    transition: theme.drawer.transition,
  },
  navBarShift: {
    transform: `translateX(-${theme.drawer.width}px)`,
  },
  content: {
    padding: theme.spacing(2),
  },
  profile: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minHeight: "fit-content",
  },
  avatar: {
    width: 100,
    height: 100,
  },
  name: {
    marginTop: theme.spacing(1),
  },
  divider: {
    backgroundColor: theme.palette.common.divider,
    marginTop: theme.spacing(2),
  },
  navigation: {
    marginTop: theme.spacing(2),
  },
}));

export default useStyles;
