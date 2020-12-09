import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  modesThemes: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
  modesThemeTitle: {
    textAlign: "center",
    marginBottom: theme.spacing(3),
  },
  switch: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-beetwen",
  },
  switchItem: {
    textAlign: "center",
  },
}));

export default useStyles;
