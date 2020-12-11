import React from "react";
import { Link as RouterLink } from "react-router-dom";
import clsx from "clsx";

import {
  ListItem,
  ListItemIcon,
  ListItemText,
  useTheme,
  makeStyles,
} from "@material-ui/core";

import { Label } from "@components";

const useStyles = makeStyles((theme) => ({
  list: {
    height: theme.devices.listHeight,
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
    backgroundColor: "rgba(0, 0, 0, 0.05)",
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

const Item = (props) => {
  const { id, textPrimary, textSecondary, icon: Icon, active } = props;
  const classes = useStyles();
  const theme = useTheme();

  const renderIcon = (
    <ListItemIcon>
      <Icon className={classes.icon} />
    </ListItemIcon>
  );

  const renderText = (
    <ListItemText
      primary={textPrimary}
      primaryTypographyProps={{
        noWrap: true,
        variant: "h6",
      }}
    />
  );

  const renderSecondaryText = (
    <ListItemText
      primary={textPrimary}
      primaryTypographyProps={{
        noWrap: true,
        variant: "h6",
      }}
      secondary={textSecondary}
      secondaryTypographyProps={{
        noWrap: true,
        variant: "body1",
        className: classes.textSecondary,
      }}
    />
  );

  return (
    <ListItem
      key={id}
      className={clsx({ [classes.active]: active })}
      button
      component={RouterLink}
      to={`/devices/${id}/information`}
    >
      {Icon && renderIcon}
      {textSecondary ? renderSecondaryText : renderText}
      <div className={classes.details}>
        {id === 482 || id === 483 || id === 467 || id === 472 ? (
          <Label
            className={classes.unread}
            color={theme.palette.success.main}
            shape="rounded"
          />
        ) : (
          <Label
            className={classes.unread}
            color={theme.palette.error.main}
            shape="rounded"
          />
        )}
      </div>
    </ListItem>
  );
};

export default Item;
