import { useEffect } from "react";
import Sidebar from "../../base/sidebar";
import Background from "../../base/background";
import { Link } from "react-router-dom";

const BridgeApp = (props) => {
  useEffect(() => {
    document.title = "Crypto Family | App";
  }, []);

  return (
    <div>
      <Sidebar />
      <section className="has-background-adanger" style={{ height: "100%" }}>
        <div className="main1" style={{ width: "100%", height: "100%" }}>
          <div
            className=""
            style={{ position: "absolute", top: "50%", width: "100%" }}
          >
            <div className="">
              <div
                className=""
                style={{ position: "absolute", left: "calc(50% - 30px)" }}
              >
                <div className="lds-grid">
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
              <div style={{ height: "80px" }}></div>
              <div className="title is-2 has-text-centered has-text-white">
                Coming soon...
              </div>
              <div className="subtitle is-5 has-text-centered">
                <Link to="/" className=" has-text-white">
                  Go back
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Background />
    </div>
  );
};

export default BridgeApp;
