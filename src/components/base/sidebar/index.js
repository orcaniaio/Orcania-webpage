import './sidebar.scss';

import SidebarBtn from './sidebar-btn';

import {baseURL} from '../../../images';

const Sidebar = props => {

    const {sidebarData} = props;
    const {wallet} = props;

    const startFaucet = (e, name) => {
        props.close_sidebar();
        props.faucet_tx(name);
    }

    return(
        <div className="is-hidden-touch">
            <nav className={`sidebar px-0 open `}>


                <div className="sidebar-data" style={{height: '100%', width: '240px'}}>
                    <div className="is-flex is-flex-direction-column" style={{height: '100%'}}>
                        <section id="brand" className="has-text-centered">
                            <img src={baseURL + '1fg40PyZ3kNjLH7koIXcKzAU_jDpXFfWq'}/>
                        </section>

                        <br/>

                        <section className="is-flex-grow-1">

                            <SidebarBtn name="bridge"
                             icon={<svg width="80" height="40" viewBox="0 0 40 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.75" d="M10.9091 12.7273V7.10933C9.6 6.50933 8.3818 5.782 7.27273 4.92734V12.7273H10.9091ZM7.27273 20H3.63633V16.3633H0V12.7273H3.63633V0H7.27273V2.6C10.5455 5.45466 15.0363 7.27266 20 7.27266C24.9637 7.27266 29.4545 5.45466 32.7273 2.6V0H36.3637V12.7273H40V16.3633H36.3637V20H32.7273V16.3633H7.27273V20ZM29.0909 7.10933V12.7273H32.7273V4.92734C31.6182 5.782 30.4 6.50933 29.0909 7.10933ZM27.2727 12.7273V7.85467C26.1091 8.27267 24.8909 8.582 23.6363 8.8V12.7273H27.2727ZM21.8182 12.7273V9.018L20 9.09067L18.1818 9.018V12.7273H21.8182ZM16.3637 12.7273V8.8C15.1091 8.582 13.8909 8.27267 12.7273 7.85467V12.7273H16.3637Z" fill="white"/></svg>}
                            />
                            <SidebarBtn
                                name="Explorer"
                                icon={<i className="fas fa-search"></i>}
                            />
                            <SidebarBtn
                                name="staking"
                                icon={<svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g opacity="0.75">
                                    <path d="M0 16H5.33333V21.3333H0V16Z" fill="white"/>
                                    <path d="M6.66675 16H12.0001V21.3333H6.66675V16Z" fill="white"/>
                                    <path d="M13.3333 16H18.6666V21.3333H13.3333V16Z" fill="white"/>
                                    <path d="M0 9.33353H5.33333V14.6669H0V9.33353Z" fill="white"/>
                                    <path d="M0 2.66666H5.33333V7.99999H0V2.66666Z" fill="white"/>
                                    <path d="M6.66675 9.33353H12.0001V14.6669H6.66675V9.33353Z" fill="white"/>
                                    <path d="M8 1.33313H13.3333V6.66646H8V1.33313Z" fill="white"/>
                                    <path d="M13.3333 9.33353H18.6666V14.6669H13.3333V9.33353Z" fill="white"/>
                                    <path d="M16 0H20V4.0002H16V0Z" fill="white"/>
                                    </g>
                                    </svg>
                                }
                            />
                        </section>

                    </div>
                </div>


            </nav>
            <div className={`sidebar-bg is-hidden-tablet is-haidden`}>asd</div>
        </div>
    );
}


export default Sidebar;
