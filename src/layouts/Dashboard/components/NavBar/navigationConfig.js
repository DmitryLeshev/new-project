import { Label } from "@components";
import { colors } from "@material-ui/core";

import HomeIcon from "@material-ui/icons/Home";
import AssignmentIcon from "@material-ui/icons/Assignment";
import DevicesIcon from "@material-ui/icons/Devices";
import ListIcon from "@material-ui/icons/List";
import BuildIcon from "@material-ui/icons/Build";
import StorageIcon from "@material-ui/icons/Storage";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ListAltIcon from "@material-ui/icons/ListAlt";
import SettingsIcon from "@material-ui/icons/Settings";

const navigationConfig = [
  {
    title: "Pages",
    pages: [
      {
        i18nkey: "home",
        title: "Главная",
        href: "/dashboard",
        icon: HomeIcon,
      },
      {
        i18nkey: "tasks",
        title: "Задачи",
        href: "/tasks/in-work",
        icon: AssignmentIcon,
        label: () => (
          <Label color={colors.red[500]} shape="rounded">
            4
          </Label>
        ),
      },
      {
        i18nkey: "devices",
        title: "Устройства",
        href: "/devices",
        icon: DevicesIcon,
      },
      {
        i18nkey: "dictionaries",
        title: "Словари",
        href: "/dictionaries",
        icon: ListIcon,
      },
      {
        i18nkey: "tools",
        title: "Инструменты",
        href: "/tools",
        icon: BuildIcon,
      },
      {
        i18nkey: "vulndb",
        title: "База уязвимостей",
        href: "/vulnerability-database",
        icon: StorageIcon,
      },
      {
        i18nkey: "users",
        title: "Пользователи",
        href: "/users",
        icon: AccountCircleIcon,
      },
      {
        i18nkey: "reports",
        title: "Отчеты",
        href: "/reports",
        icon: ListAltIcon,
      },
    ],
  },
  {
    title: "Support",
    pages: [
      {
        i18nkey: "settings",
        title: "Настройки",
        href: "/settings",
        icon: SettingsIcon,
        label: () => <Label color={colors.blue["500"]}>v0.1.1</Label>,
      },
    ],
  },
];

export default navigationConfig;
