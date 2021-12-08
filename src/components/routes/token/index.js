import {useEffect, useState} from 'react';
import {
    baseURL,
    tokenBannerImg,
    tokenArtwork1,
    tokenArtwork2,
    tokenArtwork3,
    tokenArtwork4,
    bridgeIcon2,
    blockchainIcon,
    multichainIcon
} from '../../../images';

import bscscan from './bscscan.svg';
import cmc from './cmc.svg';

import Tokenomics from './tokenomics';

import ReactHtml from 'raw-html-react';


const style = {
    // height: '100%'
}

const Token = props => {



    const [showData, setShowData] = useState({
        title: 'ICO',
        body: 'The ICO will be held after the nodes presale has been concluded. </br></br>' +
        'Any CFC remaining from the nodes presale will be added to the public ICO, it will allow everyone to aquire CFC on multiple blockchains. <br/></br>' +
        'The ICO will either be held on centralized services such as Binance with part of the ICO being held on DAPPs on the supported blockchains of the Crypto Family Bridge, or it will be fully held on DAPPs of the supported blockchains.'
    });

    useEffect(
        () => {
            document.title = "Crypto Family | Token";
        }, []
    );

    return(
        <div style={style}>

            <section className="hero is-fullheight has-background-primary2dark">
                <div className="hero-body" style={{overflow: 'hidden'}}>
                    <div className="container">
                        <div className="py-6 is-hidden-desktop"></div>
                        <div className="columns is-vcentered">
                            <div className="column has-text-centered-mobile" data-aos="fade-right">
                                <h1 className="title has-text-light-purple is-2 mb-5">Crypto Family Coin</h1>
                                <h1 className="subtitle has-text-white is-4">The multichain technologically driven governance asset of the Crypto Family</h1>

                                <br/>
                                {/*}<button className="button is-light-purple" style={{width: '150px'}}>Node sales</button>&nbsp;&nbsp;
                                <button className="button is-light-purple" style={{width: '150px'}}>Presale</button> */}
                            </div>

                            <div className="column" data-aos="flip-left">

                                <figure className="image is-square" style={{transform: 'scale(0.8)'}}>
                                    <img src={tokenBannerImg} alt=''/>
                                </figure>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="has-background-light px-4">
                <div className="head pt-6 mb-6">
                    <div className="container pt-6">
                        <h1 className="title is-3 has-text-primary has-text-centered has-liae-text primary mb-5">Upcoming Token Distribution</h1>

                        <div className="columns">
                            <div className="column is-5">
                                <div>
                                    <Tokenomics showData={showData} setShowData={setShowData}/>
                                </div>
                            </div>
                            <div className="column">
                                <div className="">
                                    <h1 className="subtitle has-text-centered has-text-primary">
                                        {showData.title}
                                    </h1>
                                    <p>
                                        <ReactHtml html={showData.body}/>
                                    </p>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
                <br/>
                <div className="body pb-6">
                    <div className="container is-max-desktop">


                    </div>
                </div>
            </section>

            <section className="has-background-d2p2d ">
                <div className="head pt-6">
                </div>
                <div className="hero-body pb-6" style={{overflow: 'hidden'}}>

                    <div className="block">
                        <div className="container">

                            <div className="columns">
                                <div className="column" data-aos="fade-up">
                                    <h1 className="title has-line-text contrast is-3 has-text-contrast has-text-centered">About</h1>
                                    <p className="has-text-light  has-text-distriute is-size-5">
                                        Crypto Family Coin, or CFC, is a multichain technologically driven asset, used for the governance, security and payment of all the current and future projects of the Crypto Family.
                                        <br/><br/>
                                        It is moslty used for governance, security, and fees on the multichain Beacons of the crypto Family Bridge, to secure all of its transactions and pay its fees.
                                        <br/>
                                        Future use cases will also include CFC being the governance asset for the Crypto Family Bridge V2.0, voting asset for project ideas and recommendations, and payment asset for all services provided by the Crypto Family.
                                        <br/><br/>
                                        In other words, CFC is the heart of the Crypto Family ecosystem, and the basis of it's security and foundation.
                                    </p>
                                </div>
                                <div className="column has-text-centered" data-aos="fade-right" style={{display: 'grid', placeItems: 'center'}}>
                                    <img src={tokenArtwork1} alt='' width="500px"/>
                                </div>
                            </div>
                            <br/><br/>

                            <div className="columns is-reverse" >

                                <div className="column has-text-centered" data-aos="fade-left" style={{display: 'grid', placeItems: 'center'}}>
                                    <img src={tokenArtwork2} alt='' width="500px"/>
                                </div>
                                <div className="column" data-aos="fade-up">
                                    <h1 className="title has-line-text contrast is-3 has-text-contrast has-text-centered">Governance</h1>
                                    <p className="has-text-light  has-text-distriute is-size-5">
                                    CFC is the coin used to manage voting power and pay fees on the Crypto Family Bridge. In order to gain voting power, validator nodes will need to acquire and stake CFC on the blockchain they wish to link.
                                    <br/><br/>
                                    The security of the Bridge and authenticity of its transactions is all determined by the amount of CFC staked on the Bridge and the voting power backing each transaction.
                                    <br/><br/>
                                    Future projects such as the Crypto Family Bridge 2.0 will also rely on CFC for security among validator nodes and payment for its transaction fees.
                                    </p>
                                </div>
                            </div>
                            <br/><br/>

                            <div className="columns ">
                                <div className="column" data-aos="fade-up">
                                    <h1 className="title has-line-text contrast is-3 has-text-contrast has-text-centered">Security</h1>
                                    <p className="has-text-light  has-text-distriute is-size-5">
                                        CFC inherits the security of the many blockchains it operates on, and comes equipped with unique security features that accomplish a new standard of security in the world of cryptos, and act as a teaser for the upcoming Crypto Family Vault project.
                                        <br/><br/>
                                        CFC helps users stay free, safe and secure, it is available on many blockchains in a non-wrapped form and can be transfered across these blockchains in a decentralized and permisionless fashion using the Crypto Family Bridge.
                                        <br/>
                                        It offers users security features such as clearance of allowance, that takes away the allowance of any and all parties and smart contracts that might have been given permission to use the users funds.
                                        This helps resolve one of the major issues assets face with rogue users, buggy contracts, hackers, or scam contracts.
                                        <br/><br/>
                                        Some of the other features include 'Full Allowance', which helps acheive parental control or exterior management over funds, allowances, and staking.
                                    </p>
                                </div>
                                <div className="column has-text-centered" data-aos="fade-right" style={{display: 'grid', placeItems: 'center'}}>
                                    <img src={tokenArtwork3} alt='' width="500px"/>
                                </div>
                            </div>
                            <br/><br/>

                            <div className="columns is-reverse" >

                                <div className="column" data-aos="fade-left" style={{display: 'grid', placeItems: 'center'}}>
                                    <img src={tokenArtwork4} alt='' width="600px"/>
                                </div>
                                <div className="column" data-aos="fade-up">
                                    <h1 className="title has-line-text contrast is-3 has-text-contrast has-text-centered">Ecosystem</h1>
                                    <p className="has-text-light  has-text-distriute is-size-5">
                                        CFC is a community controlled asset, meaning its developers have no power of controlling it in any way.
                                        <br/>
                                        New CFC tokens can only be born by staking existing CFC, making CFC holders the only ones capable of providing more CFC to the community and to the Crypto Family projects.
                                        <br/>
                                        The CFC staking APY is 6%-20%, users participate in staking by running a Crypto Family Bridge node or delegating their CFC to one. This APY is composed of 5% staking reward and 1%-15% rewards from transaction fees on the bridge, this makes the inflation rate of CFC 2%-5% while its rewards rate 6%-20%.
                                        <br/><br/>
                                        CFC was built to provide the best of performance, deliver the cheapest of gas usage and transactions, with the most efficient of management tools to provide the best user and industrial experience.
                                        <br/>
                                        Some of these tools include the built in multi transfer functionality, which allows transfer of CFC to hundreds of addresses using one transaction, that results in fast and very cheap transfers that in most cases are cheaper than regular coin transfers. (Use case example: Company paying its employees)
                                        <br/><br/>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <br/>
                    {/**
                     * <div className="container">
                        <h1 className="title has-text-contrast has-line-text contrast has-text-centered    ">FT Motive</h1>
                        <div className="container is-max-desktop has-text-light is-size-5">
                            <ul>
                                <li className="mb-6">FT didn't come to existence because we wanted it to be, it came because it needed to be.</li>
                                <li className="mb-6">FT is the soul of governance and fees to all the Crypto Family projects, without it many of these projects would be impossible.</li>
                                <li className="mb-6">It was made to provide the blockchain community with a new view at technology and blockchain projects.</li>
                                <li className="mb-6">And it lets our developer sleep at night knowing there isn't a contract out there with full allowance that can withdraw his tokens while he's taking a nap (not kidding)</li>
                            </ul>
                        </div>


                    </div>
                    */}

                </div>
            </section>

            <section className="has-background-light">
                <div className="head pt-6 mb-6">
                    <h1 className="title is-3 has-text-primary has-text-centered mb-6">Token info</h1>
                </div>
                <br/>
                <div className="hero-body py-6" style={{overflow: 'hidden'}}>
                    <div className="container">
                        <div className="columns is-variable is-8">
                            <div className="column has-text-centered" data-aos="fade-up">
                                <div className="box has-background-dark2primary-v ">
                                    <h1 className=" subtitle has-text-center has-text-light-purple" >Name of token</h1>
                                    <p className="has-text-white has-text-center">Crypto Family Coin</p>
                                </div>
                            </div>
                            <div className="column has-text-centered" data-aos="fade-up">
                                <div className="box has-background-dark2primary-v ">
                                    <h1 className=" subtitle has-text-center has-text-light-purple" >Symbol of token</h1>
                                    <p className="has-text-white has-text-center">CFC</p>
                                </div>
                            </div>
                        </div>
                        <div className="columns is-variable is-8">
                            <div className="column has-text-centered" data-aos="fade-up">
                                <div className="box has-background-dark2primary-v ">
                                    <h1 className=" subtitle has-text-center has-text-light-purple" >Total amount of token issued</h1>

                                    <p className="has-text-white has-text-center">-</p>
                                </div>
                            </div>
                            <div className="column has-text-centered" data-aos="fade-up">
                                <div className="box has-background-dark2primary-v ">
                                    <h1 className=" subtitle has-text-center has-text-light-purple" >Amount of token burnt (2021)</h1>
                                    <p className="has-text-white has-text-center">-</p>
                                </div>
                            </div>
                        </div>
                        <div className="columns is-variable is-8">
                            <div className="column has-text-centered" data-aos="fade-up">
                                <div className="box has-background-dark2primary-v ">
                                    <h1 className=" subtitle has-text-center has-text-light-purple" >Total supply</h1>
                                    <p className="has-text-white has-text-center">100,000,000</p>
                                </div>
                            </div>
                            <div className="column has-text-centered" data-aos="fade-up">
                                <div className="box has-background-dark2primary-v ">
                                    <h1 className=" subtitle has-text-center has-text-light-purple" >Format of token</h1>
                                    <p className="has-text-white has-text-center">ERC-20</p>
                                </div>
                            </div>
                        </div>
                        <div className="columns is-variable is-8">
                            <div className="column has-text-centered" data-aos="fade-up">
                                <div className="box has-background-dark2primary-v ">
                                    <h1 className=" subtitle has-text-center has-text-light-purple" >Address</h1>
                                    <p className="has-text-white has-text-center">-</p>
                                </div>
                            </div>
                            <div className="column has-text-centered" data-aos="fade-up">
                                <div className="box has-background-dark2primary-v ">
                                    <h1 className=" subtitle has-text-center has-text-light-purple" >Decimals</h1>
                                    <p className="has-text-white has-text-center">18</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="head">

                </div>
            </section>

            {/* <section className="has-background-light">
                <div className="head">

                </div>
                <br/>
                <div className="hero-body py-6">
                    <div className="container">
                        <div className="columns is-variable is-8">
                            <div className="column has-text-centered">
                                <a href="https://www.example.com"><img src={bscscan} alt='' width="200"/></a>
                            </div>
                            <div className="column has-text-centered">
                                <a href="https://www.example.com"><img src={cmc} alt='' width="200"/></a>
                            </div>


                        </div>
                    </div>
                </div>
                <div className="head">

                </div>
            </section> */}

            <section className="has-background-light">
                <div className="head pt-6">
                    <h1 className="title is-3 has-text-primary has-text-centered mb-6">Utilities</h1>
                    <div className="hero-body pb-6" style={{overflow: 'hidden'}}>
                        <div className="container px-3">
                            <div className="columns">
                                <div className="column">
                                    <div className="box has-background-primary2dark-v py-6">
                                        <div style={{display: 'grid', placeItems: 'center'}}>
                                            <div className="has-background-light-purple" style={{width: '128px', height: '128px', borderRadius: '50%', display: 'grid', placeItems: 'center'}}> 
                                                <img src={bridgeIcon2} alt='' width="100"/>
                                            </div>
                                        </div>
                                        <br/>
                                        <h1 className="subtitle has-text-white has-text-centered is-3">Bridge</h1>
                                        <ul className="px-5" style={{listStyle: 'disc', color: 'white'}}>
                                            <li><h1 className="subtitle has-text-white is-5">Staking, governance and security for the Crypto Family Bridge</h1></li> <br/>
                                            <li><h1 className="subtitle has-text-white is-5">Staking, governance and security for the Crypto Family Bridge</h1></li>
                                        </ul>
                                    </div>                                    
                                </div>
                                <div className="column">
                                    <div className="box has-background-primary2dark-v py-6">
                                        <div style={{display: 'grid', placeItems: 'center'}}>
                                        <div className="has-background-light-purple" style={{width: '128px', height: '128px', borderRadius: '50%', display: 'grid', placeItems: 'center'}}> 
                                                <img src={multichainIcon} alt='' width="100" />
                                            </div>
                                        </div>
                                        <br/>
                                        <h1 className="subtitle has-text-white has-text-centered is-3">Multichain</h1>
                                        <ul className="px-5" style={{listStyle: 'disc', color: 'white'}}>
                                            <li><h1 className="subtitle has-text-white is-5">Staking, governance and security for the Crypto Family Multichain</h1></li> <br/>
                                            <li><h1 className="subtitle has-text-white is-5">Staking, governance and security for the Crypto Family Multichain</h1></li>
                                        </ul>
                                    </div>                                    
                                </div>
                                <div className="column">
                                    <div className="box has-background-primary2dark-v py-6">
                                        <div style={{display: 'grid', placeItems: 'center'}}>
                                            <div className="has-background-light-purple" style={{width: '128px', height: '128px', borderRadius: '50%', display: 'grid', placeItems: 'center'}}> 
                                                <img src={blockchainIcon} alt='' width="80"/>
                                            </div>
                                        </div>
                                        <br/>
                                        <h1 className="subtitle has-text-white has-text-centered is-3">Chain</h1>
                                        <ul className="px-5" style={{listStyle: 'disc', color: 'white'}}>
                                            <li><h1 className="subtitle has-text-white is-5">Staking, governance and security for the Crypto Family Chain</h1></li> <br/>
                                            <li><h1 className="subtitle has-text-white is-5">Staking, governance and security for the Crypto Family Chain</h1></li>
                                        </ul>
                                    </div>                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="has-background-d2p2d is-last-section">
                <div className="head pt-6">
                    <h1 className="title is-3 has-text-contrast has-text-centered mb-6">F . A . Q</h1>
                </div>
                <div className="hero-body pb-6" style={{overflow: 'hidden'}}>
                    <div className="container px-3">


                        <div className="box has-background-dark has-shadow mb-6" data-aos="fade-right">
                            <h1 className="title is-4 has-text-light-purple">When is the ICO?</h1>
                            <p className="has-text-light  has-text-distriute is-size-5">
                                The ICO is still not defined due to development improvements that pushed release date, nevertheless it is expected before 2022.
                            </p>
                        </div>

                        <div className="box has-background-dark has-shadow mb-6" data-aos="fade-left">
                            <h1 className="title is-4 has-text-light-purple">How to stake CFC?</h1>
                            <p className="has-text-light  has-text-distriute is-size-5">
                                Users can earn by running a validator node on the Crypto Family Bridge or by delegating their CFC to one. For their
                                help running and securing the bridge, users get a 5% APY on their stake + rewards from transaction fees of the bridge.
                            </p>
                        </div>
                            <div className="box has-background-dark has-shadow mb-6" data-aos="fade-right">
                            <h1 className="title is-4 has-text-light-purple">How to use CFC security and management features?</h1>
                            <p className="has-text-light is-size-5">
                                A control panel interface will be provided for users to use in order to easily manage security of their funds and monitor their state.
                            </p>
                        </div>
                    </div>

                </div>
            </section>



        </div>
    );
}


export default Token;
