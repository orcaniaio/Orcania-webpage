import {useEffect, useRef} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link

} from "react-router-dom";

import Sidebar from './components/base/sidebar';
import Background from './components/base/background';

import Timeline from './components/base/time-line';
import Navbar from './components/commons/navbar';
import Footer from './components/commons/footer';
import Home from './components/routes/home';
import Token from './components/routes/token';
import Bridge from './components/routes/bridge';
import Vault from './components/routes/vault';
import Downloads from './components/routes/downloads';
import ScrollToTop from './components/base/scroll-to-top';
import BridgeApp from './components/routes/app';

import './scss/styles.scss';

function App() {

    const banner = useRef(null);

    const onDeleteClicked = () => {
        banner.current.parentNode.removeChild(banner.current);
    }

    return (


        <Router>

            <div className="hero is-dark is-small" style={{position: 'fixed', bottom: '0', zIndex: '10000', width: '100%'}} ref={banner}>
                <div className="hero-body">
                    <button class="delete is-pulled-right" onClick={onDeleteClicked}></button>  
                    <div className="container">
                        <h1 className="subtitle has-text-centered">Join the public testing on Dec 4th, visit our <a className="has-text-light-purple" href="https://discord.com/invite/PH5DEQbKX7" target="_blank">discord</a> for more info</h1>
                    </div>
                </div>
            </div>

            <ScrollToTop/>
            <Navbar/>

            <Switch>

                <Route exact path="/">
                    <Home/>
                </Route>

                <Route exact path="/token">

                    <Token/>
                </Route>

                <Route exact path="/bridge">
                    <Bridge/>
                </Route>

                <Route exact path="/vault">
                    <Vault/>
                </Route>

                <Route exact path="/app">
                    <BridgeApp/>
                </Route>

                <Route exact path="/downloads">
                    <Downloads/>
                </Route>

            </Switch>

            <Footer/>

        </Router>


    );
}

export default App;
