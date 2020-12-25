import React from "react";
import URLs from "../../../../api/router";
import { api } from "../../../../assets/img";

export default class API extends React.Component {
  render() {
    return (
      <div className="card">
        <a href={URLs.apiURL}>
          <img src={api} alt="api" width="200" />
        </a>
      </div>
    );
  }
}
