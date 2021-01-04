import React from "react";

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

const SubscriptionCardContainer: React.FC = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h4" component="h2">
            Amazon Prime
          </Typography>
          <Typography variant="h6" component="h3">
            500円/月
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            アマゾンで買い物するときに安くなったり早く届いたり、アマゾンプライムビデオと言う動画配信サービスを視聴することができるサービス
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

export default SubscriptionCardContainer;