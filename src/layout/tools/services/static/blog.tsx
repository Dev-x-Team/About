import React from "react";
import URLs from "../../../../api/router";
import { blog } from "../../../../assets/img";

export default class Blog extends React.Component {
  render() {
    return (
      <div className="card">
        <a href={URLs.blogURL}>
          <img src={blog} alt="blog" width="200" />
        </a>
      </div>
    );
  }
}
