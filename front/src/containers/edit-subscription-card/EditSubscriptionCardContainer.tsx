import React, { useState, FormEvent } from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import PropTypes from 'prop-types';

import * as Models from "../../models/CardModels";
import { AppState } from "../../models/index";
import { EditCardAction } from "../../actions/cardActions";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import TextField from '@material-ui/core/TextField';
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";

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
  editCard: (payload: Models.CardBody) => void;
  setEditDialog: any
}

const EditSubscriptionCardContainer: React.FC<Props> = ({
  card,
  editCard,
  setEditDialog
}) => {
  const [open, setOpen] = useState<boolean>(true);
  const [name, setName] = useState<string>(card.name);
  const [price, setPrice] = useState<number>(card.price);
  const [caption, setCaption] = useState<string>(card.caption);
  const classes = useStyles();

  const submitEditValue = async (e: FormEvent) => {
    e.preventDefault();
    const data = {
      name: name,
      price: price,
      caption: caption
    }

    await editCard(data)
    setEditDialog()
  }

  return (
    <>
      <Card className={classes.root}>
        <CardContent>
          <TextField
            label="サービス名"
            id="outlined-margin-none"
            defaultValue={card.name}
            onChange={e => setName(e.target.value)}
            variant="outlined"/>
          
          <TextField
            label="月額料金"
            id="outlined-margin-none"
            defaultValue={card.price}
            onChange={e => setPrice(Number(e.target.value))}
            variant="outlined"/>
          
          <TextField
            id="outlined-multiline-static"
            label="サービス概要"
            multiline
            rows={4}
            defaultValue={card.caption}
            onChange={e => setCaption(e.target.value)}
            variant="outlined"
          />

        </CardContent>
        <CardActions>
          {/* TODO：ここをクリックするとモーダルが表示され、編集できるようにする */}
          <Button size="small" color="primary" onClick={submitEditValue}>
            Edit
          </Button>
          {/* TODO：ここをクリックすると確認モーダルが表示され、削除できるようにする */}
          <Button size="small" color="primary">
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
    editCard: (dummy: Models.CardBody) => EditCardAction.start(dummy)
  }, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditSubscriptionCardContainer);