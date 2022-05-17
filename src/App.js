import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { initCeleste } from 'celeste-framework/dist/store-module';

// import Sidebar from "./components/base/sidebar";
// import Background from "./components/base/background";

// import Timeline from "./components/base/time-line";
import Navbar from './components/commons/navbar';
import Footer from './components/commons/footer';
import Home from './components/routes/home';
import Token from './components/routes/token';
import Multichain from './components/routes/multichain';
import Wallet from './components/routes/wallet';
import MintPage from 'components/routes/mint';
// import Vault from "./components/routes/vault";
import Dex from './components/routes/dex';
import Downloads from './components/routes/downloads';
import ScrollToTop from './components/base/scroll-to-top';
// import BridgeApp from "./components/routes/app";
import UnderWorkBridge from './components/routes/under-work-bridge';
import UnderWorkDEX from './components/routes/under-work-dex';
// import UnderWorkToken from "./components/routes/under-work-token";
//import '@splidejs/splide/dist/css/splide.min.css';
import './scss/styles.scss';

function App() {
    return (
        <Router>
            <ScrollToTop />
            <Navbar />

            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>

                <Route exact path="/home">
                    <Home />
                </Route>

                <Route exact path="/token">
                    <Token />
                </Route>

                {/* <Route exact path="/wallet">
          <Wallet />
        </Route> */}

                <Route exact path="/multichain">
                    <Multichain />
                </Route>

                <Route exact path="/dex">
                    <Dex />
                </Route>

                <Route exact path="/mint">
                    <MintPage />
                </Route>

                {/* <Route exact path="/app">
          <BridgeApp />
        </Route> */}

                <Route exact path="/downloads">
                    <Downloads />
                </Route>
            </Switch>

            <Footer />
        </Router>
    );
}

export default App;
