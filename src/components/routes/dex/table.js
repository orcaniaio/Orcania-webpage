import '../multichain/table.scss';

const Table = () => {
    return (
        <div className="container" style={{ display: 'grid', placeItems: 'center' }}>
            <div className="boxa has-background-box is-shadowless">
                <table className="table has-background-traansparent has-text-dark is-size-5">
                    <thead>
                        <tr>
                            <th></th>
                            <th>
                                <h1 className="subtitle is-4"> Other DEX </h1>
                            </th>
                            <th>
                                <h1 className="subtitle is-4 has-text-contrast"> Orcania DEX </h1>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th className="has-text-right">DEX Fees</th>
                            <td>0.3 %</td>
                            <td className="has-text-contrast has-background-semi">0.1% - 0.2%</td>
                        </tr>
                        <tr>
                            <th className="has-text-right">GAS Usage</th>
                            <td>300 K</td>
                            <td className="has-text-contrast has-background-semi">90 K</td>
                        </tr>
                        <tr>
                            <th className="has-text-right">Liquidity</th>
                            <td>User sustaining</td>
                            <td className="has-text-contrast has-background-semi">User sustaining & Self sustaining</td>
                        </tr>
                        <tr>
                            <th className="has-text-right">Trading</th>
                            <td>Bounded to provided pairs</td>
                            <td className="has-text-contrast has-background-semi">
                                Unbounded to all cryptos on the DEX
                            </td>
                        </tr>
                        <tr>
                            <th className="has-text-right">Arbitrage</th>
                            <td>Bounded to provided pairs</td>
                            <td className="has-text-contrast has-background-semi">
                                {' '}
                                Unbounded too all cryptos on the DEX{' '}
                            </td>
                        </tr>
                        <tr>
                            <th className="has-text-right">Refferal System</th>
                            <td>None</td>
                            <td className="has-text-contrast has-background-semi">
                                {' '}
                                A 5% gain and cashback referral system
                            </td>
                        </tr>
                        <tr>
                            <th className="has-text-right">Trading tools</th>
                            <td>None</td>
                            <td className="has-text-contrast has-background-semi"> Advanced management tools </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Table;
