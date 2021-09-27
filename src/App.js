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
                    <Sidebar/>
                    <section className="has-background-adanger" style={{height: '100%'}}>

                        <div className="main1" style={{width: '100%', height: '100%'}}>

                            <div className="" style={{position: 'absolute', top: '50%', width: '100%'}}>
                                <div className="" >
                                    <div className="" style={{position: 'absolute', left: 'calc(50% - 30px)'}}>
                                        <div class="lds-grid"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                                    </div>
                                    <div style={{height: '80px'}}></div>
                                    <div className="title is-2 has-text-centered has-text-white" >Coming soon...</div>
                                    <div className="subtitle is-5 has-text-centered"><Link to="/" className=" has-text-white">Go back</Link></div>
                                </div>


                            </div>
                        </div>
                    </section>
                    <Background/>
                </Route>

            </Switch>

            <Footer/>

        </Router>


    );
}

export default App;
