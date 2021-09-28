import {useEffect} from 'react';
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
import ScrollToTop from './components/base/scroll-to-top';
import BridgeApp from './components/routes/app';

import './scss/styles.scss';

function App() {

    return (


        <Router>

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

            </Switch>

            <Footer/>

        </Router>


    );
}

export default App;
