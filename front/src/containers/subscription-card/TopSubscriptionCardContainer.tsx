import React, { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { Redirect } from "react-router-dom";

import * as Models from "../../models/CardModels";
import { LoginUser } from "../../models/UserModels";
import { AppState } from "../../models/index";
import { 
  DeleteCardAction,
  GetAllCardAction,
  GetAmountAction
} from "../../actions/cardActions";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Dialog from '@material-ui/core/Dialog';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

import DetailSubscriptionCardContainer from "../detail-subscription-card/DetailSubscriptionCardComponent";
import EditSubscriptionCardContainer from "../edit-subscription-card/EditSubscriptionCardContainer";
import "./TopSubscriptionCardContainer.css";

const useStyles = makeStyles({
  root: {
    maxWidth: 500,
    minHeight: 270,
    maxHeight: 270,
    position: "relative",
  },
  media: {
    height: 140
  },
  deleteDialog: {
    minHeight: 70,
    minWidth: 300,
    textAlign: "center",
  },
  buttons: {
    display: "flex",
    justifyContent: "space-around",
    width: "70%",
    margin: "auto",
  }
});

interface Props {
  card: Models.CardBody;
  user: LoginUser;
  deleteCard: (id: string) => void;
  getAllCard: (id: string) => void;
  getAmount: (id: string) => void;
}

const TopSubscriptionCardContainer: React.FC<Props> = ({
  card,
  deleteCard,
  getAllCard,
  getAmount,
  user,
}) => {
  const [open, setOpen] = useState<boolean>(false);
  const [deleteDialog, setdeleteDialog] = useState<boolean>(false);
  const [editDialog, setEditDialog] = useState<boolean>(false);

  const classes = useStyles();

  const handleClickOpen = () => {
    getAllCard(user.id);
    getAmount(user.id);
    setOpen(true);
  };

  // もうちょイケてる実装にしたい
  const UpdateData = () => {
    deleteCard(card.id);
    setTimeout(() => {
      getAllCard(user.id);
    }, 1000)
    setTimeout(() => {
      getAmount(user.id);
    }, 2000);
    setdeleteDialog(false);
  }

  function characterLimit (name: string): string {
    if (name.length >= 18) {
      return name.substr(0, 17) + "...";
    }
    return name;
  }

  return (
    <>
      { user.id !== "" ?
        null
        :
        <Redirect to={"/"} /> 
      }

      <Card className={classes.root}>
        <CardActionArea>
          <CardContent onClick={() => handleClickOpen()}>
            <Typography variant="h5" component="h2" className="sub-name">
              {characterLimit(card.name)}
            </Typography>
            <Typography variant="h6" component="h6">
              ￥{card.price}
            </Typography>
          </CardContent>
        </CardActionArea>
        <div className="button-group">
          <Button
            className="edit-button"
            size="small"
            color="primary"
            variant="contained"
            startIcon={<EditIcon/>}
            onClick={() => setEditDialog(true)}>Edit</Button>
          <Button
            className="delete-button"
            size="small"
            color="secondary"
            variant="contained"
            startIcon={<DeleteIcon/>}
            onClick={() => setdeleteDialog(true)}>Delete</Button>
        </div>
      </Card>

      <Dialog
        open={open}
        onClose={() => setOpen(false)}>
        <DetailSubscriptionCardContainer card={card} setOpen={setOpen} />
      </Dialog>

      <Dialog
        open={editDialog}
        onClose={() => setEditDialog(false)}>
        <EditSubscriptionCardContainer card={card} setEditDialog={() => setEditDialog(false)}/>
      </Dialog>

      <Dialog
        open={deleteDialog}
        onClose={() => setdeleteDialog(false)}>
        <h2 className="confirm-message">本当に削除しますか？</h2>
        <div className={classes.deleteDialog}>
          <div className={classes.buttons}>
            <Button
              size="medium"
              color="primary"
              variant="contained"
              onClick={() => UpdateData()}>
              Delete
            </Button>
            <Button
              size="medium"
              color="secondary"
              variant="contained"
              onClick={() => setdeleteDialog(false)}>
              Close
            </Button>
          </div>
        </div>
      </Dialog>
    </>
  );
}

const mapStateToProps = (state: AppState) => ({
  user: state.user.user
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({
    deleteCard: (id: string) => DeleteCardAction.start(id),
    getAllCard: (id: string) => GetAllCardAction.start(id),
    getAmount: (id: string) => GetAmountAction.start(id),
  }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopSubscriptionCardContainer);