import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  detailsCard: {
    position: "absolute",
    zIndex: 1200,
    top: theme.spacing(2),
    bottom: theme.spacing(1.5),
    right: theme.spacing(3),
    left: theme.spacing(3),
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[2],
    transition: "all 0.3s ease-out",
  },
  header: {
    display: "flex",
    alignItems: "center",
    minHeight: 50,
    padding: theme.spacing(0, 3),
    borderBottom: `1px solid ${theme.palette.divider}`,
    // position: "relative",
    // zIndex: 1000,
    // boxShadow: theme.shadows[2],
  },
  buttonBack: {
    width: 40,
    height: 40,
    marginRight: theme.spacing(3),
  },
  buttonBackIcon: {},
  detailsTitle: {
    ...theme.typography.h3,
    display: "flex",
  },
  detailsTitleIcon: {
    marginRight: theme.spacing(2),
  },
  hash: {
    ...theme.typography.h6,
    marginLeft: "auto",
  },
  body: {
    display: "flex",
    width: "100%",
    height: "calc(100% - 80px)",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: "70%",
    height: "100%",
    padding: theme.spacing(0, 3, 2),
    borderRight: `1px solid ${theme.palette.divider}`,
  },
  contentListData: {},
  contentItemData: {
    flexDirection: "column",
    alignItems: "flex-start",
  },
  contentTitle: {},
  contentDescription: {},
  contentAction: {
    display: "flex",
  },
  contentActionButton: {
    marginRight: theme.spacing(2),
  },
  chat: {
    width: "30%",
    height: "100%",
    backgroundColor: theme.palette.background.default,
  },
  chatMessages: {
    height: "calc(100% - 50px)",
  },
  chatInput: {
    display: "flex",
    height: 50,
    justifyContent: "space-between",
    backgroundColor: theme.palette.background.paper,
  },
  sendInput: {
    flexGrow: 1,
  },
  footer: {
    display: "flex",
    alignItems: "center",
    height: "30px",
    padding: theme.spacing(0, 3),
    borderTop: `1px solid ${theme.palette.divider}`,
    // position: "relative",
    // zIndex: 1000,
    // boxShadow: theme.shadows[2],
  },
  responsible: {},
  responsibleUsers: {},
  responsibleUser: {},
  responsibleUserAvatar: {
    width: 20,
    height: 20,
    marginRight: theme.spacing(1),
  },
  info: {
    marginLeft: "auto",
    color: theme.palette.text.secondary,
  },
}));

export default useStyles;
