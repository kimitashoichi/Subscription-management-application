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
  GetAllCardAction
} from "../../actions/cardActions";

const useStyles = makeStyles({
  root: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
});

interface Props {
  userId: string;
  addCard: (payload: Models.AddCardBody) => void;
  getAllCard: (id: string) => void;
  setAddDialog: any;  // 親コンポーネントのState変更用関数を受け取っている
}

const AddSubscriptionCardContainer: React.FC<Props> = ({
  userId,
  addCard,
  setAddDialog,
  getAllCard
}) => {
  const [title, setTitle] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [caption, setCaption] = useState<string>("");
  const classes = useStyles();

  const handleOnSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const payload = {
      userId: userId,
      name: title,
      price: price,
      caption: caption
    }
    await addCard(payload);
    await getAllCard(userId);
    
    setAddDialog(false);
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
            <TextField
              className="standard-textarea"
              placeholder="月額料金"
              type="number"
              value={price}
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
          <Button
            size="small"
            color="primary"
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
    // TODO: 送信するデータ型を指定する
    // 明示的にanyにすることで一時的にエラーを回避しているため
    addCard: (payload: any) => AddCardAction.start(payload),
    getAllCard: (userId: string) => GetAllCardAction.start(userId),
  }, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddSubscriptionCardContainer);