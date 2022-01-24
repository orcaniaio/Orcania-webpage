import {useEffect} from 'react';
import {
    baseURL,
    tokenArtwork2,
    tokenArtwork1,
    bridgeArtwork3,
    bridgeArtwork4
} from '../../../images';
const style = {
    // height: '100%'
}

const Dex = props => {

    useEffect(
        () => {
            document.title = "Crypto Family | Dex";
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
                                <h1 className="title has-text-light-purple is-2 mb-5">Crypto Family Dex</h1>
                                <h1 className="subtitle has-text-white is-4">Lorem ipsim dolor sit amet</h1>

                                <br/>
                                {/*}<button className="button is-light-purple" style={{width: '150px'}}>Launch app</button>&nbsp;&nbsp;*/}
                            </div>

                            <div className="column" data-aos="fade-left">

                                <img src={tokenArtwork2} alt=''/>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/*}<section className="has-background-light">
                <div className="head pt-6 mb-6">
                    <div className="container pt-6">
                        <h1 className="title is-3 has-text-primary has-text-centered mb-5">Introducing Family Vault</h1>
                        <p className="subtitle has-text-centered is-4">Storing cryptos made more secure than ever</p>
                    </div>
                </div>
                <br/>
                <div className="body pb-6">
                    <div className="container is-max-desktop">
                        <figure className="image is-16by9">
                            <iframe title="unique-title" className="has-ratio" width="640" height="360" src="https://www.youtube.com/embed/ZarGxO0iXkU" frameBorder="0" allowFullScreen></iframe>
                        </figure>

                    </div>
                </div>
            </section>*/}

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
                                        Crypto Family DEX is a DEFI 2.0 DEX focused on flexible unlimited pair trading, low gas fees, low DEX fees, and sustainable liquidity. This DEX is fully non profit as there is no treasury or special perks to the developing team of this project, the fees of the DEX are reallocated to the DEX as liquidity providers reward and as locked liquidity increase
                                    </p>
                                </div>
                                <div className="column has-text-centered" data-aos="fade-right">
                                    <img src={tokenArtwork1} alt='' width="400px"/>
                                </div>
                            </div>
                            <br/><br/>

                            <div className="columns is-reverse" >

                                <div className="column has-text-centered" data-aos="fade-left">
                                    <img src={bridgeArtwork4} alt='' width="450px"/>
                                </div>
                                <div className="column" data-aos="fade-up">
                                    <h1 className="title has-line-text contrast is-3 has-text-contrast has-text-centered">Fees</h1>
                                    <p className="has-text-light  has-text-distriute is-size-5">
                                        Our advanced problem solving skills and mechanisms  help us build the most flexible and advanced of contracts, allowing us to offer you a  DEX with cheapest of gas fees no matter your trade. The DEX fees themselves are the lowest among all DEX's with a fee of only 0.1% that is relocated into liquidity to provide the user a better trading experience in the future
                                    </p>
                                </div>
                            </div>
                            <br/><br/>

                            <div className="columns ">
                                <div className="column" data-aos="fade-up">
                                    <h1 className="title has-line-text contrast is-3 has-text-contrast has-text-centered"> Trading Flexibility </h1>
                                    <p className="has-text-light  has-text-distriute is-size-5">
                                        The Crypto Family Middle Crypto protocol allows for the most flexible of trades. The Crypto Family Coin acts as a rerouting crypto between all other cryptos on the DEX, allowing you to trade any pair you want at no extra gas fees or DEX fees.
                                    </p>
                                </div>
                                <div className="column has-text-centered" data-aos="fade-right">
                                    <img src={bridgeArtwork3} alt='' width="500px"/>
                                </div>
                            </div>

                        </div>
                    </div>

                    <br/>

                </div>
            </section>

            <section className="has-background-d2p2d is-last-section">
                <div className="head pt-6">
                    <h1 className="title is-3 has-text-contrast has-text-centered mb-6">F . A . Q</h1>
                </div>
                <div className="hero-body pb-6" style={{overflow: 'hidden'}}>
                    <div className="container px-3">


                        <div className="box has-background-dark has-shadow mb-6" data-aos="fade-right">
                            <h1 className="title is-4 has-text-light-purple">What is the release date of the Vault ?</h1>
                            <p className="has-text-light  has-text-distriute is-size-5">
                                Release date is still not announced.<br/>
                                While plans for the Vaults work flow are set, the Crypto Family's team is currently occupied with projects such as the Crypto Family Bridge.
                            </p>
                        </div>

                        <div className="box has-background-dark has-shadow mb-6" data-aos="fade-left">
                            <h1 className="title is-4 has-text-light-purple">What blockchains will the Vault be available on ?</h1>
                            <p className="has-text-light  has-text-distriute is-size-5">
                                The Vault will cover a wide range of blockchains (all blockchains linked by the Crypto Family Bridge). <br/>
                                These blockchains will include: Ethereum, Polygon, BSC, Harmony, etc...
                            </p>
                        </div>
                            <div className="box has-background-dark has-shadow mb-6" data-aos="fade-right">
                            <h1 className="title is-4 has-text-light-purple">What assets will the Vault help secure ?</h1>
                            <p className="has-text-light is-size-5">
                                The vault will be focused on supporting and securing ERC20 tokens and ERC721, ERC1155 NFTs.
                            </p>
                        </div>
                    </div>

                </div>
            </section>



        </div>
    );
}


export default Dex;
