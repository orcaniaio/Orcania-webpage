import { useEffect, useState } from "react";
import {
  baseURL,
  tokenBannerImg,
  tokenArtwork1,
  tokenArtwork2,
  tokenArtwork3,
  tokenArtwork4,
  bridgeIcon2,
  blockchainIcon,
  multichainIcon,
} from "../../../images";

// import bscscan from "./bscscan.svg";
// import cmc from "./cmc.svg";

// import Tokenomics from "./tokenomics";

// import ReactHtml from "raw-html-react";

const style = {
  // height: '100%'
};

const UnderWorkToken = (props) => {
  useEffect(() => {
    document.title = "Orcania | Token";
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
                  Orcania Coin
                </h1>
                <h1 className="subtitle has-text-white is-4">
                  The multichain technologically driven governance asset of the
                  Orcania
                </h1>

                {/*}<button className="button is-light-purple" style={{width: '150px'}}>Node sales</button>&nbsp;&nbsp;
                                <button className="button is-light-purple" style={{width: '150px'}}>Presale</button> */}
                <h1
                  className="subtitle has-text-white is-4 has-text-weight-bold"
                  style={{ paddingTop: "12rem" }}
                >
                  Token Not Yet Released
                </h1>
              </div>

              <div className="column" data-aos="flip-left">
                <figure
                  className="image is-square"
                  style={{ transform: "scale(0.8)" }}
                >
                  <img src={tokenBannerImg} alt="" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UnderWorkToken;
