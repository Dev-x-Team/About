import React from "react";
import URLs from "../../../../api/router";
import { xp } from "../../../../assets/img";

export default class XP extends React.Component {
  render() {
    return (
      <div className="card">
        <a href={URLs.SubURLs.xpURL}>
          <img src={xp} alt="xp" width="200" />
        </a>
      </div>
    );
  }
}
