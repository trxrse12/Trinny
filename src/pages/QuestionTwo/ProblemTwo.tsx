import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

import CircularProgress from "@material-ui/core/CircularProgress";

import { getCardDetails } from "./api";
import styles from "./styles";

interface IProps {
  classes: any
}

interface IState {
  title: any;
  imgSrc: any  ; 
  body: any;
  loading: boolean;
}

class ProblemTwo extends Component<IProps, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      title: null,
      imgSrc: null,
      body: "",
      loading: true,
    };
    try {
      // @ts-ignore
      getCardDetails().then((data) => {
        if (!data) {
          throw new Error("No Data");
        }
        this.setState(state => ({
          ...state,
          title: data.title,
          imgSrc: data.imgSrc,
          body: data.body,
          loading: false,
        }));
      });
    } catch (e) {
      throw e;
    }
  }
  render() {
    const { classes } = this.props;
    // console.log('CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC classes=', classes)
    const { title, imgSrc, body, loading } = this.state;
    if (loading) {
      return (
        <div className={classes.spinner}>
          <CircularProgress />
        </div>
      );
    }
    return (
      <div className={classes.container}>
        <Card className={classes.card}>
          <CardMedia className={classes.media} image={imgSrc} title={title} />
          <CardContent className={classes.content}>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <div
              className={classes.body}
              dangerouslySetInnerHTML={{ __html: body }}
            />
          </CardContent>
        </Card>
      </div>
    );
  }
}

// @ts-ignore
export default withStyles(styles)(ProblemTwo);
