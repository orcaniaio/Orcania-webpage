import { useState, useEffect } from "react";
import {
  //baseURL,
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
import "./multichain.scss";

import TimeLine from "../../base/time-line";

//import Table from "./table";
import Table2 from "./table2";

const style = {
  // height: '100%'
};

const Multichain = (props) => {
  const [videoVisible, setVideoVisible] = useState(false);

  useEffect(() => {
    document.title = "Orcania | Multichain";
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
                  Orcania Multichain
                </h1>
                <h1 className="subtitle has-text-white is-4">
                  A Next-Generation Multi-Chain Infrastructure
                </h1>

                <br />
                {/*}<button className="button is-light-purple mb-3" style={{width: '150px'}}>Launch App</button>&nbsp;&nbsp;
                                <button className="button is-light-purple mb-3" style={{width: '150px'}}>Nodes presale</button>&nbsp;&nbsp;*/}
                {/* <div className="buttons">
                  <a
                    href="https://drive.google.com/file/d/15-F4iFQh6kvUO9FTkNIjZ9sWu6GGZeL9/view?usp=sharing"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="button is-light-purple"
                    style={{ width: "150px" }}
                  >
                    <span className="is-size-5">White paper</span>
                  </a>
                  <a
                    href="https://giveth.io/project/crypto-family-bridge"
                    className="button is-light-purple"
                    target="_blank"
                    rel="noreferrer noopener"
                    style={{ width: "150px" }}
                  >
                    <span className="is-size-5">Giveth</span>
                  </a>
                </div> */}
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

      <section className="has-background-d2p2d ">
        <div className="head pt-6"></div>
        <div className="hero-body pb-6" style={{ overflow: "hidden" }}>
          <div className="block">
            <div className="container">
              <div className="columns">
                <div className="column" data-aos="fade-up">
                  <h1 className="title has-line-text contrast is-3 has-text-contrast has-text-centered">
                    About
                  </h1>
                  <p className="has-text-light  has-text-distriute is-size-5">
                    The Orcania Multichain (OM), is the first ever public
                    decentralized multi-chain infrastructure that targets EVM
                    (Ethereum Virtual Machine) compatible blockchains with the
                    goal of allowing data transfer between smart contracts on
                    these blockchains, with the following advantages: <br />
                    <br />
                    - Fully decentralized and permissionless processing of
                    transactions
                    <br />
                    - Low transaction fees, low energy consumption
                    <br />
                    - Efficient confirmation time
                    <br />- 80% validation for security guarantees.
                  </p>
                </div>
                <div className="column has-text-centered" data-aos="fade-right">
                  <img src={bridgeArtwork1} alt="" width="500px" />
                </div>
              </div>
              <br />
              <br />

              <div className="columns is-reverse is-vcentered">
                <div className="column has-text-centered" data-aos="fade-left">
                  <img src={bridgeArtwork2} alt="" width="500px" />
                </div>
                <div className="column" data-aos="fade-up">
                  <h1 className="title has-line-text contrast is-3 has-text-contrast has-text-centered">
                    Beacon Protocol
                  </h1>
                  <p className="has-text-light  has-text-distriute is-size-5">
                    The OM Beacon Protocol, is a Delegated Proof of Stake
                    Multi-Chain protocol with rigorous security guarantees and
                    fast finality. <br />
                    <br />
                    With this protocol, the OM ensures full decentralization,
                    prevents double processing of transactions, and ensures fast
                    confirmation times. Additionally, the contributions and
                    benefits of validator nodes are fair and equitable, in the
                    sense that the blocks and rewards probability distribution
                    is even across all nodes.
                    <br />
                    <br />
                    Please read the white paper for more about the Beacon
                    protocol.
                  </p>
                </div>
              </div>
              <br />
              <br />

              <div className="columns ">
                <div className="column" data-aos="fade-up">
                  <h1 className="title has-line-text contrast is-3 has-text-contrast has-text-centered">
                    Decentralization
                  </h1>
                  <p className="has-text-light  has-text-distriute is-size-5">
                    The OM was built to be secure, decentralized,
                    permissionless, cheap, and fast, it achieves that by
                    operating on the blockchains it links and through hundreds
                    of validator nodes that help run and secure it.
                    <br />
                    <br />
                    The OM is run and secured by hundreds of validator nodes
                    that process its transactions and prevent any cheating. The
                    nodes take care of carrying transactions from one blockchain
                    to another, they are what manages the consensus, blocks,
                    rewards, and punishments.
                    <br />
                    <br />
                    More about these nodes, their role, requirements, expenses,
                    profit can be found on the white paper.
                  </p>
                </div>
                <div className="column has-text-centered" data-aos="fade-right">
                  <img src={bridgeArtwork2} alt="" width="600px" />
                </div>
              </div>
              <br />
              <br />

              <div className="columns is-reverse">
                <div className="column has-text-centered" data-aos="fade-left">
                  <img src={bridgeArtwork3} alt="" width="500px" />
                </div>
                <div className="column" data-aos="fade-up">
                  <h1 className="title has-line-text contrast is-3 has-text-contrast has-text-centered">
                    For Developers
                  </h1>
                  <p className="has-text-light  has-text-distriute is-size-5">
                    The OM is developer friendly and flexible, it allows
                    developers to go beyond the limits of the blockchain they
                    are building on. It allows developers to to use the OM and
                    build on it using Solidity (EVM smart contracts language),
                    so developers don't have to learn new coding languages but
                    only how to interact with the OM. <br />
                    <br />
                    The OM allows transfer of data across blockchains and
                    interacts with certain functions the destined smart
                    contracts. By customizing the content of these functions,
                    and the data developers can utilize the OM for anything,
                    bridging of tokens and NFT's, inter blockchain smart
                    contract interaction, multichain protocols and market places
                    and more
                    <br />
                    <br />
                    The only bounds here are your imagination and skills, the OM
                    opens a new route of development and many opportunities, it
                    breaks the limits lack of inter blockchain communication has
                    set.
                    <br />
                    <br />
                    More about multichain development on the white paper.
                  </p>
                </div>
              </div>
              <br />
              <br />
              <div className="columns">
                <div className="column" data-aos="fade-up">
                  <h1 className="title has-line-text contrast is-3 has-text-contrast has-text-centered">
                    About
                  </h1>
                  <p className="has-text-light  has-text-distriute is-size-5">
                    The OM is optimized for optimal performance and the lowest
                    of fees, and thanks to the Beacon Protocol and Helping Hand
                    protocol, a transfer using the OM costs almost as much as an
                    ERC20 token transfer on the blockchain, making the OM very
                    cheap even on blockchains such as Ethereum.
                    <br />
                    <br />
                    The transaction fee of the bridge is payed with the bridges
                    governance coin OCN (Orcania Coin), this fee is payed to
                    validators, to cover their expenses.
                    <br />
                    <br />
                    The helping hand protocol of the OM means that the more
                    transactions that the bridge has to process, the cheaper it
                    becomes to process these transactions, thus allowing users
                    to set very low fees when the bridge usage is high and their
                    transactions would still be finalized almost immediately.
                  </p>
                </div>
                <div className="column has-text-centered" data-aos="fade-right">
                  <img src={bridgeArtwork4} alt="" width="500px" />
                </div>
              </div>
            </div>
          </div>

          <br />
        </div>
      </section>

      <section className="has-background-light">
        <div className="head pt-6">
          <h1 className="title is-3 has-text-primary has-text-centered mb-5">
            Roadmap
          </h1>
        </div>
        <br />
        <div
          className="hero-body py-6 pt-1 px-1"
          style={{ position: "relative", overflow: "hidden" }}
        >
          <TimeLine />
        </div>
      </section>

      <section className="has-background-d2p2d is-last-section">
        <div className="head pt-6">
          <h1 className="title is-3 has-text-contrast has-text-centered mb-6">
            Bridge Features
          </h1>
        </div>
        <div className="hero-body pb-6" style={{ overflow: "hidden" }}>
          <Table2 />
        </div>
      </section>

      <section className="has-background-light is-last-section">
        <div className="head pt-6">
          <h1 className="title is-3 has-text-contrast has-text-centered mb-6"></h1>
        </div>
        <div className="hero-body pb-6" style={{ overflow: "hidden" }}>
          <div className="container px-3">
            <div className="columns">
              <div className="column has-text-centered">
                <img src={numberOne} />
                <h1 className="title has-text-contrast has-text-centered is-4">
                  Decentralized
                </h1>
                <p className="has-text-dark">Secured and run by many nodes </p>
              </div>
              <div className="column has-text-centered">
                <img src={numberTwo} />
                <h1 className="title has-text-contrast has-text-centered is-4">
                  Permissionless
                </h1>
                <p className="has-text-dark">
                  Open for anyone to add any asset they want, transfer and
                  develop{" "}
                </p>
              </div>
              <div className="column has-text-contrast has-text-centered">
                <img src={numberThree} />
                <h1 className="title has-text-contrast has-text-centered is-4">
                  Cheap
                </h1>
                <p className="has-text-dark">
                  Cheapest inter blockchain bridge ever with a fee less than
                  0.0001$
                </p>
              </div>
              <div className="column has-text-contrast has-text-centered">
                <img src={numberFour} />
                <h1 className="title has-text-contrast has-text-centered is-4">
                  Instant
                </h1>
                <p className="has-text-dark">
                  Transactions processed and finalized in less than 4 seconds
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="has-background-d2p2d is-last-section">
        <div className="head pt-6">
          <h1 className="title is-3 has-text-contrast has-text-centered mb-6">
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
                Requirements of running a node ?
              </h1>
              <p className="has-text-light  has-text-distriute is-size-5">
                Orcania Bridge nodes are very light yet so powerful.
                <br />
                Almost any device and any wifi connection can run any of the
                nodes of the Bridge.
                <br />
                However for optimal synchronization with the blockchain, a wifi
                throughput of 10+ MB/s is recommended.
              </p>
            </div>

            <div
              className="box has-background-dark has-shadow mb-6"
              data-aos="fade-left"
            >
              <h1 className="title is-4 has-text-light-purple">
                Requirements of running a validator node ?
              </h1>
              <p className="has-text-light  has-text-distriute is-size-5">
                Validator nodes are the main nodes of the bridge and manage its
                security and flow of transactions, to achieve that, validator
                nodes have to stake a minimum of 1000 OCA (1000$) to earn the
                right to submit blocks of data and to earn voting power over
                other blocks of data.
              </p>
            </div>

            <div
              className="box has-background-dark has-shadow mb-6"
              data-aos="fade-right"
            >
              <h1 className="title is-4 has-text-light-purple">
                How can tokens, NFTs, and smart contracts be added and linked to
                the Bridge ?
              </h1>
              <p className="has-text-light is-size-5">
                The Bridge provides functions for linking these contracts and
                their parallel on the other chain in a swift and easy manner.{" "}
                <br />
                Once those contracts are linked, the Bridge can be interacted
                with similarly to any smart contract.
                <br />
                Further documentation will be provided by the team in the future
                to better help developers integrate their projects with the
                Orcania Bridge.
              </p>
            </div>

            <div
              className="box has-background-dark has-shadow mb-6"
              data-aos="fade-left"
            >
              <h1 className="title is-4 has-text-light-purple">
                Will the Bridge link blockchains other than Ethereum, BSC,
                Polygon, and Harmony ?
              </h1>
              <p className="has-text-light is-size-5">
                The Orcania Bridge aims at linking more suitable blockchains
                that can help build a proper multichain infrastructure.
                <br />
                Such blockchains include Avalanche, MoonBeam, Celo, and Cosmos,
                each chosen for the features they can add to our multichain
                family.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Multichain;
