import React, { useEffect, useState } from "react";
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import * as Models from "../../models/CardModels";
import { LoginUser } from "../../models/UserModels";
import { AppState } from "../../models/index";
import { GetAllCardAction } from "../../actions/cardActions";
import { logoutAction } from "../../actions/userActions";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";

import TopSubscriptionCardContainer from "../../components/subscription-card/TopSubscriptionCardContainer";
import AddSubscriptionCardContainer from "../../containers/add-subscription-card/AddSubscriptionCard";

interface Props {
  getAllCard: (id: string) => void;
  logout: () => void;
  user: LoginUser;
  isLoading: boolean;
  allCards: Models.CardBody[]
}

const ShowSubscriptionCard: React.FC<Props> = ({
  getAllCard,
  allCards,
  isLoading,
  logout,
  user
}) => {
  useEffect(() => {
    getAllCard(user.id);
  }, [isLoading = false])

  const [addDialog, setAddDialog] = useState<boolean>(false);

  // 追加ダイアログ
  const addDialogOpen = () => {
    setAddDialog(true);
  }

  // 投稿ボタンが押されたタイミングで閉じるものと
  // 投稿を途中でやめた場合に閉じるもので2つ作る必要があるか
  // もしくは投稿完了、中止のどちらのボタンが押されても同じ関数コンポーネントを渡すが、フラグを持たせて引数として渡し判断する
  const addDialogClose = () => {
    setAddDialog(false);
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
  user: state.user.user
})

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({
    getAllCard: (id: string) => GetAllCardAction.start(id),
    logout: () => logoutAction.start()
  }, dispatch);


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowSubscriptionCard)