import React from "react";
import Routes from "./api/routes";
import { Link } from "react-router-dom";
import EM from "./layout/tools/menu";

export default function App() {
  let _menu = (
    <li>
      <EM />
    </li>
  );

  return (
    <div>
      <div className="App">
        <div className="container">
          <nav>
            <ul>
              <li className="dx">
                <Link to="/"> Dev-x </Link>
              </li>
            </ul>
            <ul>{_menu}</ul>
          </nav>
          <Routes />
        </div>
      </div>
    </div>
  );
}
