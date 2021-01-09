import React from "react";
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import Button from "@material-ui/core/Button"

import { AppState } from "../../models/index";
import * as Models from "../../models/UserModels";
import { 
  loginAction,
  logoutAction
 } from "../../actions/userActions";
import LinkComponent from "../../components/LinkComponent";
import "./LoginContainer.css";
import { Redirect } from "react-router-dom";

interface Props {
  login: () => void;
  logout: () => void;
  user: Models.LoginUser;
  isLoading: boolean;
}

const LoginContainer: React.FC<Props> = ({
  login,
  logout,
  user,
  isLoading
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

        {/* <LinkComponent src="/top">
          <Button variant="contained" color="primary">Login</Button>
        </LinkComponent> */}
      </div>
    </>
  )
};

const mapStateToProps = (state: AppState) => ({
  isLoading: state.user.isLoading,
  user: state.user.user
})

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({
    login: () => loginAction.start(),
    logout: () => logoutAction.start(),
  }, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginContainer);