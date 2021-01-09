import React, { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { Redirect } from "react-router-dom";


import * as Models from "../../models/CardModels";
import { LoginUser } from "../../models/UserModels";
import { AppState } from "../../models/index";
import { 
  DeleteCardAction,
  GetAllCardAction
} from "../../actions/cardActions";
import { logoutAction } from "../../actions/userActions";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Dialog from '@material-ui/core/Dialog';

import DetailSubscriptionCardContainer from "./DetailSubscriptionCardComponent";
import EditSubscriptionCardContainer from "../../containers/edit-subscription-card/EditSubscriptionCardContainer";

const useStyles = makeStyles({
  root: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
});

interface Props {
  card: Models.CardBody;
  user: LoginUser;
  isLoading: boolean;
  deleteCard: () => void;
  getAllCard: () => void;
  logout: () => void;
}

const TopSubscriptionCardContainer: React.FC<Props> = ({
  card,
  deleteCard,
  getAllCard,
  isLoading,
  logout,
  user
}) => {
  const [open, setOpen] = useState<boolean>(false);
  const [deleteDialog, setdeleteDialog] = useState<boolean>(false);
  const [editDialog, setEditDialog] = useState<boolean>(false);
  const classes = useStyles();

  // TODO: 見辛すぎるかつ実装がカッコ悪いのでのでリファクタリングする
  const handleClickOpen = () => {
    getAllCard()
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const deleteDialogOpen = () => {
    getAllCard()
    setdeleteDialog(true);
  };

  const deleteDialogClose = () => {
    setdeleteDialog(false);
  };

  const editDialogClickOpen = () => {
    getAllCard();
    setEditDialog(true);
  };

  const editDialogClickClose = () => {
    setEditDialog(false);
  };

  const UpdateData = () => {
    deleteCard();
    getAllCard();
    setdeleteDialog(false);
  }

  return (
    <>
      { user.id !== "" ?
        <Button onClick={logout}>logout</Button>
        :
        <Redirect to={"/"} /> 
      }

      <Card className={classes.root}>
        <CardActionArea>
          <CardContent onClick={() => handleClickOpen()} >
            <Typography gutterBottom variant="h4" component="h2">
              {card.name}
            </Typography>
            <Typography variant="h6" component="h3">
              {card.price}円/月
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          {/* TODO：ここをクリックするとモーダルが表示され、編集できるようにする */}
          <Button size="small" color="primary" onClick={() => editDialogClickOpen()}>
            Edit
          </Button>
          {/* TODO：ここをクリックすると確認モーダルが表示され、削除できるようにする */}
          <Button size="small" color="primary" onClick={() => deleteDialogOpen()}>
            Delete
          </Button>
        </CardActions>
      </Card>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description">
        <DetailSubscriptionCardContainer card={card}/>
      </Dialog>

      <Dialog
        open={editDialog}
        onClose={editDialogClickClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description">
        <EditSubscriptionCardContainer card={card} setEditDialog={editDialogClickClose}/>
      </Dialog>

      <Dialog
        open={deleteDialog}
        onClose={deleteDialogClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description">
        本当に削除しますか？
        <Button size="small" color="primary" onClick={() => UpdateData()}>
          Delete
        </Button>
        {/* TODO：ここをクリックすると確認モーダルが表示され、削除できるようにする */}
        <Button size="small" color="primary" onClick={() => deleteDialogClose()}>
          Close
        </Button>
      </Dialog>
    </>
  );
}

const mapStateToProps = (state: AppState) => ({
  isLoading: state.card.isLoading,
  user: state.user.user
})

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({
    deleteCard: () => DeleteCardAction.start(),
    getAllCard: () => GetAllCardAction.start(),
    logout: () => logoutAction.start()
  }, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopSubscriptionCardContainer);