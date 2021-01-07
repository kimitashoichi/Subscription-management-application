import React, { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

import * as Models from "../../models/CardModels";
import { AppState } from "../../models/index";
import { 
  DeleteCardAction,
  GetAllCardAction
 } from "../../actions/cardActions";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Dialog from '@material-ui/core/Dialog';

import DetailSubscriptionCardContainer from "./DetailSubscriptionCardComponent";

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
  deleteCard: () => void;
  getAllCard: () => void;
}

const TopSubscriptionCardContainer: React.FC<Props> = ({
  card,
  deleteCard,
  getAllCard
}) => {
  const [open, setOpen] = useState<boolean>(false);
  const classes = useStyles();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const UpdateData = () => {
    deleteCard()
    getAllCard()
  }

  return (
    <>
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
          <Button size="small" color="primary">
            Edit
          </Button>
          {/* TODO：ここをクリックすると確認モーダルが表示され、削除できるようにする */}
          <Button size="small" color="primary" onClick={UpdateData}>
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
          {/* <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle>
            <DialogContent>
              <Typography variant="h6" id="alert-dialog-description">
                Let Google help apps
              </Typography>
              <Divider component="div" style={{padding: "10px 0px", backgroundColor: "white"}}  />
              <DialogContentText id="alert-dialog-description">
                Let Google help apps determine location. This means sending anonymous location data to
                Google, even when no apps are running.
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Disagree
              </Button>
              <Button onClick={handleClose} color="primary" autoFocus>
                Agree
              </Button>
            </DialogActions> */}
        </Dialog>
    </>
  );
}

const mapStateToProps = (state: AppState) => ({

})

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({
    deleteCard: () => DeleteCardAction.start(),
    getAllCard: () => GetAllCardAction.start(),
  }, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopSubscriptionCardContainer);