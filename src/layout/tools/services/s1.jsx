import React, { Component } from "react";
import ReactMD from "react-markdown";
import Code from "../../../assets/md/s1.md";

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
        <div className="services-card service-one"></div>
        <div className="service-description">
          <h3>
            Innovation <b className="and">&</b> Enthusiasm.
          </h3>
          <div>
            <ReactMD source={this.state.terms} />
          </div>
        </div>
      </div>
    );
  }
}
