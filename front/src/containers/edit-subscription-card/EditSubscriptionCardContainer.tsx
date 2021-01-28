import React, { useState, FormEvent } from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import TextField from '@material-ui/core/TextField';
import CardActions from "@material-ui/core/CardActions";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";

import * as Models from "../../models/CardModels";
import { AppState } from "../../models/index";
import {
  EditCardAction,
  GetAmountAction,
  GetAllCardAction,
} from "../../actions/cardActions";


const useStyles = makeStyles({
  root: {
    minWidth: 600
  },
  media: {
    height: 140
  },
  cardContent: {
    display: "grid",
  },
  firstTextArea: {
    marginTop: "20px",
    marginBottom: "35px",
  },
  textArea: {
    marginBottom: "35px",
  },
  buttons: {
    width: "90%",
    margin: "auto",
    justifyContent: "flex-end",
  }
});

interface Props {
  card: Models.CardBody;
  editCard: (payload: Models.CardBody) => void;
  getAmount: (id: string) => void;
  getallCards: (id: string) => void;
  setEditDialog: any;
}

const EditSubscriptionCardContainer: React.FC<Props> = ({
  card,
  editCard,
  getAmount,
  setEditDialog,
  getallCards,
}) => {
  const [name, setName] = useState<string>(card.name);
  const [price, setPrice] = useState<number>(card.price);
  const [caption, setCaption] = useState<string>(card.caption);
  const classes = useStyles();

  const submitEditValue = async (e: FormEvent) => {
    e.preventDefault();
    const data = {
      id: card.id,
      userId: card.userId,
      name: name,
      price: price,
      caption: caption
    };

    await editCard(data);

    setTimeout(() => {
      getallCards(card.userId);
    }, 1000)

    setTimeout(() => {
      getAmount(card.userId)
    }, 2000);

    setEditDialog();
  }

  return (
    <>
      <Card className={classes.root}>
        <CardContent className={classes.cardContent}>
          <TextField
            label="サービス名"
            className={classes.firstTextArea}
            defaultValue={card.name}
            multiline
            onChange={e => setName(e.target.value)}
            variant="outlined"/>
          
          <TextField
            label="月額料金"
            className={classes.textArea}
            defaultValue={card.price}
            onChange={e => setPrice(Number(e.target.value))}
            variant="outlined"/>
          
          <TextField
            label="サービス概要"
            multiline
            rows={4}
            defaultValue={card.caption}
            onChange={e => setCaption(e.target.value)}
            variant="outlined"/>
        </CardContent>
        <CardActions className={classes.buttons}>
          <Button
            size="medium"
            color="primary"
            variant="contained"
            onClick={submitEditValue}>
            Edit
          </Button>
          <Button size="medium"
            color="secondary"
            variant="contained"
            onClick={() => setEditDialog()}>
            Close
          </Button>
        </CardActions>
      </Card>
    </>
  );
}

const mapStateToProps = (state: AppState) => ({
})

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({
    editCard: (payload: Models.CardBody) => EditCardAction.start(payload),
    getAmount: (id: string) => GetAmountAction.start(id),
    getallCards: (id: string) => GetAllCardAction.start(id),
  }, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditSubscriptionCardContainer);