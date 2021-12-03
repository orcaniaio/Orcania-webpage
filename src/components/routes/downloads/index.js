import {useEffect} from 'react';
import {Link} from  'react-router-dom';

import requirementsData from './requirments-data';

import './downloads.scss';

const BridgeApp = props => {

    useEffect(
        () => {
            document.title = "Crypto Family | Downloads";
        }, []
    );

    return (
        <div className="has-background-primary2dark" style={{minHeight: '100vh'}}>

            <div style={{height: '88px'}}></div>
            <section className="py-6">
                <div className="container px-3">
                    <h1 className="title has-text-light-purple">Downloads</h1>

                    <div className="box has-background-dark">
                        <h1 className="subtitle has-text-light-purple is-3 mb-0">Bridge</h1>
                        <h1 className="subtitle has-text-white">Version 1.0.0</h1>

                        <p className="has-text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Blandit turpis cursus in hac habitasse. Nunc pulvinar sapien et ligula.</p>
                        <br/>

                        <div className="columns is-multiline">
                            {
                                requirementsData.map( (item, i) => 
                                    <div className="column is-6" key={i}>
                                        <div className="media">
                                            <div className="media-left">
                                                <figure className="image is-32x32">
                                                    {item.icon}
                                                </figure>                                                
                                            </div>
                                            <div className="media-content">
                                                <h1 className="subtitle has-text-white mb-0 has-text-weight-bold">{item.title}</h1>
                                                <p className="has-text-white">{item.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }                            
                        </div>

                        <br/>

                        <div className="columns is-multiline">
                            <div className="column is-6">
                                <button className="button is-outlined is-fullwidth has-text-light-purple py-5 download-btn">CF Bridge BSC Validator Node </button>
                            </div>
                            <div className="column is-6">
                                <button className="button is-fullwidth has-text-light-purple py-5 download-btn">CF Bridge Ethereum Validator Node</button>
                            </div>
                            <div className="column is-6">
                                <button className="button is-fullwidth has-text-light-purple py-5 download-btn">CF Bridge Harmony Validator Node <br/> Coming Soon </button>
                            </div>
                            <div className="column is-6">
                                <button className="button is-fullwidth has-text-light-purple py-5 download-btn">CF Bridge Polygon Validator Node <br/> Coming Soon</button>
                            </div>
                        </div>

                    </div>
                </div>

            </section>

                
            
        </div>
    );
}

export default BridgeApp;
