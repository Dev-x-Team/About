import React from "react";
import URLs from "../../../../api/router";
import { dm } from "../../../../assets/img";

export default class DM extends React.Component {
  render() {
    return (
      <div className="card">
        <a href={URLs.SubURLs.dmURL}>
          <img src={dm} alt="dm" />
        </a>
      </div>
    );
  }
}
