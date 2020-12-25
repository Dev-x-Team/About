import React from "react";
import URLs from "../../../../api/router";
import { eh } from "../../../../assets/img";

export default class EH extends React.Component {
  render() {
    return (
      <div className="card">
        <a href={URLs.elexhubURL}>
          <img src={eh} alt="elexhub" />
        </a>
      </div>
    );
  }
}
