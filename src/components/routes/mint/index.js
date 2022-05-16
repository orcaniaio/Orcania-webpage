import { logoLight } from 'images';

import './page.style.scss';

const MintPage = () => {
    return (
        <div
            className="has-background-primary2dark mb-0"
            style={{ minHeight: '120vh', paddingTop: '88px', height: '1px' }}
        >
            <div className="container pt-3 px-5" style={{ minHeight: '100%', paddingBottom: '6rem' }}>
                <div className="box box-wrapper" style={{ minHeight: '100%' }}>
                    <div className="box has-background-dark2 px-6" style={{ minHeight: '100%' }}>
                        <div className="columns is-reverse">
                            <div className="column is-6">
                                <section className="mb-6">
                                    <h1 className="subtitle has-text-light-purple is-3">Orcania Minting Token</h1>
                                    <p
                                        className="has-text-white is-size-5 has-text-justified"
                                        style={{ lineHeight: '100%' }}
                                    >
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Blandit turpis cursus in hac
                                        habitasse. Nunc pulvinar sapien et ligula.
                                    </p>
                                </section>
                                <section className="mb-6">
                                    <div style={{ display: 'grid', placeItems: 'center' }}>
                                        <div>
                                            <h1 className="subtitle has-text-white is-3 has-font-pt-mono mb-0">
                                                $1.504
                                            </h1>
                                            <h1 className="subtitle has-text-white is-6 has-text-centered">
                                                Current price
                                            </h1>
                                        </div>
                                    </div>
                                </section>
                                <section className="mb-6">
                                    <h1 className="subtitle has-text-light-purple is-4">Token Utilities</h1>
                                    <div className="columns">
                                        <div className="column">
                                            <div className="box  has-background-light-purple">
                                                <figure className="image is-square">
                                                    <img
                                                        src="https://toppng.com/uploads/preview/author-comments-super-mario-64-bit-11563500434mkzlmwloaf.png"
                                                        alt=""
                                                    />
                                                </figure>
                                            </div>
                                        </div>
                                        <div className="column">
                                            <div className="box  has-background-light-purple">
                                                <figure className="image is-square">
                                                    <img
                                                        src="https://toppng.com/uploads/preview/author-comments-super-mario-64-bit-11563500434mkzlmwloaf.png"
                                                        alt=""
                                                    />
                                                </figure>
                                            </div>
                                        </div>
                                        <div className="column">
                                            <div className="box  has-background-light-purple">
                                                <figure className="image is-square">
                                                    <img
                                                        src="https://toppng.com/uploads/preview/author-comments-super-mario-64-bit-11563500434mkzlmwloaf.png"
                                                        alt=""
                                                    />
                                                </figure>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>

                            <div className="column is-1 is-hidden-mobile" />

                            <div className="column px-6">
                                <section className="mb-6">
                                    <h1 className="subtitle has-text-light-purple is-3">ㅤ</h1>
                                    <div style={{ display: 'grid', placeItems: 'center' }}>
                                        <div className="logo-bloom" />
                                    </div>
                                </section>

                                <section className="mb-6">
                                    <div className="is-flex is-flex-direction-row">
                                        <div className="button symbol-button">-</div>
                                        <input className="input mint-input" type="text" />
                                        <div className="button symbol-button">+</div>
                                    </div>
                                </section>

                                <button className="button is-fullwidth mint-button has-text-weight-bold">Mint</button>
                            </div>
                            <div className="column is-1 is-hidden-mobile" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MintPage;
