import React, { useEffect, useState } from "react";
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { Redirect } from "react-router-dom";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import Grid from '@material-ui/core/Grid';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import firebase from "../../utils/firebase";
import * as Models from "../../models/CardModels";
import { LoginUser } from "../../models/UserModels";
import { AppState } from "../../models/index";
import {
  GetAllCardAction,
  GetAmountAction
} from "../../actions/cardActions";
import {
  logoutAction,
  loginMonitoringAction
} from "../../actions/userActions";

import TopSubscriptionCardContainer from "../top-subscription-card/TopSubscriptionCardContainer";
import AddSubscriptionCardContainer from "../../containers/add-subscription-card/AddSubscriptionCard";
import AmountComponent from "../amount/AmountComponent";
import "./ShowSubscriptionCard.css";

interface Props {
  getAllCard: (id: string) => void;
  logout: () => void;
  getAmount: (id: string) => void;
  loginCheck: () => void;
  user: LoginUser;
  getLoading: boolean;
  amountLoading: boolean;
  allCards: Models.CardBody[];
  amount: Models.CardPriceAmount;
}

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      flexGrow: 1,
      width: "80%",
      margin: "auto"
    },
    logoutButton: {
      float: "right",
      marginRight: "10%"
    },
    addButton: {
      float: "left",
      marginTop: "5%",
      width: "20%",
      height: "20%",
      fontSize: '20px'
    },
    addDialog: {
      minWidth: 300,
    },
    appBar: {
      display: "flex",
      justifyContent: "space-between"
    },
    headerFont: {
      fontWeight: "bold"
    }
  }),
);

const ShowSubscriptionCard: React.FC<Props> = ({
  getAllCard,
  allCards,
  amountLoading,
  getLoading,
  logout,
  user,
  loginCheck,
  getAmount,
  amount
}) => {
  const [addDialog, setAddDialog] = useState<boolean>(false);
  const [check, setCheck] = useState<boolean>(false);
  const [redirect, setRedirect] = useState<boolean>(false);

  const classes = useStyles();

  useEffect(() => {
    firebase.auth().onAuthStateChanged(fuser => {
      if (fuser) {
        setCheck(true);
        loginCheck();
        getAllCard(fuser.uid);
        getAmount(fuser.uid);
      } else {
        setRedirect(true);
      }
    })
  }, []);

  const addDialogClose = () => {
    setAddDialog(false);
    getAllCard(user.id);
    getAmount(user.id);
  }

  return (
    <>
      { check ?
        <div className="head">
          <AppBar position="static">
            <Toolbar className={classes.appBar}>
              <Typography variant="h6" className={classes.headerFont}>
                Hello! {user.name} さん！
              </Typography>
              <Button
                variant="contained"
                color="default"
                size="large"
                startIcon={<ExitToAppIcon />}
                className={classes.logoutButton}
                onClick={logout}>logout</Button>
            </Toolbar>
          </AppBar>
          <Dialog
            open={addDialog}
            onClose={addDialogClose}>
            <AddSubscriptionCardContainer userId={user.id} setAddDialog={() => setAddDialog(false)} />
          </Dialog>
        </div>
        :
        <h1>Now loginCheck</h1>
      }

      <AmountComponent amount={amount} />
      <div className="add-button-warapper">
        <Button
          variant="contained"
          color="primary"
          className={classes.addButton}
          startIcon={<AddCircleOutlineOutlinedIcon />}
          onClick={() => setAddDialog(true)}>ADD</Button>
      </div>

      { redirect ? <Redirect to="/" /> : null }

      { user.id === "" ?
        <h1>Now Loading...</h1>
       :
       <div className={classes.root}>
         <Grid container spacing={3} justify="center">
          { allCards.length > 0 ?
            allCards.map((card) => {
              return (
                <Grid item xs={3}>
                  <TopSubscriptionCardContainer card={card} key={card.id} />
                </Grid>
              )
            })
            :
            null
          }
         </Grid>
       </div>
      }
    </>
  )
};

const mapStateToProps = (state: AppState) => ({
  getLoading: state.card.getLoading,
  amountLoading: state.card.amountLoading,
  allCards: state.card.getAllCardBody,
  user: state.user.user,
  amount: state.card.amount
})

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({
    getAllCard: (id: string) => GetAllCardAction.start(id),
    logout: () => logoutAction.start(),
    getAmount: (id: string) => GetAmountAction.start(id),
    loginCheck: () => loginMonitoringAction.start()
  }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowSubscriptionCard)
