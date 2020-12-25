import React from "react";
import URLs from "../../../../api/router";
import { dg } from "../../../../assets/img";

export default class DG extends React.Component {
  render() {
    return (
      <div className="card">
        <a href={URLs.SubURLs.dgamesURL}>
          <img src={dg} alt="dg" width="200" />
        </a>
      </div>
    );
  }
}
