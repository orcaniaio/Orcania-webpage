import { useState, useEffect } from "react";
import {
  //baseURL,
  //homeBannerImg,
  homeArtwork1,
  homeArtwork2,
  homeArtwork3,
  member1,
  member3,
  //member4,
  member5,
  member6,
  tokenIcon,
  bridgeIcon,
  //vaultIcon,
  exchangeIcon,
  traf,
  //surreal,
  meconcash,
  polygon_logo,
  harmony_logo,
  welcomeScreenHome,
} from "../../../images";
import brandLogos from "static/home/brand-logos";
import { Link } from "react-router-dom";
import TeamCard from "../../base/team-card";
//import PatnersSection from './patners.section';

const style = {
  // height: '100%',
  width: "100%",
};

const Home = (props) => {
  const [videoVisible, setVideoVisible] = useState(false);

  useEffect(() => {
    document.title = "Orcania | Home";
  }, []);

  return (
    <div style={style}>
      <section className="hero is-fullheight has-background-primary2dark mb-0">
        <div className="hero-body" style={{ overflow: "hidden" }}>
          <div className="container">
            <div className="py-6 is-hidden-desktop"></div>
            <div className="columns is-vcentered">
              <div
                className="column has-text-centered-mobile"
                data-aos="fade-right"
              >
                <h1 className="title has-text-light-purple is-2 mb-5">
                  Welcome to Orcania
                </h1>
                <h1 className="subtitle has-text-white is-4">
                  Building the future of blockchain technology
                </h1>
                <div
                  className="columns is-mobile has-background is-centered-a is-multiline"
                  style={{ width: "80%" }}
                >
                  {brandLogos.slice(0, 6).map((e) => (
                    <div className="column is-mobile" key={e.id}>
                      <figure className="image is-32x32 ">
                        <img src={e.logo} alt="" />
                      </figure>
                    </div>
                  ))}
                </div>
                <div
                  className="columns is-mobile has-background is-centered-a is-multiline"
                  style={{ width: "80%" }}
                >
                  {brandLogos.slice(6, 12).map((e) => (
                    <div className="column is-mobile" key={e.id}>
                      <figure className="image is-32x32 ">
                        <img src={e.logo} alt="" />
                      </figure>
                    </div>
                  ))}
                </div>
                <br />
              </div>

              <div className="column">
                <img
                  src={welcomeScreenHome}
                  alt=""
                  data-aos="fade-left"
                  width="auto"
                  height="auto"
                  style={{
                    backgroundColor: "transparent",
                    border: "none",
                    boxShadow: "none",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section
        className="hero is-fullheight py-0"
        style={{ position: "relative" }}
      >
        <div
          className="hero-body has-background-dark px-0"
          style={{ minHeight: "500px" }}
        >
          <div className="container px-3" style={{ zIndex: "10" }}>
            {videoVisible ? null : (
              <div className="columns ">
                <div className="column has-text-right has-text-centered-mobile">
                  <h1 className="title is-3 primary has-text-white mb-5">
                    Orcania
                  </h1>
                </div>
                <div className="column is-1-desktop has-text-centered">
                  <a
                    className="subtitle is-3 has-text-white has-text-centered"
                    onClick={(e) => setVideoVisible(!videoVisible)}
                  >
                    <span className="icon">
                      <i className="far fa-play-circle"></i>
                    </span>
                  </a>
                </div>
                <div className="column">
                  <h1 className="title is-3 primary has-text-white has-text-centered-mobile mb-5">
                    Our Brightest Of Projects
                  </h1>
                </div>
              </div>
            )}
          </div>
          {videoVisible ? (
            <div
              className=""
              style={{
                position: "absolute",
                top: "0",
                width: "100%",
                height: "100%",
                background: "rgba(black, 0.5)",
                zIndex: "10",
              }}
            >
              <div
                className="container is-max-widescreen pt-6 has-background-"
                style={{ height: "100%", position: "relative" }}
              >
                <div
                  className="has-background"
                  style={{
                    width: "100%",
                    position: "absolute",
                    top: "50%",
                    transform: "translateY(-50%)",
                  }}
                >
                  <div className="container px-3">
                    <button
                      className="button has-background-transparent has-no-border has-text-white "
                      onClick={(e) => setVideoVisible(false)}
                    >
                      <span className="icon">
                        <i className="fas fa-chevron-left"></i>
                      </span>
                      <span>Go back</span>
                    </button>
                    <figure className="image is-16by9">
                      <iframe
                        title="Orcania"
                        className="has-ratio"
                        width="640"
                        height="360"
                        src="https://www.youtube.com/embed/APl2u2iqmQE"
                        frameBorder="0"
                        allowFullScreen
                      ></iframe>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </div>

        <div
          className=""
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            top: "0",
            left: "0",
          }}
        >
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/APl2u2iqmQE?autoplay=1&mute=1&enablejsapi=1&loop=1&controls=0&playlist=APl2u2iqmQE"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div
          className="has-background-primary2contrast"
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            top: "0",
            left: "0",
          }}
        ></div>
      </section> */}

      <section className="has-background-d2p2d">
        <div className="head pt-6"></div>
        <div className="hero-body pb-6" style={{ overflow: "hidden" }}>
          <div className="container">
            <div className="columns">
              <div className="column" data-aos="fade-up">
                <h1 className="title has-line-text contrast is-3 has-text-contrast has-text-centered">
                  About us
                </h1>
                <p className="has-text-light  has-text-distriute is-size-5">
                  Orcania is a technologically driven team, focused on building
                  the most advanced of projects in the blockchain industry in
                  order to break the limits of blockchain technology and improve
                  upon the features it offers. We strive to achieve these goals
                  through a series of technologically and logically advanced
                  projects never like before, the most significant being the
                  Orcania Bridge series.
                  <br />
                  <br />
                  Our goals are many but are always focused on one concept...
                  Building a better future for blockchain technology.
                </p>
              </div>
              <div className="column has-text-centered" data-aos="fade-right">
                <img src={homeArtwork1} alt="" style={{ width: "400px" }} />
              </div>
            </div>
            <br />
            <br />

            <div className="columns is-reverse">
              <div className="column has-text-left" data-aos="fade-left">
                <img src={homeArtwork2} alt="" style={{ width: "500px" }} />
              </div>
              <div className="column" data-aos="fade-up">
                <h1 className="title has-line-text contrast is-3 has-text-contrast has-text-centered">
                  Our work
                </h1>
                <p className="has-text-light  has-text-distribute is-size-5">
                  Orcania is all about hard and smart work. We want what's best
                  for the world and we know that no dream can be fulfilled
                  without an ambitious mind and a strong body willing to give it
                  all for the dream.
                </p>
                <br />
                <br />
                <p className="has-text-light  has-text-distriute is-size-5">
                  Our work focuses on advanced logical design and implementation
                  to offer new protocols, and new ideas with a vast range of
                  features, options, and environments. We also focus on
                  improving some of the current protocols available or even
                  replace them with more efficient ones.
                  &nbsp;&nbsp;&nbsp;&nbsp;
                </p>
              </div>
            </div>
            <br />
            <br />

            <div className="columns ">
              <div className="column" data-aos="fade-up">
                <h1 className="title has-line-text contrast is-3 has-text-contrast has-text-centered">
                  Our goal
                </h1>
                <p className="has-text-light  has-text-distriute is-size-5">
                  As daily crypto users we want to push the blockchain
                  technology to its fullest, to offer the world not only a
                  better financial and technological system but the best system
                  possible, we want to improve upon blockchain technology to
                  make it sci-fi technology brought to reality, to build a
                  future better than ever before
                </p>
                <br />
                <br />
                <p className="has-text-light  has-text-distriute is-size-5">
                  We focus on building a better, more advanced future for
                  blockchain technology. We do our best to bring the
                  improvements we want to see in the world of cryptos and its
                  community, we strive to offer the best of protocols, and set
                  the highest of examples. Our dreams have no limits and our
                  goals know no end.
                </p>
              </div>
              <div className="column has-text-centered" data-aos="fade-right">
                <img src={homeArtwork3} alt="" style={{ width: "400px" }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="has-background-light">
        <div className="head pt-6 mb-6">
          <div className="container pt-6">
            <h1 className="title is-3 has-line-text primary has-text-primary has-text-centered mb-5">
              Our projects
            </h1>
          </div>
        </div>
        <br />
        <div className="hero-body pb-6">
          <div className="container">
            <div className="columns">
              <div className="column">
                <Link
                  to="/token"
                  className="box has-background-primary2dark-box has-text-centered"
                  style={{ minHeight: "280px" }}
                  data-aos="fade-up"
                >
                  <h1 className="title is-4 has-text-light-purple ">
                    Orcania Coin
                  </h1>
                  <img src={tokenIcon} alt="" />
                  <p className="has-text-light is-size-5">
                    The technologically driven governance asset of Orcania
                  </p>
                </Link>
              </div>
              <div className="column">
                <Link
                  to="/bridge"
                  className="box has-background-primary2dark-box has-text-centered"
                  style={{ minHeight: "280px" }}
                  data-aos="fade-up"
                >
                  <h1 className="title is-4 has-text-light-purple ">
                    Orcania Bridge
                  </h1>
                  <img src={bridgeIcon} alt="" />
                  <p className="has-text-light is-size-5">
                    Linking the world of blockchains together
                    <br />
                  </p>
                </Link>
              </div>
              <div className="column">
                <Link
                  to="/dex"
                  className="box has-background-primary2dark-box has-text-centered"
                  style={{ minHeight: "280px" }}
                  data-aos="fade-up"
                >
                  <h1 className="title is-4 has-text-light-purple ">
                    Orcania DEX
                  </h1>
                  <img src={exchangeIcon} alt="" />
                  <p className="has-text-light is-size-5">
                    Unbounded Self Sustaining Decentralized Finance
                    <br />
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="has-background-d2p2d">
        <div className="head pt-6">
          <h1 className="title has-lina-text contrast is-3 has-text-contrast has-text-centered mb-6">
            Ecosystem and Partners
          </h1>
        </div>
        <div className="hero-body pb-6 px-0" style={{ overflow: "hidden" }}>
          <div id="infinite" className="highway-slider">
            <div className="highway-barrier">
              <ul className="highway-lane">
                <li className="highway-car ml">
                  <a
                    href="https://polygon.technology/"
                    target="_blank"
                    className="box has-background-dark has-no-box-shadow"
                    rel="noopener noreferrer"
                  >
                    <img src={polygon_logo} alt="Polygon" />
                  </a>
                </li>
                <li className="highway-car ml">
                  <a
                    href="https://www.harmony.one/"
                    target="_blank"
                    className="box has-background-dark has-no-box-shadow"
                    rel="noopener noreferrer"
                  >
                    <img src={harmony_logo} alt="Harmony" />
                  </a>
                </li>
                <li className="highway-car ml">
                  <a
                    href="https://polygon.technology/"
                    target="_blank"
                    className="box has-background-dark has-no-box-shadow"
                    rel="noopener noreferrer"
                  >
                    <img src={polygon_logo} alt="Polygon" />
                  </a>
                </li>
                <li className="highway-car ml">
                  <a
                    href="https://www.harmony.one/"
                    target="_blank"
                    className="box has-background-dark has-no-box-shadow"
                    rel="noopener noreferrer"
                  >
                    <img src={harmony_logo} alt="Harmony" />
                  </a>
                </li>
                <li className="highway-car ml">
                  <a
                    href="https://polygon.technology/"
                    target="_blank"
                    className="box has-background-dark has-no-box-shadow"
                    rel="noopener noreferrer"
                  >
                    <img src={polygon_logo} alt="Polygon" />
                  </a>
                </li>
                <li className="highway-car ml">
                  <a
                    href="https://www.harmony.one/"
                    target="_blank"
                    className="box has-background-dark has-no-box-shadow"
                    rel="noopener noreferrer"
                  >
                    <img src={harmony_logo} alt="Harmony" />
                  </a>
                </li>
                <li className="highway-car ml">
                  <a
                    href="https://polygon.technology/"
                    target="_blank"
                    className="box has-background-dark has-no-box-shadow"
                    rel="noopener noreferrer"
                  >
                    <img src={polygon_logo} alt="Polygon" />
                  </a>
                </li>
                <li className="highway-car ml">
                  <a
                    href="https://www.harmony.one/"
                    target="_blank"
                    className="box has-background-dark has-no-box-shadow"
                    rel="noopener noreferrer"
                  >
                    <img src={harmony_logo} alt="Harmony" />
                  </a>
                </li>

                <li className="highway-car ml">
                  <a
                    href="https://polygon.technology/"
                    target="_blank"
                    className="box has-background-dark has-no-box-shadow"
                    rel="noopener noreferrer"
                  >
                    <img src={polygon_logo} alt="Polygon" />
                  </a>
                </li>
                <li className="highway-car ml">
                  <a
                    href="https://www.harmony.one/"
                    target="_blank"
                    className="box has-background-dark has-no-box-shadow"
                    rel="noopener noreferrer"
                  >
                    <img src={harmony_logo} alt="Harmony" />
                  </a>
                </li>
                <li className="highway-car ml">
                  <a
                    href="https://polygon.technology/"
                    target="_blank"
                    className="box has-background-dark has-no-box-shadow"
                    rel="noopener noreferrer"
                  >
                    <img src={polygon_logo} alt="Polygon" />
                  </a>
                </li>
                <li className="highway-car ml">
                  <a
                    href="https://www.harmony.one/"
                    target="_blank"
                    className="box has-background-dark has-no-box-shadow"
                    rel="noopener noreferrer"
                  >
                    <img src={harmony_logo} alt="Harmony" />
                  </a>
                </li>
                <li className="highway-car ml">
                  <a
                    href="https://polygon.technology/"
                    target="_blank"
                    className="box has-background-dark has-no-box-shadow"
                    rel="noopener noreferrer"
                  >
                    <img src={polygon_logo} alt="Polygon" />
                  </a>
                </li>
                <li className="highway-car ml">
                  <a
                    href="https://www.harmony.one/"
                    target="_blank"
                    className="box has-background-dark has-no-box-shadow"
                    rel="noopener noreferrer"
                  >
                    <img src={harmony_logo} alt="Harmony" />
                  </a>
                </li>
                <li className="highway-car ml">
                  <a
                    href="https://polygon.technology/"
                    target="_blank"
                    className="box has-background-dark has-no-box-shadow"
                    rel="noopener noreferrer"
                  >
                    <img src={polygon_logo} alt="Polygon" />
                  </a>
                </li>
                <li className="highway-car ml">
                  <a
                    href="https://www.harmony.one/"
                    target="_blank"
                    className="box has-background-dark has-no-box-shadow"
                    rel="noopener noreferrer"
                  >
                    <img src={harmony_logo} alt="Harmony" />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div id="infinite" className="highway-slider">
            <div className="highway-barrier">
              <ul className="highway-lane phase2">
                <li className="highway-car ml">
                  <a
                    href="https://theredapefamily.com/home"
                    target="_blank"
                    className="box has-background-dark has-no-box-shadow"
                    rel="noopener noreferrer"
                  >
                    <img src={traf} alt="The red ape family" />
                  </a>
                </li>
                <li className="highway-car ml">
                  <a
                    href="https://www.meconcash.com/index_en.html"
                    target="_blank"
                    className="box has-background-dark has-no-box-shadow"
                    rel="noopener noreferrer"
                  >
                    <img src={meconcash} alt="Meconcash" />
                  </a>
                </li>

                <li className="highway-car ml">
                  <a
                    href="https://theredapefamily.com/home"
                    target="_blank"
                    className="box has-background-dark has-no-box-shadow"
                    rel="noopener noreferrer"
                  >
                    <img src={traf} alt="The red ape family" />
                  </a>
                </li>
                <li className="highway-car ml">
                  <a
                    href="https://www.meconcash.com/index_en.html"
                    target="_blank"
                    className="box has-background-dark has-no-box-shadow"
                    rel="noopener noreferrer"
                  >
                    <img src={meconcash} alt="Meconcash" />
                  </a>
                </li>
                <li className="highway-car ml">
                  <a
                    href="https://theredapefamily.com/home"
                    target="_blank"
                    className="box has-background-dark has-no-box-shadow"
                    rel="noopener noreferrer"
                  >
                    <img src={traf} alt="The red ape family" />
                  </a>
                </li>
                <li className="highway-car ml">
                  <a
                    href="https://www.meconcash.com/index_en.html"
                    target="_blank"
                    className="box has-background-dark has-no-box-shadow"
                    rel="noopener noreferrer"
                  >
                    <img src={meconcash} alt="Meconcash" />
                  </a>
                </li>
                <li className="highway-car ml">
                  <a
                    href="https://theredapefamily.com/home"
                    target="_blank"
                    className="box has-background-dark has-no-box-shadow"
                    rel="noopener noreferrer"
                  >
                    <img src={traf} alt="the red ape family" />
                  </a>
                </li>
                <li className="highway-car ml">
                  <a
                    href="https://www.meconcash.com/index_en.html"
                    target="_blank"
                    className="box has-background-dark has-no-box-shadow"
                    rel="noopener noreferrer"
                  >
                    <img src={meconcash} alt="meconcash" />
                  </a>
                </li>
                <li className="highway-car ml">
                  <a
                    href="https://theredapefamily.com/home"
                    target="_blank"
                    className="box has-background-dark has-no-box-shadow"
                    rel="noopener noreferrer"
                  >
                    <img src={traf} alt="the red ape family" />
                  </a>
                </li>
                <li className="highway-car ml">
                  <a
                    href="https://www.meconcash.com/index_en.html"
                    target="_blank"
                    className="box has-background-dark has-no-box-shadow"
                    rel="noopener noreferrer"
                  >
                    <img src={meconcash} alt="meconcash" />
                  </a>
                </li>

                <li className="highway-car ml">
                  <a
                    href="https://theredapefamily.com/home"
                    target="_blank"
                    className="box has-background-dark has-no-box-shadow"
                    rel="noopener noreferrer"
                  >
                    <img src={traf} alt="The red ape family" />
                  </a>
                </li>
                <li className="highway-car ml">
                  <a
                    href="https://www.meconcash.com/index_en.html"
                    target="_blank"
                    className="box has-background-dark has-no-box-shadow"
                    rel="noopener noreferrer"
                  >
                    <img src={meconcash} alt="meconcash" />
                  </a>
                </li>
                <li className="highway-car ml">
                  <a
                    href="https://theredapefamily.com/home"
                    target="_blank"
                    className="box has-background-dark has-no-box-shadow"
                    rel="noopener noreferrer"
                  >
                    <img src={traf} alt="The red ape family" />
                  </a>
                </li>
                <li className="highway-car ml">
                  <a
                    href="https://www.meconcash.com/index_en.html"
                    target="_blank"
                    className="box has-background-dark has-no-box-shadow"
                    rel="noopener noreferrer"
                  >
                    <img src={meconcash} alt="meconcash" />
                  </a>
                </li>
                <li className="highway-car ml">
                  <a
                    href="https://theredapefamily.com/home"
                    target="_blank"
                    className="box has-background-dark has-no-box-shadow"
                    rel="noopener noreferrer"
                  >
                    <img src={traf} alt="The red ape family" />
                  </a>
                </li>
                <li className="highway-car ml">
                  <a
                    href="https://www.meconcash.com/index_en.html"
                    target="_blank"
                    className="box has-background-dark has-no-box-shadow"
                    rel="noopener noreferrer"
                  >
                    <img src={meconcash} alt="meconcash" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="has-background-light">
        <div className="head pt-6 mb-6">
          <div className="container pt-6">
            <h1 className="title is-3 has-line-text primary has-text-primary has-text-centered mb-5">
              Meet the team
            </h1>
          </div>
        </div>
        <div className="hero-body pb-6" style={{ overflow: "hidden" }}>
          <div className="container">
            <div className="columns">
              <div
                className="column has-text-centered"
                style={{ display: "grid", placeItems: "center" }}
              >
                <div style={{ width: "300px" }} data-aos="fade-up">
                  <TeamCard
                    name="Edy Haddad"
                    charge="Founder, Blockchain, software and smart contracts developer"
                    imgsrc={member1}
                    chargeIcon={<i className="fas fa-user-tie"></i>}
                    socialmedia={
                      <div>
                        <a
                          className="has-text-white"
                          href="https://www.linkedin.com/in/edy-haddad-42725a211/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span className="icon hide">
                            <i className="fab fa-linkedin-in"></i>
                          </span>
                        </a>
                        &nbsp;
                        <a
                          className="has-text-white"
                          href="https://twitter.com/EAOE_Dev"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span className="icon">
                            <i className="fab fa-twitter"></i>
                          </span>
                        </a>
                        &nbsp;
                        <a
                          className="has-text-white"
                          href="https://t.me/EAOE_Dev"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span className="icon">
                            <i className="fab fa-telegram-plane"></i>
                          </span>
                        </a>
                        &nbsp;
                        <div
                          className="has-text-white"
                          data-tooltip="EAOE#3130"
                          style={{
                            display: "inline-block",
                          }}
                        >
                          <span className="icon">
                            <i className="fab fa-discord"></i>
                          </span>
                        </div>
                        &nbsp;
                      </div>
                    }
                  />
                </div>
              </div>
              <div
                className="column has-text-centered"
                style={{ display: "grid", placeItems: "center" }}
              >
                <div style={{ width: "300px" }} data-aos="fade-up">
                  <TeamCard
                    name="Sebastian Madrid"
                    charge="Web and DAPP dev"
                    imgsrc="https://drive.google.com/uc?export=view&id=1TibjOvHroE9R9K0MT-T_Ejv6JccaS9YV"
                    chargeIcon={<i className="fas fa-code"></i>}
                    socialmedia={
                      <div>
                        <a
                          className="has-text-white"
                          href="https://www.linkedin.com/in/sebastian-madrid-38597a200/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span className="icon">
                            <i className="fab fa-linkedin-in"></i>
                          </span>
                        </a>
                        &nbsp;
                        <a
                          className="has-text-white"
                          href="https://twitter.com/GeenKt"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span className="icon">
                            <i className="fab fa-twitter"></i>
                          </span>
                        </a>
                        &nbsp;
                        <a
                          className="has-text-white"
                          href="https://t.me/Loque18"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span className="icon">
                            <i className="fab fa-telegram-plane"></i>
                          </span>
                        </a>
                        &nbsp;
                        <div
                          className="has-text-white"
                          href=""
                          data-tooltip="Loque#7657"
                          style={{ display: "inline-block" }}
                        >
                          <span className="icon">
                            <i className="fab fa-discord"></i>
                          </span>
                        </div>
                        &nbsp;
                      </div>
                    }
                  />
                </div>
              </div>
              <div
                className="column has-text-centered"
                style={{ display: "grid", placeItems: "center" }}
              >
                <div style={{ width: "300px" }} data-aos="fade-up">
                  <TeamCard
                    name="Zero Two"
                    charge="Hardware Manager / Testing helper"
                    imgsrc={member5}
                    chargeIcon={<i className="fa-solid fa-microchip"></i>}
                    socialmedia={
                      <div>
                        <a
                          className="has-text-white"
                          href="https://t.me/JaydenR_CF"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span className="icon">
                            <i className="fab fa-telegram-plane"></i>
                          </span>
                        </a>
                        &nbsp;
                        <div
                          className="has-text-white"
                          href=""
                          data-tooltip="Zero Two#0764"
                          style={{ display: "inline-block" }}
                        >
                          <span className="icon">
                            <i className="fab fa-discord"></i>
                          </span>
                        </div>
                        &nbsp;
                      </div>
                    }
                  />
                </div>
              </div>
              {/* <div className="column has-text-centered" style={{display: 'grid', placeItems: 'center'}}>
                            <div style={{width: '300px'}} data-aos="fade-up">
                                <TeamCard name="Davide Ricciardi" charge="Marketing Manager" imgsrc={member4}
                                    chargeIcon={<i className="fa-solid fa-bullhorn"></i>}
                                    socialmedia={
                                        <div>

                                            <a className="has-text-white" href="https://t.me/PacScarlatti" target="_blank">
                                                <span className="icon">
                                                    <i className="fab fa-telegram-plane"></i>
                                                </span>
                                            </a>&nbsp;

                                            <div className="has-text-white" href="" data-tooltip="Scarlatti#0173" style={{display: 'inline-block'}}>
                                                <span className="icon">
                                                    <i className="fab fa-discord"></i>
                                                </span>
                                            </div>&nbsp;
                                        </div>

                                    }
                                />
                            </div>
                        </div> */}
            </div>
            <div
              className="column has-text-centered"
              style={{ display: "grid", placeItems: "center" }}
            >
              <div style={{ width: "300px" }} data-aos="fade-up">
                <TeamCard
                  name="Bechara Maalouf"
                  charge="Web Developer"
                  imgsrc={member6}
                  chargeIcon={<i className="fas fa-code"></i>}
                  socialmedia={
                    <div>
                      <a
                        className="has-text-white"
                        href="https://www.linkedin.com/in/bechara-maalouf-920645200"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="icon">
                          <i className="fab fa-linkedin-in"></i>
                        </span>
                      </a>
                      &nbsp;
                      <a
                        className="has-text-white"
                        href="https://twitter.com/BecharaxMaalouf"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="icon">
                          <i className="fab fa-twitter"></i>
                        </span>
                      </a>
                      &nbsp;
                      <a
                        className="has-text-white"
                        href="https://t.me/TiredZone"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="icon">
                          <i className="fab fa-telegram-plane"></i>
                        </span>
                      </a>
                      &nbsp;
                      <div
                        className="has-text-white"
                        href=""
                        data-tooltip="TiredZone#4106"
                        style={{ display: "inline-block" }}
                      >
                        <span className="icon">
                          <i className="fab fa-discord"></i>
                        </span>
                      </div>
                      &nbsp;
                    </div>
                  }
                />
              </div>
            </div>
          </div>

          <br />
          <h1 className="title is-3 has-line-text primary has-text-primary has-text-centered mb-5">
            Advisors
          </h1>
          <br />
          <div className="container">
            <div className="columns">
              <div
                className="column has-text-centered"
                style={{ display: "grid", placeItems: "center" }}
              >
                <div style={{ width: "300px" }} data-aos="fade-up">
                  <TeamCard
                    name="Professor Youakim Badr"
                    charge="Advisor"
                    imgsrc={member3}
                    chargeIcon={<i className="fas fa-chalkboard-teacher"></i>}
                    socialmedia={
                      <div>
                        <a
                          className="has-text-white"
                          href="https://www.linkedin.com/in/youakim/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span className="icon">
                            <i className="fab fa-linkedin-in"></i>
                          </span>
                        </a>
                        &nbsp;
                        <a
                          className="has-text-white"
                          href="https://youakim.info/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span className="icon">
                            <i className="fas fa-globe"></i>
                          </span>
                        </a>
                        &nbsp;
                      </div>
                    }
                  />
                </div>
              </div>
            </div>
          </div>

          <br />
          <h1 className="title is-3 has-line-text primary has-text-primary has-text-centered mb-5">
            {" "}
            Collaborators
          </h1>
          <br />
          <div className="container">
            <div className="columns">
              <div
                className="column has-text-centered"
                style={{ display: "grid", placeItems: "center" }}
              >
                <div style={{ width: "300px" }} data-aos="fade-up">
                  <TeamCard
                    name="Glomp"
                    charge="Graphic designer"
                    chargeIcon={<i className="fas fa-paint-brush"></i>}
                  />
                </div>
              </div>
              <div
                className="column has-text-centered"
                style={{ display: "grid", placeItems: "center" }}
              >
                <div style={{ width: "300px" }} data-aos="fade-up">
                  <TeamCard
                    name="Rusty"
                    charge="Graphic designer"
                    chargeIcon={<i className="fas fa-paint-brush"></i>}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="has-background-d2p2d is-last-section">
        <div className="head pt-6">
          <h1 className="title has-line-text contrast is-3 has-text-contrast has-text-centered mb-6">
            F . A . Q
          </h1>
        </div>
        <div className="hero-body pb-6" style={{ overflow: "hidden" }}>
          <div className="container px-3">
            <div
              className="box has-background-dark has-shadow mb-6"
              data-aos="fade-left"
            >
              <h1 className="title is-4 has-text-light-purple">
                Where do you want to go?
              </h1>
              <p className="has-text-light  has-text-distriute is-size-5">
                As we progress and grow, our goals continue to grow with us. We
                do our best to bring the improvements we want to see in the
                world of cryptos and it's community, we strive our hardest to
                offer the most efficient of technologies. Our projects and plans
                grow with us, and we'll keep on growing.
              </p>
            </div>

            <div
              className="box has-background-dark has-shadow mb-6"
              data-aos="fade-right"
            >
              <h1 className="title is-4 has-text-light-purple">
                What are you focusing on?
              </h1>
              <p className="has-text-light  has-text-distriute is-size-5">
                Right now our focus is on the release of the Orcania Bridge V1.0
                and spreading it across multiple blockchains and multiple
                communities, linking the world of blockchain finance and
                technology all together in a decentralized, permisionless,
                secure, cheap, and fast fashion.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
