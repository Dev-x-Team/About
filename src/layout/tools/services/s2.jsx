import React, { Component } from "react";
import ReactMD from "react-markdown";
import Code from "../../../assets/md/s2.md";

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
        <div className="services-card service-two"></div>
        <div className="service-description">
          <h3>
            Clear <b className="and">&</b> Optimized Code.
          </h3>
          <div>
            <ReactMD source={this.state.terms} />
          </div>
        </div>
      </div>
    );
  }
}
