import {useState, useEffect} from 'react';
import {
    baseURL,
    bridgeBannerImg,
    bridgeArtwork1,
    bridgeArtwork2,
    bridgeArtwork3,
    bridgeArtwork4,
    numberOne,
    numberTwo,
    numberThree,
    numberFour
} from '../../../images';
import './bridge.scss';

import TimeLine from '../../base/time-line';

const style = {
    // height: '100%'
}

const Bridge = props => {
    const [videoVisible, setVideoVisible] = useState(false);

    useEffect(
        () => {
            document.title = "Crypto Family | Bridge";
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
                                <h1 className="title has-text-light-purple is-2 mb-5">Crypto Family Bridge</h1>
                                <h1 className="subtitle has-text-white is-4">Linking the world of blockchain together</h1>

                                <br/>
                                {/*}<button className="button is-light-purple mb-3" style={{width: '150px'}}>Launch App</button>&nbsp;&nbsp;
                                <button className="button is-light-purple mb-3" style={{width: '150px'}}>Nodes presale</button>&nbsp;&nbsp;*/}
                                <a href="https://drive.google.com/file/d/1fo7TRcherbPTdujfEeUqJnpHjLa73dM0/view?usp=sharing" target="_blank" className="button is-light-purple mb-3" style={{width: '150px'}}>White paper</a>
                            </div>

                            <div className="column is-7 has-text-centered" data-aos="fade-left">

                                <img src={bridgeBannerImg} alt=''/>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="hero is-fullheight py-0" style={{position: 'relative'}}>

                <div className="hero-body has-background-dark px-0" >
                    <div className="container px-3" style={{zIndex: '10'}}>
                        <div className="columns ">
                            <div className="column has-text-right has-text-centered-mobile">
                                <h1 className="title is-3 primary has-text-white mb-5">Crypto Family</h1>
                            </div>
                            <div className="column is-1-desktop has-text-centered" >
                                <a className="subtitle is-3 has-text-white has-text-centered" onClick={e => setVideoVisible(!videoVisible)}><span className="icon"><i class="far fa-play-circle"></i></span></a>
                            </div>
                            <div className="column">
                                <h1 className="title is-3 primary has-text-white has-text-centered-mobile mb-5">About The Bridge</h1>
                            </div>
                        </div>
                    </div>
                    {
                        videoVisible ?
                        <div className="" style={{position: 'absolute', top: '0', width: '100%', height: '100%', background: 'rgba(black, 0.5)', zIndex: '10'}}>
                            <div className="container is-max-widescreen pt-6 has-background-" style={{height: '100%', position: 'relative'}}>
                                <div className="has-backgrou"style={{width: '100%', position: 'absolute', top:'50%', transform: 'translateY(-50%)'}}>

                                    <div className="container px-3">
                                    <button class="button has-background-transparent has-no-border has-text-white " onClick={e => setVideoVisible(false)} >
                                        <span className="icon"><i class="fas fa-chevron-left"></i></span>
                                        <span>Go back</span>
                                    </button>
                                        <figure class="image is-16by9">
                                            <iframe class="has-ratio" width="640" height="360" src="https://www.youtube.com/embed/APl2u2iqmQE" frameborder="0" allowfullscreen></iframe>
                                        </figure>
                                    </div>
                                </div>
                            </div>
                        </div> : null
                    }

                </div>


                <div className="" style={{width: '100%', height: '100%', position: 'absolute', top: '0', left:'0'}}>
                    <iframe width="100%" height="100%"  src='https://www.youtube.com/embed/APl2u2iqmQE?autoplay=1&mute=1&enablejsapi=1&loop=1&controls=0&playlist=APl2u2iqmQE'
                        title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className="has-background-primary2contrast" style={{width: '100%', height: '100%', position: 'absolute', top: '0', left:'0'}}></div>
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
                                        The Crypto Family Bridge is the first ever decentralized and permissionless inter blockchain bridge that allows the instant and cheap transfer of assets such as tokens and NFTs across multiple blockchains.
                                        <br/><br/>
                                        The bridge is decentralized, it is run and secured by hundreds of nodes that forward its transactions and prevent any cheating, it is permissionless
                                        and anyone can add their assets to it using one simple transaction, it's flexible and allows developers to link any kind of assets to the bridge and
                                        even utilize the bridge for custom tasks by customising the contracts they link to it, the bridge is very fast and can process up to 6400
                                        transaction per second on certain blockchains, it's cheaper than most bridges for it doesn't take a fee in % but only takes a fixed transaction
                                        fee, and thanks to the technology of the Crypto Family, transactions on the Bridge are even cheaper than an ERC20 token transfer.
                                    </p>
                                </div>
                                <div className="column has-text-centered" data-aos="fade-right" >
                                    <img src={bridgeArtwork1} alt='' width="500px"/>
                                </div>
                            </div>
                            <br/><br/>

                            <div className="columns is-reverse" >

                                <div className="column has-text-centered" data-aos="fade-left">
                                    <img src={bridgeArtwork2} alt='' width="500px"/>
                                </div>
                                <div className="column" data-aos="fade-up">
                                    <h1 className="title has-line-text contrast is-3 has-text-contrast has-text-centered">Decentralization</h1>
                                    <p className="has-text-light  has-text-distriute is-size-5">
                                        The bridge was built to be secure, decentralized, permissionless, cheap, and fast, it achieves that by operating on the blockchains it links and through hundreds of validator 
                                        nodes that help run and secure the bridge.
                                        <br/><br/>
                                            The Bridge is run and secured by hundreds of validator nodes that process its transactions and prevent any cheating. The nodes take 
                                            care of carrying transactions from one blockchain to another, they are what manages CFR-POS consensus, blocks, epochs, authenticity, 
                                            and the minting and burning of tokens on the blockchains through submission of validated blocks. 
                                        <br/><br/>      
                                        More about these nodes, their role, requirements, expenses, profit can be found on the white paper.
                                    </p>
                                </div>
                            </div>
                            <br/><br/>

                            <div className="columns ">
                                <div className="column" data-aos="fade-up">
                                    <h1 className="title has-line-text contrast is-3 has-text-contrast has-text-centered">For Developers</h1>
                                    <p className="has-text-light  has-text-distriute is-size-5">
                                        The Crypto Family Bridge is developer friendly and very flexible, it allows developers to go crazy with it.
                                        <br/><br/>
                                        The bridge interacts with certain functions on the smart contracts linked to it. By customizing the content of these functions,
                                        developers can utilize the bridge for anything, transfer of tokens, NFT's, custom transfer tokenomics, inter blockchain smart contract interaction
                                        (a more proper bridge will be provided for this in the future 'Crypto Family Bridge V2.0').
                                        <br/><br/>
                                        The only bounds here are your imagination, the Crypto Family Bridge opens a new route of development and many opportunities, it breaks the limits lack of inter blockchain
                                        communication has set. Some of the projects we already see comming are cross chain NFT games, cross chain NFT marketplaces, cross chain DEX's and a cross chain DEFI ecosystems.

                                    </p>
                                </div>
                                <div className="column has-text-centered" data-aos="fade-right">
                                    <img src={bridgeArtwork3} alt='' width="600px"/>
                                </div>
                            </div>
                            <br/><br/>

                            <div className="columns is-reverse" >

                                <div className="column has-text-centered" data-aos="fade-left">
                                    <img src={bridgeArtwork4} alt='' width="500px"/>
                                </div>
                                <div className="column" data-aos="fade-up">
                                    <h1 className="title has-line-text contrast is-3 has-text-contrast has-text-centered">Fees</h1>
                                    <p className="has-text-light  has-text-distriute is-size-5">
                                        The Crypto Family Bridge is optimized for optimal performance and the lowest of fees, and thanks to the bridge's Beacon Block Consensus protocol
                                        and reverse congestive architecture, a transfer using the bridge costs less than an ERC20 token transfer on the blockchain, making the bridge very cheap even on blockchains such as Ethereum.
                                        <br/><br/>
                                        The transcation fee of the bridge is payed with the bridges governance coin CFC (Crypto Family Coin), this fee is payed to validator, signer and claimer nodes
                                        to cover their expenses. In the case of custom contracts an extra fee might be needed for claimer nodes to cover their expenses and get the transaction finalized.
                                        <br/><br/>
                                        The reverse congestive architecture of the bridge means that the more transactions that the bridge has to process, the cheaper it becomes to process these
                                        transactions, thus allowing users to set very low fees when the bridge usage is high and their transactions would still be finalized almost immediately.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <br/>
                </div>
            </section>

            <section className="has-background-light">
                <div className="head pt-6">
                    <h1 className="title is-3 has-text-primary has-text-centered mb-5">Roadmap</h1>

                </div>
                <br/>
                <div className="hero-body py-6 pt-1 px-1" style={{position: 'relative', overflow: 'hidden'}}>

                    <TimeLine/>

                </div>
            </section>

            <section className="has-background-d2p2d is-last-section">
                <div className="head pt-6">
                    <h1 className="title is-3 has-text-contrast has-text-centered mb-6"></h1>
                </div>
                <div className="hero-body pb-6" style={{overflow: 'hidden'}}>
                    <div className="container px-3">
                        <div className="columns">
                            <div className="column has-text-centered">
                                <img src={numberOne}/>
                                <h1 className="title has-text-contrast has-text-centered is-4">Decentralized</h1>
                                <p className="has-text-white">Secured and run by many nodes </p>
                            </div>
                            <div className="column has-text-centered">
                                <img src={numberTwo}/>
                                <h1 className="title has-text-contrast has-text-centered is-4">Permissionless</h1>
                                <p className="has-text-white">Open for anyone to add any asset they want, transfer and develop </p>
                            </div>
                            <div className="column has-text-contrast has-text-centered">
                                <img src={numberThree}/>
                                <h1 className="title has-text-contrast has-text-centered is-4">Cheap</h1>
                                <p className="has-text-white">Cheapest inter blockchain bridge ever with a fee less than 0.0001$</p>
                            </div>
                            <div className="column has-text-contrast has-text-centered">
                                <img src={numberFour}/>
                                <h1 className="title has-text-contrast has-text-centered is-4">Instant</h1>
                                <p className="has-text-white">Transactions processed and finalized in less than 4 seconds</p>
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

                        <div className="box has-background-dark has-shadow mb-6" data-aos="fade-left">
                            <h1 className="title is-4 has-text-light-purple">Requirements of running a node ?</h1>
                            <p className="has-text-light  has-text-distriute is-size-5">
                                Crypto Family Bridge nodes are very light yet so powerful.<br/>
                                Almost any device and any wifi connection can run any of the nodes of the Bridge.<br/>
                                However for optimal synchronization with the blockchain, a wifi throughput of 10+ MB/s is recommended.
                            </p>
                        </div>

                        <div className="box has-background-dark has-shadow mb-6" data-aos="fade-left">
                            <h1 className="title is-4 has-text-light-purple">Requirements of running a validator node ?</h1>
                            <p className="has-text-light  has-text-distriute is-size-5">
                                Validator nodes are the main nodes of the bridge and manage its security and flow of transactions, to achieve that, validator nodes have to stake a minimum of 1000 CFC (1000$)
                                to earn the right to submit blocks of data and to earn voting power over other blocks of data.
                            </p>
                        </div>

                        <div className="box has-background-dark has-shadow mb-6" data-aos="fade-right">
                            <h1 className="title is-4 has-text-light-purple">How can tokens, NFTs, and smart contracts be added and linked to the Bridge ?</h1>
                            <p className="has-text-light is-size-5">
                                The Bridge provides functions for linking these contracts and their parallel on the other chain in a swift and easy manner. <br/>
                                Once those contracts are linked, the Bridge can be interacted with similarly to any smart contract.<br/>
                                Further documentation will be provided by the team in the future to better help developers integrate their projects with the Crypto Family Bridge.
                            </p>
                        </div>

                        <div className="box has-background-dark has-shadow mb-6" data-aos="fade-left">
                            <h1 className="title is-4 has-text-light-purple">Will the Bridge link blockchains other than Ethereum, BSC, Polygon, and Harmony ?</h1>
                            <p className="has-text-light is-size-5">
                                The Crypto Family Bridge aims at linking more suitable blockchains that can help build a proper multichain infrastructure.<br/>
                                Such blockchains include Avalanche, MoonBeam, Celo, and Cosmos, each chosen for the features they can add to our multichain family.
                            </p>
                        </div>
                    </div>

                </div>
            </section>



        </div>
    );
}


export default Bridge;
