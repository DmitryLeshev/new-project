import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  content: {
    overflowY: "auto",
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: "auto",
    backgroundColor: theme.palette.background.default,
  },
}));

export default useStyles;
