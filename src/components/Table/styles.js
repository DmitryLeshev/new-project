import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
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
    overflowX: "inherit",
    boxShadow: theme.shadows[4],
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
