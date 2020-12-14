import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";

import DetailsCard from "./components/DetailsCard";

import imgDanger from "@assets/images/danger.png";
import imgAvatar1 from "@assets/images/avatar_1.png";
import imgAvatar2 from "@assets/images/avatar_2.png";

const useStyles = makeStyles((theme) => ({
  card: {
    width: "100%",
    padding: theme.spacing(2, 3),
    marginBottom: theme.spacing(2),
    minHeight: "100px",
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[2],
    cursor: "pointer",
    transition: "all 0.3s ease-out",
    "&:hover": {
      boxShadow: theme.shadows[4],
    },
  },
  header: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    marginBottom: theme.spacing(2),
  },
  title: {
    display: "flex",
    alignItems: "center",
    ...theme.typography.h3,
  },
  icon: {
    display: "block",
    width: "30px",
    height: "30px",
    marginRight: theme.spacing(3),
    backgroundImage: `url(${imgDanger})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    borderRadius: "50%",
  },
  hash: {
    ...theme.typography.h5,
    marginLeft: "auto",
  },
  body: {
    display: "flex",
    flexDirection: "column",
    marginBottom: theme.spacing(3),
  },
  tasks: {
    listStyle: "none",
  },
  task: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0.3, 0),
  },
  taskText: {
    ...theme.typography.h6,
    display: "block",
    minWidth: 150,
  },
  taskValue: {
    ...theme.typography.body1,
    marginLeft: theme.spacing(2),
  },
  footer: {
    display: "flex",
    alignItems: "center",
  },
  responsible: {
    ...theme.typography.h6,
  },
  users: {
    display: "flex",
    alignItems: "center",
    listStyle: "none",
  },
  user: {
    display: "flex",
    alignItems: "center",
    marginLeft: theme.spacing(3),
  },
  userText: {
    ...theme.typography.body1,
    display: "flex",
    alignItems: "center",
  },
  userIcon: {
    display: "block",
    width: "15px",
    height: "15px",
    marginRight: theme.spacing(1),

    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    borderRadius: "50%",
  },
  info: {
    ...theme.typography.body2,
    color: theme.palette.text.secondary,
    marginLeft: "auto",
  },
}));

const TaskCard = () => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  function openCard() {
    setOpen(!open);
  }

  const isCloseCard = (
    <div
      className={clsx(classes.card, { [classes.open]: open })}
      onClick={openCard}
    >
      <div className={classes.header}>
        <h3 className={classes.title}>
          <i className={classes.icon} />
          Слабый пароль точки доступа
        </h3>
        <p className={classes.hash}>#00000010</p>
      </div>
      <div className={classes.body}>
        <ul className={classes.tasks}>
          <li className={classes.task}>
            <p className={classes.taskText}>Критичность задачи:</p>
            <span className={classes.taskValue}>10/10</span>
          </li>
          <li className={classes.task}>
            <p className={classes.taskText}>Устройства:</p>
            <span className={classes.taskValue}>10/10</span>
          </li>
        </ul>
      </div>
      <div className={classes.footer}>
        <p className={classes.responsible}>Ответственные: </p>
        <ul className={classes.users}>
          <li className={classes.user}>
            <p className={classes.userText}>
              <i
                className={classes.userIcon}
                style={{ backgroundImage: `url(${imgAvatar1})` }}
              />
              Admin
            </p>
          </li>
          <li className={classes.user}>
            <p className={classes.userText}>
              <i
                className={classes.userIcon}
                style={{ backgroundImage: `url(${imgAvatar2})` }}
              />
              Semizar
            </p>
          </li>
        </ul>
        <p className={classes.info}>
          Обнаружено: модуль аудита wifi 17:38 12.01.2020
        </p>
      </div>
    </div>
  );

  return (
    <React.Fragment>
      {open ? <DetailsCard openCard={openCard} /> : isCloseCard}
    </React.Fragment>
  );
};

export default TaskCard;
