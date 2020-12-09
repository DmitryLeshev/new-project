import React, { Component } from "react";
import { Redirect } from "react-router";

class RedirectAuth extends Component {
  redirectToAuthorization = () => {
    return <Redirect to="/authorization" />;
  };

  componentDidMount() {
    if (!this.props.authorized) {
      this.redirectToAuthorization();
    }
  }
  componentDidUpdate() {
    if (!this.props.authorized) {
      this.redirectToAuthorization();
    }
  }
}

const mapStateToProps = (state) => {
  return {
    authorized: state.authorization.authorized,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    userCheckStatus: () => dispatch(userCheckStatus()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RedirectAuth);
