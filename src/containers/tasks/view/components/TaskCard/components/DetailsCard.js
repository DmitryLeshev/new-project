import React from "react";
import {
  Avatar,
  Button,
  Icon,
  IconButton,
  InputBase,
  List,
  ListItem,
  Typography,
} from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import SendIcon from "@material-ui/icons/Send";
import AttachFileIcon from "@material-ui/icons/AttachFile";

import useStyles from "./styles";
import imgDanger from "@assets/images/danger.png";
import imgAvatar1 from "@assets/images/img_avatar.png";

const DetailsCard = (props) => {
  const { openCard } = props;
  const classes = useStyles();

  return (
    <div className={classes.detailsCard}>
      <div className={classes.header}>
        <IconButton
          className={classes.buttonBack}
          aria-label="back"
          onClick={openCard}
        >
          <ArrowBackIcon className={classes.buttonBackIcon} fontSize="large" />
        </IconButton>

        <Icon className={classes.detailsTitleIcon} aria-label="back">
          <img src={imgDanger} alt="danger" />
        </Icon>
        <Typography className={classes.detailsTitle} variant="h3">
          Обнаружена возможность перебора пинов wps точки доступа
        </Typography>

        <Typography className={classes.hash} variant="h6">
          #00001519
        </Typography>
      </div>

      <div className={classes.body}>
        <div className={classes.content}>
          <List className={classes.contentListData}>
            <ListItem className={classes.contentItemData}>
              <Typography className={classes.itemDataTitle} variant="h4">
                Угроза
              </Typography>
              <List className={classes.itemDataList}>
                <ListItem className={classes.itemDataItem}>
                  <Typography
                    className={classes.itemDataDescription}
                    variant="body1"
                  >
                    Возможность взлома пина WPS
                  </Typography>
                </ListItem>
              </List>
            </ListItem>
          </List>

          <div className={classes.contentAction}>
            <Button
              className={classes.contentActionButton}
              variant="outlined"
              color="primary"
            >
              Отложить решение
            </Button>
            <Button
              className={classes.contentActionButton}
              variant="outlined"
              color="primary"
            >
              Оключить wps
            </Button>
          </div>
        </div>

        <div className={classes.chat}>
          <div className={classes.chatMessages}></div>
          <form className={classes.chatInput}>
            <IconButton className={classes.iconButton} aria-label="menu">
              <AttachFileIcon />
            </IconButton>
            <InputBase
              className={classes.sendInput}
              placeholder="Search Google Maps"
              inputProps={{ "aria-label": "search google maps" }}
            />
            <IconButton
              type="submit"
              className={classes.iconButton}
              aria-label="search"
            >
              <SendIcon />
            </IconButton>
          </form>
        </div>
      </div>
      <div className={classes.footer}>
        <Typography>Ответственные:</Typography>
        <List>
          <ListItem>
            <Avatar
              className={classes.responsibleUserAvatar}
              src={imgAvatar1}
            />
            <Typography>undefined</Typography>
          </ListItem>
        </List>
        <Typography className={classes.info} variant="body2">
          Обнаружено модулем аудита wifi 17:38 12.01.2020
        </Typography>
      </div>
    </div>
  );
};

export default DetailsCard;
