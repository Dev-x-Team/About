import React from "react";
import URLs from "../../../../api/router";
import { mshop } from "../../../../assets/img";

export default class DCode extends React.Component {
  render() {
    return (
      <div className="card">
        <a href={URLs.SubURLs.mshopURL}>
          <img src={mshop} alt="codep" width="200" />
        </a>
      </div>
    );
  }
}
