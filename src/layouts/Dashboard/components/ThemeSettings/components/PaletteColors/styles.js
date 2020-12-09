import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  paletteColors: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
  paletteColorsTitle: {
    textAlign: "center",
  },
  paletteColorsList: {
    listStyle: "none",
    margin: 0,
    marginTop: theme.spacing(1),
  },
  paletteColorsListItem: {
    marginBottom: theme.spacing(1),
    padding: theme.spacing(1, 0),
  },
  paletteColorBox: {
    width: "100%",
    height: 40,
    backgroundColor: "red",
  },
}));

export default useStyles;
