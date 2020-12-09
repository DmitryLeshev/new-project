import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  list: {
    height: "100%",
  },
  icon: {
    width: 40,
    height: 40,
    marginRight: theme.spacing(3),
  },
  textSecondary: {
    color: theme.palette.success.main,
  },
  details: {
    marginLeft: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
  },
  active: {
    boxShadow: `inset -4px 0px 0px ${theme.palette.primary.main}`,
    backgroundColor: theme.palette.grey[50],
  },
  unread: {
    marginTop: 2,
    padding: 2,
    height: 18,
    minWidth: 18,
  },
  divider: {
    margin: theme.spacing(3, 0),
  },
}));

export default useStyles;
