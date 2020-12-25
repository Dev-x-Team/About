import React from "react";
import URLs from "../../../../api/router";
import { codep } from "../../../../assets/img";

export default class Codep extends React.Component {
  render() {
    return (
      <div className="card">
        <a href={URLs.SubURLs.cpURL}>
        <img src={codep} alt="codep" width="200" />

        </a>
      </div>
    );
  }
}
