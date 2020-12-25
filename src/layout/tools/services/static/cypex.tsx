import React from "react";
import URLs from "../../../../api/router";
import { cyper } from "../../../../assets/img";

export default class Cyper extends React.Component {
  render() {
    return (
      <div className="card">
        <a href={URLs.SubURLs.cyperURL}>
          <img src={cyper} alt="codep" />
        </a>
      </div>
    );
  }
}
