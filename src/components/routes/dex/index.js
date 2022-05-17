import { useEffect } from 'react';
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
} from '../../../images';
import Table from './table';

const style = {
    // height: '100%'
};

const Dex = props => {
    useEffect(() => {
        document.title = 'Orcania | Genesis DEX';
    }, []);

    return (
        <div style={style}>
            <section className="hero is-fullheight has-background-primary2dark">
                <div className="hero-body" style={{ overflow: 'hidden' }}>
                    <div className="container">
                        <div className="py-6 is-hidden-desktop"></div>
                        <div className="columns is-vcentered">
                            <div className="column has-text-centered-mobile" data-aos="fade-right">
                                <h1 className="title has-text-light-purple is-2 mb-5">Orcania DEX</h1>
                                <h1 className="subtitle has-text-white is-4">
                                    Unbounded Self Sustaining Decentralized Finance
                                </h1>

                                <br />
                                <div className="buttons is-hidden">
                                    <a
                                        href="https://drive.google.com/file/d/16xNf1W65dzVRxJRfjylwpXpXU2PeQXZ3/view?usp=sharing"
                                        target="_blank"
                                        rel="noreferrer noopener"
                                        className="button is-light-purple"
                                        style={{ width: '150px' }}
                                    >
                                        <span className="is-size-5">White paper</span>
                                    </a>
                                </div>
                            </div>

                            <div className="column" data-aos="fade-left">
                                <img src={tokenArtwork2} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="has-background-d2p2d ">
                <div className="head pt-6"></div>
                <div className="hero-body pb-6" style={{ overflow: 'hidden' }}>
                    <div className="block">
                        <div className="container">
                            <div className="columns">
                                <div className="column" data-aos="fade-up">
                                    <h1 className="title has-line-text contrast is-3 has-text-contrast has-text-centered">
                                        About
                                    </h1>
                                    <p className="has-text-light  has-text-distriute is-size-5">
                                        The Orcania DEX is a nonprofit multichain DEFI 2.0 DEX aimed at low gas swaps
                                        regardless of the swap pair, low DEX fees, increasing locked liquidity
                                        stability, and unbounded trading flexibility. The DEX will be using the Orcania
                                        Multichain infrastructure to allow funds across all blockchains to interact with
                                        it. Orcania DEX was built with the aim of revolutionizing decentralized finance
                                        and decentralized trading, and we believe the steps to achieve that is through
                                        low trading fees, low gas usage and gas fees, self-sustaining liquidity, and
                                        trading flexibility. This is what the DEX works towards.
                                    </p>
                                </div>
                                <div className="column has-text-centered" data-aos="fade-right">
                                    <img src={tokenArtwork1} alt="" width="400px" />
                                </div>
                            </div>
                            <br />
                            <br />

                            <div className="columns is-reverse">
                                <div className="column has-text-centered" data-aos="fade-left">
                                    <img src={tokenArtwork4} alt="" width="400px" />
                                </div>
                                <div className="column" data-aos="fade-up">
                                    <h1 className="title has-line-text contrast is-3 has-text-contrast has-text-centered">
                                        Decentralized & Permissionless
                                    </h1>
                                    <p className="has-text-light  has-text-distriute is-size-5">
                                        The Orcania DEX is fully based on the blockchain and runs on hard coded smart
                                        contracts with no back doors or administrative permissions for anyone.
                                        <br />
                                        <br />
                                        The DEX is permissionless and allows anyone to use it with no limits or
                                        restrictions.
                                    </p>
                                </div>
                            </div>
                            <br />
                            <br />

                            <div className="columns ">
                                <div className="column" data-aos="fade-up">
                                    <h1 className="title has-line-text contrast is-3 has-text-contrast has-text-centered">
                                        {' '}
                                        Self Sustaining Liquidity{' '}
                                    </h1>
                                    <p className="has-text-light  has-text-distriute is-size-5">
                                        The Orcania DEX like any other DEX relies on users to provide the majority of
                                        the liquidity for cryptos to allow flexible trading. However, the DEX also
                                        builds up it's own liquidity as time passes by, making it less reliant on users
                                        for liquidity and allowing for flexible trading at all times for all cryptos on
                                        the DEX.
                                    </p>
                                </div>
                                <div className="column has-text-centered" data-aos="fade-right">
                                    <img src={cfDex} alt="" style={{ width: '400px' }} />
                                </div>
                            </div>
                            <br />
                            <br />

                            <div className="columns is-reverse">
                                <div className="column has-text-centered" data-aos="fade-left">
                                    <img src={cfLiquidityProtocol} alt="" width="450px" />
                                </div>
                                <div className="column" data-aos="fade-up">
                                    <h1 className="title has-line-text contrast is-3 has-text-contrast has-text-centered">
                                        Orcania Expanding Liquidity Protocol
                                    </h1>
                                    <p className="has-text-light  has-text-distriute is-size-5">
                                        The DEX focuses on building self-sustaining liquidity, and this is what the
                                        expanding liquidity protocol focuses on. When users are adding liquidity to the
                                        DEX, 0.01% of the liquidity is fed to the DEX as locked liquidity, and while
                                        users can make back that 0.01% in less than a day through DEX fees, it remains a
                                        huge contribution to the liquidity of the DEX and builds a long term sustaining
                                        liquidity. The locked liquidity fairly shares the rewards of DEX fees with other
                                        liquidity providers, resulting in the increase of locked liquidity the more and
                                        more trades there are on the DEX.
                                    </p>
                                </div>
                            </div>
                            <br />
                            <br />
                            <div className="columns ">
                                <div className="column" data-aos="fade-up">
                                    <h1 className="title has-line-text contrast is-3 has-text-contrast has-text-centered">
                                        {' '}
                                        Trading Flexibility{' '}
                                    </h1>
                                    <p className="has-text-light  has-text-distriute is-size-5">
                                        The Orcania DEX offers the smoothest of trading experience, allowing users to
                                        swap any token they want with no extra gas fees or DEX fees. <br />
                                        <br />
                                        Unlike other DEX's, any crypto added to the Orcania DEX becomes instantly
                                        tradable for all other tokens on the DEX with no need for token pairs rerouting
                                        that usually results in very high gas fees and DEX fees. <br />
                                        <br />
                                        Users can flexibly trade any crypto they want, and new tokens joining the crypto
                                        space will have unlimited access to the entire crypto market to trade with and
                                        grow.
                                    </p>
                                </div>
                                <div className="column has-text-centered" data-aos="fade-right">
                                    <img src={bridgeArtwork3} alt="" width="400px" />
                                </div>
                            </div>
                            <br />
                            <br />
                        </div>
                    </div>
                </div>
                <section className="has-background-primary2dark-box is-last-section">
                    <div className="head pt-6">
                        <h1 className="title is-3 has-text-contrast has-text-centered mb-6">DEX Features</h1>
                    </div>
                    <div className="hero-body pb-6" style={{ overflow: 'hidden' }}>
                        <Table />
                    </div>
                </section>
            </section>
            <section className="has-background-light is-last-section">
                <div className="head pt-6"></div>
                <div className="hero-body pb-6" style={{ overflow: 'hidden' }}>
                    <div className="container px-3">
                        <div className="columns">
                            <div className="column has-text-centered">
                                <img alt="Feature one" src={numberOne} />
                                <h1 className="title has-text-contrast has-text-centered is-4">
                                    Decentralized & Permissionless
                                </h1>
                                <p className="has-text-dark">Run and secured by a smart contract on the blockchain </p>
                            </div>
                            <div className="column has-text-centered">
                                <img alt="Feature two" src={numberTwo} />
                                <h1 className="title has-text-contrast has-text-centered is-4">Self Sustaining</h1>
                                <p className="has-text-dark">
                                    Expanding liquidity protocol provides long term self sustaining liquidity{' '}
                                </p>
                            </div>
                            <div className="column has-text-contrast has-text-centered">
                                <img alt="Feature three" src={numberThree} />
                                <h1 className="title has-text-contrast has-text-centered is-4">Unbounded Trading</h1>
                                <p className="has-text-dark">
                                    Provides flexibility to trade any crypto on the DEX for any another crypto
                                </p>
                            </div>
                            <div className="column has-text-contrast has-text-centered">
                                <img alt="Feature four" src={numberFour} />
                                <h1 className="title has-text-contrast has-text-centered is-4">Low Fees</h1>
                                <p className="has-text-dark">Cheapest trading fees and GAS fees on the blockchain</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="hero is-fullheight has-background-primary2dark is-hidden">
                <div className="head pt-6">
                    <h1 className="title is-3 has-text-contrast has-text-centered mb-6">F . A . Q</h1>
                </div>
                <div className="hero-body pb-6" style={{ overflow: 'hidden' }}>
                    <div className="container px-3">
                        <div className="box has-background-dark has-shadow mb-6" data-aos="fade-left">
                            <h1 className="title is-4 has-text-light-purple">Why OCA?</h1>
                            <p className="has-text-light  has-text-distriute is-size-5">
                                OCA is a new fully decentralized crypto not bound to any CEX or DEX, with no previous
                                distribution or allocations other than the Orcania DEX and team, and as such there is no
                                outside influence over it, it works as a link for all the cryptos on the DEX, and as
                                such it is fit to act as middle crypto.
                            </p>
                        </div>

                        <div className="box has-background-dark has-shadow mb-6" data-aos="fade-right">
                            <h1 className="title is-4 has-text-light-purple">
                                How Does the DEX Level Its Prices With Other Markets And Within Itself?
                            </h1>
                            <p className="has-text-light  has-text-distriute is-size-5">
                                Like any other dependent market, a balance will make itself. Throughout separate crypto
                                CEX’s and some DEX’s, price is maintained at almost the same level through arbitrage.
                            </p>
                        </div>

                        <div className="box has-background-dark has-shadow mb-6" data-aos="fade-left">
                            <h1 className="title is-4 has-text-light-purple">
                                How can tokens, NFTs, and smart contracts be added and linked to the Bridge ?
                            </h1>
                            <p className="has-text-light is-size-5">
                                On the Orcania-DEX there is OCA is in the middle of all swaps, meaning if a user
                                provides ONE-OCA liquidity, then no matter what tokens the traders use to buy ONE or
                                when traders use ONE to buy other cryptos, the user providing ONE-OCA liquidity is
                                always gaining from the fees, resulting in 3x-20x higher yield than other DEX's
                            </p>
                        </div>
                    </div>
                </div>
                <br />
                <br />
            </section>
        </div>
    );
};

export default Dex;
