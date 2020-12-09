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
import AppsIcon from "@material-ui/icons/Apps";

const navigationConfig = [
  {
    title: "Pages",
    pages: [
      {
        title: "Главня",
        href: "/dashboard",
        icon: HomeIcon,
      },
      {
        title: "Задачи",
        href: "/tasks",
        icon: AssignmentIcon,
        label: () => (
          <Label color={colors.red[500]} shape="rounded">
            4
          </Label>
        ),
      },
      {
        title: "Устройства",
        href: "/devices",
        icon: DevicesIcon,
      },
      {
        title: "Словари",
        href: "/dictionaries",
        icon: ListIcon,
      },
      {
        title: "Инструменты",
        href: "/tools",
        icon: BuildIcon,
      },
      {
        title: "База уязвимостей",
        href: "/vulnerability-database",
        icon: StorageIcon,
      },
      {
        title: "Пользователи",
        href: "/users",
        icon: AccountCircleIcon,
      },
      {
        title: "Отчеты",
        href: "/reports",
        icon: ListAltIcon,
      },
      {
        title: "Компоненты",
        href: "/app-components",
        icon: AppsIcon,
        label: () => (
          <Label variant="outline" color={colors.green[500]}>
            New
          </Label>
        ),
      },
    ],
  },
  {
    title: "Support",
    pages: [
      {
        title: "Настройки",
        href: "/settings",
        icon: SettingsIcon,
        label: () => <Label color={colors.blue["500"]}>v0.1.1</Label>,
      },
    ],
  },
];

export default navigationConfig;
