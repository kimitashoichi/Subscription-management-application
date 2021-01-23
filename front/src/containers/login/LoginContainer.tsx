import React from "react";
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { Redirect } from "react-router-dom";

import Button from "@material-ui/core/Button";

import { AppState } from "../../models/index";
import * as Models from "../../models/UserModels";
import { loginAction } from "../../actions/userActions";
import "./LoginContainer.css";

interface Props {
  login: () => void;
  user: Models.LoginUser;
}

const LoginContainer: React.FC<Props> = ({
  login,
  user,
}) => {
  return (
    <>
      <div className="top-container">
        <h1>App Title</h1>

        { user.id !== "" ? 
          <Redirect to={"/top"} /> 
          :
          <Button onClick={login}>Login</Button> 
        }
      </div>
    </>
  )
};

const mapStateToProps = (state: AppState) => ({
  user: state.user.user
})

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({
    login: () => loginAction.start(),
  }, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginContainer);