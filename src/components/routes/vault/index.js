import {useEffect} from 'react';
import {
    baseURL,
    vaultBannerImg,
    vaultArtwork1,
    vaultArtwork2,
    vaultArtwork3
} from '../../../images';
const style = {
    // height: '100%'
}

const Vault = props => {

    useEffect(
        () => {
            document.title = "Crypto Family | Vault";
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
                                <h1 className="title has-text-light-purple is-2 mb-5">Crypto Family Vault</h1>
                                <h1 className="subtitle has-text-white is-4">Asset security made better than ever.</h1>

                                <br/>
                                {/*}<button className="button is-light-purple" style={{width: '150px'}}>Launch app</button>&nbsp;&nbsp;*/}
                            </div>

                            <div className="column" data-aos="fade-left">

                                <img src={baseURL+vaultBannerImg} alt=''/>

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
                                        The Crypto Family Vault is an onchain security protocol under development with the purpose of improving the security and management of assets on blockchains.
                                        <br/><br/>
                                        The Vault offers a wide range of security and management options a user can pick from and mix to better secure and manage their funds.
                                    </p>
                                </div>
                                <div className="column has-text-right" data-aos="fade-right">
                                    <img src={baseURL+vaultArtwork1} alt=''/>
                                </div>
                            </div>
                            <br/><br/>

                            <div className="columns is-reverse" >

                                <div className="column" data-aos="fade-left">
                                    <img src={baseURL+vaultArtwork2} alt=''/>
                                </div>
                                <div className="column" data-aos="fade-up">
                                    <h1 className="title has-line-text contrast is-3 has-text-contrast has-text-centered">Security Options</h1>
                                    <p className="has-text-light  has-text-distriute is-size-5">
                                        The Vault is still early in development and it's hard to tell what will be coming on release.
                                        <br/><br/>
                                        Some of the security features currently confirmed are: passwords, multiple password security, guards protocol.
                                    </p>
                                </div>
                            </div>
                            <br/><br/>

                            <div className="columns ">
                                <div className="column" data-aos="fade-up">
                                    <h1 className="title has-line-text contrast is-3 has-text-contrast has-text-centered">Management Options</h1>
                                    <p className="has-text-light  has-text-distriute is-size-5">
                                        The Vault is still early in development and it's hard to tell what will be coming on release.
                                        <br/><br/>
                                        Some of the management features currently confirmed are: allowance clearance, funds locking, multiple transfers, smart contracts allowance through the vault.
                                    </p>
                                </div>
                                <div className="column has-text-right" data-aos="fade-right">
                                    <img src={baseURL+vaultArtwork3} alt=''/>
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


export default Vault;
