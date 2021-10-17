import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";

import Paper from "@material-ui/core/Paper";

import Android from "@material-ui/icons/Android";
import Pets from "@material-ui/icons/Pets";
import BugReport from "@material-ui/icons/BugReport";

import { QuestionListItem } from "./QuestionListItem";
import { createRowData } from "./mocks";

const createMockData = () => {
  /* Please do not refactor this function */
  return [
    createRowData({
      species: "Robot",
      name: "T-100",
      Icon: Android,
      description: "Likes long walks, walking over the bones of it's enemies",
    }),
    createRowData({
      species: "Bug",
      name: "Barry",
      Icon: BugReport,
      description: "Likes long walks, and creating problems in all your code",
    }),
    createRowData({
      species: "Rabbit",
      name: "Roger",
      Icon: Pets,
      description: "Likes long walks and getting to know the inner you",
    }),
    createRowData({ species: null, name: null, Icon: null, description: null }),
  ];
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  root: {
    width: "100%",
  },
  inline: {
    display: "inline",
  },
};

class ProblemThree extends Component {
  render() {
    const { classes }: any = this.props;
    const mockData = createMockData();
    return (
      <div className={classes.container}>
        <Paper>
          <List className={classes.root}>
            {mockData.map((item, i) => {
              return (
                <QuestionListItem
                  icon={item.icon}
                  itemName={item.name}
                  species={item.species}
                  id={item.id}
                  // key={i}
                  divider={i !== mockData.length - 1}
                  description={item.description}
                />
              );
            })}
          </List>
        </Paper>
      </div>
    );
  }
}
export default withStyles(styles)(ProblemThree);
