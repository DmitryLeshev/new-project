import React from "react";
import {
  makeStyles,
  Grid,
  Typography,
  Divider,
  Button,
} from "@material-ui/core";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  container: {
    boxSizing: "border-box",
    padding: theme.spacing(3),
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[4],
  },
  informationCard: {},
  divider: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  listItem: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  button: {
    marginTop: theme.spacing(2),
  },
}));

const DevicesInformation = () => {
  const classes = useStyles();

  const mockDataLeftСolumn = [
    {
      title: "Основная информация",
      list: [
        { name: "Имя", value: "DESKTOP-F5BHDQR" },
        { name: "Тип устройства", value: "Рабочая станция" },
        { name: "Инфраструктура", value: "Crytical" },
      ],
    },

    {
      title: "Устройства USB",
      list: [
        { name: "Микрофон", value: "(Realtek(R) Audio)" },
        { name: "Linux File-CD", value: "Gadget USB Device" },
      ],
    },
    {
      title: "Действия",
      list: [{ button: "Выпустить сертификат" }],
    },
  ];

  const mockDataRightСolumn = [
    {
      title: "Конфигурация рабочей станции",
      list: [
        { name: "ОС: ", value: "Windows 10 Pro" },
        { name: "Имя хоста: ", value: "AOSWORK" },
        { name: "Доменное имя: ", value: "WORKGROUP" },
        { name: "Машинное имя: ", value: "AOSWORK" },
        { name: "Релиз/Сборка: ", value: "2009/19042" },
        { name: "Дата установки: ", value: "07.10.2020" },
        { name: "Производитель: ", value: "AOSWORK" },
        { name: "Модель: ", value: "AOSWORK" },
        { name: "Дата производства BIOS: ", value: "06/10/2020" },
        { name: "Версия BIOS: ", value: "B.70" },
        { name: "ОЗУ: ", value: "16.384Gb", last: true },
        { name: "Процессор: ", value: "AMD Ryzen 7 2700 Eight-Core Processor" },
        { name: "Номер устройства в системе: ", value: "CPU0" },
        { name: "Серийный номер : ", value: "178BFBFF00800F82" },
        { name: "Ядра: ", value: "AOSWORK" },
        { name: "Модель : ", value: "8" },
        { name: "Потоки: ", value: "18" },
        { name: "Битность: ", value: "x64" },
        { name: "Статус: ", value: "Модуль подключен", last: true },
        { name: "Физический диск: ", value: "\\.PHYSICALDRIVE0 Disk drive" },
        { name: "Модель:", value: "Patriot P300 256GB" },
        { name: "Объем: ", value: "250051.725Gb" },
        {
          name: "Серийный  номер : ",
          value: "0000_0000_0000_0000_0000_0100_0000_0000",
        },
        { name: "Статус:", value: "Модуль подключен" },
        {
          name: "Производитель : ",
          value: "(Standard disk drives)",
          last: true,
        },
        { name: "Логический диск: ", value: "C:/" },
        { name: "Файловая система: ", value: "NTFS" },
        { name: "Свободно: ", value: "106646.544Gb" },
        { name: "Объем : ", value: "249408.512Gb" },
        { name: "Тип носителя: ", value: "Fixed" },
      ],
    },
  ];

  const renderCard = (data) => {
    return (
      <React.Fragment key={data.title}>
        <Grid
          className={classes.informationCard}
          alignItems="center"
          container
          key={data.title}
        >
          <Grid item xs={12}>
            <Typography variant="h2" color="textPrimary" gutterBottom>
              {data.title}
            </Typography>
          </Grid>
          {data.list.map((listItem) => {
            if (listItem.button) {
              return (
                <Button
                  key={listItem.button}
                  className={classes.button}
                  variant="outlined"
                  size="large"
                  color="primary"
                >
                  {listItem.button}
                </Button>
              );
            }
            return (
              <Grid
                key={listItem.name}
                container
                alignItems="center"
                spacing={3}
                className={clsx(classes.listItem, {
                  [classes.listItemMargin]: listItem.last,
                })}
              >
                <Grid item xs={6}>
                  <Typography variant="h4" color="textPrimary">
                    {listItem.name}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body1" color="textPrimary">
                    {listItem.value}
                  </Typography>
                </Grid>
              </Grid>
            );
          })}
        </Grid>
        <Grid className={classes.divider} item xs={12}>
          <Divider />
        </Grid>
      </React.Fragment>
    );
  };

  return (
    <div className={classes.container}>
      {mockDataRightСolumn.map(renderCard)}
      {mockDataLeftСolumn.map(renderCard)}
    </div>
  );
};

export default DevicesInformation;
