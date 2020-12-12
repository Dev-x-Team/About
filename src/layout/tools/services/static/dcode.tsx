import React from "react";
import URLs from "../../../../api/router";
import { dcode } from "../../../../assets/img";

export default class DCode extends React.Component {
  render() {
    return (
      <div className="card">
        <a href={URLs.SubURLs.dcodeURL}>
          <img src={dcode} alt="codep" width="200" />
        </a>
      </div>
    );
  }
}
