import React from "react";

import {
  ButtonGroup,
  Button,
  Toolbar,
  Input,
  Tooltip,
  IconButton,
  makeStyles,
} from "@material-ui/core";
import RouterIcon from "@material-ui/icons/Router";
import PublicIcon from "@material-ui/icons/Public";
import ComputerIcon from "@material-ui/icons/Computer";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  devicesFilter: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: theme.spacing(3, 3),
    height: 170,
  },
  searchInput: {
    flexGrow: 1,
  },
}));

const Filter = () => {
  const classes = useStyles();
  return (
    <div className={classes.devicesFilter}>
      <Toolbar disableGutters>
        <Input className={classes.searchInput} placeholder="Поиск устройства" />
        <Tooltip title="Поиск">
          <IconButton edge="end">
            <SearchIcon />
          </IconButton>
        </Tooltip>
      </Toolbar>

      <ButtonGroup variant="outlined" color="primary" size="large" fullWidth>
        <Button>
          <ComputerIcon />
        </Button>
        <Button>
          <RouterIcon />
        </Button>
        <Button>
          <PublicIcon />
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default Filter;
