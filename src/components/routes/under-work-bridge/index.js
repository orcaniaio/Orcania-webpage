import { useState, useEffect } from "react";
import {
  //baseURL,
  tokenArtwork2,
  bridgeBannerImg,
  bridgeArtwork1,
  bridgeArtwork2,
  bridgeArtwork3,
  bridgeArtwork4,
  numberOne,
  numberTwo,
  numberThree,
  numberFour,
} from "../../../images";
import "./bridge.scss";

import TimeLine from "../../base/time-line";

//import Table from "./table";
import Table2 from "./table2";

const style = {
  // height: '100%'
};

const Bridge = (props) => {
  const [videoVisible, setVideoVisible] = useState(false);

  useEffect(() => {
    document.title = "Crypto Family | Bridge";
  }, []);

  return (
    <div style={style}>
      <section className="hero is-fullheight has-background-primary2dark">
        <div className="hero-body" style={{ overflow: "hidden" }}>
          <div className="container">
            <div className="py-6 is-hidden-desktop"></div>
            <div className="columns is-vcentered">
              <div
                className="column has-text-centered-mobile"
                data-aos="fade-right"
              >
                <h1 className="title has-text-light-purple is-2 mb-5">
                  Crypto Family Bridge
                </h1>
                <h1 className="subtitle has-text-white is-4">
                  The Crypto Family Bridge and Multichain have merged, new page
                  coming soon.{" "}
                </h1>

                <br />
              </div>

              <div
                className="column is-7 has-text-centered"
                data-aos="fade-left"
              >
                <img src={bridgeBannerImg} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Bridge;
