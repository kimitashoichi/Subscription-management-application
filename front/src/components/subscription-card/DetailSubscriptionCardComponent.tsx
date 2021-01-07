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
    maxWidth: 345
  },
  media: {
    height: 140
  }
});

interface Props {
  card: Models.CardBody;
}

const DetailSubscriptionCardContainer: React.FC<Props> = ({
  card
}) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h4" component="h2">
            {card.name}
          </Typography>
          <Typography variant="h6" component="h3">
            {card.price}円/月
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {card.caption}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Edit
        </Button>
        <Button size="small" color="primary">
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}

export default DetailSubscriptionCardContainer;