import React from "react";
import URLs from "../../../../api/router";
import { brand } from "../../../../assets/img";

export default class DEVX extends React.Component {
  render() {
    return (
      <div className="card">
        <a href={URLs.devxURL}>
          <img src={brand} alt="scode" />
        </a>
      </div>
    );
  }
}
