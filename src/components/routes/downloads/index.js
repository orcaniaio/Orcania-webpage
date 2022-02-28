import { useEffect } from "react";
import { Link } from "react-router-dom";

import requirementsData from "./requirments-data";

import "./downloads.scss";

const BridgeApp = (props) => {
  useEffect(() => {
    document.title = "Orcania | Downloads";
  }, []);

  return (
    <div className="has-background-primary2dark" style={{ minHeight: "100vh" }}>
      <div style={{ height: "88px" }}></div>
      <section className="py-6">
        <div className="container px-3">
          <h1 className="title has-text-light-purple">Downloads</h1>

          <div className="box has-background-dark">
            <h1 className="subtitle has-text-light-purple is-3 mb-0">Bridge</h1>
            <h1 className="subtitle has-text-white">Version 1.0.0</h1>

            <p className="has-text-white">Bridge validator nodes</p>
            <br />

            <div className="columns is-multiline">
              {
                // requirementsData.map( (item, i) =>
                //     <div className="column is-6" key={i}>
                //         <div className="media">
                //             <div className="media-left">
                //                 <figure className="image is-32x32">
                //                     {item.icon}
                //                 </figure>
                //             </div>
                //             <div className="media-content">
                //                 <h1 className="subtitle has-text-white mb-0 has-text-weight-bold">{item.title}</h1>
                //                 <p className="has-text-white">{item.description}</p>
                //             </div>
                //         </div>
                //     </div>
                // )
              }
            </div>

            <br />

            <div className="columns is-multiline">
              <div className="column is-6">
                <a
                  className="button is-outlined is-fullwidth has-text-light-purple py-5 download-btn"
                  href="https://drive.google.com/file/d/1CmllHSKKDa_jc7MkCHoYNcYhjSMP4e5H/view?usp=sharing"
                  target="_blank"
                >
                  Orcania Bridge BSC Validator Node{" "}
                </a>
              </div>
              <div className="column is-6">
                <a
                  className="button is-fullwidth has-text-light-purple py-5 download-btn"
                  href="https://drive.google.com/file/d/1xTLrHCqgXYIzQW_um31R_fIX6dJzIghB/view?usp=sharing"
                  target="_blank"
                >
                  Orcania Bridge Ethereum Validator Node
                </a>
              </div>
              <div className="column is-6">
                <a
                  className="button is-fullwidth has-text-light-purple py-5 download-btn"
                  href="https://drive.google.com/file/d/1iEw41bzy5_ScpyLWNjKj-Df7o31n0zRc/view?usp=sharing"
                  target="_blank"
                >
                  Orcania Bridge Harmony Validator Node
                </a>
              </div>
              <div className="column is-6">
                <button
                  className="button is-fullwidth has-text-light-purple py-5 download-btn"
                  disabled
                >
                  Orcania Bridge Polygon Validator Node Coming Soon
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BridgeApp;
