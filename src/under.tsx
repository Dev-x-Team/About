import React from "react";
import URLs from "./api/router";
import { dev, gh } from "./assets/img";

export default function Under() {
  return (
    <div className="copy">
      <a href={URLs.devxURL}>
        <i className="fas fa-code"></i>
        &nbsp;&nbsp;<b>by</b>&nbsp;&nbsp;
        <i className="fas fa-signature"></i>
      </a>

      <div className="con">
        <a>
          <i className="fab fa-dev"></i>
        </a>
        <a href={URLs.devx_orgURL}>
          <i className="fab fa-github-alt"></i>
        </a>
      </div>
    </div>
  );
}
