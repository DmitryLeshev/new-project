import React, { useState } from "react";

import { Typography, makeStyles, Button, Modal } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    flexGrow: 1,
    margin: theme.spacing(0, 3),
    padding: theme.spacing(3),
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[3],
  },
  title: {
    marginBottom: theme.spacing(2),
  },
  text: {
    marginBottom: theme.spacing(2),
  },
  action: {},
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    outline: "none",
  },
  confirmation: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: 500,
    padding: theme.spacing(4),
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
  },
  confirmationActions: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: theme.spacing(3),
  },
}));

const DevicesNotProtected = (props) => {
  const classes = useStyles();
  const [counter, setCounter] = useState(8);
  const [action, setAction] = useState(false);

  const actionOpenHandler = () => {
    setAction(true);
  };

  const actionCloseHandler = () => {
    setAction(false);
  };

  const protectHandler = () => {
    setCounter(counter - 1);
    actionCloseHandler();
  };

  return (
    <div className={classes.root}>
      <Typography className={classes.title} variant="h3">
        Устройство не находится под защитой!
      </Typography>
      <Typography className={classes.text} variant="h5">
        Количество оставшихся лицензий для защиты: {counter}
      </Typography>
      <Button
        className={classes.action}
        onClick={actionOpenHandler}
        variant="contained"
        color="secondary"
      >
        Защитить устройство
      </Button>
      <Modal
        className={classes.modal}
        open={action}
        onClose={actionCloseHandler}
      >
        <div className={classes.confirmation}>
          <Typography variant="h3" align="center">
            Подтвердите действие
          </Typography>
          <div className={classes.confirmationActions}>
            <Button
              variant="contained"
              color="secondary"
              onClick={actionCloseHandler}
            >
              Не тратить лецензию
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={protectHandler}
            >
              Потратить лецензию
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default DevicesNotProtected;
