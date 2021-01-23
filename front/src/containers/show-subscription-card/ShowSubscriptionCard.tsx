import React, { useEffect, useState } from "react";
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { Redirect } from "react-router-dom";

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

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";

import TopSubscriptionCardContainer from "../../components/subscription-card/TopSubscriptionCardContainer";
import AddSubscriptionCardContainer from "../../containers/add-subscription-card/AddSubscriptionCard";
import AmountComponent from "../../components/amount/AmountComponent";

interface Props {
  getAllCard: (id: string) => void;
  logout: () => void;
  getAmount: (id: string) => void;
  loginCheck: () => void;
  user: LoginUser;
  isLoading: boolean;
  allCards: Models.CardBody[];
  amount: Models.CardPriceAmount;
}

const ShowSubscriptionCard: React.FC<Props> = ({
  getAllCard,
  allCards,
  isLoading,
  logout,
  user,
  loginCheck,
  getAmount,
  amount
}) => {
  const [addDialog, setAddDialog] = useState<boolean>(false);
  const [check, setCheck] = useState<boolean>(false);
  const [redirect, setRedirect] = useState<boolean>(false);

  useEffect(() => {
    // これをReducerに渡してReduxで管理できるようにする
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
  }, [])

  // 追加ダイアログ
  const addDialogOpen = () => {
    setAddDialog(true);
  }

  const addDialogClose = () => {
    // これらはユーザーがデータを追加した時に画面表示を変更させるために必要
    setAddDialog(false);
    getAllCard(user.id);
    getAmount(user.id);
  }

  return (
    <>
      { check ?
        <div>
          <div>Hello {user.name}</div>
          <Button onClick={logout}>logout</Button>
          <Button onClick={() => addDialogOpen()}>ADD</Button>
          <Dialog
            open={addDialog}
            onClose={addDialogClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description">
            <AddSubscriptionCardContainer userId={user.id} setAddDialog={() => setAddDialog(false)} />
          </Dialog>
        </div>
        :
        <h1>Now loginCheck</h1>
      }

      <AmountComponent amount={amount} />

      { redirect ? <Redirect to="/" /> : null }

      { user.id === "" ?
        <h1>Now Loading...</h1>
       :
        <>
         { allCards.length > 0 ?
           allCards.map((card) => {
             return (
               <TopSubscriptionCardContainer card={card} key={card.name} />
             )
           })
          :
           null
         }
        </>
      }
    </>
  )
};

const mapStateToProps = (state: AppState) => ({
  isLoading: state.card.isLoading,
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
