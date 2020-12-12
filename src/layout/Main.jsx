import React from "react";
import hero from "../assets/svgs/hero.svg";
import Planet from "./Planet";
import S1 from "./tools/services/s1";
import S2 from "./tools/services/s2";
import S3 from "./tools/services/s3";
import TB from "./Table";
import FO from "./tools/FadeObject";
import Cards from "./tools/cards";

const Main = () => {
  return (
    <React.Fragment>
      <header>
        <img src={hero} alt="" />
        <div>
          <FO>
            <h1>
              We build &amp; design <br /> web applications.
            </h1>
          </FO>
          <Planet />
        </div>
      </header>

      <main>
        <section className="services">
          <FO>
            <h2>What defines Dev-x?</h2>
          </FO>

          <S1 />

          <S2 />

          <S3 />
        </section>

        <section className="cen">
          <Cards />
        </section>

        <section>
          <TB />
        </section>
      </main>
    </React.Fragment>
  );
};

export default Main;
