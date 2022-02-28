import { baseURL, logoLight } from "../../../images";

import { useLocation } from "react-router-dom";

import "./footer.scss";

const Footer = () => {
  const location = useLocation();

  return (
    <footer
      className={`footer has-background-light py-6 ${
        location.pathname == "/app" ? "is-hidden" : ""
      }`}
    >
      <div className="container">
        <div className="content has-text-left">
          <div className="is-size-5 py-0 mb-0">
            <div className="columns is-reverse py-0 footer-logo2">
              <div className="column has-text-centered-mobile" style={{}}>
                <h1 className="title has-text-white mb-6 has-line-text-right primary is-3">
                  {" "}
                  <strong className="has-text-primary">Orcania</strong>
                </h1>
                <h1 className="subtitle has-text-dark is-5">
                  © Copyright Orcania. All Rights Reserved
                </h1>
                <a
                  href="https://twitter.com/cryptofamily3?lang=es"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="icon has-text-dark is-size-3">
                    <i className="fab fa-twitter"></i>
                  </span>
                </a>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <a
                  href="https://t.me/CryptoFamilyTechnology"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="icon has-text-dark is-size-3">
                    <i className="fab fa-telegram-plane"></i>
                  </span>
                </a>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <a
                  href="https://discord.gg/PH5DEQbKX7"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="icon has-text-dark is-size-3">
                    <i className="fab fa-discord"></i>
                  </span>
                </a>
                {/* <h1 className="subtitle has-text-dark is-5">
                  cryptofamily@cryptofamily.tech
                </h1> */}
              </div>

              <div
                className="column is-hidden-desktop"
                style={{ minHeight: " 100px" }}
              ></div>
              <div className="column is-3 p-0 footer-logo has-text-centered">
                <img src={logoLight} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
