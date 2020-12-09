import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    // width: "100%",
    // height: "100%",
  },
  paper: {
    // width: "100%",
    // marginBottom: theme.spacing(2),
  },
  table: {
    // minWidth: "100%",
    // minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: "rect(0 0 0 0)",
    height: 1,
    margin: -1,
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    top: 20,
    width: 1,
  },
  tableContainer: {
    // maxWidth: "100%",
    // height: "calc(100% - 229px)",
    height: 620,
  },
  tableCell: {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  tableCellIcon: {
    minWidth: 30,
    maxWidth: 30,
    height: "auto",
    marginRight: theme.spacing(3),
  },
  tableCellContent: {
    display: "flex",
    alignItems: "center",
  },
}));

export default useStyles;
