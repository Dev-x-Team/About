import React from "react";
import API from "./services/static/api";
import Blog from "./services/static/blog";
import DEVX from "./services/static/devx";
import DG from "./services/static/dg";
import DM from "./services/static/dm";
import DS from "./services/static/eh";
import XP from "./services/static/xp";
import Cypex from "./services/static/cypex";
import Mshop from "./services/static/mshop";
import FO from "./FadeObject";

export default class Cards extends React.Component {
  render() {
    return (
      <FO>
        <div className="grid">
          <div className="cen">
            <XP />
          </div>
          <div>
            <DM />
          </div>
          <div>
            <DS />
          </div>
          <div>
            <Cypex />
          </div>
          <div>
            <DEVX />
          </div>
        </div>
      </FO>
    );
  }
}
