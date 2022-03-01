import { useEffect } from "react";
import {
  tokenArtwork2,
  tokenArtwork1,
  tokenArtwork4,
  bridgeArtwork3,
  cfLiquidityProtocol,
  cfDex,
  numberOne,
  numberTwo,
  numberThree,
  numberFour,
} from "../../../images";
import Table from "./table";

const style = {
  // height: '100%'
};

const Dex = (props) => {
  useEffect(() => {
    document.title = "Crypto Family | Genesis DEX";
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
                  Crypto Family DEX
                </h1>
                <h1 className="subtitle has-text-white is-4">
                  The DEX is undergoing rebranding and will be back soon
                </h1>

                <br />
              </div>

              <div className="column" data-aos="fade-left">
                <img src={tokenArtwork2} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dex;
