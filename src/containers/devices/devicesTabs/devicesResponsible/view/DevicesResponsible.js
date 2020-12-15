import React from "react";
import {
  makeStyles,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    boxSizing: "border-box",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  item: {
    flexBasis: "32%",
    minWidth: 300,
    marginBottom: theme.spacing(2),
  },
}));

const DevicesResponsible = () => {
  const classes = useStyles();

  const cardsTitle = ["ИБ-защита", "Владельцы", "ИТ-защита"];

  const renderCard = (title) => {
    return (
      <Grid className={classes.item} key={title} item md={4} sm={6} xs={12}>
        <Card variant="outlined">
          <CardHeader title={title} />

          <CardContent>
            <Typography variant="body1">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </Typography>
          </CardContent>

          <CardActions>
            <Button color="primary" fullWidth size="small">
              Добавить
            </Button>
          </CardActions>
        </Card>
      </Grid>
    );
  };

  return (
    <div className={classes.container}>
      {cardsTitle.map((cardTitle) => renderCard(cardTitle))}
    </div>
  );
};

export default DevicesResponsible;
