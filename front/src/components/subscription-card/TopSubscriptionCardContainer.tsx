import React, { useState } from "react";

import * as Models from "../../models/CardModels";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Divider from '@material-ui/core/Divider';

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
}

const TopSubscriptionCardContainer: React.FC<Props> = ({
  card
}) => {
  const [open, setOpen] = useState<boolean>(false);
  const classes = useStyles();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
          <Button size="small" color="primary">
            Delete
          </Button>
        </CardActions>
      </Card>

        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description">
          <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle>
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
            </DialogActions>
        </Dialog>
    </>
  );
}

export default TopSubscriptionCardContainer;