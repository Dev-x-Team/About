import React from "react";
import { nfp } from "../assets/img";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <main className="nfp">
      <img src={nfp} alt="404" width="490" />

      <h4 className="abde">
        <Link to="/">Go To Home</Link>
      </h4>
    </main>
  );
};

export default NotFoundPage;
