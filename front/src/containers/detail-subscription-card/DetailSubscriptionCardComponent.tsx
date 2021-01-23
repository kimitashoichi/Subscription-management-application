import React from "react";

import * as Models from "../../models/CardModels";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 600,
    minHeight: 200
  },
  media: {
    height: 140
  },
  cardActionArea: {
    textAlign: "center",
    marginTop: 20
  },
  cardContent: {
    width: "80%",
    margin: "auto"
  },
  serviceName: {
    fontWeight: "bold"
  },
  serviceFee: {
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 20
  },
  serviceCaption: {
    textAlign: "left"
  },
  cardActions: {
    display: "flex",
    justifyContent: "center",
    marginBottom: 10
  }
});

interface Props {
  card: Models.CardBody;
  setOpen: any;
}

const DetailSubscriptionCardContainer: React.FC<Props> = ({
  card,
  setOpen
}) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea className={classes.cardActionArea} disabled>
        <CardContent className={classes.cardContent}>
          <Typography variant="h5" component="h5" className={classes.serviceName}>
            {card.name}
          </Typography>
          <Typography variant="h5" component="h5" className={classes.serviceFee}>
            ￥{card.price}
          </Typography>
          <Typography variant="body2" component="p" className={classes.serviceCaption}>
            {card.caption}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardActions}>
        <Button
          size="medium"
          color="primary"
          variant="contained"
          onClick={() => setOpen(false)}>
          Close
        </Button>
      </CardActions>
    </Card>
  );
}

export default DetailSubscriptionCardContainer;