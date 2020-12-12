import React, { Component, Fragment } from "react";
import Fade from "react-reveal/Fade";

export default class WDDX extends Component {
  render() {
    return (
      <Fragment>
        <div style={styles.block}>
          <Fade top>
            
          </Fade>
        </div>
      </Fragment>
    );
  }
}

const styles = {
  block: {
    display: "flex",
    width: "100%",
    height: "100%",
  },
  title: {
    textAlign: "center",
    color: "#000",
    fontFamily: "Lato, sans-serif",
    fontWeight: 100,
  },
};
