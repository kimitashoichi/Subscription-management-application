import React, { useEffect, useState } from "react";
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import * as Models from "../../models/CardModels";
import { LoginUser } from "../../models/UserModels";
import { AppState } from "../../models/index";
import { 
  GetAllCardAction,
  GetAmountAction
} from "../../actions/cardActions";
import { logoutAction } from "../../actions/userActions";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";

import TopSubscriptionCardContainer from "../../components/subscription-card/TopSubscriptionCardContainer";
import AddSubscriptionCardContainer from "../../containers/add-subscription-card/AddSubscriptionCard";

interface Props {
  getAllCard: (id: string) => void;
  logout: () => void;
  getAmount: (id: string) => void;
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
  getAmount,
  amount
}) => {
  useEffect(() => {
    getAllCard(user.id);
    getAmount(user.id);
  }, [isLoading = false])

  const [addDialog, setAddDialog] = useState<boolean>(false);

  // 追加ダイアログ
  const addDialogOpen = () => {
    setAddDialog(true);
    getAllCard(user.id);
    getAmount(user.id);
  }

  const addDialogClose = () => {
    setAddDialog(false);
    getAllCard(user.id);
    getAmount(user.id);
  }

  return (
    <>
      { user.id !== "" ?
        <div>
          <div>Hello {user.name}</div>
          <Button onClick={logout}>logout</Button>
          <Button onClick={() => addDialogOpen()}>ADD</Button>

          <Dialog
            open={addDialog}
            onClose={addDialogClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description">
            <AddSubscriptionCardContainer userId={user.id} setAddDialog={setAddDialog} />
          </Dialog>
        </div>
        :
        null
      }

      {console.log("render showComponent", amount)}

      { isLoading ?
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
    getAmount: (id: string) => GetAmountAction.start(id)
  }, dispatch);


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowSubscriptionCard)