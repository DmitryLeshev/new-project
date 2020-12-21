## White Hack Admin

### Технологии

- React
- Redux
- Material UI

### Пакеты:

1.  "react-custom-scrollbars" - скролл
2.  "react-helmet" - изменять мета тэг title
3.  "react-router", "react-router-config" - роутер

4.  "redux-thunk"

5.  "i18next"
6.  "i18next-browser-languagedetector"
7.  "i18next-http-backend"
8.  "react-i18next"

9.  "date-fns"
10. "@date-io/date-fns"
11. "@material-ui/pickers"

12. "@material-ui/core"
13. "@material-ui/icons"
14. "@material-ui/styles"

- Пакеты для шифрования

15. node-rsa
16. raw-loader

- Пакет для графиков

17. [react-vis](https://github.com/uber/react-vis)

### Структура проекта

```
[redux] structure in folder
├── [name]Actions.js
├── [name]ActionsTypes.js
└── [name]Reducer.js

project
├── src
│ ├── App
│ │ ├── App.js
│ │ └── [redux]
│ │
│ ├── assets
│ │ ├── chipher
│ │ ├── css
│ │ ├── images
│ │ ├── mock
│ │ └── utils
│ │
│ ├── components
│ │
│ ├── containers
│ │ └── [container.name]
│ │   └── [redux]
│ │
│ ├── layouts // Виды отрисовки
│ │
│ ├── redux
│ │
│ ├── theme
│ │
│ ├── index.js // Файл подключения проекта
│ │
│ └── routes.js // Роуты по основным страницам
│
└── README.md
```
