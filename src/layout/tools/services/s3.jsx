import React, { Component } from "react";
import ReactMD from "react-markdown";
import Code from "../../../assets/md/s3.md";

export default class S1 extends Component {
  constructor(props) {
    super(props);

    this.state = { terms: null };
  }

  componentDidMount() {
    fetch(Code)
      .then(res => res.text())
      .then(text => {
        this.setState({ terms: text });
      });
  }

  render() {
    return (
      <div className="service-container">
        <div className="services-card service-three"></div>
        <div className="service-description">
          {/* <Cards /> */}
          <ReactMD source={this.state.terms} />
        </div>
      </div>
    );
  }
}
