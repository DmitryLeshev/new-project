import React, { Component } from "react";

import { connect } from "react-redux";
import { userLogsIn } from "./authorizationAction";

import ViewAuthorization from "./view/Authorization";

class Authorization extends Component {
  render() {
    const { userLogsIn } = this.props;
    return <ViewAuthorization userLogsIn={userLogsIn} />;
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    userLogsIn: (login, password) => dispatch(userLogsIn(login, password)),
  };
};

export default connect(null, mapDispatchToProps)(Authorization);
