import './table.scss';

const Table = () => {
    return(
        <div className="container" style={{display: 'grid', placeItems: 'center'}}>
            <div className="boxa has-background-box is-shadowless">
                <table className="table has-background-traansparent has-text-dark is-size-5">
                    <thead>
                        <tr>
                            <th></th>
                            <th><h1 className="subtitle is-4 has-text-contrast"> Crypto Family Multichain</h1></th>
                            <th><h1 className="subtitle is-4"> Ethereum</h1></th>
                            <th><h1 className="subtitle is-4"> BSC</h1></th>
                            <th><h1 className="subtitle is-4"> Harmony </h1></th>                            
                        </tr>
                    </thead>
                    <tbody>
                                            
                        <tr>
                            <th className="has-text-right">TPS</th>
                            <td className="has-text-contrast has-background-semi">60,000</td>
                            <td>15</td>
                            <td>180</td>
                            <td>60,000</td>                            
                        </tr>
                        <tr>
                            <th className="has-text-right">Validators</th>
                            <td className="has-text-contrast has-background-semi">450</td>
                            <td>>7500</td>
                            <td>21</td>
                            <td>1000</td>                            
                        </tr>
                        <tr>
                            <th className="has-text-right">Tx Fees</th>
                            <td className="has-text-contrast has-background-semi">$0.000·0084</td>
                            <td>$20</td>
                            <td>$0.05</td>
                            <td>$0.000·0084</td>                            
                        </tr>                        
                        <tr>
                            <th className="has-text-right">Annual Issuance</th>
                            <td className="has-text-contrast has-background-semi">0-5%</td>
                            <td>1%</td>
                            <td>0%</td>
                            <td>3%</td>                            
                        </tr>
                        <tr>
                            <th className="has-text-right">Sharding</th>
                            <td className="has-text-contrast has-background-semi">15 Blockchains</td>
                            <td>1 blockchain</td>
                            <td>1 blockchain</td>
                            <td>4 shards</td>                            
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Table;