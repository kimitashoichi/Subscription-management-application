import React, { useState, FormEvent } from "react";
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import { TextareaAutosize } from "@material-ui/core";

import * as Models from "../../models/CardModels";
import { AppState } from "../../models/index";
import { AddCardAction } from "../../actions/cardActions";

const useStyles = makeStyles({
  root: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
});

interface Props {
  addCard: (payload: Models.CardBody) => void;
}

const AddSubscriptionCardContainer: React.FC<Props> = ({
  addCard
}) => {
  const [title, setTitle] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [caption, setCaption] = useState<string>("");
  const classes = useStyles();

  const handleOnSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const payload = {
      name: title,
      price: price,
      caption: caption
    }
    await addCard(payload);

    setTitle("");
    setPrice(0);
    setCaption("");
  }

  return (
    <>
      <Card className={classes.root}>
        <CardActionArea>
          <CardContent>
            <h4>サービス名</h4>
            <TextareaAutosize
              className="standard-textarea"
              placeholder="サービス名"
              value={title}
              rowsMin={2}
              onChange={(e) => setTitle(e.target.value)}/>

            <h4>月額料金</h4>
            <TextareaAutosize
              className="standard-textarea"
              placeholder="月額料金"
              value={price}
              rowsMin={2}
              onChange={(e) => setPrice(Number(e.target.value))}/>

            <h4>サービス内容</h4>
            <TextareaAutosize
              className="standard-textarea"
              placeholder="サービス内容"
              value={caption}
              rowsMin={10}
              onChange={(e) => setCaption(e.target.value)}/>

          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            size="small"
            color="primary"
            onClick={handleOnSubmit}>
            Save
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
    addCard: payload => AddCardAction.start(payload),
  }, dispatch)

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(AddSubscriptionCardContainer);