import React, { useState, FormEvent } from "react";
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { TextareaAutosize } from "@material-ui/core";

import * as Models from "../../models/CardModels";
import { AppState } from "../../models/index";
import { 
  AddCardAction,
  GetAllCardAction,
  GetAmountAction
} from "../../actions/cardActions";

const useStyles = makeStyles({
  root: {
    minWidth: 600,
  },
  media: {
    height: 140
  },
  cardContent: {
    textAlign: "left",
    maxWidth: 450,
    margin: "auto",
  },
  textArea: {
    minWidth: "100%"
  },
  buttons: {
    width: "80%",
    margin: "auto",
    justifyContent: "flex-end",
  }
});

interface Props {
  userId: string;
  addCard: (payload: Models.AddCardBody) => void;
  getAllCard: (id: string) => void;
  getAmount: (id: string) => void;
  setAddDialog: any;  // 親コンポーネントのState変更用関数を受け取っている
}

interface AddCardPayload {
  userId: string;
  name: string;
  price: number;
  caption: string;
}

const AddSubscriptionCardContainer: React.FC<Props> = ({
  userId,
  addCard,
  setAddDialog,
  getAllCard,
  getAmount
}) => {
  const [title, setTitle] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [caption, setCaption] = useState<string>("");
  const classes = useStyles();

  const handleOnSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const payload: AddCardPayload = {
      userId: userId,
      name: title,
      price: price,
      caption: caption
    }
    await addCard(payload);
    await getAllCard(userId);
    
    setTimeout(() => {
      getAmount(userId);
    }, 1000)

    setAddDialog(false);
    setTitle("");
    setPrice(0);
    setCaption("");
  }

  return (
    <>
      <Card className={classes.root}>
        <CardContent className={classes.cardContent}>
          <h3>サービス名</h3>
          <TextareaAutosize
            className={classes.textArea}
            placeholder="サービス名"
            value={title}
            rowsMin={2}
            onChange={(e) => setTitle(e.target.value)}/>

          <h3>月額料金</h3>
          <TextField
            className={classes.textArea}
            placeholder="月額料金"
            type="number"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}/>

          <h3>サービス内容</h3>
          <TextareaAutosize
            className={classes.textArea}
            placeholder="サービス内容"
            value={caption}
            rowsMin={10}
            onChange={(e) => setCaption(e.target.value)}/>
        </CardContent>
        <CardActions className={classes.buttons}>
          <Button
            size="medium"
            color="primary"
            variant="contained"
            onClick={handleOnSubmit}>
            Save
          </Button>
          <Button
            size="medium"
            color="secondary"
            variant="contained"
            onClick={() => setAddDialog(false)}>
            Close
          </Button>
        </CardActions>
      </Card>
    </>
  );
}

const mapStateToProps = (state: AppState) => ({
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({
    addCard: (payload: AddCardPayload) => AddCardAction.start(payload),
    getAllCard: (userId: string) => GetAllCardAction.start(userId),
    getAmount: (userId: string) => GetAmountAction.start(userId),
  }, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddSubscriptionCardContainer);