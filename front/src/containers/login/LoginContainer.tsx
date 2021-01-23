import React from "react";
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { Redirect } from "react-router-dom";

import Button from "@material-ui/core/Button";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

import { AppState } from "../../models/index";
import * as Models from "../../models/UserModels";
import { loginAction } from "../../actions/userActions";
import "./LoginContainer.css";

interface Props {
  login: () => void;
  user: Models.LoginUser;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
    },
  }),
);

const LoginContainer: React.FC<Props> = ({
  login,
  user,
}) => {
  const classes = useStyles();

  return (
    <>
      <div className="top-container">
        <div className={classes.root}>
          <LinearProgress />
            <h1 className="app-title">Subscription Manager</h1>
          <LinearProgress color="secondary" />
        </div>

        { user.id !== "" ? 
          <Redirect to={"/top"} /> 
          :
          <Button
            variant="contained"
            color="primary"
            size="large"
            className="login-button"
            startIcon={<ExitToAppIcon />}
            onClick={login}>Login</Button> 
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