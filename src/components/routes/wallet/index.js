import React from "react";
import { useEffect, useMemo } from "react";
import { vaultArtwork1 } from "../../../images";
import "./wallet.scss";
import { useTable } from "react-table";

const style = {};

const Wallet = () => {
  const data = React.useMemo(
    () => [
      {
        col1: (
          <a
            href="https://drive.google.com/file/d/1N9NMtwUBJ8D60CDVCVlNHLbg7nZDJsjl/view?usp=sharing"
            className="is-underlined has-text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            Version 1.0.0
          </a>
        ),
        col2: <p>March 9, 2022</p>,
      },
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      {
        Header: "Version",
        accessor: "col1", // accessor is the "key" in the data
      },
      {
        Header: "Date",
        accessor: "col2",
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  useEffect(() => {
    document.title = "Orcania | Wallet";
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
                  Orcania Wallet
                </h1>
                <h1 className="subtitle has-text-white is-4">
                  Decentralized, open source, free, self owned wallet
                </h1>
              </div>

              <div className="column" data-aos="flip-left">
                <figure
                  className="image is-square"
                  style={{ transform: "scale(0.8)" }}
                >
                  <img src={vaultArtwork1} alt="" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="has-background-d2p2d ">
        <div className="hero-body pb-6" style={{ overflow: "hidden" }}>
          <div className="block">
            <div className="container">
              <div className="columns">
                <div className="column ">
                  <h1 className="title has-line-text contrast is-3 has-text-contrast has-text-centered mb-5">
                    About
                  </h1>
                  <p className="has-text-light  has-text-distriute is-size-5">
                    After the latest news about metamask, infura, and coinbase
                    our concerns grew bigger about all wallets, so we decided to
                    build a fully decentralized CLI wallet for EVM-compatible
                    blockchains for our team members, and we decided to make
                    this wallet open source and free for everyone. The wallet
                    was made to hold/transfer tokens and coins (NFT's not
                    supported yet), without the ability to auto-update the
                    wallet and without any connection to any centralized server
                    related to the Orcania team.
                    <br />
                    <br />
                    In terms of security, the key of each wallet is encrypted
                    with AES256 encryption, and is only ever decrypted when user
                    needs it to sign a transfer transaction. It's not stored
                    anywhere in ram memory, it is read from disk and decrypted
                    by user only when needed, then deleted from memory instantly
                    afterwards.
                    <br />
                    <br />
                    The password to decrypt it is not stored anywhere, neither
                    in ram nor disk, users have to type it in whenever they want
                    to sign a transaction, it's used to decrypt then instantly
                    removed from memory.
                    <br />
                    <br />
                    The wallet is built in Java so any OS (Windows, Linus, Mac)
                    can run it smoothly. Java Runtime Environment (JRE) to run
                    the wallet, most devices nowadays have JRE in them by
                    default, but to those that doesn't have it you can download
                    it from&nbsp;
                    <a
                      href="https://java.com/en"
                      className="has-text-light is-underlined"
                    >
                      here
                    </a>
                    .
                  </p>
                  <br />
                  <br />
                </div>
              </div>
              <div className="columns">
                <div className="column">
                  <h1 className="title has-line-text contrast is-3 has-text-contrast has-text-centered mb-5">
                    Video Tutorial
                  </h1>
                  <div className="column is-mobile has-text-centered">
                    <iframe
                      title="Orcania Wallet"
                      style={{ maxWidth: "100%", maxHeight: "100%" }}
                      width={560}
                      height={315}
                      src="https://www.youtube.com/embed/Q_Z-_7_Zz-Q"
                      frameborder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="has-background-d2p2d is-last-section ">
        <div className="head pt-6 mb-6">
          <div className="container">
            <h1 className="title has-line-text contrast is-3 has-text-contrast has-text-centered mb-5">
              Installation
            </h1>
            <div className="columns">
              <div className="column">
                <table
                  {...getTableProps()}
                  style={{ border: "solid 3px white" }}
                  className="has-text-centered has-text-white bordered-table is-size-3 custom-table-mobile"
                >
                  <thead>
                    {headerGroups.map((headerGroup) => (
                      <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column) => (
                          <th
                            {...column.getHeaderProps()}
                            style={{
                              borderBottom: "solid 3px white",
                            }}
                            className="has-text-contrast"
                          >
                            {column.render("Header")}
                          </th>
                        ))}
                      </tr>
                    ))}
                  </thead>
                  <tbody {...getTableBodyProps()}>
                    {rows.map((row) => {
                      prepareRow(row);
                      return (
                        <tr {...row.getRowProps()}>
                          {row.cells.map((cell) => {
                            return (
                              <td
                                {...cell.getCellProps()}
                                style={{
                                  padding: "20px",
                                  border: "solid 1px white",
                                }}
                              >
                                {cell.render("Cell")}
                              </td>
                            );
                          })}
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Wallet;
